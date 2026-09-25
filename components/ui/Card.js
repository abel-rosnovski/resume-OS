export default function Card({ children, className = "", style }) {
  return (
    <div
      className={`border border-border rounded-lg backdrop-blur-sm p-6 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}