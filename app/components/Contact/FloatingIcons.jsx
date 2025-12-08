"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FloatingIcons({ side }) {
  const icons = [
    { src: "/skills/React.svg", size: 55 },
    { src: "/skills/JavaScript.svg", size: 55 },
    { src: "/skills/CSS3.svg", size: 55 },
    { src: "/skills/HTML5.svg", size: 55 },
  ]

  return (
    <div className="flex flex-col gap-10 opacity-40">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
          className="mx-auto"
        >
          <Image
            src={icon.src || "/placeholder.svg"}
            width={icon.size}
            height={icon.size}
            alt="floating-icon"
            className="opacity-60 dark:invert-0"
          />
        </motion.div>
      ))}
    </div>
  )
}
