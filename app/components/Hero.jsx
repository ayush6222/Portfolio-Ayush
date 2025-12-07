"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";

export default function Hero() {
  const heroData = useContentStore((s) => s.hero);
  const socialLinks = useContentStore((s) => s.socialLinks);

  return (
    <section className="relative h-[65vh] overflow-hidden flex items-center pt-24 md:pt-0">
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

      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#f2f2f2] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1a1a1a] -z-20" />

      <div
        className="hidden md:block absolute top-0 right-[-30%] h-full w-[80%]
        bg-gradient-to-br from-black to-[#1b1b1b]
        dark:from-[#f2f2f2] dark:to-[#e5e5e5]
        -skew-x-12 origin-top-left -z-10"
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center md:pl-20 lg:pl-24"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
            {heroData.heroGreeting}
          </p>

          {/* OLD TYPING ANIMATION (RESTORED) */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-black dark:text-white leading-tight flex gap-1 flex-wrap"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            {"Ayush Jaiswal".split("").map((char, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 font-medium max-w-md">
            {heroData.heroTitle}
          </p>

        <motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }}
  className="flex gap-3 mt-8"
>
  {socialLinks.map((item) => (
    <motion.a
      key={item.id}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="
        w-10 h-10 md:w-12 md:h-12 
        flex items-center justify-center
        bg-gray-200 dark:bg-gray-700 
        rounded-lg shadow-md
        transition-all duration-300
        hover:scale-110 hover:rotate-3
        hover:shadow-xl hover:-translate-y-1
      "
    >
      <Image src={item.icon} width={22} height={22} alt={item.label} />
    </motion.a>
  ))}
</motion.div>

        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-center md:justify-end md:-translate-y-10 md:translate-x-24 lg:translate-x-40"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-72 h-[360px] md:w-80 md:h-[420px] rounded-2xl shadow-2xl overflow-hidden bg-black dark:bg-[#e5e5e5] md:bg-[#e5e5e5] md:dark:bg-[#1f1f1f] flex items-center justify-center"
          >
            <svg width="170" height="170" viewBox="0 0 300 300" className="text-gray-700 dark:text-gray-200">
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
