import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import HighlightFeed from "../../components/HighlightFeed";

export default function SummaryPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-3">Summary</SectionHeading>
        <p className="text-muted mb-8">
          A quick highlight reel — the best lines, pulled from every page.
        </p>

        <HighlightFeed
          items={[
            {
              tag: "Growth",
              text: "Reduced Customer Acquisition Cost by 60% within the first month at Elevato.",
              href: "/growth",
            },
            {
              tag: "Data",
              text: "Automated a weekly operations dashboard at an MNC, saving several man-hours every week.",
              href: "/data",
            },
            {
              tag: "Research",
              text: "Led research on India's SEZs, surfacing evidence pointing to potential government-level scandals.",
              href: "/research",
            },
            {
              tag: "Education",
              text: "M.S. in Data Science & Management — a joint program between IIT Indore and IIM Indore.",
              href: "/education",
            },
            {
              tag: "Automation",
              text: "Built an AI content agent generating LinkedIn posts, carousels, and articles for a B2B client.",
              href: "/automation",
            },
            {
              tag: "About Me",
              text: "I aspire to be the person people bring in when the stakes are high.",
              href: "/about",
            },
            {
              tag: "Experience",
              text: "Worked across research, consulting, content, and growth — a genuinely diverse, generalist foundation.",
              href: "/experience",
            },
            
          ]}
        />

        <div className="mt-14 border border-accent rounded-xl p-8 text-center">
          <p className="text-lg md:text-xl font-bold text-foreground mb-2">
            Take a look at the content I made?
          </p>
          <p className="text-muted text-sm mb-5">
            Instagram posts, Medium articles, and LinkedIn content — all in one place.
          </p>

            <a
            href="/content"
            className="inline-block border-2 border-accent text-accent rounded-full px-6 py-2 font-bold hover:bg-accent hover:text-background transition-colors"
          >
            View Content →
          </a>
        </div>
      </div>
    </PageShell>
  );
}