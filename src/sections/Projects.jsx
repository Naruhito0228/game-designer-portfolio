import QuestCard from "../components/game/QuestCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="mt-2 text-white/70">
          A few quests I’ve completed (or I’m currently battling).
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <QuestCard
            title="Quest: Prototype Combat Loop"
            role="Designer + Programmer"
            status="In Progress"
            description="A small prototype focused on satisfying player feedback, timing, and readability."
            tags={["Unity", "C#", "Game Feel"]}
            link="https://example.com"
          />

          <QuestCard
            title="Quest: Puzzle Level Design"
            role="Level Designer"
            status="Completed"
            description="Designed a short puzzle sequence with clear constraints and an ‘aha’ moment."
            tags={["Level Design", "Pacing", "Playtesting"]}
          />
          
        </div>
      </div>
    </section>
  );
}