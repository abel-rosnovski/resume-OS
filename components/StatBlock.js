export default function StatBlock({ value, label }) {
  return (
    <div className="border border-accent rounded-xl p-8 text-center bg-accent/5">
      <p className="text-5xl md:text-7xl font-extrabold text-accent">{value}</p>
      <p className="text-muted mt-3 text-sm md:text-base uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}