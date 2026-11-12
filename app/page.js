import Nav from "../components/site/Nav";
import Stage from "../components/site/Stage";
import Hero from "../components/site/Hero";
import ElevatoStory from "../components/site/ElevatoStory";
import Campaign from "../components/site/Campaign";
import Systems from "../components/site/Systems";
import IndexSection from "../components/site/IndexSection";
import Notes from "../components/site/Notes";
import Footer from "../components/site/Footer";
import Motion from "../components/site/Motion";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Stage>
          <Hero />
          <ElevatoStory />
        </Stage>
        <Campaign />
        <Systems />
        <IndexSection />
        <Notes />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
