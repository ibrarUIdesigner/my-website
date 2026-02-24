import { useContext, useEffect, useState } from "react";
import type { JSX } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import StatsRow from "../components/StatsRow";
import { LoadingContext } from "../context/LoadingContext";

type RemoteBlog = {
  id: string;
  name: string;
  introduction: string;
  description: string;
  imageUrl?: string;
};

export default function Blogs(): JSX.Element {
  const [items, setItems] = useState<Array<RemoteBlog>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { start, stop } = useContext(LoadingContext);

  useEffect(() => {
    const url = "https://portfolio-e626d-default-rtdb.firebaseio.com/blogs.json";
    start();
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        let normalized: Array<RemoteBlog> = [];
        if (Array.isArray(data)) normalized = data.filter(Boolean) as Array<RemoteBlog>;
        else if (data && typeof data === "object") normalized = Object.values(data as Record<string, RemoteBlog>);
        setItems(normalized);
      })
      .catch(() => {
        setError("Unable to load blogs. Showing a sample.");
        setItems([
          {
            id: "blog_20240830_184838_589_0ecdga",
            name: "01 - Javascript Code Structure | IbrarFolio",
            introduction:
              "Statements are the code conducts and actions that we give to our computer and we get results in output.",
            description: "",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/portfolio-e626d.appspot.com/o/images%2F22d7a63f-5817-40f8-9750-1048da9c86d2_JavascriptCodeStrucure.png?alt=media&token=34a810ea-b3fb-4477-b5cc-64d96e144e46",
          },
        ]);
      })
      .finally(() => {
        setLoading(false);
        stop();
      });
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="mb-16 md:mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                  Insights
                </h1>
                <p className="text-slate-400 max-w-lg text-lg leading-relaxed">
                  Engineering insights covering React, Angular, TypeScript, REST APIs, frontend
                  architecture, performance optimization, and workflow automation (n8n, Make.com, Zapier).
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-500 font-mono text-sm tracking-widest">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                {String(items.length).padStart(2, "0")} POSTS
              </div>
            </div>
          </header>

          {error && <div className="mb-4 text-xs text-slate-500">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {loading && items.length === 0
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse" />
                ))
              : items.map((b) => (
                  <Link key={b.id} to={`/blogs/${encodeURIComponent(b.id)}`}>
                    <BentoCard className="p-0 overflow-hidden group">
                      <div className="relative w-full aspect-video bg-slate-900">
                        {b.imageUrl ? (
                          <img
                            alt={b.name}
                            src={b.imageUrl}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                          />
                        ) : (
                          <div className="w-full h-full" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1020] via-transparent to-transparent opacity-60" />
                      </div>
                      <div className="p-5 flex flex-col gap-3">
                        <div className="text-sm font-bold text-white">{b.name}</div>
                        <div className="text-xs text-slate-400 line-clamp-3">{b.introduction}</div>
                      </div>
                    </BentoCard>
                  </Link>
                ))}
          </div>
          <StatsRow />
        </div>
      </main>
    </div>
  );
}
