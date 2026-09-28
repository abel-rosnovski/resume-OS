import Link from "next/link";
import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";

const CONTACTS = [
  {
    label: "Email",
    value: "13souravb@gmail.com",
    href: "mailto:13souravb@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sourav-b-rosnovski/",
    href: "https://www.linkedin.com/in/sourav-b-rosnovski/",
  },
];

export default function ContactPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Contact</SectionHeading>

        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          If something here caught your eye, I would like to hear from you.
        </p>

        <div className="space-y-4 max-w-2xl">
          {CONTACTS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between border border-border rounded-xl px-6 py-5 hover:border-accent transition-colors group"
            >
              <div>
                <p className="text-xs text-accent font-bold uppercase tracking-wide mb-1">
                  {item.label}
                </p>
                <p className="text-foreground group-hover:text-accent transition-colors">
                  {item.value}
                </p>
              </div>
              <span className="text-muted group-hover:text-accent transition-colors">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}