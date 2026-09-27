"use client";

import { useRouter } from "next/navigation";

export default function BiggestBrag() {
  const router = useRouter();

  return (
    <section className="px-6 py-10">
      <button
        onClick={() => router.push("/elevato")}
        className="w-full max-w-4xl mx-auto block text-center border border-border rounded-2xl py-10 px-6 bg-white/5 backdrop-blur-md hover:border-accent hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(57,255,140,0.15)] transition-all duration-300"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
          My Biggest Brag: Elevato
        </h2>
      </button>
    </section>
  );
}