import { useEffect, useMemo, useState } from "react";
import { BarChart3, Flame, Target, Trophy } from "lucide-react";
import api from "../api/axios.js";
import LoadingSpinner from "../components/LoadingSpinner.jsx";

export default function Stats() {
  const [habits, setHabits] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStats = async () => {
    setLoading(true);
    setError("");
    let active = true;
    try {
      const results = await Promise.allSettled([
        api.get("/habits"),
        api.get("/logs/stats"),
      ]);
      const habitsResult = results[0];
      const statsResult = results[1];

      if (habitsResult.status === "fulfilled") {
        setHabits(habitsResult.value.data || []);
      } else {
        throw habitsResult.reason;
      }

      if (statsResult.status === "fulfilled") {
        const perHabit = statsResult.value.data?.perHabit || [];
        setStats({
          totalCompletions: perHabit.reduce((total, item) => total + (item.completions30d || 0), 0),
          currentStreak: Math.max(0, ...perHabit.map((item) => item.currentStreak || 0)),
          longestStreak: Math.max(0, ...perHabit.map((item) => item.longestStreak || 0)),
        });
      } else {
        setStats({});
        setError("Statistics are temporarily unavailable. Showing your habits.");
      }
    } catch (requestError) {
      if (active) {
        setError(requestError?.response?.data?.message || requestError?.message || "Unable to load statistics.");
        setStats({});
      }
    } finally {
      if (active) setLoading(false);
    }

    active = false;
  };

  useEffect(() => {
    loadStats();
  }, []);

  const values = useMemo(
    () => [
      ["Total habits", habits.length, Target],
      ["Total completions", stats?.totalCompletions || 0, BarChart3],
      ["Current streak", stats?.currentStreak || 0, Flame],
      ["Best streak", stats?.longestStreak || 0, Trophy],
    ],
    [habits.length, stats]
  );

  if (loading) return <LoadingSpinner full />;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Statistics</h1>
        <p className="text-sm text-muted mt-1">Review your habit progress and streaks.</p>
      </div>
      {error && (
        <div className="card flex items-center justify-between gap-4 p-4 text-sm">
          <span className="text-rose-500">{error}</span>
          <button className="btn-secondary shrink-0" onClick={loadStats}>Retry</button>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {values.map(([label, value, Icon]) => (
          <div className="card p-4" key={label}>
            <Icon size={18} className="text-brand-600" />
            <div className="text-xs text-muted mt-3">{label}</div>
            <div className="text-2xl font-semibold mt-1">{value}</div>
          </div>
        ))}
      </div>
      <section className="card p-5">
        <h2 className="font-semibold">Habit overview</h2>
        {habits.length === 0 ? (
          <p className="text-sm text-muted mt-3">Create a habit to start seeing statistics.</p>
        ) : (
          <div className="mt-4 space-y-3">
            {habits.map((habit) => (
              <div className="flex items-center justify-between gap-3" key={habit._id}>
                <span>{habit.icon} {habit.name}</span>
                <span className="text-sm text-muted">{habit.category}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
