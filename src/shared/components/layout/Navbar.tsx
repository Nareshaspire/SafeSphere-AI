import {
  Bell,
  Search,
  Shield,
  User,
  BatteryMedium
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const tabs = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Live Map", path: "/live-map" },
    { name: "Recents", path: "/recents" },
    { name: "AI Assistant", path: "/ai-assistant" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0f1015] px-6 sticky top-0 z-50">

      <div className="flex items-center gap-8">
        
        <div className="flex items-center gap-2">
          <Shield size={22} className="text-violet-500" />
          <h1 className="text-lg font-bold text-white tracking-wide">
            SafeSphere
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </nav>

      </div>

      <div className="flex items-center gap-4 text-slate-400">

        <button className="hover:text-white transition-colors">
          <Search size={18} />
        </button>

        <button className="hover:text-white transition-colors">
          <Bell size={18} />
        </button>

        <button className="hover:text-white transition-colors">
          <User size={18} />
        </button>

        <div className="flex items-center gap-1 text-xs font-semibold">
          <BatteryMedium size={18} />
          <span>40%</span>
        </div>

      </div>

    </header>
  );
}