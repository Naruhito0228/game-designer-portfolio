export default function QuestCard({
  title,
  role,
  tags = [],
  description,
  status = "In Progress",
  link,
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-purple-400">
            {status}
          </p>
          <h3 className="mt-2 text-xl font-bold">{title}</h3>
          <p className="mt-1 text-sm text-white/60">{role}</p>
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

      <p className="mt-4 text-white/70 leading-relaxed">{description}</p>

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