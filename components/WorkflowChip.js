export default function WorkflowChip({ title, description }) {
  return (
    <div className="border border-border rounded-lg p-4 hover:border-accent transition-colors">
      <p className="font-semibold text-sm mb-1">
        <span className="text-accent">$</span> {title}
      </p>
      <p className="text-muted text-sm">{description}</p>
    </div>
  );
}