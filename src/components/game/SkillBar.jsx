export default function SkillBar({ label, level = 50 }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border p-5
                border-purple-200 bg-white/85
                dark:border-white/10 dark:bg-neutral-950/60">
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br
                  from-purple-200/35 to-transparent
                  dark:from-purple-500/10" />
  <div className="relative">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-white/60">{level}%</p>
      </div>

      <div className="mt-3 h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <div
            className="h-full rounded-full bg-purple-500/70 transition-all duration-700"
            style={{ width: `${level}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-white/40">Stat updated ✦</p>
    </div>
    </div>
  );
}