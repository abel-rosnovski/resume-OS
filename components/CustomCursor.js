"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let targetX = 0;
    let targetY = 0;
    let ringX = 0;
    let ringY = 0;

    function onMove(e) {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.left = `${targetX}px`;
      dot.style.top = `${targetY}px`;
    }
    window.addEventListener("mousemove", onMove);

    let frame;
    function animateRing() {
      ringX += (targetX - ringX) * 0.15;
      ringY += (targetY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frame = requestAnimationFrame(animateRing);
    }
    animateRing();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[100] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-accent rounded-full pointer-events-none z-[100] hidden md:block opacity-60"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}