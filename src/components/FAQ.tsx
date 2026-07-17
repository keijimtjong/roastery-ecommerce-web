import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQs } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-white dark:bg-[#281D14]/20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            Got Questions? We Have Answers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {FAQs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-premium border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F2] dark:bg-[#281D14] border-[#C8A165]/40 shadow-md'
                    : 'bg-white dark:bg-[#281D14]/40 border-gray-200 dark:border-gray-800 hover:border-gray-300'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <div className="p-1.5 rounded-premium bg-[#6F4E37]/10 dark:bg-[#C8A165]/10 text-[#6F4E37] dark:text-[#C8A165] mt-0.5 shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#C8A165] uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="font-display font-extrabold text-sm sm:text-base text-gray-900 dark:text-[#FAF7F2] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Rotating Chevron */}
                  <div
                    className={`p-1 text-gray-400 dark:text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#6F4E37] dark:text-[#C8A165]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {/* Animated Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pl-[56px] text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200/40 dark:border-gray-800/40 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
