const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-white">
          Naruhito<span className="text-purple-300">.dev</span>
        </a>

        <nav className="hidden sm:flex gap-5 text-sm text-white/70">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="hover:text-purple-200 transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}