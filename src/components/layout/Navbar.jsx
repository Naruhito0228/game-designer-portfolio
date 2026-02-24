import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}, [theme]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-black dark:text-white">
          Naruhito<span className="text-purple-600 dark:text-purple-300">.dev</span>
        </a>

        <div className="flex items-center gap-4">
          <nav className="hidden sm:flex gap-5 text-sm text-black/70 dark:text-white/70">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="hover:text-purple-700 dark:hover:text-purple-200 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="rounded-xl border border-black/10 bg-black/5 px-3 py-2 text-sm text-black/80 hover:bg-black/10 transition
                       dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}