import type { JSX } from 'react';
import Navbar from '../components/Navbar';
import BentoCard from '../components/BentoCard';
import StatsRow from '../components/StatsRow';

export default function Contact(): JSX.Element {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern" />
      <Navbar />
      <main className="relative min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <header className="mb-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                  Let&apos;s build something <span className="text-sky-400">exceptional</span>.
                </h1>
                <p className="text-slate-400 max-w-xl text-lg leading-relaxed mt-4">
                  Tell me about your project or idea. I respond within 24 hours.
                </p>
              </div>
              <div className="flex items-center gap-4 text-slate-500 font-mono text-sm tracking-widest">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                Available for new work
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
            <BentoCard className="p-6">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-slate-400">Name</span>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-slate-400">Email</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-slate-400">Subject</span>
                  <input
                    type="text"
                    placeholder="Project inquiry"
                    className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-widest text-slate-400">Message</span>
                  <textarea
                    rows={6}
                    placeholder="Tell me a bit about what you need…"
                    className="mt-2 w-full rounded-md bg-slate-900/50 border border-slate-800 text-slate-200 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-sky-500/50 resize-y"
                  />
                </label>
                <button
                  type="submit"
                  className="px-6 py-3 btn-laser text-sky-400 rounded-md text-sm font-bold tracking-wider uppercase hover:text-sky-300 active:scale-95 inline-flex items-center gap-2"
                >
                  Send Message
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </button>
              </form>
            </BentoCard>
            <div className="space-y-4">
              <BentoCard className="p-6 flex flex-col gap-3">
                <div className="text-sm font-bold text-white">Direct Contact</div>
                <a className="text-[12px] uppercase tracking-widest text-slate-400 hover:text-sky-400" href="mailto:hello@example.com">
                  hello@example.com
                </a>
                <a className="text-[12px] uppercase tracking-widest text-slate-400 hover:text-sky-400" href="tel:+1234567890">
                  +1 234 567 890
                </a>
              </BentoCard>
              <BentoCard className="p-6">
                <div className="text-sm font-bold text-white mb-4">Social</div>
                <div className="flex gap-3">
                  {[
                    { icon: 'devicon-github-original', href: '#' },
                    { icon: 'devicon-twitter-original', href: '#' },
                    { icon: 'devicon-linkedin-plain', href: '#' }
                  ].map(({ icon, href }) => (
                    <a
                      key={icon}
                      className="w-10 h-10 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/40 hover:bg-slate-800 transition-all"
                      href={href}
                    >
                      <i className={`${icon} text-lg`} />
                    </a>
                  ))}
                </div>
              </BentoCard>
              <BentoCard className="p-6">
                <div className="text-sm font-bold text-white mb-2">Availability</div>
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  Accepting new projects
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </main>
      <StatsRow />
    </div>
  );
}
