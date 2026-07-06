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
    <aside className="flex h-screen w-72 flex-col bg-[#081224] text-white">

      <div className="border-b border-slate-700 p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-violet-600 p-3">
            <Shield size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              SafeSphere AI
            </h2>

            <p className="text-sm text-slate-400">
              Emergency Intelligence
            </p>
          </div>

        </div>

      </div>

      <nav className="flex-1 p-5">

        {items.map((item) => (
          <button
            key={item.label}
            className={`mb-3 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition

            ${
              item.active
                ? "bg-violet-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            <item.icon size={22} />

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}

      </nav>

      <div className="border-t border-slate-700 p-6">

        <div className="rounded-xl bg-slate-800 p-4">

          <p className="text-sm text-slate-400">
            System Status
          </p>

          <p className="mt-2 text-green-400 font-semibold">
            ● All Systems Operational
          </p>

        </div>

      </div>

    </aside>
  );
}