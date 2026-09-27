import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import Card from "../../components/ui/Card";
import PipelineDiagram from "../../components/PipelineDiagram";

export default function ElevatoPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Elevato</SectionHeading>

       <p className="text-foreground leading-relaxed mb-8">
  Elevato is my biggest brag because it is where I got the opportunity to make the biggest difference.
</p>


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
    </PageShell>
  );
}