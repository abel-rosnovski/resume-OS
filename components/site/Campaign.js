import Image from "next/image";
import { campaign } from "../../content/resume";

export default function Campaign() {
  return (
    <section className="section" id="campaign" aria-labelledby="campaign-h">
      <div className="section-head">
        <h2 id="campaign-h">{campaign.title}</h2>
        <p>{campaign.intro}</p>
      </div>
      <div className="camp-grid">
        {campaign.items.map((c, i) => (
          <figure key={c.src}>
            <Image src={c.src} alt={c.alt} width={c.w} height={c.h} sizes="(max-width: 820px) 80vw, 33vw" />
            <figcaption className="label mute">
              <span>{String(i + 1).padStart(2, "0")}</span>
              {c.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
