export default function LinkList({ links }) {
  return (
    <div className="space-y-3">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border border-border rounded-lg px-5 py-4 hover:border-accent transition-colors group"
        >
          <span className="text-foreground group-hover:text-accent transition-colors">
            {link.title}
          </span>
          <span className="text-muted group-hover:text-accent transition-colors">
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}