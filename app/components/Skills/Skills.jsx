"use client";

import { motion } from "framer-motion";
import { useContentStore } from "../../store/useContentStore";
import SkillSection from "./SkillSection";

export default function Skills() {
  const skills = useContentStore((s) => s.skills);

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-gradient-to-b from-[#f7f7f7] to-[#efefef] dark:from-[#0b0b0b] dark:to-[#111111]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-4xl font-semibold mb-12 dark:text-white"
        >
          SKILLS
        </motion.h2>

        <SkillSection title="USING NOW" items={skills.usingNow} />
        <SkillSection title="LEARNING" items={skills.learning} />
        <SkillSection title="OTHER SKILLS" items={skills.otherSkills} />
      </div>
    </section>
  );
}
