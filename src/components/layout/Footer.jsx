export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Naruhito — Game Designer in Progress
        </p>

        <p className="text-xs text-white/40">
          Built with React + Tailwind · “Leveling up” daily ✦
        </p>
      </div>
    </footer>
  );
}