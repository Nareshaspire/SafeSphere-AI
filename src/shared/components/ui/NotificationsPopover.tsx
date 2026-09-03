import { Bell, ShieldAlert, Activity, CheckCircle2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsPopover({ isOpen, onClose }: Props) {
  const popoverRef = useRef<HTMLDivElement>(null);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "alert",
      title: "High Risk Alert",
      message: "Multiple incidents clustered in Sector 4.",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      type: "system",
      title: "AI Analysis Complete",
      message: "New predictive briefing generated successfully.",
      time: "15 mins ago",
      read: false,
    },
    {
      id: 3,
      type: "success",
      title: "Resources Dispatched",
      message: "EMS Units en route to I-95 collision.",
      time: "1 hour ago",
      read: true,
    },
  ]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "alert": return <ShieldAlert size={16} className="text-red-400" />;
      case "system": return <Activity size={16} className="text-violet-400" />;
      case "success": return <CheckCircle2 size={16} className="text-emerald-400" />;
      default: return <Bell size={16} className="text-slate-400" />;
    }
  };

  return (
    <div 
      ref={popoverRef}
      className="absolute top-14 right-20 w-80 bg-[#1c1d25] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200"
    >
      <div className="flex items-center justify-between p-4 border-b border-white/5">
        <h3 className="font-bold text-white text-sm">Notifications</h3>
        {unreadCount > 0 && (
          <button 
            onClick={markAllRead}
            className="text-[10px] uppercase font-bold text-violet-400 hover:text-violet-300 transition-colors"
          >
            Mark all read
          </button>
        )}
      </div>

      <div className="max-h-[320px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-sm">
            No new notifications.
          </div>
        ) : (
          <div className="flex flex-col">
            {notifications.map((notif) => (
              <button
                key={notif.id}
                onClick={() => {
                  setNotifications(prev => 
                    prev.map(n => n.id === notif.id ? { ...n, read: true } : n)
                  );
                }}
                className={`flex gap-3 p-4 text-left transition-colors border-b border-white/5 last:border-0 hover:bg-white/5 ${
                  !notif.read ? "bg-white/5" : "opacity-75"
                }`}
              >
                <div className={`mt-0.5 p-1.5 rounded-full ${!notif.read ? 'bg-white/10' : 'bg-transparent'}`}>
                  {getIcon(notif.type)}
                </div>
                <div>
                  <div className={`text-sm font-medium ${!notif.read ? 'text-white' : 'text-slate-300'}`}>
                    {notif.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {notif.message}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2 font-medium uppercase tracking-wider">
                    {notif.time}
                  </div>
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-3 bg-black/20 border-t border-white/5 text-center">
        <button className="text-xs font-semibold text-slate-400 hover:text-white transition-colors">
          View All History
        </button>
      </div>
    </div>
  );
}
