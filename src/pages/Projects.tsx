import type { JSX } from "react";
import { useContext, useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { LoadingContext } from "../context/LoadingContext";

type RemoteProject = {
  id: string;
  name: string;
  description: string;
  category?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  link?: string;
};

export default function Projects(): JSX.Element {
  const [items, setItems] = useState<Array<RemoteProject>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { start, stop } = useContext(LoadingContext);

  useEffect(() => {
    const url =
      "https://portfolio-e626d-default-rtdb.firebaseio.com/projects.json";
    start();
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        let normalized: Array<RemoteProject> = [];
        if (Array.isArray(data)) {
          normalized = data.filter(Boolean) as Array<RemoteProject>;
        } else if (data && typeof data === "object") {
          normalized = Object.values(data as Record<string, RemoteProject>);
        }
        setItems(normalized);
      })
      .catch(() => {
        setError("Unable to load projects. Showing local samples.");
        setItems([
          {
            id: "project_20240830_183934_652_ibv7qt",
            name: "01 - BONX",
            description:
              "BONX is a gaming platform designed to offer a wide variety of games for all types of players. Built with React.js, the website delivers a seamless and fully responsive experience across all devices.",
            category: "React",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/portfolio-e626d.appspot.com/o/images%2Fd090ea86-0412-4942-b072-e1ce8f7adde4_HomePage.jpg?alt=media&token=7d6327e2-f37c-4cf3-9316-81eda49e338b",
            thumbnailUrl:
              "https://firebasestorage.googleapis.com/v0/b/portfolio-e626d.appspot.com/o/images%2F2817ebc9-7d9b-4a5d-a65e-c3e554b40790_01-BONX.png?alt=media&token=3c991dfd-a933-467b-a0f5-9d1a773974a6",
            link: "",
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
        stop();
      });
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
                  key={p.id ?? p.name}
                  title={p.name}
                  imageUrl={p.thumbnailUrl || p.imageUrl || ""}
                  fullImageUrl={p.imageUrl || p.thumbnailUrl || ""}
                  aspectClass="aspect-[4/3]"
                  description={p.description}
                  tags={p.category ? [p.category] : []}
                  href={p.link || undefined}
                />
              ))
            )}
          </div>
      </div>
    </>
  );
}
