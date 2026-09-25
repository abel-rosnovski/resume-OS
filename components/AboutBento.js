export default function AboutBento({ points, closingQuote }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">
        {points.map((point, i) => (
          <div
            key={i}
            className={`border border-border rounded-xl p-6 hover:border-accent transition-colors bg-background/40 ${point.span || ""}`}
          >
            <p className="text-accent text-sm font-bold mb-3">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="text-foreground text-base md:text-lg leading-snug">
              {point.text}
            </p>
          </div>
        ))}
      </div>

      {closingQuote && (
        <div className="mt-4 border border-accent rounded-xl p-8 text-center">
          <p className="text-xl md:text-3xl font-bold text-accent">
            &ldquo;{closingQuote}&rdquo;
          </p>
        </div>
      )}
    </div>
  );
}