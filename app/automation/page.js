import Link from "next/link";
import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCase from "../../components/ProjectCase";
import WorkflowChip from "../../components/WorkflowChip";
import Card from "../../components/ui/Card";

export default function AutomationPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">Automation</SectionHeading>

        <ProjectCase
          title="AI Content Agent for a B2B Client"
          whatIDid={[
            "Built an agent in n8n that generates LinkedIn posts, carousels, and articles directly from raw context.",
            "Tuned the outputs to stay technically accurate about a specific technology, so the content read as credible rather than generic AI filler.",
          ]}
          whatItAccomplished={[]}
        />

        <Card className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="font-semibold">Lead-Scoring Tool for a Startup</p>
            <p className="text-muted text-sm mt-1">
              Already covered in detail on the Data page — same project, viewed through its data-cleaning angle.
            </p>
          </div>
          <Link
            href="/data"
            className="text-sm border border-accent text-accent rounded px-4 py-2 hover:bg-accent hover:text-background transition-colors whitespace-nowrap"
          >
            View on Data page →
          </Link>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <WorkflowChip
            title="Founder personal-brand content workflow"
            description="Built a lightweight n8n agent that generates content for a founder's personal brand, cutting a weekly task down to minutes."
          />
          <WorkflowChip
            title="Automated email outreach (Brevo)"
            description="Set up an automated outreach workflow in Brevo to handle email sequencing without manual sending."
          />
        </div>
      </div>
    </PageShell>
  );
}