export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 overflow-hidden">

          {/* Purple glow effects */}
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Game Designer in Progress
          </p>

          <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">
            Building worlds, systems,
            <span className="text-purple-300"> and player stories.</span>
          </h1>

          <p className="mt-5 text-white/70 max-w-2xl leading-relaxed">
            CS student at Vrije Universiteit Amsterdam. I design and prototype
            game experiences — quests, mechanics, and UI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-purple-500/20 px-5 py-3 text-sm font-semibold text-purple-200 border border-purple-400/20 hover:bg-purple-500/30 transition"
            >
              View Quests
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white/80 border border-white/15 hover:bg-white/5 transition"
            >
              Contact
            </a>
          </div>

          <p className="mt-6 text-xs text-white/40">
            Tip: scroll like a game menu ✦
          </p>
        </div>
      </div>
    </section>
  );
}