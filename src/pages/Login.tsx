import { useContext, useState } from "react";
import type { JSX } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../lib/FirebaseConfig";
import { AuthContext } from "../context/AuthContext";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const auth = getAuth(app);

  const from = (location.state as any)?.from?.pathname || "/admin";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      navigate(from, { replace: true });
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    navigate("/admin", { replace: true });
    return <div className="p-6 text-slate-400">Redirecting…</div>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-md mx-auto relative z-10">
          <BentoCard className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white">Admin Login</h1>
              <p className="text-slate-400 text-sm">Sign in to manage content</p>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-slate-400">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-slate-400">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                  placeholder="********"
                  required
                />
              </label>
              {error && <div className="text-xs text-red-400">{error}</div>}
              <button
                type="submit"
                className="w-full px-4 py-2 btn-laser text-sky-400 rounded-md text-xs font-bold tracking-wider uppercase hover:text-sky-300 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>
            <div className="mt-4 text-xs text-slate-500">
              <Link to="/">← Back to site</Link>
            </div>
          </BentoCard>
        </div>
      </main>
    </div>
  );
}
