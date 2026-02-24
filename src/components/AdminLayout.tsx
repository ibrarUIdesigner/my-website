import { useContext } from "react";
import type { JSX, ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

type AdminLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function AdminLayout({ title, children }: AdminLayoutProps): JSX.Element {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { signOut } = useContext(AuthContext);
  const nav = [
    { label: "Dashboard", href: "/admin", icon: "dashboard" },
    { label: "Projects", href: "/admin/projects", icon: "stack" },
    { label: "Blogs", href: "/admin/blogs", icon: "article" },
  ];
  return (
    <div className="min-h-screen bg-[#030610]">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <header className="fixed top-0 left-60 right-0 h-16 border-b border-white/5 bg-[#030610]/80 backdrop-blur-xl flex items-center px-6 z-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden">
              <span className="material-symbols-outlined text-sky-400 text-lg">shield_person</span>
            </div>
            <span className="text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase">
              Admin Panel
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-xs text-slate-400">{title}</div>
            <button
              type="button"
              className="px-3 py-1 rounded-md border border-slate-800 text-xs font-bold tracking-wider text-slate-300 hover:text-white hover:border-sky-500/40 transition"
              onClick={async () => {
                await signOut();
                navigate("/login", { replace: true });
              }}
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <aside className="fixed top-0 left-0 w-60 h-full border-r border-white/5 bg-[#030610]/80 backdrop-blur-xl z-40">
        <div className="h-16 px-6 flex items-center border-b border-white/5">
          <span className="text-sm font-bold tracking-wider text-slate-200 font-mono-nums uppercase">Dev.Portfolio_v2</span>
        </div>
        <nav className="p-4 flex flex-col gap-1">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  active
                    ? "bg-slate-900/60 border border-sky-500/30 text-sky-400"
                    : "border border-transparent text-slate-300 hover:text-white hover:border-sky-500/20"
                }`}
              >
                <span className="material-symbols-outlined text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 text-[10px] uppercase tracking-widest text-slate-500 px-3">Public</div>
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-slate-300 hover:text-white">
            <span className="material-symbols-outlined text-base">home</span>
            Website
          </Link>
        </nav>
      </aside>
      <main className="pt-20 pl-60 pr-6 pb-20 relative z-10">
        {children}
      </main>
    </div>
  );
}
