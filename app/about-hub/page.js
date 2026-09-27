import Link from "next/link";
import PageShell from "../../components/PageShell";

const ABOUT_LINKS = [
  { label: "What You Should Know", href: "/about" },
  { label: "Education", href: "/education" },
  { label: "Work Experience", href: "/experience" },
];

export default function AboutHubPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <h1 className="font-display text-4xl md:text-6xl mb-12">About</h1>
        <div>
          {ABOUT_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="block group">
              <div className="flex items-center justify-between border-b border-border py-5 group-hover:pl-3 transition-all">
                <span className="text-2xl md:text-4xl font-display">
                  {item.label}
                </span>
                <span className="text-muted group-hover:text-accent transition-colors text-xl">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}