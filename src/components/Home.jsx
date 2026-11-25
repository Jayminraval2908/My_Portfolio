import { RiArrowRightUpLine } from "@remixicon/react";
import myimg from "../assets/myimg.jpg";
import { experiences, profile, projects, skillGroups } from "../data";

const marquee = skillGroups.flatMap((g) => g.items);

export default function Home() {
  return (
    <section id="home" className="pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.35fr_1fr] gap-14 items-center">
        <div>
          <p data-r className="inline-flex items-center gap-3 rounded-full border border-line px-4 py-2 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="ping-dot absolute inset-0 rounded-full bg-accent" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to full-time MERN / Full Stack roles
          </p>

          <h1 data-r className="font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(3.5rem,11vw,8rem)] mt-8">
            Jaymin<br />Raval<span className="text-accent">.</span>
          </h1>

          <p data-r className="font-mono text-sm uppercase tracking-widest text-accent mt-6">{profile.role}</p>

          <p data-r className="text-muted text-lg leading-relaxed max-w-xl mt-6">
            MERN intern and Computer Engineering student building responsive, scalable full-stack web apps. Looking for a full-time Full Stack role.
          </p>

          <div data-r className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-on-accent font-bold hover:opacity-90 transition">
              View projects <RiArrowRightUpLine size={18} />
            </a>
            <a href="#contact" className="px-7 py-3.5 rounded-full border border-line hover:border-accent hover:text-accent transition">
              Contact me
            </a>
          </div>
        </div>

        <div data-r className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl border border-accent" />
          <img
            src={myimg}
            alt="Jaymin Raval"
            className="relative aspect-[4/5] w-full object-cover rounded-t-full rounded-b-3xl bg-card"
          />
        </div>
      </div>

      <div data-r className="mx-auto max-w-6xl px-6 mt-20 grid grid-cols-3 border-y border-line">
        {[
          [`${projects.length}`, "Projects built"],
          [`${experiences.length}`, "Internships"],
          ["MERN", "Full stack"],
        ].map(([v, l]) => (
          <div key={l} className="py-6 px-2 md:px-6 border-r border-line last:border-r-0">
            <p className="font-display font-extrabold text-3xl md:text-5xl">{v}</p>
            <p className="font-mono text-xs text-muted mt-1">{l}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden border-b border-line py-5 mt-0" aria-hidden="true">
        <div className="marquee flex w-max gap-10 font-display font-bold text-2xl text-muted whitespace-nowrap">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
