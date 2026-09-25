export default function EducationTimeline({ degrees }) {
  return (
    <div className="relative pl-8">
      {/* vertical line */}
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

      <div className="space-y-10">
        {degrees.map((deg, i) => (
          <div key={i} className="relative">
            {/* dot marker */}
            <div
              className={`absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                deg.highlight
                  ? "bg-accent border-accent"
                  : "bg-background border-muted"
              }`}
            />

            <div
              className={`border rounded-xl p-6 ${
                deg.highlight
                  ? "border-accent bg-accent/5"
                  : "border-border"
              }`}
            >
              <p className="text-xs text-muted mb-2 tracking-wide uppercase">
                {deg.institution}
              </p>
              <p className="text-lg md:text-xl font-bold text-foreground">
                {deg.degree}
              </p>
              {deg.note && (
                <p className="text-sm text-accent mt-2 font-semibold">{deg.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}