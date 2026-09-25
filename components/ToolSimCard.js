export default function ToolSimCard({ title, description, href, inProgress }) {
  const content = (
    <div
      className={`relative rounded-2xl p-5 h-40 flex flex-col justify-between overflow-hidden border border-border transition-colors ${
        inProgress ? "" : "hover:border-accent"
      }`}
      style={{
        background:
          "linear-gradient(135deg, #10261a 0%, #0a0a0a 70%)",
      }}
    >
      {/* chip graphic, top-left, like a real SIM card */}
      <div className="w-8 h-6 rounded-sm bg-accent/30 border border-accent/60" />

      <div>
        <p className="font-bold text-sm md:text-base text-foreground">{title}</p>
        {description && (
          <p className="text-muted text-xs md:text-sm mt-1 leading-snug">
            {description}
          </p>
        )}
      </div>

      {inProgress && (
        <>
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
          <div className="absolute top-3 -right-9 rotate-45 bg-accent text-background text-[10px] font-bold px-10 py-1 tracking-wider">
            IN PROGRESS
          </div>
        </>
      )}
    </div>
  );

  if (href && !inProgress) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}