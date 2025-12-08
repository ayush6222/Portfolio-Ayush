"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[6px] overflow-hidden">
      <motion.div
        className="h-full bg-blue-500"
        style={{ scaleX: scrollYProgress }}
        initial={{ scaleX: 0 }}
        transformOrigin="0%"
      />

    </div>
  );
}
