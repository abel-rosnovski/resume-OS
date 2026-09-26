import Hero from "../components/Hero";
import RotatingCircle from "../components/RotatingCircle";
import BiggestBrag from "../components/BiggestBrag";
import InfoLinks from "../components/InfoLinks";
import MatrixRain from "../components/MatrixRain";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <MatrixRain />
      <div className="relative z-10">
        <Hero />
        <RotatingCircle />
        <BiggestBrag />
        <InfoLinks />
      </div>
    </main>
  );
}