import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  subtitle: string;
  icon: LucideIcon;
  color?: string;
  suffix?: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "text-sky-500",
  suffix = "",
}: StatCardProps) {
  return (
    <div className="glass-panel p-5 group flex flex-col justify-between">
      
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-[13px] font-semibold text-slate-300 tracking-wide">
          {title}
        </h3>
        <Icon size={18} className={`${color}`} />
      </div>

      <div>
        <div className="flex items-baseline gap-1">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {value}
          </h2>
          {suffix && (
            <span className="text-xl font-semibold text-slate-300">{suffix}</span>
          )}
        </div>
        
        <p className="mt-1 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
          {subtitle}
        </p>
      </div>

    </div>
  );
}