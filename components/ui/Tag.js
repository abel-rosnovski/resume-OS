export default function Tag({ children }) {
  return (
    <span className="inline-block text-sm border border-border rounded px-2 py-1 text-muted">
      {children}
    </span>
  );
}