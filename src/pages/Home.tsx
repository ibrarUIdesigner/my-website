import type { JSX } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import MetricCard from "../components/MetricCard";
import TechStackCard from "../components/TechStackCard";
import SocialCard from "../components/SocialCard";
import StatsRow from "../components/StatsRow";

export default function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Hero />
          <div className="bento-grid">
            <ProfileCard />
            <FeaturedProjectCard />
            <MetricCard
              value="05"
              label="Years Exp."
              badge="Experience"
              hint="Since 2019"
              delta="+1y"
              trend="up"
              actionable
            />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-5">
            <TechStackCard />
            <MetricCard
              value="50+"
              label="Projects"
              badge="Portfolio"
              hint="Latest updates"
              delta="+3"
              trend="up"
              actionable
            />
            <SocialCard />
          </div>
          <StatsRow />
        </div>
      </main>
    </div>
  );
}
