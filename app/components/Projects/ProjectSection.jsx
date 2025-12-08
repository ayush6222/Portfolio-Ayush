"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContentStore } from "../../store/useContentStore";
import GalleryModal from "./GalleryModal";

export default function ProjectSection() {
  const projects = useContentStore((s) => s.projects);

  const [openGallery, setOpenGallery] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0);
    setOpenGallery(true);
  };

  const closeModal = () => {
    setOpenGallery(false);
  };

  return (
    <>
      <div className="space-y-14">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="
              group bg-white dark:bg-black 
              rounded-xl 
              shadow-md hover:shadow-2xl 
              transition-all 
              border border-transparent hover:border-black dark:hover:border-white
              p-6
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={project.mainImage}
                    alt={project.name}
                    width={900}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  {project.logo && (
                    <Image
                      src={project.logo}
                      alt={project.name + " logo"}
                      width={40}
                      height={40}
                      className="rounded-md object-contain"
                    />
                  )}

                  <h2 className="text-2xl font-bold text-black dark:text-white">
                    {project.name}
                  </h2>
                </div>

                <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 text-sm 
                        rounded-full 
                        bg-black text-white dark:bg-white dark:text-black
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 mt-8">
                  {project.liveLink?.trim()?.length > 0 && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="
                      border-b-2 border-black dark:border-white 
                      pb-1 text-black dark:text-white 
                      hover:opacity-70
                    "
                    >
                      LIVE DEMO
                    </a>
                  )}

                  <button
                    onClick={() => openModal(project.images)}
                    className="
                      border-b-2 border-black dark:border-white 
                      pb-1 text-black dark:text-white 
                      hover:opacity-70 flex gap-1
                    "
                  >
                    VIEW GALLERY →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryModal
        images={currentImages}
        isOpen={openGallery}
        onClose={closeModal}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </>
  );
}
