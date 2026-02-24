import { useEffect, useMemo, useState } from "react";
import type { JSX } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import StatsRow from "../components/StatsRow";

type RemoteBlog = {
  id: string;
  name: string;
  introduction: string;
  description: string;
  imageUrl?: string;
};

function sanitizeHtml(html: string): string {
  let s = html;
  s = s.replace(/<\s*script[\s\S]*?>[\s\S]*?<\s*\/\s*script\s*>/gi, "");
  s = s.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "");
  s = s.replace(/\shref\s*=\s*(['"])\s*javascript:[\s\S]*?\1/gi, ' href="#"');
  s = s.replace(/\sstyle\s*=\s*(['"]).*?\1/gi, "");
  return s;
}

export default function BlogDetail(): JSX.Element {
  const { id } = useParams();
  const [item, setItem] = useState<RemoteBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = "https://portfolio-e626d-default-rtdb.firebaseio.com/blogs.json";
    fetch(url)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        let normalized: Array<RemoteBlog> = [];
        if (Array.isArray(data)) normalized = data.filter(Boolean) as Array<RemoteBlog>;
        else if (data && typeof data === "object") normalized = Object.values(data as Record<string, RemoteBlog>);
        const found = normalized.find((b) => b.id === id);
        setItem(found || null);
      })
      .catch(() => {
        setError("Unable to load blog.");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const safeHtml = useMemo(() => sanitizeHtml(item?.description || ""), [item?.description]);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-6">
            <Link to="/blogs" className="text-xs text-slate-400 hover:text-sky-400">← Back to blogs</Link>
          </div>
          {loading ? (
            <div className="h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse" />
          ) : item ? (
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6">
              <BentoCard className="p-0 overflow-hidden">
                {item.imageUrl && (
                  <div className="relative w-full aspect-video bg-slate-900">
                    <img alt={item.name} src={item.imageUrl} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">{item.name}</h1>
                  <p className="text-slate-400 text-sm mb-6">{item.introduction}</p>
                  <div className="prose prose-invert max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: safeHtml }} />
                </div>
              </BentoCard>
              <div className="space-y-4">
                <BentoCard className="p-6">
                  <div className="text-sm font-bold text-white mb-2">About this post</div>
                  <div className="text-xs text-slate-400">Category insights and code notes focused on JavaScript structure and conventions.</div>
                </BentoCard>
              </div>
            </div>
          ) : (
            <div className="text-slate-400 text-sm">Blog not found.</div>
          )}
          <StatsRow />
        </div>
      </main>
    </div>
  );
}
