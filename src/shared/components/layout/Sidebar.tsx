import {
  Ambulance,
  Bot,
  ChartColumn,
  LayoutDashboard,
  Map,
  Settings,
  Shield,
  TriangleAlert,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: TriangleAlert, label: "Hazards" },
  { icon: Map, label: "Live Map" },
  { icon: Bot, label: "AI Assistant" },
  { icon: Ambulance, label: "Resources" },
  { icon: ChartColumn, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col bg-white/5 backdrop-blur-xl border-r border-white/10 text-white shadow-2xl relative z-40">

      <div className="border-b border-white/10 p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 p-3 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            <Shield size={28} className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              SafeSphere
            </h2>

            <p className="text-xs text-violet-300 uppercase tracking-wider font-semibold">
              Intelligence
            </p>
          </div>

        </div>

      </div>

      <nav className="flex-1 p-5 overflow-y-auto overflow-x-hidden">

        {items.map((item) => (
          <button
            key={item.label}
            className={`mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300

            ${
              item.active
                ? "bg-gradient-to-r from-violet-600/80 to-indigo-600/80 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)] border border-violet-500/30"
                : "text-slate-400 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/5"
            }`}
          >
            <item.icon size={22} className={item.active ? "drop-shadow-md" : ""} />

            <span className="font-medium tracking-wide">
              {item.label}
            </span>
          </button>
        ))}

      </nav>

      <div className="border-t border-white/10 p-6">

        <div className="rounded-xl bg-white/5 border border-white/10 p-4 backdrop-blur-md">

          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
            System Status
          </p>

          <div className="mt-2 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] animate-pulse"></div>
            <p className="text-emerald-400 font-medium text-sm">
              All Systems Operational
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}