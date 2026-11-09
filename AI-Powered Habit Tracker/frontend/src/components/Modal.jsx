export default function Modal({ open, onClose, title, children, maxWidth = "max-w-lg" }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
    <div className={`card w-full ${maxWidth} p-6 habit-modal`} onClick={(event) => event.stopPropagation()}>
      <div className="flex items-center justify-between mb-4"><h2 className="text-lg font-semibold">{title}</h2><button className="modal-close" onClick={onClose} aria-label="Close">✕</button></div>
      {children}
    </div>
  </div>;
}
