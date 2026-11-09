import { useState } from "react";
import { CATEGORIES } from "../utils/constants.js";

const ICONS = ["💪", "🏃", "📚", "🧘", "💧", "😴", "🥗", "✍️", "🎯", "🧠", "💊", "🚶"];
const COLORS = ["#6366f1", "#0ea5e9", "#10b981", "#f59e0b", "#ef4444", "#ec4899", "#8b5cf6", "#14b8a6"];

export default function HabitForm({ initial, submitting, onCancel, onSubmit }) {
  const [form, setForm] = useState(initial || { name: "", description: "", category: "Other", frequency: "daily", targetDays: 7, color: "#6366f1", icon: "🎯" });
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  return (
    <form className="habit-form" onSubmit={(event) => { event.preventDefault(); onSubmit({ ...form, targetDays: Number(form.targetDays) }); }}>
      <label className="label" htmlFor="habit-name">Habit name</label>
      <input id="habit-name" className="input" placeholder="e.g. Drink 2L water" value={form.name} onChange={(e) => update("name", e.target.value)} required />

      <label className="label" htmlFor="habit-description">Description</label>
      <textarea id="habit-description" className="input habit-description" placeholder="What does this habit involve?" value={form.description || ""} onChange={(e) => update("description", e.target.value)} />

      <div className="grid grid-cols-2 gap-3">
        <div><label className="label" htmlFor="habit-category">Category</label><select id="habit-category" className="input" value={form.category} onChange={(e) => update("category", e.target.value)}>{CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select></div>
        <div><label className="label" htmlFor="habit-frequency">Frequency</label><select id="habit-frequency" className="input" value={form.frequency} onChange={(e) => update("frequency", e.target.value)}><option value="daily">Daily</option><option value="weekly">Weekly</option></select></div>
      </div>

      <div className="habit-range-header"><label className="label" htmlFor="habit-target">Target days per week: {form.targetDays}</label></div>
      <input id="habit-target" className="habit-range" type="range" min="1" max="7" value={form.targetDays} onChange={(e) => update("targetDays", e.target.value)} />

      <label className="label">Icon</label>
      <div className="habit-options">
        {ICONS.map((icon) => <button type="button" className={`habit-option${form.icon === icon ? " selected" : ""}`} key={icon} onClick={() => update("icon", icon)} aria-label={`Use ${icon} icon`}>{icon}</button>)}
      </div>

      <label className="label">Color</label>
      <div className="habit-colors">
        {COLORS.map((color) => <button type="button" className={`habit-color${form.color === color ? " selected" : ""}`} key={color} style={{ backgroundColor: color }} onClick={() => update("color", color)} aria-label={`Use ${color} color`} />)}
      </div>

      <div className="habit-form-actions"><button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button><button className="btn-primary" disabled={submitting}>{submitting ? "Saving..." : initial ? "Save changes" : "Create habit"}</button></div>
    </form>
  );
}
