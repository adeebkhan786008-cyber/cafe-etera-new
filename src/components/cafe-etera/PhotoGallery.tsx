"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  { id: 1, label: "Chai", height: "tall" },
  { id: 2, label: "Bun Maska", height: "short" },
  { id: 3, label: "Ambience", height: "medium" },
  { id: 4, label: "Counter", height: "tall" },
  { id: 5, label: "Burger", height: "short" },
  { id: 6, label: "Evenings at Etera", height: "medium" },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const getHeightClass = (height: string) => {
    switch (height) {
      case "tall":
        return "h-[400px] sm:h-[500px]";
      case "medium":
        return "h-[300px] sm:h-[400px]";
      case "short":
        return "h-[250px] sm:h-[300px]";
      default:
        return "h-[300px] sm:h-[400px]";
    }
  };

  return (
    <>
      <section id="gallery" className="relative bg-[#0D0A07] py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block text-xs font-medium tracking-[0.3em] uppercase text-[#A89070]">
              Gallery
            </span>
            <h2 className="font-serif text-4xl font-medium text-[#F5ECD7] sm:text-5xl">
              Inside <span className="text-[#C9A84C]">Etera</span>
            </h2>
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="break-inside-avoid mb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(image.id)}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${getHeightClass(image.height)} bg-[#2A1F14] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors duration-300`}
                >
                  {/* Placeholder gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2A1F14] via-[#3D2E20] to-[#2A1F14]" />
                  
                  {/* Animated shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C9A84C]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A07]/90 via-[#0D0A07]/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <span className="font-serif text-2xl text-[#F5ECD7]/40 group-hover:text-[#F5ECD7]/70 transition-colors duration-300">
                      {image.label}
                    </span>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/50 transition-colors duration-300" />

                  {/* Label at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#C9A84C] tracking-wide">
                        {image.label}
                      </span>
                      <span className="text-xs text-[#A89070]">View</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 text-[#F5ECD7]/60 hover:text-[#C9A84C] transition-colors rounded-full border border-[#F5ECD7]/10 hover:border-[#C9A84C]/50"
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-6 aspect-[4/3] bg-[#2A1F14] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A1F14] via-[#3D2E20] to-[#2A1F14] flex items-center justify-center">
                <span className="font-serif text-4xl text-[#F5ECD7]/30">
                  {galleryImages.find(img => img.id === selectedImage)?.label}
                </span>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-[#C9A84C]/20" />
            </motion.div>

            {/* Image label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <span className="text-lg font-serif text-[#C9A84C]">
                {galleryImages.find(img => img.id === selectedImage)?.label}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
