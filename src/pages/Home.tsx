import type { JSX } from "react";
import Hero from "../components/Hero";
import ProfileCard from "../components/ProfileCard";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import MetricCard from "../components/MetricCard";
import TechStackCard from "../components/TechStackCard";
import SocialCard from "../components/SocialCard";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full  md:w-[800px] h-full md:h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />
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
    </>
  );
}
