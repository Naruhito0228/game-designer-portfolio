export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[80vh] flex items-center justify-center px-6"
    >
      <div className="max-w-4xl w-full relative">
        {/* soft glow behind the panel */}
        <div className="absolute inset-0 -z-10 rounded-3xl blur-3xl bg-purple-500/15 dark:bg-purple-500/20" />

        {/* Panel */}
        <div className="relative overflow-hidden rounded-2xl border p-10 sm:p-12
                        border-purple-200 bg-white/80
                        dark:border-white/10 dark:bg-neutral-950/60">

          {/* subtle purple tint inside panel (works for both modes) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br
                          from-purple-200/40 to-transparent
                          dark:from-purple-500/15" />

          <div className="relative">
            <p className="text-xs uppercase tracking-[0.35em] text-purple-700 dark:text-purple-300">
              Game Designer in Progress
            </p>

            <h1 className="mt-4 text-4xl sm:text-6xl font-bold leading-tight">
              Building worlds, systems,
              <span className="text-purple-700 dark:text-purple-300">
                {" "}
                and player stories.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-neutral-800 dark:text-white/70">
              CS student at Vrije Universiteit Amsterdam. I design and prototype
              game experiences — quests, mechanics, and UI.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                           bg-purple-700 text-white hover:bg-purple-800 transition"
              >
                View Quests
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold
                           border border-black/10 text-neutral-900 hover:bg-black/5 transition
                           dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            <p className="mt-6 text-xs text-neutral-500 dark:text-white/40">
              Tip: scroll like a game menu ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}