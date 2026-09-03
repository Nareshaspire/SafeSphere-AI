import { Activity } from "lucide-react";
export default function DashboardHeader() {
  return (
    <div className="mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

      <div className="glass-panel px-8 py-4 rounded-full flex items-center relative cursor-default">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Command Overview
          </h1>
        </div>
      </div>

      <div className="glass-panel rounded-full border-emerald-500/30 bg-emerald-500/5 px-6 py-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-center gap-4 cursor-default">

        <Activity
          size={22}
          className="animate-pulse text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]"
        />

        <div>

          <p className="text-[10px] uppercase tracking-widest text-emerald-200/50 font-bold mb-0.5">
            System Status
          </p>

          <p className="text-sm font-bold text-emerald-400 tracking-wider">
            All Systems Operational
          </p>

        </div>

      </div>

    </div>
  );
}