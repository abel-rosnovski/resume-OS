export default function Manifesto({ points, closingQuote }) {
  return (
    <div className="w-full">
      <p className="text-accent font-semibold mb-10">
        <span className="text-muted">$</span> whoami
      </p>

      <div className="space-y-8">
        {points.map((point, i) => (
          <p
            key={i}
            className="text-lg md:text-2xl leading-snug text-foreground max-w-3xl"
          >
            {point}
          </p>
        ))}
      </div>

      {closingQuote && (
        <p className="mt-16 text-2xl md:text-4xl font-bold text-accent leading-tight max-w-3xl">
          &ldquo;{closingQuote}&rdquo;
        </p>
      )}
    </div>
  );
}