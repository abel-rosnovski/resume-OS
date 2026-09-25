export default function Card({ children, className = "" }) {
  return (
    <div
      className={`border border-border rounded-lg bg-background/50 backdrop-blur-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}