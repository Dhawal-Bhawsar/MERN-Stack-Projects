import { Flame, ListChecks, Trophy, TrendingUp } from "lucide-react";

const items = [
  ["Total habits", ListChecks, "lavender"],
  ["Active streaks", Flame, "peach"],
  ["Best streak", Trophy, "amber"],
  ["This week", TrendingUp, "mint"],
];

export default function SummaryCards({ totalHabits, activeStreaks, bestStreak, weekRate }) {
  const values = [totalHabits, activeStreaks, bestStreak, `${weekRate}%`];
  return <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">{items.map(([label, Icon, tone], index) => <div className="metric-card" key={label}><span className={`metric-icon ${tone}`}><Icon size={18} /></span><div><div className="text-xs text-muted">{label}</div><div className="text-xl font-semibold mt-1">{values[index]}</div></div></div>)}</div>;
}
