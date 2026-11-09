export default function WeeklyGrid({ habits = [], logsByHabit = {} }) {
  return <div className="card p-5"><h2 className="font-semibold mb-4">Weekly progress</h2>{habits.map((habit) => <div key={habit._id} className="flex justify-between py-2 border-b divider"><span>{habit.icon} {habit.name}</span><span className="text-muted">{(logsByHabit[habit._id] || []).length} completed</span></div>)}</div>;
}
