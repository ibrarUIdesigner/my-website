import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import BentoCard from "../../components/BentoCard";
import StatsRow from "../../components/StatsRow";
import { list, upsert, remove } from "../../lib/firebase";
import { uploadImage } from "../../lib/storage";
import { generateUniqueId } from "../../lib/UniqueID";
const projectId = "project_" + generateUniqueId();
export default function AdminProjects() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const refresh = () => {
        setLoading(true);
        list("projects")
            .then(setItems)
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        refresh();
    }, []);
    const startCreate = () => setEditing({
        id: projectId,
        name: "",
        category: "",
        link: "",
        imageUrl: "",
        thumbnailUrl: "",
        description: "",
    });
    const startEdit = (p) => setEditing({ ...p });
    const cancelEdit = () => setEditing(null);
    const saveEdit = async () => {
        if (!editing)
            return;
        const id = await upsert("projects", editing);
        setEditing(null);
        refresh();
    };
    const deleteItem = async (id) => {
        if (!id)
            return;
        await remove("projects", id);
        refresh();
    };
    return (_jsx(AdminLayout, { title: "Projects", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex items-end justify-between border-b border-slate-800 pb-6 mb-6", children: [_jsx("h1", { className: "text-2xl md:text-3xl font-bold tracking-tight text-white", children: "Projects" }), _jsx("button", { className: "px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300", onClick: startCreate, children: "New Project" })] }), editing && (_jsxs(BentoCard, { className: "p-6 mb-6", children: [_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: ["name", "category", "link"].map((field) => (_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: field }), _jsx("input", { type: "text", value: editing[field] ?? "", onChange: (e) => setEditing({ ...editing, [field]: e.target.value }), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50" })] }, field))) }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-4", children: [_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "Cover image" }), _jsx("div", { className: "mt-2 flex items-center gap-3", children: _jsx("input", { type: "file", accept: "image/*", onChange: async (e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) {
                                                        const url = await uploadImage(f, "projects");
                                                        setEditing({ ...editing, imageUrl: url });
                                                    }
                                                }, className: "text-xs w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:border-sky-500/50" }) })] }), _jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "Thumbnail" }), _jsx("div", { className: "mt-2 flex items-center gap-3", children: _jsx("input", { type: "file", accept: "image/*", onChange: async (e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) {
                                                        const url = await uploadImage(f, "projects");
                                                        setEditing({ ...editing, thumbnailUrl: url });
                                                    }
                                                }, className: "text-xs  w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:border-sky-500/50" }) })] })] }), _jsxs("label", { className: "block mt-4", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "description" }), _jsx("textarea", { rows: 4, value: editing.description ?? "", onChange: (e) => setEditing({ ...editing, description: e.target.value }), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50" })] }), _jsxs("div", { className: "mt-4 flex gap-3", children: [_jsx("button", { className: "px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase", onClick: saveEdit, children: "Save" }), _jsx("button", { className: "px-4 py-2 rounded-md border border-slate-800 text-xs font-bold tracking-wider uppercase text-slate-400", onClick: cancelEdit, children: "Cancel" })] })] })), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: loading
                        ? Array.from({ length: 6 }).map((_, i) => (_jsx(BentoCard, { className: "h-64 animate-pulse" }, i)))
                        : items.map((p) => (_jsxs(BentoCard, { className: "p-5 flex flex-col gap-3", children: [_jsx("div", { className: "text-sm font-bold text-white", children: p.name }), _jsx("div", { className: "text-xs text-slate-400", children: p.category }), _jsx("div", { className: "text-xs text-slate-500 line-clamp-3", children: p.description }), _jsxs("div", { className: "mt-3 flex gap-2", children: [_jsx("button", { className: "px-3 py-1 rounded border border-slate-800 text-xs text-slate-300 hover:text-white", onClick: () => startEdit(p), children: "Edit" }), _jsx("button", { className: "px-3 py-1 rounded border border-red-700 text-xs text-red-400 hover:text-red-300", onClick: () => deleteItem(p.id), children: "Delete" })] })] }, p.id ?? p.name))) }), _jsx(StatsRow, {})] }) }));
}
