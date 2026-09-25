"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import SectionHeading from "./ui/SectionHeading";
// ...
<SectionHeading className="text-center justify-center">
  What I have pulled off so far
</SectionHeading>

// The words on the wheel, and the page each one links to
const ITEMS = [
  { label: "Growth", slug: "growth" },
  { label: "Automation", slug: "automation" },
  { label: "Tools", slug: "tools" },
  { label: "Data", slug: "data" },
  { label: "Research", slug: "research" },
  { label: "Content", slug: "content" },
];

const RADIUS = 260; // size of the circle, in pixels
const CONTAINER_HEIGHT = 280; // how much of it we reveal (crops the bottom half away)

// Spread the 6 items evenly across a 180-degree arc (-90 to +90)
const baseAngles = ITEMS.map((_, i) => i * (360 / ITEMS.length));

export default function RotatingCircle() {
  const [rotation, setRotation] = useState(0);
  const router = useRouter();
  const dragState = useRef(null); // stores drag start info, doesn't trigger re-renders

  function handlePointerDown(e) {
    dragState.current = { startX: e.clientX, startRotation: rotation };
  }

  function handlePointerMove(e) {
    if (!dragState.current) return;
    const delta = (e.clientX - dragState.current.startX) * 0.3; // drag sensitivity
    setRotation(dragState.current.startRotation + delta);
  }

  function handlePointerUp() {
    dragState.current = null;
  }

  function rotateStep(direction) {
    setRotation((prev) => prev + direction * 30); // 30 degrees per button click
  }

  function handleWordClick(baseAngle, slug) {
    // Rotate so this word's angle becomes 0 (front/top position)
    setRotation(-baseAngle);
    // Wait for the animation to finish, then navigate
    setTimeout(() => {
      router.push(`/${slug}`);
    }, 600); // matches the 0.6s transition below
  }

  return (
    <section className="py-24 px-6">
            <div className="relative max-w-4xl mx-auto mb-16">
        <h2 className="text-center text-2xl md:text-3xl font-bold">
          What I have pulled off so far
        </h2>
        <button
          onClick={() => router.push("/summary")}
          className="absolute top-0 right-0 px-5 py-2 rounded-full border-2 border-accent text-sm font-bold hover:bg-accent hover:text-background transition-colors"
        >
          Summary
        </button>
      </div>

      <div
        className="relative mx-auto overflow-hidden"
        style={{ width: RADIUS * 2, height: CONTAINER_HEIGHT }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {ITEMS.map((item, i) => {
          const angleDeg = baseAngles[i] + rotation;
          const angleRad = (angleDeg * Math.PI) / 180;
          const x = RADIUS * Math.sin(angleRad);
          const y = RADIUS - RADIUS * Math.cos(angleRad); // distance down from top of circle

          return (
            <button
              key={item.slug}
              onClick={() => handleWordClick(baseAngles[i], item.slug)}
              className="absolute font-semibold text-sm md:text-base hover:text-accent transition-colors cursor-pointer select-none"
              style={{
                left: RADIUS + x,
                top: CONTAINER_HEIGHT - RADIUS + y,
                transform: "translate(-50%, -50%)",
                transition: "left 0.6s ease, top 0.6s ease",
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Rotation buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => rotateStep(-1)}
          className="px-4 py-2 border border-border rounded-full hover:border-accent"
        >
          ← 
        </button>
        <button
          onClick={() => rotateStep(1)}
          className="px-4 py-2 border border-border rounded-full hover:border-accent"
        >
          →
        </button>
      </div>
    </section>
  );
}