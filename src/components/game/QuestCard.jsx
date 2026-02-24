export default function QuestCard({
  title,
  role,
  tags = [],
  description,
  status = "In Progress",
  link,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border p-6 transition
                    border-purple-200 bg-white/85 hover:bg-white
                    dark:border-white/10 dark:bg-neutral-950/60 dark:hover:bg-white/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br
                      from-purple-200/35 to-transparent
                      dark:from-purple-500/10" />
      <div className="relative">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-purple-400">
            {status}
          </p>
          <h3 className="mt-2 text-xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-neutral-800 dark:text-white/60">{role}</p>
        </div>
    </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-purple-300 hover:text-purple-200 underline underline-offset-4"
          >
            Open
          </a>
        )}
      </div>

      <p className="mt-4 text-neutral-800 dark:text-white/70 leading-relaxed">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-purple-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* tiny hover hint */}
      <div className="mt-6 h-px bg-white/10" />
      <p className="mt-3 text-xs text-white/40 group-hover:text-white/55 transition">
        Quest log updated ✦
      </p>
    </div>
  );
}