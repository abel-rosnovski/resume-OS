export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`text-xl md:text-2xl font-bold tracking-tight ${className}`}>
      <span className="text-accent mr-2">{"//"}</span>
      {children}
    </h2>
  );
}