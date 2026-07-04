import {
    Ambulance,
    Bot,
    ChartColumn,
    LayoutDashboard,
    Map,
    Settings,
    TriangleAlert,
} from "lucide-react";

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: TriangleAlert, label: "Hazards" },
  { icon: Map, label: "Live Map" },
  { icon: Bot, label: "AI Assistant" },
  { icon: Ambulance, label: "Resources" },
  { icon: ChartColumn, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-bold text-blue-600">
          SafeSphere AI
        </h2>

        <p className="text-sm text-slate-500">
          Emergency Intelligence
        </p>
      </div>

      <nav className="p-4">
        {items.map((item) => (
          <button
            key={item.label}
            className="mb-2 flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-slate-100"
          >
            <item.icon size={20} />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}