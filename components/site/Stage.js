"use client";

import { useEffect, useRef, useState } from "react";
import { avatar } from "../../content/resume";
import { AvatarFrames } from "../../lib/avatarFrames";

const clamp = (v) => Math.min(1, Math.max(0, v));
const ramp = (p, a, b) => clamp((p - a) / (b - a));
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Wraps the hero and the Elevato story. One sticky scene sits behind both and is driven
// by scroll: the avatar video (or its placeholder) plus the story panels' visibility.
export default function Stage({ children }) {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const [sceneOn, setSceneOn] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    const staticMode = window.matchMedia("(max-width: 820px), (prefers-reduced-motion: reduce)");
    if (staticMode.matches) return;

    const story = stage.querySelector(".story");
    const panels = [...stage.querySelectorAll(".panel")];
    const last = avatar.frames - 1;

    let frames = null;
    if (avatar.video && canvasRef.current) {
      frames = new AvatarFrames(canvasRef.current, { src: avatar.video, frames: avatar.frames, fps: avatar.fps }, () => {
        frames.lastKey = "";
        requestAnimationFrame(() => requestAnimationFrame(() => setSceneOn(true)));
      });
      frames.start();
    }

    let cur = 0;
    let prev = performance.now();
    let raf = 0;

    const tick = (now) => {
      const dt = Math.min(64, now - prev);
      prev = now;
      const vh = window.innerHeight;

      const r = stage.getBoundingClientRect();
      const P = clamp(-r.top / (r.height - vh));
      const target = Math.min(1, P / 0.85) * last;
      const k = window.__lenis ? 0.6 : 0.25;
      cur += (target - cur) * (1 - Math.pow(1 - k, dt / 16.7));
      if (Math.abs(target - cur) < 0.02) cur = target;
      const t = easeInOut(clamp((cur / last - 0.22) / 0.4));
      stage.style.setProperty("--t", t.toFixed(4));

      const s = story.getBoundingClientRect();
      const p = clamp(-s.top / (s.height - vh));
      const a = [
        ramp(p, 0.06, 0.12) * (1 - ramp(p, 0.3, 0.36)),
        ramp(p, 0.38, 0.44) * (1 - ramp(p, 0.62, 0.68)),
        ramp(p, 0.7, 0.78),
      ];
      panels.forEach((el, i) => el.style.setProperty("--a", a[i].toFixed(3)));
      const tab = a[2] > 0.5 ? 3 : a[1] > 0.5 ? 2 : a[0] > 0.5 ? 1 : 0;
      if (stage.dataset.tab !== String(tab)) stage.dataset.tab = String(tab);

      if (frames && !frames.failed) frames.draw(cur, target, t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onResize = () => frames?.resize();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      frames?.destroy();
      panels.forEach((el) => el.style.removeProperty("--a"));
    };
  }, []);

  return (
    <div className="stage" ref={stageRef} data-tab="0">
      <div className={`scene${sceneOn ? " on" : ""}`} aria-hidden="true">
        {avatar.video ? <canvas ref={canvasRef} /> : null}
        <div className="ph">
          <span>3D AVATAR</span>
        </div>
      </div>
      {children}
    </div>
  );
}
