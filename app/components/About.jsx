"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";

export default function AboutSection() {
  const about = useContentStore((s) => s.about);

  // PARALLAX BACKGROUND
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden py-20 md:py-28"
    >
      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-[0.12] pointer-events-none
        bg-[url('/noise-texture.png')] bg-cover bg-center"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="flex flex-col items-center text-center">
          <div className="border-2 border-black dark:border-white inline-block px-8 py-3 mb-6">
            <span className="tracking-widest text-sm md:text-base font-semibold dark:text-white">
              {about.title}
            </span>
          </div>

          <p className="max-w-3xl text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8">
            {about.subtitle}
          </p>

          {/* EXPLORE BUTTON */}
          <button className="flex items-center gap-3 text-gray-700 dark:text-gray-200 border-t border-b border-gray-300 dark:border-gray-600 px-6 py-2 mb-8">
            EXPLORE
          </button>

          <div className="w-32 h-0.5 bg-black/80 dark:bg-white/80 mb-12"></div>
        </div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {about.sections.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="
                group bg-white dark:bg-[#111]
                rounded-xl p-6 shadow-md dark:shadow-none
                transition-all cursor-default
                hover:shadow-xl hover:dark:shadow-2xl
              "
            >
              {/* ICON */}
              <div className="mb-4 opacity-90 group-hover:opacity-100 transition">
                <Image
                  src={item.icons}
                  width={34}
                  height={34}
                  alt={item.heading}
                  className="object-contain dark:invert"
                />{" "}
              </div>

              {/* HEADING WITH UNDERLINE ANIMATION */}
              <h3
                className="
                  text-lg md:text-xl font-bold tracking-wider mb-3 
                  text-black dark:text-white relative inline-block
                "
              >
                {item.heading}

                {/* Animated underline */}
                <span
                  className="
                    absolute left-0 -bottom-1 w-0 h-[2px]
                    bg-black dark:bg-white transition-all duration-300
                    group-hover:w-full
                  "
                />
              </h3>

              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM LINE */}
        <div className="flex justify-center mt-14">
          <div className="w-16 h-0.5 bg-black/80 dark:bg-white/80"></div>
        </div>
      </div>
    </section>
  );
}
