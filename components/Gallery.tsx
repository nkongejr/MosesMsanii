// components/Gallery.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=85",
    alt: "Dendrocks hairstyle",
    span: "row-span-2",
    category: "Dendrocks",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=85",
    alt: "Natural hair",
    span: "",
    category: "Hair Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&q=85",
    alt: "Hair colour",
    span: "",
    category: "Dye & Colour",
  },
  {
    src: "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=600&q=85",
    alt: "Beauty makeup",
    span: "row-span-2",
    category: "Beauty Touch Ups",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=85",
    alt: "Makeup styling",
    span: "",
    category: "Beauty Touch Ups",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85",
    alt: "Salon vibes",
    span: "",
    category: "Grooming",
  },
  {
    src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=600&q=85",
    alt: "Hair treatment",
    span: "row-span-2",
    category: "Retouch",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=85",
    alt: "Hair salon",
    span: "",
    category: "Hair Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&q=85",
    alt: "Grooming services",
    span: "",
    category: "Grooming",
  },
];

export default function Gallery() {
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headerRef, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/20 to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
              Our Work
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Style <span className="text-gold">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            A showcase of transformations — each look a unique story of
            confidence and artistry.
          </motion.p>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 text-gold/70 hover:text-gold text-sm font-medium transition-colors duration-300 group"
          >
         <FaInstagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            Follow us on Instagram
          </motion.a>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="break-inside-avoid group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div
                className={`relative ${i % 3 === 0 ? "aspect-[3/4]" : i % 5 === 0 ? "aspect-square" : "aspect-[4/5]"}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

                {/* Category badge & zoom icon */}
                <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="self-end">
                    <div className="w-8 h-8 rounded-full glass border border-white/20 flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded-md bg-gold/80 text-black text-[10px] font-bold uppercase tracking-wide">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative z-10 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-gold/50 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-white/60 text-sm">{selectedImage.alt}</span>
                <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-semibold">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}