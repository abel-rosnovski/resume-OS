"use client";

import { useEffect, useRef } from "react";

const SIZE = 400; // canvas size in px
const POINTS = 950; // number of dots on the sphere

export default function PlanetGlow({ rotation = 0 }) {
  const canvasRef = useRef(null);
  const rotationRef = useRef(rotation);

  const shift = Math.max(-30, Math.min(30, rotation * 0.15));
  const centerOffset = -20;

  // keep the latest rotation available to the animation loop without restarting it
  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    // Fibonacci sphere: spreads points evenly over a sphere's surface
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINTS; i++) {
      const y = 1 - (i / (POINTS - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const R = SIZE * 0.46;
    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const tilt = 0.4; // slight axial tilt so it looks natural
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    let auto = 0;
    let smooth = rotationRef.current;
    let frame;

    function draw() {
      // ease toward the wheel's rotation so dragging feels smooth
      smooth += (rotationRef.current - smooth) * 0.06;
      auto += 0.004; // constant slow spin
      const angle = auto + ((smooth * Math.PI) / 180) * 0.6;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      ctx.clearRect(0, 0, SIZE, SIZE);

      for (const p of pts) {
        // spin around the vertical axis
        const x = p.x * cosA + p.z * sinA;
        const z = -p.x * sinA + p.z * cosA;
        // tilt the whole globe
        const y2 = p.y * cosT - z * sinT;
        const z2 = p.y * sinT + z * cosT;

        const depth = (z2 + 1) / 2; // 0 = far side, 1 = near side
        const alpha = 0.08 + 0.92 * Math.pow(depth, 1.6);
        const size = 0.6 + 1.7 * depth;

        ctx.beginPath();
        ctx.fillStyle = `rgba(57, 255, 140, ${alpha})`;
        ctx.arc(cx + x * R, cy + y2 * R, size, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    }
    draw();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="absolute left-1/2 pointer-events-none"
      style={{
        bottom: -230,
        width: SIZE,
        height: SIZE,
        transform: `translateX(calc(-50% + ${shift + centerOffset}px))`,
        transition: "transform 0.3s ease-out",
      }}
    >
      {/* soft outer atmosphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(57,255,140,0.28) 0%, rgba(57,255,140,0.08) 50%, transparent 72%)",
          filter: "blur(30px)",
          transform: "scale(1.35)",
        }}
      />

      {/* dark glass core so the dots read as a solid sphere */}
      <div
        className="absolute rounded-full"
        style={{
          inset: SIZE * 0.04,
          background:
            "radial-gradient(circle at 50% 40%, rgba(57,255,140,0.10) 0%, rgba(4,12,8,0.92) 70%)",
          border: "1px solid rgba(57,255,140,0.25)",
          boxShadow:
            "inset 0 0 60px rgba(57,255,140,0.22), 0 0 70px rgba(57,255,140,0.12)",
        }}
      />

      {/* the dots */}
      <canvas
        ref={canvasRef}
        style={{ width: SIZE, height: SIZE }}
        className="absolute inset-0"
      />
    </div>
  );
}