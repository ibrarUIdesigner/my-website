import { createContext, useEffect, useMemo, useState } from "react";
import type { JSX, ReactNode } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../lib/FirebaseConfig";

type AuthState = {
  user: unknown | null;
  token: string | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthState>({
  user: null,
  token: null,
  loading: true,
  signOut: async () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<unknown | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = useMemo(() => getAuth(app), []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const t = await u.getIdToken();
        setToken(t);
        localStorage.setItem("firebaseToken", t);
      } else {
        setToken(null);
        localStorage.removeItem("firebaseToken");
      }
      setLoading(false);
    });
    return () => unsub();
  }, [auth]);

  const doSignOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signOut: doSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
