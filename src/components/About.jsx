import SectionHead from "./SectionHead";

const facts = [
  ["Role", "MERN Stack Developer"],
  ["Education", "Computer Engineering"],
  ["Focus", "Full-stack apps, APIs, UI"],
  ["Exploring", "AI, Prompt Engineering, AI web-apps"],
  ["Status", "Open to full-time roles"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHead n="01" title="About" />
      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-14">
        <div className="space-y-6">
          <p data-r className="font-display font-bold text-2xl md:text-4xl leading-snug tracking-tight">
            I build scalable, responsive web apps, from polished React interfaces to the APIs behind them.
          </p>
          <p data-r className="text-muted text-lg leading-relaxed">
            I enjoy turning ideas into real products with the MERN stack. Right now I am a MERN intern at Haronex Technologies, fixing bugs, testing and debugging real applications. Earlier I built APIs, authentication,
            booking systems and responsive UI, and I keep improving through GSAP animation,
            UI/UX design and full-stack practices.
          </p>
        </div>

        <dl data-r className="border-t border-line">
          {facts.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-6 border-b border-line py-4">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
              <dd className="text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
