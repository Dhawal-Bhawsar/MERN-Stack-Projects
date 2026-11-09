import { Sun, X } from "lucide-react";

export default function MorningMotivation() {
  return <div className="morning-banner"><span className="morning-icon"><Sun size={20} /></span><div><strong>GOOD MORNING</strong><p>Thinking of something nice to say...</p></div><button aria-label="Dismiss motivation"><X size={17} /></button></div>;
}
