"use client";

import { useRouter } from "next/navigation";

const LINKS = [
  { label: "What you should know about me", slug: "about" },
  { label: "Education", slug: "education" },
  { label: "Work Experience", slug: "experience" },
];

export default function InfoLinks() {
  const router = useRouter();

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {LINKS.map((item) => (
          <button
            key={item.slug}
            onClick={() => router.push(`/${item.slug}`)}
            className="border-2 border-white rounded-2xl py-10 px-6 text-center font-bold hover:bg-white hover:text-black transition-colors"
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}