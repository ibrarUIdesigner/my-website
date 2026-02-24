import { createContext, useCallback, useMemo, useState } from "react";
import type { JSX, ReactNode } from "react";

type LoadingState = {
  start: () => void;
  stop: () => void;
  active: boolean;
};

export const LoadingContext = createContext<LoadingState>({
  start: () => {},
  stop: () => {},
  active: false,
});

export default function LoadingProvider({ children }: { children: ReactNode }): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const start = useCallback(() => setCount((c) => c + 1), []);
  const stop = useCallback(() => setCount((c) => Math.max(0, c - 1)), []);
  const value = useMemo(() => ({ start, stop, active: count > 0 }), [start, stop, count]);
  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}
