import Link from "next/link";

export default function HighlightFeed({ items }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="block border border-border rounded-xl p-5 hover:border-accent transition-colors group"
        >
          <p className="text-accent text-xs font-bold uppercase tracking-wide mb-2">
            {item.tag}
          </p>
          <p className="text-foreground text-base md:text-lg leading-snug">
            {item.text}
          </p>
          <p className="text-muted text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
            View source →
          </p>
        </Link>
      ))}
    </div>
  );
}