"use client";

import { motion } from "framer-motion";
import { useContentStore } from "../store/useContentStore";
import Image from "next/image";

export default function Footer() {
  const socialLinks = useContentStore((s) => s.socialLinks);

  const filteredLinks = socialLinks.filter((item) =>
    ["linkedin", "mail"].includes(item.id)
  );

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        w-full pt-0 pb-10 
        bg-black text-white 
        dark:bg-[#f2f2f2] dark:text-black
        transition-colors duration-300
        flex flex-col items-center
      "
    >


      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex flex-col items-center hover:opacity-70 transition mb-4"
      >
        <span className="text-lg">⌃</span>
        <span className="tracking-widest mt-1 text-xs">BACK TO TOP</span>
      </button>
      <div className="flex gap-6 mt-1">
        {filteredLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:opacity-60"
          >
            <Image
              src={link.icon}
              alt={link.label}
              width={26}
              height={26}
              className="
                brightness-100 invert
                dark:brightness-0 dark:invert-0
                transition
              "
            />
          </a>
        ))}
      </div>

      <p className="text-xs mt-3 tracking-wide text-gray-400 dark:text-gray-600">
        © {new Date().getFullYear()} Ayush Jaiswal — All Rights Reserved.
      </p>
    </motion.footer>
  );
}
