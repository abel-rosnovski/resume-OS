import { notes } from "../../content/resume";

export default function Notes() {
  return (
    <section className="section" id="notes" aria-labelledby="notes-h">
      <div className="section-head">
        <h2 id="notes-h">Notes</h2>
        <p>Three things to know before we talk.</p>
      </div>
      <ol className="notes">
        {notes.map((n, i) => (
          <li key={n}>
            <span className="label mute">{String(i + 1).padStart(2, "0")}</span>
            <p>{n}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
