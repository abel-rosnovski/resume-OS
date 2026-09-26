import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import OtherWorksGallery from "../../components/OtherWorksGallery";
import LinkList from "../../components/LinkList";

export default function ContentPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-6">Content</SectionHeading>

        <p className="text-muted text-sm mb-4">Instagram Posts</p>
        <OtherWorksGallery
          items={[
            { label: "Post 1" },
            { label: "Post 2" },
            { label: "Post 3" },
          ]}
        />

        <SectionHeading className="mt-14 mb-4">Medium Articles</SectionHeading>
        <LinkList
          links={[
            { title: "Film Analysis", url: "https://medium.com/@abelinaempire/a-six-minute-textbook-analyzing-the-iconic-opening-scene-of-the-godfather-f55a5dc36d46" },
            { title: "Philosophy", url: "https://medium.com/@abelinaempire/the-eyes-i-borrow-from-cinema-8bd8c6b77b59" },
          ]}
        />

        <SectionHeading className="mt-14 mb-4">LinkedIn Posts</SectionHeading>
        <LinkList
          links={[
            { title: "Data Visualisation", url: "https://lnkd.in/p/gsmQXC34" },
            { title: "Growth", url: "https://lnkd.in/p/gFecPbdk" },
          ]}
        />
      </div>
    </PageShell>
  );
}