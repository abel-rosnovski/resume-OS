export default function PipelineDiagram({ steps }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap items-center gap-2 overflow-x-auto py-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2 shrink-0">
          <div className="border border-border rounded-lg px-4 py-3 text-center hover:border-accent transition-colors">
            <p className="font-bold text-sm md:text-base text-foreground">{step}</p>
          </div>
          {i < steps.length - 1 && (
            <span className="text-accent text-lg">→</span>
          )}
        </div>
      ))}
    </div>
  );
}