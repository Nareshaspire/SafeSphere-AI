import { useState, useEffect } from "react";
import {
  Bell,
  Search,
  Shield,
  User,
  BatteryMedium
} from "lucide-react";
import { NavLink } from "react-router-dom";
import CommandPalette from "../ui/CommandPalette";
import NotificationsPopover from "../ui/NotificationsPopover";
import UserProfileDropdown from "../ui/UserProfileDropdown";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const hasUnread = true; // Hardcoded for demo, would come from state/hook

  const tabs = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Live Map", path: "/live-map" },
    { name: "Recents", path: "/recents" },
    { name: "AI Assistant", path: "/ai-assistant" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
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
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-white transition-colors flex items-center gap-1.5 bg-white/5 rounded-full pl-3 pr-2 py-1.5"
          >
            <Search size={14} />
            <span className="text-xs font-medium px-1">Search</span>
            <kbd className="hidden sm:inline-block bg-white/10 rounded px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd>
          </button>

          <div className="relative">
            <button 
              onClick={() => setIsNotifOpen((prev) => !prev)}
              className={`hover:text-white transition-colors p-1.5 relative rounded-full ${isNotifOpen ? "bg-white/10 text-white" : ""}`}
            >
              <Bell size={18} />
              {hasUnread && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-[#0f1015]" />
              )}
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsUserOpen((prev) => !prev)}
              className={`hover:text-white transition-colors p-1.5 rounded-full ${isUserOpen ? "bg-white/10 text-white" : ""}`}
            >
              <User size={18} />
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs font-semibold pl-2 border-l border-white/10">
            <BatteryMedium size={18} />
            <span>40%</span>
          </div>
        </div>
      </header>

      <CommandPalette 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

      <NotificationsPopover 
        isOpen={isNotifOpen}
        onClose={() => setIsNotifOpen(false)}
      />

      <UserProfileDropdown 
        isOpen={isUserOpen}
        onClose={() => setIsUserOpen(false)}
      />
    </>
  );
}