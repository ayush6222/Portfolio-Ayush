"use client";
import { useState } from "react";
import { useContentStore } from "../store/useContentStore";

export default function AboutHighlight() {
  const aboutHighlightData = useContentStore((s) => s.about);
  const [showLong, setShowLong] = useState(false);

  return (
    <section className="w-full bg-[#f5f5f5] dark:bg-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto w-full px-6">

        {/* FLEX WRAPPER: Align title + AJ on Same Row */}
        <div className="flex justify-between items-start">

          {/* LEFT CONTENT (60%) */}
          <div className="w-[60%]">

            {/* Title */}
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-[#111] dark:text-white">
                {aboutHighlightData.aboutTitle}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-3 text-base md:text-lg leading-snug text-[#444] dark:text-[#ccc] transition-all duration-300">
              {showLong
                ? aboutHighlightData.aboutDescriptionLong
                : aboutHighlightData.aboutDescriptionShort}
            </p>

            {/* READ MORE */}
            {!showLong && (
              <button
                onClick={() => setShowLong(true)}
                className="mt-4 py-1.5 px-4 tracking-widest border-t border-b transition text-[#111] border-[#111] dark:text-white dark:border-white hover:opacity-70"
              >
                READ MORE
              </button>
            )}
          </div>

          {/* GAP (10%) — only for spacing */}
          <div className="w-[10%]"></div>

          {/* AJ BLOCK (30%) */}
          <div className="w-[30%] flex justify-end">

            {/* CLICK AJ → collapse back */}
            <div
              onClick={() => setShowLong(false)}
              className="cursor-pointer hover:opacity-60 transition
                text-black dark:text-white opacity-[0.12] dark:opacity-[0.2]
                w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
            >
              <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none">
                <rect
                  x="50" y="50" width="200" height="200"
                  stroke="currentColor" strokeWidth="20" rx="40"
                />
                <text
                  x="80" y="185"
                  fontSize="110" fontWeight="700"
                  fill="currentColor"
                >
                  AJ
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
