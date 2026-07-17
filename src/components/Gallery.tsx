import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'atmosphere', label: 'Cafe Vibe' },
    { id: 'brewing', label: 'Barista Craft' },
    { id: 'beans', label: 'Coffee Beans' },
    { id: 'pastries', label: 'Pastries' }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (item: GalleryItem) => {
    const globalIndex = galleryItems.findIndex(g => g.id === item.id);
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1;
      setLightboxIndex(nextIndex);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIndex = lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1;
      setLightboxIndex(nextIndex);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-[#FAF7F2] dark:bg-[#1C140E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            An Eye for Detail, A Heart for Comfort
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Our Gallery & Atmosphere
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 cursor-pointer focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-[#C8A165] text-gray-900 shadow-md scale-105'
                  : 'bg-white dark:bg-[#281D14] text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800 hover:bg-[#C8A165]/10 dark:hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* True Masonry Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(item)}
                className="break-inside-avoid relative rounded-premium overflow-hidden group shadow-sm hover:shadow-xl border border-[#C8A165]/10 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover rounded-premium transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                  <div className="p-2 bg-white/20 backdrop-blur-md text-white rounded-full w-fit self-end mb-auto hover:scale-110 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#C8A165] font-extrabold uppercase tracking-widest bg-[#C8A165]/10 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-display font-bold text-white mt-1.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Slider Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image & Caption Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full flex flex-col items-center"
              >
                <div className="relative rounded-[20px] overflow-hidden max-h-[75vh] border border-white/10 shadow-2xl">
                  <img
                    src={galleryItems[lightboxIndex].image}
                    alt={galleryItems[lightboxIndex].title}
                    className="max-w-full h-auto max-h-[75vh] object-contain"
                  />
                </div>

                {/* Caption text */}
                <div className="text-center mt-5 text-white max-w-lg">
                  <span className="text-xs font-bold text-[#C8A165] uppercase tracking-widest">
                    {galleryItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-display font-bold text-lg mt-1">
                    {galleryItems[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2">
                    Image {lightboxIndex + 1} of {galleryItems.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
