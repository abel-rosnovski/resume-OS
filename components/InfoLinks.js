"use client";

import { useRouter } from "next/navigation";

const LINKS = [
  { label: "What you should know about me", slug: "about" },
  { label: "Education", slug: "education" },
  { label: "Work Experience", slug: "experience" },
  { label: "Contact Me", slug: "contact" },
];

export default function InfoLinks() {
  const router = useRouter();

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {LINKS.map((item) => (
          <button
            key={item.slug}
            onClick={() => router.push(`/${item.slug}`)}
            className="border border-border rounded-2xl py-10 px-6 text-center font-bold bg-white/5 backdrop-blur-md hover:border-accent hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(57,255,140,0.15)] transition-all duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}