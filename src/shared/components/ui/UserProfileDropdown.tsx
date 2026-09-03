import { LogOut, Settings, User, Shield } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserProfileDropdown({ isOpen, onClose }: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-14 right-6 w-56 bg-[#1c1d25] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
    >
      <div className="p-4 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white shadow-inner">
            JD
          </div>
          <div>
            <div className="text-sm font-bold text-white tracking-wide">Commander Doe</div>
            <div className="text-[10px] text-violet-400 font-semibold uppercase tracking-wider">Sector 4 Lead</div>
          </div>
        </div>
      </div>

      <div className="p-2 space-y-1">
        <button 
          onClick={() => { navigate("/settings"); onClose(); }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors text-sm font-medium"
        >
          <User size={16} className="text-slate-500" />
          Profile
        </button>

        <button 
          onClick={() => { navigate("/settings"); onClose(); }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors text-sm font-medium"
        >
          <Settings size={16} className="text-slate-500" />
          Preferences
        </button>

        <button 
          onClick={() => { navigate("/settings"); onClose(); }}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white transition-colors text-sm font-medium"
        >
          <Shield size={16} className="text-slate-500" />
          Access Control
        </button>
      </div>

      <div className="p-2 border-t border-white/5 bg-black/20">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500/10 text-red-400 transition-colors text-sm font-medium">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </div>
  );
}
