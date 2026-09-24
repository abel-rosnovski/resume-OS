"use client";

import { useState } from "react";

const TABS = [
  { key: "about", label: "What you should know about me" },
  { key: "education", label: "Education" },
  { key: "experience", label: "Work Experience" },
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      {/* Tab bar - styled like OS window tabs */}
      <div className="flex border-b border-gray-700">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 text-sm md:text-base font-semibold border-b-2 transition-colors ${
              activeTab === tab.key
                ? "border-white text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content area - styled like a window pane */}
      <div className="border border-t-0 border-gray-700 rounded-b-xl p-6 min-h-[200px]">
        {activeTab === "about" && (
          <p className="text-gray-300 leading-relaxed">
            [Placeholder] Write a few sentences about who you are, your approach to work,
            and what makes you tick outside of the job titles.
          </p>
        )}

        {activeTab === "education" && (
          <div className="text-gray-300 space-y-3">
            <p className="font-semibold">[Degree], [Institution]</p>
            <p className="text-sm text-gray-500">[Years]</p>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="text-gray-300 space-y-4">
            <div>
              <p className="font-semibold">[Job Title], [Company]</p>
              <p className="text-sm text-gray-500">[Years]</p>
              <p className="mt-1">[One-line description of what you did/achieved]</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}