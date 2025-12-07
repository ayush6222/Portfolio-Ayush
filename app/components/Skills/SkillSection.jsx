"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function SkillSection({ title, items }) {
  return (
    <div className="mb-10">
      <motion.h3
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-lg font-bold tracking-widest mb-6 text-gray-800 dark:text-gray-200"
      >
        {title}:
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
        className="
          grid 
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-4
          gap-x-8 gap-y-8
          place-items-center
        "
      >
        {items.map((item) => (
          <SkillCard key={item.id} icon={item.icon} label={item.label} />
        ))}
      </motion.div>
    </div>
  );
}
