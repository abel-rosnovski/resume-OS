import Image from "next/image";
import { avatar, heroStats, person } from "../../content/resume";

export default function Hero() {
  const letters = [...person.wordmark];
  const front = avatar.poses[0];
  return (
    <header className="hero" id="top">
      {/* phones and reduced motion: a still instead of the scroll-driven scene */}
      <Image className="hero-still" src={front.src} alt="" width={avatar.width} height={avatar.height} sizes="160vw" aria-hidden="true" />

      <p className="hero-pitch fade" style={{ "--d": "850ms" }}>
        {person.pitch}
        <span className="label mute">{person.pitchDetail}</span>
      </p>

      <div className="hero-metric fade" style={{ "--d": "950ms" }}>
        <span className="label mute">{heroStats.kicker}</span>
        <dl className="hero-more">
          {heroStats.items.map((m) => (
            <div key={m.label}>
              <dt className="label mute">{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h1 className="wordmark" aria-label={person.name}>
        {letters.map((ch, i) => (
          <span key={i} className="rise" style={{ "--d": `${250 + i * 55}ms` }} aria-hidden="true">
            {ch}
          </span>
        ))}
      </h1>
    </header>
  );
}
