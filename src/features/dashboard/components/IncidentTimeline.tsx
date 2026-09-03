import { MessageSquare } from "lucide-react";
import { useIncidents } from "../hooks/useDashboardData";

export default function IncidentTimeline() {
  const events = useIncidents();

  return (
    <div className="glass-panel p-6 flex flex-col h-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[14px] font-bold text-white tracking-wide uppercase">
          Media & Sentiments
        </h2>
        <MessageSquare size={16} className="text-slate-500" />
      </div>

      <div className="space-y-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
          >
            <div>
              <p className="text-xs text-slate-500 font-semibold uppercase mb-1">
                {event.source}
              </p>
              <p className="text-sm font-medium text-slate-200">
                {event.text}
              </p>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${event.color}`}>
              {event.sentiment}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}