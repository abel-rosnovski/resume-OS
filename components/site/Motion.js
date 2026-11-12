"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

// Smooth wheel scrolling plus the Space-to-skim key.
export default function Motion() {
  const skimRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lenis = null;
    let raf = 0;
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1, anchors: true });
      window.__lenis = lenis;
      const loop = (t) => {
        lenis.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    const top = (id) => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    };
    // Stops: top → Elevato brief → Elevato result → Toolkit → Index → Contact → back to top.
    const stops = () => {
      const vh = window.innerHeight;
      const story = document.getElementById("elevato");
      const run = story ? story.offsetHeight - vh : 0;
      const pinned = run > vh; // false on phones / reduced motion, where the story isn't pinned
      return [
        0,
        top("elevato") + (pinned ? run * 0.2 : 0),
        ...(pinned ? [top("elevato") + run * 0.86] : []),
        top("toolkit"),
        top("index"),
        top("contact"),
      ];
    };
    const go = (y) => {
      if (lenis) lenis.scrollTo(y, { duration: 1.4 });
      else window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
    };

    const onKey = (e) => {
      if (e.code !== "Space" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(tag) || e.target?.isContentEditable) return;
      e.preventDefault();
      const y = window.scrollY + 8;
      const list = stops();
      const next = list.find((s) => s > y);
      go(next === undefined ? 0 : next);
      const k = skimRef.current;
      if (k) {
        k.classList.add("hit");
        setTimeout(() => k.classList.remove("hit"), 140);
      }
    };
    window.addEventListener("keydown", onKey);

    // The key only shows over the Elevato story; elsewhere the bottom of the screen is busy.
    const story = document.getElementById("elevato");
    const io = new IntersectionObserver(([en]) => setHidden(!en.isIntersecting), { rootMargin: "-30% 0px -30% 0px" });
    if (story) io.observe(story);

    return () => {
      window.removeEventListener("keydown", onKey);
      io.disconnect();
      cancelAnimationFrame(raf);
      lenis?.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return (
    <div ref={skimRef} className={`skim label mute${hidden ? " gone" : ""}`} aria-hidden="true">
      Press <kbd>Space</kbd> to skim
    </div>
  );
}
