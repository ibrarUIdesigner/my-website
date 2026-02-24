import type { JSX } from "react";
import Navbar from "../components/Navbar";
import BentoCard from "../components/BentoCard";
import MetricCard from "../components/MetricCard";
import StatsRow from "../components/StatsRow";

const categories = [
  {
    title: "Frontend",
    items: ["React JS", "Angular", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Express JS", "Node JS", "Supabase", "MongoDB", "SQL"],
  },
  {
    title: "Automation",
    items: ["n8n", "Make.com", "Zapier", "Workflows"],
  },
  {
    title: "Vibe Coding",
    items: ["V0", "Replit", "Base44", "Cursor", "Lovable"],
  },
  {
    title: "Git",
    items: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
] as const;

const iconMap: Record<string, { type: "devicon" | "material"; name: string }> =
  {
    "React JS": { type: "devicon", name: "devicon-react-original" },
    Angular: { type: "devicon", name: "devicon-angular-plain" },
    TypeScript: { type: "devicon", name: "devicon-typescript-plain" },
    JavaScript: { type: "devicon", name: "devicon-javascript-plain" },

    "Express JS": { type: "devicon", name: "devicon-express-original" },
    "Node JS": { type: "devicon", name: "devicon-nodejs-plain" },
    Supabase: { type: "devicon", name: "devicon-supabase-plain" },
    MongoDB: { type: "devicon", name: "devicon-mongodb-plain" },
    SQL: { type: "material", name: "database" },

    n8n: { type: "material", name: "device_hub" },
    "Make.com": { type: "material", name: "auto_mode" },
    Zapier: { type: "material", name: "bolt" },
    Workflows: { type: "material", name: "hub" },

    V0: { type: "material", name: "auto_awesome" },
    Replit: { type: "devicon", name: "devicon-replit-original" },
    Base44: { type: "material", name: "dns" },
    Cursor: { type: "material", name: "keyboard" },
    Lovable: { type: "material", name: "favorite" },

    Git: { type: "devicon", name: "devicon-git-plain" },
    GitHub: { type: "devicon", name: "devicon-github-original" },
    GitLab: { type: "devicon", name: "devicon-gitlab-plain" },
    Bitbucket: { type: "devicon", name: "devicon-bitbucket-original" },
  };

export default function About(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.4fr] gap-8">
            <section>
              <div className="mb-8">
                <div className="text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-3">
                  Who I Am
                </div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                  Crafting digital{" "}
                  <span className="text-sky-400">experiences</span> that matter.
                </h1>
              </div>
              <BentoCard className="p-6 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  I’m a passionate{" "}
                  <span className="font-bold text-white">
                    Frontend Developer
                  </span>{" "}
                  with strong expertise in React, Angular, and TypeScript,
                  focused on building scalable, high-performance, and
                  user-centric web applications. I enjoy transforming complex
                  requirements into clean, maintainable, and elegant interfaces.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  With hands-on experience in{" "}
                  <span className="font-bold text-white">Express.js</span> and
                  REST API integration, I bridge the gap between frontend and
                  backend systems, ensuring seamless communication and optimized
                  application performance.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  Beyond traditional development, I specialize in workflow
                  automation using platforms like{" "}
                  <span className="font-bold text-white">n8n</span>,{" "}
                  <span className="font-bold text-white">Make.com</span>, and{" "}
                  <span className="font-bold text-white">Zapier</span>,
                  designing smart systems that reduce manual work, improve
                  efficiency, and connect multiple services effortlessly.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mt-4">
                  I also embrace{" "}
                  <span className="font-bold text-white">vibe coding</span> —
                  blending creativity with clean architecture, performance
                  optimization, and modern UI/UX principles to craft products
                  that don’t just work, but feel intuitive and polished.
                </p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-800 bg-slate-900/50 text-slate-300">
                    <span className="material-symbols-outlined text-base text-sky-400">
                      location_on
                    </span>
                    <span className="text-xs">Sargodha, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-800 bg-slate-900/50 text-slate-300">
                    <span className="material-symbols-outlined text-base text-sky-400">
                      verified
                    </span>
                    <span className="text-xs">Available for hire</span>
                  </div>
                </div>
              </BentoCard>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard value="5+" label="Years of Experience" />
                <MetricCard value="50+" label="Projects Completed" />
              </div>
            </section>

            <section>
              <div className="text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-3">
                My Arsenal
              </div>
              <h2 className="text-xl font-bold text-white mb-6">
                Technologies & Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat) => (
                  <BentoCard key={cat.title} className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base text-sky-400">
                        layers
                      </span>
                      <div className="text-sm font-bold text-white">
                        {cat.title}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 text-[10px] font-mono rounded border border-slate-800 bg-slate-900/50 text-slate-300 inline-flex items-center gap-1"
                        >
                          {iconMap[item]?.type === "devicon" ? (
                            <i
                              className={`${iconMap[item].name} text-xs text-slate-300`}
                            />
                          ) : (
                            <span className="material-symbols-outlined text-xs text-slate-300">
                              {iconMap[item]?.name ?? "layers"}
                            </span>
                          )}
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </BentoCard>
                ))}
              </div>
            </section>
          </div>
          <StatsRow />
        </div>
      </main>
    </div>
  );
}
