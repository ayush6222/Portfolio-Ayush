"use client";

import ProjectSection from "./ProjectSection";

export default function ProjectsPage() {
  return (
    <main
      className="
        min-h-screen 
        w-full 
        bg-white dark:bg-[#0f0f0f]
        pt-10 md:pt-14   /* SMALLER TOP PADDING */
        pb-16 
        px-4 sm:px-6 lg:px-10
      "
    >
      {/* PAGE HEADING */}
      <h1
        className="
          text-3xl md:text-4xl font-bold tracking-widest 
          text-black dark:text-white text-center
        "
      >
        PROJECTS
      </h1>

      {/* DIVIDER */}
      <div className="flex justify-center mt-3 mb-10">
        <div className="w-20 h-[2px] bg-black dark:bg-white opacity-60"></div>
      </div>

      {/* PROJECT LISTING */}
      <div className="max-w-7xl mx-auto w-full">
        <ProjectSection />
      </div>
    </main>
  );
}
