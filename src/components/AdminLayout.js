import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
export default function AdminLayout({ title, children }) {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { signOut } = useContext(AuthContext);
    const nav = [
        { label: "Dashboard", href: "/admin", icon: "dashboard" },
        { label: "Projects", href: "/admin/projects", icon: "stack" },
        { label: "Blogs", href: "/admin/blogs", icon: "article" },
    ];
    return (_jsxs("div", { className: "min-h-screen bg-[#030610]", children: [_jsx("div", { className: "fixed inset-0 z-0 pointer-events-none bg-grid-pattern" }), _jsx("header", { className: "fixed top-0 left-60 right-0 h-16 border-b border-white/5 bg-[#030610]/80 backdrop-blur-xl flex items-center px-6 z-50", children: _jsxs("div", { className: "flex items-center justify-between w-full", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden", children: _jsx("span", { className: "material-symbols-outlined text-sky-400 text-lg", children: "shield_person" }) }), _jsx("span", { className: "text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase", children: "Admin Panel" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "text-xs text-slate-400", children: title }), _jsx("button", { type: "button", className: "px-3 py-1 rounded-md border border-slate-800 text-xs font-bold tracking-wider text-slate-300 hover:text-white hover:border-sky-500/40 transition", onClick: async () => {
                                        await signOut();
                                        navigate("/login", { replace: true });
                                    }, "aria-label": "Logout", children: "Logout" })] })] }) }), _jsxs("aside", { className: "fixed top-0 left-0 w-60 h-full border-r border-white/5 bg-[#030610]/80 backdrop-blur-xl z-40", children: [_jsx("div", { className: "h-16 px-6 flex items-center border-b border-white/5", children: _jsx("span", { className: "text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase", children: "Dev.Portfolio_v2" }) }), _jsxs("nav", { className: "p-4 flex flex-col gap-1", children: [nav.map((item) => {
                                const active = pathname === item.href;
                                return (_jsxs(Link, { to: item.href, className: `flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${active
                                        ? "bg-slate-900/60 border border-sky-500/30 text-sky-400"
                                        : "border border-transparent text-slate-300 hover:text-white hover:border-sky-500/20"}`, children: [_jsx("span", { className: "material-symbols-outlined text-base", children: item.icon }), item.label] }, item.href));
                            }), _jsx("div", { className: "mt-4 text-[10px] uppercase tracking-widest text-slate-500 px-3", children: "Public" }), _jsxs(Link, { to: "/", className: "flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white", children: [_jsx("span", { className: "material-symbols-outlined text-base", children: "home" }), "Website"] })] })] }), _jsx("main", { className: "pt-20 pl-60 pr-6 pb-20 relative z-10", children: children })] }));
}
