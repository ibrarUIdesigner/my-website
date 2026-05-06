import type { JSX } from "react";
import { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { LoadingContext } from "../context/LoadingContext";
import { projects } from "../data/Projects";

export type RemoteProject = {
  id: string;
  name: string;
  description: string;
  category?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  link?: string;
  tech?: string[];
  role?: string;
};

export default function Projects(): JSX.Element {
  const [items, setItems] = useState<Array<RemoteProject>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setItems(projects);
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                Production <span className="text-sky-400">Work</span>
              </h1>
              <p className="text-slate-400 max-w-lg text-lg leading-relaxed">
                A curated selection of production projects spanning scalable
                frontend architecture, workflow automation, and full-stack
                delivery. Each project reflects a real problem, a deliberate
                technical approach, and a shipped result — not just a demo.
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-500 font-mono text-sm tracking-widest">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {String(items.length).padStart(2, "0")} PROJECTS // 2023 — 2026
            </div>
          </div>
        </header>

        <div className="masonry-grid">
          {loading && items.length === 0 ? (
            <>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="masonry-item">
                  <div className="h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse" />
                </div>
              ))}
            </>
          ) : (
            items.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.name}
                role={p.role}
                imageUrl={p.thumbnailUrl || p.imageUrl || ""}
                fullImageUrl={p.imageUrl}
                aspectClass="aspect-[4/3]"
                description={p.description}
                tags={[...(p.category ? [p.category] : []), ...(p.tech ?? [])]}
                href={p.link}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
