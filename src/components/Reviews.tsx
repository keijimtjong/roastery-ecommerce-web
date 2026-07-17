import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { reviews } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextReview = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setInterval(nextReview, 5000);
    }
    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section
      id="reviews"
      className="py-24 bg-white dark:bg-[#281D14]/20 relative overflow-hidden"
    >
      {/* Visual background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#6F4E37]/5 dark:bg-[#6F4E37]/10 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            Loved by the Community
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        {/* Testimonial Slider Wrapper */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative px-6 sm:px-12 py-10 bg-[#FAF7F2] dark:bg-[#281D14] rounded-premium border border-[#C8A165]/10 shadow-lg min-h-[320px] flex flex-col justify-between"
        >
          {/* Big Quote Accent */}
          <div className="absolute top-6 left-6 text-[#C8A165]/10 dark:text-[#C8A165]/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[4]" />
          </div>

          {/* Sliding Content */}
          <div className="relative overflow-hidden flex-1 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-center flex flex-col items-center max-w-2xl"
              >
                {/* Rating Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-display text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed italic font-medium mb-8">
                  "{reviews[activeIndex].text}"
                </p>

                {/* Avatar and Identity */}
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    className="w-12 h-12 rounded-full border-2 border-[#C8A165] shadow-sm object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-gray-900 dark:text-[#FAF7F2]">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-xs text-[#C8A165] font-semibold mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-200/50 dark:border-gray-800">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    activeIndex === index ? 'w-6 bg-[#6F4E37]' : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-1.5">
              <button
                onClick={prevReview}
                className="p-2 bg-white dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-all focus:outline-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 bg-white dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm transition-all focus:outline-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
