import Image from "next/image";
import { toolkit } from "../../content/resume";

export default function Toolkit() {
  return (
    <section className="section" id="toolkit" aria-labelledby="toolkit-h">
      <div className="section-head">
        <h2 id="toolkit-h">Toolkit</h2>
        <p>{toolkit.intro}</p>
      </div>

      <div className="tool-grid">
        {toolkit.items.map((t) => (
          <article className="tool" key={t.n}>
            <div className="tool-art">
              {t.image ? (
                <Image src={t.image} alt={t.imageAlt} fill sizes="(max-width: 820px) 100vw, 33vw" />
              ) : (
                <span aria-hidden="true">{t.art}</span>
              )}
            </div>
            <div className="tool-meta label mute">
              <span>{t.n}</span>
              <span>{t.tags}</span>
            </div>
            <h3>{t.title}</h3>
            <div className="client">{t.client}</div>
            <p>{t.outcome}</p>
          </article>
        ))}
      </div>

      <div className="also label mute">
        Also building — <span style={{ color: "var(--ink)" }}>{toolkit.alsoBuilding}</span>
      </div>
    </section>
  );
}
