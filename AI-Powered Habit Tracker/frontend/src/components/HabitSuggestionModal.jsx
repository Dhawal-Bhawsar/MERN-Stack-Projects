import Modal from "./Modal.jsx";
export default function HabitSuggestionModal({ open, onClose, onAccept }) {
  const suggestion = { name: "Take a short walk", description: "Move for ten minutes.", category: "Fitness", frequency: "daily", icon: "🚶" };
  return <Modal open={open} onClose={onClose} title="Habit suggestion"><p className="text-sm text-muted">{suggestion.description}</p><button className="btn-primary mt-4" onClick={() => { onAccept(suggestion); onClose(); }}>Add suggestion</button></Modal>;
}
