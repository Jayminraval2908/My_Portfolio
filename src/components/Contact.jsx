import { RiArrowUpLine, RiGithubFill, RiLinkedinBoxFill, RiPhoneLine } from "@remixicon/react";
import { profile } from "../data";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: RiLinkedinBoxFill, external: true },
  { label: "GitHub", href: profile.github, icon: RiGithubFill, external: true },
  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: RiPhoneLine },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <p data-r className="font-mono text-sm text-accent mb-6">05 — Contact</p>
        <h2 data-r className="font-display font-extrabold tracking-tight leading-[0.95] text-[clamp(2.75rem,8vw,6.5rem)]">
          Let's build something<span className="text-accent"> together.</span>
        </h2>
        <p data-r className="text-muted text-lg mt-6 max-w-xl">
          Open to full-time Full Stack / MERN Stack roles, plus freelance and collaborations.
        </p>

        <a
          data-r
          href={`mailto:${profile.email}`}
          className="inline-block font-display font-bold text-xl md:text-4xl mt-10 border-b-2 border-accent pb-1 break-all hover:text-accent transition"
        >
          {profile.email}
        </a>

        <div data-r className="flex flex-wrap gap-3 mt-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line hover:border-accent hover:text-accent transition"
            >
              <l.icon size={18} /> {l.label}
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted">
          <p>© {new Date().getFullYear()} {profile.name} — {profile.role}</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-accent transition"
          >
            Back to top <RiArrowUpLine size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
