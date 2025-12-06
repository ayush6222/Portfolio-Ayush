"use client";
import { motion } from "framer-motion";
import { useContentStore } from "../store/useContentStore";

export default function Hero() {
      const heroData = useContentStore((s) => s.hero);
  return (
    <section className="relative h-[65vh] overflow-hidden flex items-center">

      {/* ANIMATED BACKGROUND LINES */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-30">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 200 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gray-300/40 to-transparent dark:via-gray-600/40 absolute top-[25%]"
        />
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: -200 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gray-300/40 to-transparent dark:via-gray-600/40 absolute top-[60%]"
        />
      </div>

      {/* LEFT LIGHT GRADIENT */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#f2f2f2] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1a1a1a] -z-20" />

      {/* RIGHT ANGLED DARK PANEL */}
      <div
        className="
          hidden md:block
          absolute top-0 right-[-30%]
          h-full w-[80%]
          bg-gradient-to-br from-black to-[#1b1b1b]
          dark:from-[#f2f2f2] dark:to-[#e5e5e5]
          -skew-x-12 origin-top-left
          -z-10
        "
      />

      {/* CONTENT AREA */}
      <div className="relative max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center">

        {/* LEFT CONTENT — FULLY CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center md:pl-20 lg:pl-24"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
            {heroData.heroGreeting}
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight"
          >
           {heroData.heroName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-400 mt-4 font-medium max-w-md"
          >
            {heroData.heroTitle}
          </motion.p>
        </motion.div>

        {/* RIGHT ILLUSTRATION — PUSHED UP FOR BALANCE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end md:-translate-y-10 md:translate-x-24 lg:translate-x-40"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="
              w-72 h-[360px] md:w-80 md:h-[420px]
              rounded-2xl shadow-2xl overflow-hidden
              bg-black dark:bg-[#e5e5e5]
              md:bg-[#e5e5e5] md:dark:bg-[#1f1f1f]
              flex items-center justify-center
            "
          >
            <svg
              width="170" height="170" viewBox="0 0 300 300"
              className="text-gray-700 dark:text-gray-200"
            >
              <rect x="40" y="40" width="220" height="140" rx="12" fill="#fff" stroke="#555" strokeWidth="6"/>
              <rect x="40" y="200" width="220" height="40" rx="10" fill="#ccc" />
              <line x1="70" y1="80" x2="210" y2="80" stroke="#777" strokeWidth="6"/>
              <line x1="70" y1="110" x2="180" y2="110" stroke="#777" strokeWidth="6"/>
              <line x1="70" y1="140" x2="230" y2="140" stroke="#777" strokeWidth="6"/>
            </svg>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
