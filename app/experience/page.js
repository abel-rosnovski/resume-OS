import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ExperienceCard from "../../components/ExperienceCard";

export default function ExperiencePage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Work Experience</SectionHeading>

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          This is where I become a true generalist. I&apos;ve worked across
          multiple departments, and paired with my education, it&apos;s given me
          a genuinely diverse foundation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ExperienceCard
            role="Market Research Intern"
            company="Arthashastra Intelligence"
            type="B2B Consultancy"
          />
          <ExperienceCard
            role="Consulting Intern"
            company="Zinnov Management Consultancy"
            type="GCC Business Consultants"
          />
          <ExperienceCard
            role="Technical Content Writer & Researcher"
            company="Drone Script"
            type="B2B Marketing Agency"
          />
          <ExperienceCard
            role="Growth Hacker"
            company="Elevato"
            type="D2C E-commerce Brand"
          />
          <ExperienceCard
            role="Freelance Investment Pitch Deck Creator"
            company="Independent"
            type="Freelance"
          />
        </div>
      </div>
    </PageShell>
  );
}