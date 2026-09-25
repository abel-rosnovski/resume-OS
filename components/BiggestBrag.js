"use client";

import { useRouter } from "next/navigation";

export default function BiggestBrag() {
  const router = useRouter();

  return (
    <section className="px-6 py-10">
      <button
        onClick={() => router.push("/elevato")}
        className="w-full max-w-4xl mx-auto block text-center border-2 border-accent rounded-2xl py-10 px-6 hover:bg-accent hover:text-background transition-colors"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold">
          My Biggest Brag: Elevato
        </h2>
      </button>
    </section>
  );
}