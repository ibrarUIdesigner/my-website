import type { JSX } from "react";

type StatItem = {
  value: string;
  label: string;
};

const stats: readonly StatItem[] = [
  { value: "100%", label: "System Uptime" },
  { value: "18", label: "Open Source" },
  { value: "12k", label: "Commits" },
  { value: "24/7", label: "Deployment" },
] as const;

export default function StatsRow(): JSX.Element {
  return (
    <div className="mt-20 pt-10 border-t border-slate-800/40 grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="text-center group cursor-default">
          <div className="text-2xl font-bold text-slate-200 mb-1 font-mono-nums group-hover:text-sky-400 transition-colors">
            {s.value}
          </div>
          <div className="text-[10px] uppercase tracking-widest text-slate-600 font-medium">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
