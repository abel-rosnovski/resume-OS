"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CATEGORIES = [
  { label: "Work", href: "/work" },
  { label: "Elevato", href: "/elevato" },
  { label: "About", href: "/about-hub" },
  { label: "Summary", href: "/summary" },
];

export default function HomeNav() {
  const [hovered, setHovered] = useState(null);
  const router = useRouter();

  return (
    <section className="min-h-screen bg-settle-animation grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 py-16 items-center">
      {/* Giant stacked nav */}
      <div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.label}
            onClick={() => router.push(cat.href)}
            onMouseEnter={() => setHovered(cat.label)}
            onMouseLeave={() => setHovered(null)}
            className="block text-left w-full"
          >
            <span
              className={`font-display block text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight transition-colors duration-200 ${
                hovered === cat.label ? "text-foreground" : "text-muted"
              }`}
            >
              {cat.label}
            </span>
          </button>
        ))}
      </div>

      {/* Right side: intro text + portrait */}
      <div className="flex flex-col gap-8">
        <p className="text-base md:text-lg text-muted max-w-md leading-relaxed font-mono">
          Growth x Data x Product.
          These departments are supposed to go hand in hand. But seldom does. That's where I come in.
        </p>

        <div className="relative w-full max-w-sm aspect-square rounded-lg overflow-hidden">
          <Image
            src="/images/portrait-closeup.jpg"
            alt="Sourav B"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>
    </section>
  );
}