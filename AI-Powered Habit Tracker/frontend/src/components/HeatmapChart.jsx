export default function HeatmapChart({ data = [] }) {
  return <div className="card p-5"><h2 className="font-semibold mb-4">Activity</h2><div className="grid grid-cols-10 gap-1">{data.map((item) => <span key={item.date} title={item.date} className="h-3 rounded-sm bg-brand-500" style={{ opacity: Math.min(1, 0.2 + item.count * 0.2) }} />)}</div></div>;
}
