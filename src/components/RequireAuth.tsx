import { useContext } from "react";
import type { JSX, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth({ children }: { children: ReactNode }): JSX.Element {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <div className="p-6 text-slate-400">Loading…</div>;
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
}
