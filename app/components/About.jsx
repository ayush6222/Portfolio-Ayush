"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../store/useContentStore";

export default function AboutSection() {
  const about = useContentStore((s) => s.about);

  return (
    <section
      id="about"
      className="
        relative py-24 px-6 
        bg-gradient-to-br from-[#f7f7f7] to-[#eaeaea]
        dark:from-[#111111] dark:to-[#1a1a1a]
        transition-colors duration-300
      "
    >
      <div className="max-w-6xl mx-auto">
     
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl md:text-4xl font-bold text-center 
            text-black dark:text-white tracking-wider
          "
        >
          {about.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            text-center mt-4 max-w-2xl mx-auto
            text-gray-700 dark:text-gray-300
          "
        >
          {about.subtitle}
        </motion.p>

        <div className="flex justify-center mt-14">
          <div className="w-16 h-0.5 bg-black/80 dark:bg-white/80"></div>
        </div>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-10 mt-16
          "
        >
          {about.sections.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.id * 0.15 }}
              whileHover={{ y: -8 }}
              className="
                rounded-xl p-8 transition
                bg-white/90 dark:bg-[#1b1b1b]/90
                shadow-md hover:shadow-xl 
                border border-gray-200 dark:border-gray-800
              "
            >
              <div className="flex justify-center mb-5">
                <div
                  className="
                    w-16 h-16 rounded-xl flex items-center justify-center
                    bg-white dark:bg-[#f5f5f5]
                    shadow-sm
                  "
                >
                  <Image
                    src={item.icons}
                    alt={item.heading}
                    width={50}
                    height={50}
                    className="object-contain"
                    style={{ filter: "none" }}
                  />
                </div>
              </div>

              <h3
                className="
                  text-xl font-bold text-center 
                  text-black dark:text-white
                "
              >
                {item.heading}
              </h3>

              <p
                className="
                  text-center mt-3 text-gray-700 dark:text-gray-300
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
