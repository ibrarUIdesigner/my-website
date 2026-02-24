import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import BentoCard from "../../components/BentoCard";
import StatsRow from "../../components/StatsRow";
import { list, upsert, remove } from "../../lib/firebase";
import { uploadImage } from "../../lib/storage";
import Wysiwyg from "../../components/Wysiwyg";
export default function AdminBlogs() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);
    const refresh = () => {
        setLoading(true);
        list("blogs")
            .then(setItems)
            .finally(() => setLoading(false));
    };
    useEffect(() => {
        refresh();
    }, []);
    const startCreate = () => setEditing({ name: "", introduction: "", description: "", imageUrl: "" });
    const startEdit = (b) => setEditing({ ...b });
    const cancelEdit = () => setEditing(null);
    const saveEdit = async () => {
        if (!editing)
            return;
        const id = await upsert("blogs", editing);
        setEditing(null);
        refresh();
    };
    const deleteItem = async (id) => {
        if (!id)
            return;
        await remove("blogs", id);
        refresh();
    };
    return (_jsx(AdminLayout, { title: "Blogs", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "flex items-end justify-between border-b border-slate-800 pb-6 mb-6", children: [_jsx("h1", { className: "text-2xl md:text-3xl font-bold tracking-tight text-white", children: "Blogs" }), _jsx("button", { className: "px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300", onClick: startCreate, children: "New Blog" })] }), editing && (_jsxs(BentoCard, { className: "p-6 mb-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "name" }), _jsx("input", { type: "text", value: editing.name ?? "", onChange: (e) => setEditing({ ...editing, name: e.target.value }), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50" })] }), _jsxs("label", { className: "block", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "cover image" }), _jsx("div", { className: "mt-2 flex items-center gap-3", children: _jsx("input", { type: "file", accept: "image/*", onChange: async (e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) {
                                                        const url = await uploadImage(f, "blogs");
                                                        setEditing({ ...editing, imageUrl: url });
                                                    }
                                                }, className: "text-xs w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 px-3 py-2 focus:outline-none focus:border-sky-500/50" }) })] })] }), _jsxs("label", { className: "block mt-4", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "introduction" }), _jsx("textarea", { rows: 3, value: editing.introduction ?? "", onChange: (e) => setEditing({ ...editing, introduction: e.target.value }), className: "mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50" })] }), _jsxs("label", { className: "block mt-4", children: [_jsx("span", { className: "text-xs uppercase tracking-widest text-slate-400", children: "description" }), _jsx(Wysiwyg, { value: editing.description ?? "", onChange: (html) => setEditing({ ...editing, description: html }), placeholder: "Write your post..." })] }), _jsxs("div", { className: "mt-4 flex gap-3", children: [_jsx("button", { className: "px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase", onClick: saveEdit, children: "Save" }), _jsx("button", { className: "px-4 py-2 rounded-md border border-slate-800 text-xs font-bold tracking-wider uppercase text-slate-400", onClick: cancelEdit, children: "Cancel" })] })] })), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: loading
                        ? Array.from({ length: 6 }).map((_, i) => (_jsx(BentoCard, { className: "h-64 animate-pulse" }, i)))
                        : items.map((b) => (_jsxs(BentoCard, { className: "p-5 flex flex-col gap-3", children: [_jsx("div", { className: "text-sm font-bold text-white", children: b.name }), _jsx("div", { className: "text-xs text-slate-500 line-clamp-3", children: b.introduction }), _jsxs("div", { className: "mt-3 flex gap-2", children: [_jsx("button", { className: "px-3 py-1 rounded border border-slate-800 text-xs text-slate-300 hover:text-white", onClick: () => startEdit(b), children: "Edit" }), _jsx("button", { className: "px-3 py-1 rounded border border-red-700 text-xs text-red-400 hover:text-red-300", onClick: () => deleteItem(b.id), children: "Delete" })] })] }, b.id ?? b.name))) }), _jsx(StatsRow, {})] }) }));
}
