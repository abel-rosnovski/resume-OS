import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";
import PipelineDiagram from "../../components/PipelineDiagram";
import OtherWorksGallery from "../../components/OtherWorksGallery";

export default function ElevatoPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Elevato</SectionHeading>

        <p className="text-foreground leading-relaxed">
          Elevato is my biggest brag because it is where I got the opportunity to make the biggest difference.
          
        </p>

        <Card className="mb-12 max-w-3xl">
          <p className="text-foreground leading-relaxed">
            <span className="text-accent font-bold">Context: </span>
            Elevato is my father&apos;s D2C e-commerce company, selling elevator shoes.
            I pitched to lead growth for the company — on an unusually small budget,
            which meant every decision had to earn its place. That pitch led to a
            full relaunch.
          </p>
        </Card>

        <SectionHeading className="mb-4">What I Did</SectionHeading>
        <ul className="space-y-3 text-foreground mb-12 max-w-3xl">
          <li className="pl-4 border-l border-border">
            Redesigned the entire website from scratch using Claude&apos;s free Sonnet model.
          </li>
          <li className="pl-4 border-l border-border">
            Grew traffic sourced from LLM referrals.
          </li>
          <li className="pl-4 border-l border-border">
            Built a growth engine around a structured framework — Ascend, Aware, Engage, Subscribe, Convert, Excite.
          </li>
          <li className="pl-4 border-l border-border">
            Managed the company&apos;s full social media presence and content strategy.
          </li>
          <li className="pl-4 border-l border-border">
            {" "}
            <span className="text-accent font-bold">Reduced Customer Acquisition Cost by 60%</span>.
          </li>
          <li className="pl-4 border-l border-border">
            Built automated workflows for email outreach and the founder&apos;s personal content.
          </li>
        </ul>

        <SectionHeading className="mb-4">The Growth Framework</SectionHeading>
        <PipelineDiagram
          steps={["Ascend", "Aware", "Engage", "Subscribe", "Convert", "Excite"]}
        />
      </div>
              <h2 className="font-display text-2xl md:text-3xl mt-14 mb-6">
          Campaign Content
        </h2>
        <OtherWorksGallery
          items={[
            { label: "Subway Ad Concept", image: "/images/elevato-subway.jpg" },
            { label: "Launch Campaign Poster", image: "/images/elevato-poster-1.jpg" },
            { label: "Product Drop Poster", image: "/images/elevato-poster-2.jpg" },
          ]}
        />
    </PageShell>
  );
}