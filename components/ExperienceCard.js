import Tag from "./ui/Tag";

export default function ExperienceCard({ role, company, type }) {
  return (
    <div className="border border-border rounded-xl p-6 hover:border-accent transition-colors">
      <p className="text-lg font-bold text-foreground">{role}</p>
      <p className="text-accent text-sm font-semibold mt-1">{company}</p>
      <div className="mt-4">
        <Tag>{type}</Tag>
      </div>
    </div>
  );
}