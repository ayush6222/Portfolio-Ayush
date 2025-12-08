"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";
import { useState } from "react";

export default function Hero() {
  const heroData = useContentStore((s) => s.hero);
  const socialLinks = useContentStore((s) => s.socialLinks);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Handle 3D tilt
  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setTilt({
      rotateX: -(y / 20),
      rotateY: x / 20,
    });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <section className="relative h-[65vh] flex items-center pt-24 md:pt-0 overflow-hidden">
      {/* ✨ Background Animated Lines */}
      <div className="absolute inset-0 -z-30 pointer-events-none">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 200 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-[25%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gray-400/40 to-transparent dark:via-gray-600/40"
        />
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: -200 }}
          transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
          className="absolute top-[60%] w-[200%] h-[1px] bg-gradient-to-r from-transparent via-gray-400/40 to-transparent dark:via-gray-600/40"
        />
      </div>

      {/* BG Panels */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-[#f2f2f2] to-[#e0e0e0] dark:from-[#121212] dark:to-[#1a1a1a] -z-20" />
      <div className="hidden md:block absolute top-0 right-[-30%] h-full w-[80%] -skew-x-12 origin-top-left bg-gradient-to-br from-black to-[#1b1b1b] dark:from-[#f2f2f2] dark:to-[#e5e5e5] -z-10" />

      <div className="relative max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 items-center">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:pl-20 lg:pl-24"
        >
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
            {heroData.heroGreeting}
          </p>

          {/* Name */}
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {heroData.heroName.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-md">
            {heroData.heroTitle}
          </p>

          {/* SOCIAL ICONS WITH TOOLTIP */}
          <motion.div
            className="flex gap-3 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {socialLinks.map((item) => (
              <motion.div
                key={item.id}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {/* Tooltip */}
                <span
                  className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                  bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded-md transition"
                >
                  {item.label}
                </span>

                {/* Icon */}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-10 h-10 md:w-12 md:h-12 
                    flex items-center justify-center 
                    bg-white dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700
                    rounded-lg shadow 
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1 hover:rotate-3
                  "
                >
                  <Image
                    src={item.icon}
                    width={22}
                    height={22}
                    alt={item.label}
                    className="dark:invert"
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT 3D TILT SVG CARD WITH TYPING EFFECT */}
        <motion.div
          className="hidden md:flex justify-end md:-translate-y-10 md:translate-x-24 lg:translate-x-40"
          style={{
            transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-72 h-[360px] md:w-80 md:h-[420px] rounded-2xl shadow-2xl overflow-hidden 
              bg-white dark:bg-[#dcdcdc]
              flex items-center justify-center"
          >
            {/* SVG WITH CODE TYPING */}
            <svg width="200" height="200" viewBox="0 0 300 300">
              <rect
                x="40"
                y="40"
                width="220"
                height="150"
                rx="12"
                className="fill-white dark:fill-black stroke-black dark:stroke-white"
                strokeWidth="4"
              />

              {[
                "const user = {",
                "  name: 'Ayush',",
                "  role: 'Frontend Dev'",
                "};",
              ].map((text, index) => (
                <motion.text
                  key={index}
                  x="60"
                  y={80 + index * 30}
                  fill="currentColor"
                  className="text-black dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.6 }}
                  fontSize="14"
                  fontFamily="monospace"
                >
                  {text}
                </motion.text>
              ))}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
