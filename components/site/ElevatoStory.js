import { elevato } from "../../content/resume";

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
                <span>
                  {item}
                  {i === build.list.length - 1 ? (
                    <span className="framework label">
                      {build.framework.map((f, k) => (
                        <span key={f}>
                          {k ? <i aria-hidden="true">→</i> : null}
                          {f}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </span>
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
