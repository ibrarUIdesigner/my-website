import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import StatsRow from "../components/StatsRow";
export default function Projects() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = "https://portfolio-e626d-default-rtdb.firebaseio.com/projects.json";
        fetch(url)
            .then(async (res) => {
            if (!res.ok)
                throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            let normalized = [];
            if (Array.isArray(data)) {
                normalized = data.filter(Boolean);
            }
            else if (data && typeof data === "object") {
                normalized = Object.values(data);
            }
            setItems(normalized);
        })
            .catch(() => {
            setError("Unable to load projects. Showing local samples.");
            setItems([
                {
                    id: "project_20240830_183934_652_ibv7qt",
                    name: "01 - BONX",
                    description: "BONX is a gaming platform designed to offer a wide variety of games for all types of players. Built with React.js, the website delivers a seamless and fully responsive experience across all devices.",
                    category: "React",
                    imageUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-e626d.appspot.com/o/images%2Fd090ea86-0412-4942-b072-e1ce8f7adde4_HomePage.jpg?alt=media&token=7d6327e2-f37c-4cf3-9316-81eda49e338b",
                    thumbnailUrl: "https://firebasestorage.googleapis.com/v0/b/portfolio-e626d.appspot.com/o/images%2F2817ebc9-7d9b-4a5d-a65e-c3e554b40790_01-BONX.png?alt=media&token=3c991dfd-a933-467b-a0f5-9d1a773974a6",
                    link: "",
                },
            ]);
        })
            .finally(() => setLoading(false));
    }, []);
    return (_jsxs("div", { className: "relative min-h-screen", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx(Navbar, {}), _jsx("main", { className: "relative min-h-screen pt-32 pb-20 px-6", children: _jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [_jsx("header", { className: "mb-16 md:mb-24", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500", children: ["Selected ", _jsx("span", { className: "text-sky-400", children: "Work" })] }), _jsx("p", { className: "text-slate-400 max-w-lg text-lg leading-relaxed", children: "A curated collection of engineering challenges, interface designs, and digital products built for the modern web." })] }), _jsxs("div", { className: "flex items-center gap-4 text-slate-500 font-mono text-sm tracking-widest", children: [_jsx("span", { className: "w-2 h-2 rounded-full bg-sky-400 animate-pulse" }), String(items.length).padStart(2, "0"), " PROJECTS // 2023 \u2014 2026"] })] }) }), _jsx("div", { className: "masonry-grid", children: loading && items.length === 0 ? (_jsx(_Fragment, { children: Array.from({ length: 6 }).map((_, i) => (_jsx("div", { className: "masonry-item", children: _jsx("div", { className: "h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse" }) }, i))) })) : (items.map((p) => (_jsx(ProjectCard, { title: p.name, imageUrl: p.thumbnailUrl || p.imageUrl || "", fullImageUrl: p.imageUrl || p.thumbnailUrl || "", aspectClass: "aspect-[4/3]", description: p.description, tags: p.category ? [p.category] : [], href: p.link || undefined }, p.id ?? p.name)))) }), _jsx(StatsRow, {})] }) })] }));
}
