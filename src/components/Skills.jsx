import SectionHead from "./SectionHead";
import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead n="02" title="Skills" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((g) => (
          <div key={g.title} data-r className="rounded-3xl border border-line bg-card p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">{g.title}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border border-line px-4 py-2 text-sm hover:border-accent hover:text-accent transition">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
