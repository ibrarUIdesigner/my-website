import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import StatsRow from "../components/StatsRow";
function sanitizeHtml(html) {
    let s = html;
    s = s.replace(/<\s*script[\s\S]*?>[\s\S]*?<\s*\/\s*script\s*>/gi, "");
    s = s.replace(/\son\w+\s*=\s*(['"]).*?\1/gi, "");
    s = s.replace(/\shref\s*=\s*(['"])\s*javascript:[\s\S]*?\1/gi, ' href="#"');
    s = s.replace(/\sstyle\s*=\s*(['"]).*?\1/gi, "");
    return s;
}
export default function BlogDetail() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = "https://portfolio-e626d-default-rtdb.firebaseio.com/blogs.json";
        fetch(url)
            .then(async (res) => {
            if (!res.ok)
                throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            let normalized = [];
            if (Array.isArray(data))
                normalized = data.filter(Boolean);
            else if (data && typeof data === "object")
                normalized = Object.values(data);
            const found = normalized.find((b) => b.id === id);
            setItem(found || null);
        })
            .catch(() => {
            setError("Unable to load blog.");
        })
            .finally(() => setLoading(false));
    }, [id]);
    const safeHtml = useMemo(() => sanitizeHtml(item?.description || ""), [item?.description]);
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx(Navbar, {}), _jsx("main", { className: "relative min-h-screen pt-32 pb-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [_jsx("div", { className: "mb-6", children: _jsx(Link, { to: "/blogs", className: "text-xs text-slate-400 hover:text-sky-400", children: "\u2190 Back to blogs" }) }), loading ? (_jsx("div", { className: "h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse" })) : item ? (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-6", children: [_jsxs(BentoCard, { className: "p-0 overflow-hidden", children: [item.imageUrl && (_jsx("div", { className: "relative w-full aspect-video bg-slate-900", children: _jsx("img", { alt: item.name, src: item.imageUrl, className: "w-full h-full object-cover" }) })), _jsxs("div", { className: "p-6", children: [_jsx("h1", { className: "text-2xl md:text-3xl font-bold text-white mb-3", children: item.name }), _jsx("p", { className: "text-slate-400 text-sm mb-6", children: item.introduction }), _jsx("div", { className: "prose prose-invert max-w-none text-slate-300", dangerouslySetInnerHTML: { __html: safeHtml } })] })] }), _jsx("div", { className: "space-y-4", children: _jsxs(BentoCard, { className: "p-6", children: [_jsx("div", { className: "text-sm font-bold text-white mb-2", children: "About this post" }), _jsx("div", { className: "text-xs text-slate-400", children: "Category insights and code notes focused on JavaScript structure and conventions." })] }) })] })) : (_jsx("div", { className: "text-slate-400 text-sm", children: "Blog not found." })), _jsx(StatsRow, {})] }) })] }));
}
