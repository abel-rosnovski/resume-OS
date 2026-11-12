import { footer, person } from "../../content/resume";

export default function Footer() {
  return (
    <footer className="section footer" id="contact" aria-labelledby="contact-h">
      <h2 className="sr-only" id="contact-h">
        Contact
      </h2>
      <p className="manifesto">
        {footer.manifesto.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>

      <div className="contact">
        <div>
          <span className="label mute">Write to me</span>
          <br />
          <a className="big link-line" href={`mailto:${person.email}`}>
            {person.email}
          </a>
        </div>
        <div>
          <span className="label mute">Elsewhere</span>
          <ul>
            <li>
              <a className="link-line" href={person.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
            {person.cv ? (
              <li>
                <a className="link-line" href={person.cv} download>
                  Download CV ↓
                </a>
              </li>
            ) : null}
          </ul>
        </div>
        <div>
          <span className="label mute">Writing</span>
          <ul>
            {footer.writing.map((w) => (
              <li key={w.href}>
                <a className="link-line" href={w.href} target="_blank" rel="noreferrer">
                  {w.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="legal label mute">
        <span>© {new Date().getFullYear()} {person.name}</span>
        <span>Built with Claude</span>
        <span className="spacer" />
        <span style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--ink)" }}>
          <span className="dot" aria-hidden="true" />
          {person.status}
        </span>
      </div>
    </footer>
  );
}
