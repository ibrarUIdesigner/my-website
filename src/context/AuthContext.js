import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useEffect, useMemo, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../lib/FirebaseConfig";
export const AuthContext = createContext({
    user: null,
    token: null,
    loading: true,
    signOut: async () => { },
});
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = useMemo(() => getAuth(app), []);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (u) => {
            setUser(u);
            if (u) {
                const t = await u.getIdToken();
                setToken(t);
                localStorage.setItem("firebaseToken", t);
            }
            else {
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
    return (_jsx(AuthContext.Provider, { value: { user, token, loading, signOut: doSignOut }, children: children }));
}
