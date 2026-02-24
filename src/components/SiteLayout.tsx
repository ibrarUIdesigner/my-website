import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import StatsRow from "./StatsRow";

export default function SiteLayout(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <Outlet />
          <StatsRow />
        </div>
      </main>
    </div>
  );
}
