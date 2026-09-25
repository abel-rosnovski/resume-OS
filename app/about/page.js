import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import AboutBento from "../../components/AboutBento";

export default function AboutPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">About Me</SectionHeading>

        <AboutBento
          points={[
            {
              text: "I've literally been asked to work less at every single place I've worked at. Work is personal to me — you won't have the problem of me not putting in enough.",
              span: "md:col-span-2",
            },
            {
              text: "I was raised around entrepreneurs, so I understand how they think — instinctively, not from a textbook.",
            },
            {
              text: "My failures define me. I've failed spectacularly at more things than most people have even attempted.",
            },
            {
              text: "For lack of a better word, I'm an information whore — I take lessons from anything and everything. My best lesson in people management came from football, and I learned punctuality from the Italian mafia.",
              span: "md:col-span-2",
            },
            {
              text: "I aspire to be the person people bring in when the stakes are high.",
            },
          ]}
          closingQuote=" I Understand tech, talk business, execute strategy."
        />
      </div>
    </PageShell>
  );
}