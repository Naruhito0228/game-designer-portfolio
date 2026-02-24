import SkillBar from "../components/game/SkillBar";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="mt-2 text-white/70">
          My current build stats (still leveling up).
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <SkillBar label="Game Design" level={80} />
          <SkillBar label="Level Design" level={0} />
          <SkillBar label="Prototyping" level={0} />
          <SkillBar label="UI / UX" level={0} />
          <SkillBar label="Unity / C#" level={0} />
          <SkillBar label="React / Web" level={0} />
        </div>
      </div>
    </section>
  );
}