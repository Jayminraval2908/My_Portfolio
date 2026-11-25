import { useState } from "react";
import { RiCloseLine, RiMenu3Line, RiMoonLine, RiSunLine } from "@remixicon/react";
import { navLinks, profile } from "../data";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* ignore */ }
    setTheme(next);
  };

  const iconBtn = "grid place-items-center w-10 h-10 rounded-full border border-line hover:border-accent hover:text-accent transition";

  return (
    <>
      <header className="fixed top-4 inset-x-0 z-50 px-4">
        <nav className="mx-auto max-w-5xl flex items-center justify-between gap-4 rounded-full border border-line bg-bg/80 backdrop-blur-md pl-6 pr-2 py-2">
          <a href="#home" className="font-display font-extrabold text-lg tracking-tight">
            jaymin<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-fg transition">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className={iconBtn}>
              {theme === "dark" ? <RiSunLine size={18} /> : <RiMoonLine size={18} />}
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-5 py-2.5 rounded-full bg-accent text-on-accent text-sm font-bold hover:opacity-90 transition"
            >
              Resume
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className={`${iconBtn} md:hidden`}>
              {open ? <RiCloseLine size={20} /> : <RiMenu3Line size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display font-extrabold text-4xl">
              {l.label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-accent text-on-accent font-bold">
            Resume
          </a>
        </div>
      )}
    </>
  );
}
