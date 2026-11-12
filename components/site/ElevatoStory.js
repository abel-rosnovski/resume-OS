import Image from "next/image";
import { avatar, elevato } from "../../content/resume";

export default function ElevatoStory() {
  const [brief, build, result] = elevato.panels;
  return (
    <section className="story" id="elevato" aria-label="Elevato case study">
      <div className="stick">
        <div className="story-kicker label mute">{elevato.kicker}</div>

        <div className="panels">
        <article className="panel">
          <div className="label mute">
            {brief.n} — {brief.tab}
          </div>
          <h2>
            {brief.title[0]}
            <br />
            {brief.title[1]}
          </h2>
          <p>{brief.body}</p>
        </article>

        <article className="panel">
          <div className="label mute">
            {build.n} — {build.tab}
          </div>
          <h2>
            {build.title[0]}
            <br />
            {build.title[1]}
          </h2>
          <ol className="build-list">
            {build.list.map((item, i) => (
              <li key={item}>
                <span className="label mute">{String(i + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </article>

        <article className="panel">
          <div className="label mute">
            {result.n} — {result.tab}
          </div>
          <div className="result-hero">{result.hero.value}</div>
          <p className="result-label">{result.hero.label}</p>
          <div className="stats">
            {result.stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span className="label mute">{s.label}</span>
              </div>
            ))}
          </div>
        </article>
        </div>

        {/* phones and reduced motion */}
        <Image className="story-still" src={avatar.poses[3].src} alt="" width={avatar.width} height={avatar.height} sizes="100vw" aria-hidden="true" />

        <div className="tabs label" aria-hidden="true">
          {elevato.panels.map((p) => (
            <span key={p.n}>
              {p.n} {p.tab}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
