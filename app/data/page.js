import PageShell from "../../components/PageShell";
import SectionHeading from "../../components/ui/SectionHeading";
import ProjectCase from "../../components/ProjectCase";
import OtherWorksGallery from "../../components/OtherWorksGallery";

export default function DataPage() {
  return (
    <PageShell align="top">
      <div className="w-full">
        <SectionHeading className="mb-8">Data</SectionHeading>

        <ProjectCase
        gradient
          title="Automated Dashboard at an MNC"
          whatIDid={[
            {
              main: "I automated the data dashboard for weekly client meetings for a consultancy firm specialising in setting up GCCs.",
              sub: [
                "Used Power BI to create a dashboard built to give insights on Operations.",
                "Connected the dashboard to their global data, so it was pretty much run and updated on its own.",
                "Placed the dashboard in the weekly presentation template so it just had to be refreshed to be updated for every presentation.",
              ],
            },
          ]}
          whatItAccomplished={[
            "Gave my reporting manager a quantitative look of Operations",
            "Helped him spot multiple bottlenecks and fix them",
            "Ensured data discipline in data acquisition",
            "Saved several man hours every week by automating the numbers for the weekly meetup",
          ]}
        />

        <ProjectCase
        gradient
          title="Data Cleaning Tool for a Startup"
          whatIDid={[
            {
              main: "Created a Python program that would rate a database of leads based on how drone-centric they are.",
              sub: [
                "The startup had a large database of potential clients for outreach, but the tool cast a wide net when generating leads, so a lot of undesirable data came through.",
                "Built a Python script that examined each company's website and description to score them out of ten based on how much of their business centered around drones.",
                "The program also checked whether the company met other criteria as well.",
              ],
            },
          ]}
          whatItAccomplished={[
            "Provided a more quality base for outreach",
            "Saved several man hours in data cleaning",
          ]}
        />

        <SectionHeading className="mt-10 mb-4">Other Works</SectionHeading>
        <OtherWorksGallery
          items={[
            { label: "Google Ads Dashboard" },
            { label: "IPL Batters Dashboard" },
            { label: "Delivery Time Dashboard" },
          ]}
        />
      </div>
    </PageShell>
  );
}