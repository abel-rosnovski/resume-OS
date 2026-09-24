import Hero from "../components/Hero";
import RotatingCircle from "../components/RotatingCircle";
import BiggestBrag from "../components/BiggestBrag";
import InfoLinks from "../components/InfoLinks";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Hero />
      <RotatingCircle />
      <BiggestBrag />
      <InfoLinks />
    </main>
  );
}