import Image from "next/image";
import { systems } from "../../content/resume";

export default function Systems() {
  return (
    <section className="section" id="systems" aria-labelledby="systems-h">
      <div className="section-head">
        <h2 id="systems-h">{systems.title}</h2>
        <p>{systems.intro}</p>
      </div>

      <div className="sys-grid">
        {systems.items.map((t) => (
          <article className="sys" key={t.n}>
            <Image src={`/images/systems/${t.n}.jpg`} alt="" fill sizes="(max-width: 820px) 100vw, 33vw" aria-hidden="true" />
            <div className="sys-meta label mute">
              <span>{t.n}</span>
              <span>{t.tags}</span>
            </div>
            <div className="sys-text">
              <h3>{t.title}</h3>
              <div className="client">{t.client}</div>
              <p>{t.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
