import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import EducationTimeline from "../../components/EducationTimeline";
import Tag from "../../components/ui/Tag";

export default function EducationPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">Education</SectionHeading>

        <EducationTimeline
          degrees={[
            {
              institution: "IIT Indore & IIM Indore, India — Joint Program",
              degree: "M.S. in Data Science & Management",
              note: "A joint degree across two of India's top institutes, pairing technical rigor with business strategy.",
              highlight: true,
            },
            {
              institution: "Amity University, Mumbai, India",
              degree: "M.Sc. in Applied Physics",
            },
            {
              institution: "Calicut University, Calicut, India",
              degree: "B.Sc. in Physics",
            },
          ]}
        />

        <SectionHeading className="mt-14 mb-5">Online Courses</SectionHeading>
        <div className="flex flex-wrap gap-2">
          <Tag>Scaling Operations — Northwestern University</Tag>
          <Tag>Introduction to Management Consulting — Emory University</Tag>
          <Tag>International B2B Marketing — Yonsei University</Tag>
          <Tag>Sustainability Consulting — UIUC</Tag>
        </div>
      </div>
    </PageShell>
  );
}