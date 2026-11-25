import { RiArrowRightUpLine, RiGithubFill } from "@remixicon/react";
import SectionHead from "./SectionHead";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead n="04" title="Projects" />
      <div>
        {projects.map((p, i) => (
          <article
            key={p.title}
            data-r
            className="group grid md:grid-cols-[4rem_1fr_auto] gap-4 md:gap-8 items-start border-b border-line py-10 transition hover:bg-card md:px-4 md:-mx-4 rounded-2xl"
          >
            <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>

            <div>
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight group-hover:text-accent transition">
                {p.title}
              </h3>
              <p className="text-muted leading-relaxed mt-3 max-w-2xl">{p.description}</p>
              {p.image && (
                <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="mt-6 w-full max-w-xl rounded-xl border border-line" />
              )}
              <ul className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{t}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 md:flex-col">
              {p.live && <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-accent text-on-accent text-sm font-bold hover:opacity-90 transition"
              >
                Live <RiArrowRightUpLine size={16} />
              </a>}
              {p.github && <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-line text-sm hover:border-accent hover:text-accent transition"
              >
                <RiGithubFill size={16} /> Code
              </a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
