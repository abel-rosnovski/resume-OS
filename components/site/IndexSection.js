import { index } from "../../content/resume";

export default function IndexSection() {
  return (
    <section className="section" id="index" aria-labelledby="index-h">
      <div className="section-head">
        <h2 id="index-h">Index</h2>
        <p>Roles, ordered by what matters for growth.</p>
      </div>

      <div className="idx-block">
        <span className="label mute">Experience</span>
        <div>
          {index.experience.map((r) => (
            <div className="idx-row" key={r.role + r.org}>
              <div className="role">{r.role}</div>
              <div className="org">
                {r.org}
                <small>{r.kind}</small>
              </div>
              <div className="note">{r.note}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="idx-block">
        <span className="label mute">Education</span>
        <div>
          {index.education.map((e) => (
            <div className="idx-row" key={e.degree}>
              <div className="role">{e.degree}</div>
              <div className="org">
                {e.school}
                {e.note ? <small>{e.note}</small> : null}
              </div>
              <div className="note" />
            </div>
          ))}
        </div>
      </div>

      <div className="idx-block idx-split">
        <div>
          <span className="label mute">Courses</span>
          <div className="idx-inline">{index.courses.join(" · ")}</div>
        </div>
        <div>
          <span className="label mute">Stack</span>
          <div className="idx-inline">{index.stack.join(" · ")}</div>
        </div>
      </div>
    </section>
  );
}
