import { ChevronUp, Sparkles } from "lucide-react";

export default function AIWeeklyReport() {
  return <section className="ai-report"><header><span className="ai-report-icon"><Sparkles size={18} /></span><div><h2>AI Weekly Report</h2><small>Generated just now</small></div><ChevronUp size={18} /></header><p>Your weekly insights will appear here. Create a habit and start checking it off to receive a personalized report.</p></section>;
}
