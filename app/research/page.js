import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ResearchLog from "../../components/ResearchLog";

export default function ResearchPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Market Research</SectionHeading>
        <ResearchLog
          entries={[
            <>
              Led a research project on India&apos;s Special Economic Zones (SEZs),
              surfacing evidence pointing to potential{" "}
              <span className="text-accent font-semibold">government-level scandals</span>.
            </>,
            "Independently conducted market research covering the UAE, Singapore, and the USA.",
            "Took on all impromptu, fast-turnaround research requests as a market research intern.",
          ]}
        />

        <SectionHeading className="mt-12 mb-6">Academic Research</SectionHeading>
        <ResearchLog
          entries={[
            "Theoretical research on nuclear physics.",
            "Theoretical research proposing a modification to handgun design.",
            "Research combining a CNN and Transformer architecture to classify agricultural land by crop type.",
          ]}
        />
      </div>
    </PageShell>
  );
}