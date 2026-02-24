import type { JSX } from "react";

type StatItem = {
  value: string;
  label: string;
};

const stats: readonly StatItem[] = [
  { value: "5+ yrs", label: "Production Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "95+", label: "Lighthouse Perf." },
  { value: "100%", label: "Responsive Coverage" },
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
