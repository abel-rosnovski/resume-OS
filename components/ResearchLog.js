export default function ResearchLog({ entries }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      {entries.map((entry, i) => (
        <div
          key={i}
          className="flex items-start gap-4 px-4 py-3 border-b border-border last:border-b-0 hover:bg-accent/5 transition-colors"
        >
          <span className="text-muted text-sm select-none w-6 text-right">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-foreground text-sm md:text-base leading-relaxed">{entry}</p>
        </div>
      ))}
    </div>
  );
}