export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-white/70">Send a message (or open the quest log).</p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {/* terminal header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
            <div className="flex items-center gap-2">
              <Dot className="bg-red-400/80" />
              <Dot className="bg-yellow-300/80" />
              <Dot className="bg-green-400/80" />
              <p className="ml-2 text-xs text-white/60 tracking-widest uppercase">
                contact-terminal
              </p>
            </div>
            <p className="text-xs text-purple-300/80">STATUS: ONLINE</p>
          </div>

          {/* terminal body */}
          <div className="p-6 sm:p-8 font-mono">
            <Line>
              <Prompt /> echo "Hello!"
            </Line>
            <Line className="text-white/70">
              I’m open to internships, collaborations, and feedback on my work.
            </Line>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 not-italic font-sans">
              <ContactItem
                label="Email"
                value="your.email@example.com"
                hint="Replace with your real email"
              />
              <ContactItem
                label="GitHub"
                value="github.com/Naruhito0228"
                hint="Your repo is already live"
              />
              <ContactItem
                label="LinkedIn"
                value="linkedin.com/in/yourname"
                hint="Optional"
              />
              <ContactItem
                label="Itch.io"
                value="itch.io/profile/yourname"
                hint="Optional for game projects"
              />
            </div>

            <div className="mt-6">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center rounded-xl bg-purple-500/20 px-5 py-3 text-sm font-semibold text-purple-200 border border-purple-400/20 hover:bg-purple-500/30 transition"
              >
                Send Email
              </a>
            </div>

            <p className="mt-6 text-xs text-white/40">
              Tip: update your links later — the UI is already “game-ready” ✦
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot({ className = "" }) {
  return <span className={`h-3 w-3 rounded-full ${className}`} />;
}

function Prompt() {
  return <span className="text-purple-300">$</span>;
}

function Line({ children, className = "" }) {
  return <p className={`leading-relaxed ${className}`}>{children}</p>;
}

function ContactItem({ label, value, hint }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3">
      <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
      <p className="mt-1 font-semibold text-white/85 break-all">{value}</p>
      {hint && <p className="mt-1 text-xs text-white/35">{hint}</p>}
    </div>
  );
}