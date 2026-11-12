"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { avatar } from "../../content/resume";

const clamp = (v) => Math.min(1, Math.max(0, v));
const ramp = (p, a, b) => clamp((p - a) / (b - a));

// Wraps the hero and the Elevato story. A sticky scene sits behind both: the avatar's four
// angles dissolve into each other as you scroll, and the story panels fade in and out.
export default function Stage({ children }) {
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const staticMode = window.matchMedia("(max-width: 820px), (prefers-reduced-motion: reduce)");
    if (staticMode.matches) return;

    const story = stage.querySelector(".story");
    const panels = [...stage.querySelectorAll(".panel")];
    const poses = [...stage.querySelectorAll(".pose")];

    let smooth = -1 / 3;
    let prev = performance.now();
    let raf = 0;

    const tick = (now) => {
      const dt = Math.min(64, now - prev);
      prev = now;
      const vh = window.innerHeight;
      const s = story.getBoundingClientRect();
      const run = s.height - vh;
      // story progress; negative while the hero is still on screen (−1/3 at the very top)
      const raw = Math.max(-1 / 3, Math.min(1, -s.top / run));
      const p = clamp(raw);

      // panels
      const a = [
        ramp(p, 0.06, 0.12) * (1 - ramp(p, 0.3, 0.36)),
        ramp(p, 0.38, 0.44) * (1 - ramp(p, 0.62, 0.68)),
        ramp(p, 0.7, 0.78),
      ];
      panels.forEach((el, i) => el.style.setProperty("--a", a[i].toFixed(3)));
      const tab = a[2] > 0.5 ? 3 : a[1] > 0.5 ? 2 : a[0] > 0.5 ? 1 : 0;
      if (stage.dataset.tab !== String(tab)) stage.dataset.tab = String(tab);

      // poses: eased so wheel jumps still dissolve softly
      smooth += (raw - smooth) * (1 - Math.pow(1 - 0.18, dt / 16.7));
      const q = smooth;
      const w = [
        1 - ramp(q, -0.2, 0.03),
        ramp(q, -0.2, 0.03) * (1 - ramp(q, 0.31, 0.4)),
        ramp(q, 0.31, 0.4) * (1 - ramp(q, 0.63, 0.72)),
        ramp(q, 0.63, 0.72),
      ];
      // each pose drifts slowly while it is on screen
      const drift = [ramp(q, -1 / 3, 0.03), ramp(q, -0.2, 0.4), ramp(q, 0.31, 0.72), ramp(q, 0.63, 1)];
      poses.forEach((el, i) => {
        el.style.setProperty("--o", w[i].toFixed(3));
        el.style.setProperty("--s", (1.045 - 0.045 * drift[i]).toFixed(4));
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      panels.forEach((el) => el.style.removeProperty("--a"));
    };
  }, []);

  const ratio = avatar.width / avatar.height;
  return (
    <div className="stage" ref={stageRef} data-tab="0">
      <div className="scene" aria-hidden="true">
        {avatar.poses.map((p, i) => (
          <Image
            key={p.key}
            className="pose"
            src={p.src}
            alt=""
            width={avatar.width}
            height={avatar.height}
            sizes={`${Math.round(ratio * 100)}vh`}
            priority={i === 0}
            style={{ "--tx": p.tx, "--fx": p.fx, "--top": p.top ?? "auto", "--bottom": p.bottom ?? "auto", "--h": p.h, "--ratio": ratio, "--o": i === 0 ? 1 : 0 }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
