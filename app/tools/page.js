import Link from "next/link";
import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ToolSimCard from "../../components/ToolSimCard";

export default function ToolsPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">Tools</SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <ToolSimCard
            title="Automation Tools & Agents"
            description="Covered in detail on the Automation page."
            href="/automation"
          />
          <ToolSimCard
            title="AI Job Scout"
            description="An in-progress tool for automated job discovery and matching."
            inProgress
          />
        </div>

        <p className="text-muted text-sm mt-6">
          More tools in development — check back soon.
        </p>
      </div>
    </PageShell>
  );
}