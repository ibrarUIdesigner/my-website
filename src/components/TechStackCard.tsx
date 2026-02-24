import type { JSX } from "react";
import BentoCard from "./BentoCard";

const items = [
  { type: "devicon", name: "devicon-react-original" },
  { type: "devicon", name: "devicon-angular-plain" },
  { type: "devicon", name: "devicon-express-original" },
  { type: "devicon", name: "devicon-typescript-plain" },
  { type: "material", name: "hub" }, // n8n
  { type: "devicon", name: "devicon-supabase-plain" },
] as const;

export default function TechStackCard(): JSX.Element {
  return (
    <BentoCard className="p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-bold text-white font-satoshi">
          Tech Stack
        </h3>
        <div className="w-8 h-8 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center text-slate-300">
          <span className="material-symbols-outlined text-base">settings</span>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="aspect-square rounded-lg bg-slate-900/50 border border-slate-800/60 flex flex-col items-center justify-center gap-2 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all group cursor-default"
          >
            {item.type === "devicon" ? (
              <i
                className={`${item.name} text-2xl text-slate-400 group-hover:text-white transition-colors grayscale group-hover:grayscale-0`}
              />
            ) : (
              <span className="material-symbols-outlined text-xl text-slate-400 group-hover:text-white transition-colors">
                {item.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
