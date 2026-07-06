import { Activity, ShieldCheck } from "lucide-react";
export default function DashboardHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div>

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-sky-500/20 p-3">

            <ShieldCheck
              size={28}
              className="text-sky-400"
            />

          </div>

          <div>

            <h1 className="text-4xl font-bold text-white">
              SafeSphere AI
            </h1>

            <p className="text-slate-400">
              AI-Powered Emergency Operations Center
            </p>

          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4">

        <div className="flex items-center gap-3">

          <Activity
            size={18}
            className="animate-pulse text-green-400"
          />

          <div>

            <p className="text-sm text-slate-400">
              System Status
            </p>

            <p className="font-semibold text-green-400">
              All Systems Operational
            </p>

          </div>

        </div>

      </div>

    </div>
    
  );
}