import { useEffect, useState } from "react";
import { Search, X, MapPin, Activity, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // You might need a global state for this, but for now we'll handle it via props
        }
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mockResults = [
    { id: 1, icon: MapPin, title: "Sector 4 Fire Incident", desc: "Live Map", path: "/live-map" },
    { id: 2, icon: Activity, title: "EMS Deployment Analytics", desc: "Analytics", path: "/analytics" },
    { id: 3, icon: Shield, title: "System Security Settings", desc: "Settings", path: "/settings" },
  ];

  const filtered = mockResults.filter((r) => 
    r.title.toLowerCase().includes(query.toLowerCase()) || 
    r.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-xl bg-[#1c1d25] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input */}
        <div className="flex items-center px-4 py-3 border-b border-white/10">
          <Search size={20} className="text-slate-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search incidents, resources, or commands..."
            className="flex-1 bg-transparent border-none text-white px-3 py-2 outline-none placeholder:text-slate-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 rounded hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-sm text-slate-500">
              No results found for "{query}"
            </div>
          ) : (
            <div className="space-y-1">
              <div className="px-2 py-1.5 text-xs font-bold uppercase text-slate-500 tracking-wider">
                Suggestions
              </div>
              {filtered.map((result) => {
                const Icon = result.icon;
                return (
                  <button
                    key={result.id}
                    onClick={() => {
                      navigate(result.path);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-violet-500/10 hover:text-violet-400 text-slate-300 transition-colors text-left group"
                  >
                    <Icon size={18} className="text-slate-500 group-hover:text-violet-400" />
                    <div>
                      <div className="font-medium text-white group-hover:text-violet-400">
                        {result.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {result.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-black/20 border-t border-white/5 flex items-center justify-end text-xs text-slate-500 gap-4">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">↵</kbd> to select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px]">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
