import { Activity } from "lucide-react";
import { useResources } from "../hooks/useDashboardData";

export default function ResourceHealth() {
  const resources = useResources();

  return (
    <div className="glass-panel p-6 flex flex-col h-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[14px] font-bold text-white tracking-wide uppercase">
          Resource Health
        </h2>
        <Activity size={16} className="text-slate-500" />
      </div>

      <div className="space-y-5">
        {resources.map((resource) => (
          <div key={resource.name}>
            <div className="mb-1.5 flex justify-between items-end">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {resource.name}
              </span>
              <span className="text-xs text-white font-bold">
                {resource.value}%
              </span>
            </div>
            <div className="h-1 rounded-full bg-[#2a2b36] overflow-hidden">
              <div
                className={`h-full rounded-full ${resource.color}`}
                style={{ width: `${resource.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}