"use client";

import { useRouter } from "next/navigation";

export default function PageShell({ children, align = "center" }) {
  const router = useRouter();

  const alignment =
    align === "top"
      ? "items-start pt-24"
      : "items-center";

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-10 relative">
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 text-sm font-semibold border border-border rounded px-4 py-2 text-muted hover:text-accent hover:border-accent transition-colors"
      >
        {"<"} Home
      </button>

      <div className={`flex justify-center ${alignment} min-h-screen max-w-4xl mx-auto`}>
        {children}
      </div>
    </main>
  );
}