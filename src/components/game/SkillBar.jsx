export default function SkillBar({ label, level = 50 }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-white/60">{level}%</p>
      </div>

      <div className="mt-3 h-3 w-full rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-purple-500/70"
          style={{ width: `${level}%` }}
        />
      </div>

      <p className="mt-3 text-xs text-white/40">Stat updated ✦</p>
    </div>
  );
}