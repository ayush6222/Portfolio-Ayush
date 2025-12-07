"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillCard({ icon, label }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ duration: 0.28 }}
      className="flex flex-col items-center gap-3 p-2"
    >
      <div
        className="
          w-16 h-16 flex items-center justify-center rounded-lg
          bg-white dark:bg-[#f7f7f7]
          shadow-sm dark:shadow-md
          p-2
        "
      >
        <Image
          src={icon}
          alt={label}
          width={56}
          height={56}
          className="object-contain"
        />
      </div>

      <p className="text-xs sm:text-sm tracking-wide text-gray-700 dark:text-gray-300 font-bold">
        {label}
      </p>
    </motion.div>
  );
}
