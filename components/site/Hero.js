import Image from "next/image";
import { avatar, heroMetric, person } from "../../content/resume";

export default function Hero() {
  const letters = [...person.wordmark];
  return (
    <header className="hero" id="top">
      {/* phones and reduced motion: a still instead of the scroll-scrubbed scene */}
      <div className="ph ph-static" aria-hidden="true">
        {avatar.stillClose ? (
          <Image src={avatar.stillClose} alt="" fill sizes="70vw" style={{ objectFit: "cover" }} priority />
        ) : (
          <span>3D AVATAR</span>
        )}
      </div>

      <p className="hero-pitch fade" style={{ "--d": "850ms" }}>
        {person.pitch}
        <span className="label mute">{person.pitchDetail}</span>
      </p>

      <div className="hero-metric fade" style={{ "--d": "950ms" }}>
        <b>{heroMetric.value}</b>
        <span className="label mute">{heroMetric.label}</span>
        <dl className="hero-more">
          {heroMetric.more.map((m) => (
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
