import Hero from "../components/Hero";
import RotatingCircle from "../components/RotatingCircle";
import BiggestBrag from "../components/BiggestBrag";
import InfoLinks from "../components/InfoLinks";
import MatrixRain from "../components/MatrixRain";
import Reveal from "../components/Reveal";
import CustomCursor from "../components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative cursor-none md:cursor-none">
      <CustomCursor />
      <MatrixRain />
      <div className="relative z-10">
        <Reveal>
          <Hero />
        </Reveal>
        <Reveal delay={100}>
          <RotatingCircle />
        </Reveal>
        <Reveal>
          <BiggestBrag />
        </Reveal>
        <Reveal>
          <InfoLinks />
        </Reveal>
      </div>
    </main>
  );
}