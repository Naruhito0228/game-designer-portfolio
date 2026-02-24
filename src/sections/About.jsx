export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-2 text-white/70">
          My character sheet (current build).
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {/* Left: portrait panel */}
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="rounded-xl border border-white/10 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-widest text-purple-400">
                Class
              </p>
              <p className="mt-2 text-xl font-bold">Game Designer</p>

              <p className="mt-4 text-xs uppercase tracking-widest text-purple-400">
                Location
              </p>
              <p className="mt-2 text-white/80">Amsterdam</p>

              <p className="mt-4 text-xs uppercase tracking-widest text-purple-400">
                Guild
              </p>
              <p className="mt-2 text-white/80">VU Computer Science</p>
            </div>

            <p className="mt-5 text-sm text-white/60">
              I like designing systems that feel fair, readable, and satisfying.
              I’m especially interested in player feedback, pacing, and UI that
              supports gameplay.
            </p>
          </div>

          {/* Right: stats + story */}
          <div className="md:col-span-3 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-widest text-purple-400">
              Bio
            </p>
            <p className="mt-3 text-white/70 leading-relaxed">
              I’m a CS student building my way into game design through
              prototypes and small playable experiments. My focus is translating
              ideas into systems players can understand — then improving them
              with playtesting.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Stat label="Core Strength" value="Systems Thinking" />
              <Stat label="Secondary" value="Level Pacing" />
              <Stat label="Favorite Tool" value="Prototypes" />
              <Stat label="Current Quest" value="Portfolio + Projects" />
            </div>

            <div className="mt-6 h-px bg-white/10" />

            <p className="mt-4 text-xs text-white/40">
              Next objective: publish 2–3 polished prototypes ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-1 font-semibold text-white/85">{value}</p>
    </div>
  );
}