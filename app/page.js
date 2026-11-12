import Nav from "../components/site/Nav";
import Stage from "../components/site/Stage";
import Hero from "../components/site/Hero";
import ElevatoStory from "../components/site/ElevatoStory";
import Toolkit from "../components/site/Toolkit";
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
        <Toolkit />
        <IndexSection />
        <Notes />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
