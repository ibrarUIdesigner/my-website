import { useContext, useEffect, useState } from "react";
import type { JSX } from "react";
import BentoCard from "./BentoCard";
import { projectImgUrl } from "../assets/images";
import { LoadingContext } from "../context/LoadingContext";
import { projects } from "../data/Projects";
import { RemoteProject } from "../pages/Projects";

export default function FeaturedProjectCard(): JSX.Element {
  const [item, setItem] = useState<RemoteProject | null>(null);

  useEffect(() => {
    const list = projects;
    const idx = Math.floor(Math.random() * list.length);
    const random = list[idx] ?? list[0] ?? null;
    setItem(random);
  }, []);

  return (
    <BentoCard className="p-0 md:col-span-2 lg:col-span-1 flex flex-col justify-between group overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent z-10 pointer-events-none" />

      <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
        <div className="px-2 py-1 bg-sky-500/10 border border-sky-500/20 rounded text-[10px] font-bold uppercase tracking-wider text-sky-400 backdrop-blur-md">
          Featured
        </div>
        <h3 className="text-lg font-bold text-white font-satoshi">
          {item?.name ?? "SaaS Dashboard"}
        </h3>
      </div>

      <div className="absolute top-6 right-6 z-20">
        {item?.link ? (
          <a
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-sky-500/50 transition-all"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Featured"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_outward
            </span>
          </a>
        ) : (
          <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-sky-500/50 transition-all">
            <span className="material-symbols-outlined text-lg">
              arrow_outward
            </span>
          </div>
        )}
      </div>

      <div className="w-full h-full bg-slate-900 relative">
        <img
          alt="Project Screenshot"
          className="w-full h-full object-fit  group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out grayscale hover:grayscale-0"
          src={item?.thumbnailUrl || item?.imageUrl || projectImgUrl}
        />
      </div>

      <div className="absolute bottom-6 left-6 z-20 w-[calc(100%-3rem)] flex justify-between items-end">
        <div className="flex gap-2">
          <span className="px-2 py-0.5 bg-slate-950/80 border border-slate-800 rounded text-[10px] text-slate-400 font-mono-nums">
            {item?.category?.toUpperCase() ?? "REACT"}
          </span>
        </div>
      </div>
    </BentoCard>
  );
}
