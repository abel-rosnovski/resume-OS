"use client";

import { useEffect, useState } from "react";
import { person, sections } from "../../content/resume";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
    };
  }, [open]);

  return (
    <>
      <nav className="nav label" aria-label="Primary">
        <a href="#top" className="nav-logo brace" aria-label={`${person.name}, back to top`}>
          {"{"}
          <i>×</i>
          {"}"}
        </a>
        <span className="nav-center mute">{person.pillars}</span>
        <span className="nav-right">
          {person.cv ? (
            <a href={person.cv} className="link-line hide-sm" download>
              CV ↓
            </a>
          ) : null}
          <a href={`mailto:${person.email}`} className="link-line hide-sm">
            Email
          </a>
          <button type="button" className="link-line" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
            {open ? "Close" : "Menu"}
          </button>
        </span>
      </nav>

      <div id="menu" className={`menu${open ? " open" : ""}`} aria-hidden={!open}>
        {sections.slice(1).map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            <span className="label">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </a>
        ))}
      </div>
    </>
  );
}
