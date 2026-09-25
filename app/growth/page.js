import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCase from "../../components/ProjectCase";
import WorkflowChip from "../../components/WorkflowChip";

export default function GrowthPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">Growth</SectionHeading>

        <ProjectCase
          gradient
          title="Led Growth at Elevato"
          whatIDid={[
            "Built a growth engine from scratch.",
            "SEO and GEO optimized the website.",
            "Managed the company's full social media presence and content.",
            "Automated email outreach.",
            "Created and maintained an affiliate program.",
          ]}
          whatItAccomplished={[
            "Reduced Customer Acquisition Cost by 60% within the first month.",
          ]}
        />

        <WorkflowChip
          title="LinkedIn outreach at a marketing agency"
          description="Managed LinkedIn outreach on behalf of the agency's clients."
        />
      </div>
    </PageShell>
  );
}