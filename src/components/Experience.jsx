import SectionHead from "./SectionHead";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead n="03" title="Experience" />
      <div>
        {experiences.map((e) => (
          <article key={e.company} data-r className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 border-b border-line py-10 first:pt-0">
            <div>
              <p className="font-mono text-sm text-accent">{e.duration}</p>
              <p className="text-muted mt-2">{e.company}</p>
              {e.location && <p className="font-mono text-xs text-muted mt-1">{e.location}</p>}
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-5">{e.role}</h3>
              <ul className="space-y-3 text-muted leading-relaxed">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
