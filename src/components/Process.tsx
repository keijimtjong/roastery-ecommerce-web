import { motion } from 'motion/react';
import { processSteps } from '../data';
import { Sprout, Flame, Package, CupSoda } from 'lucide-react';

export default function Process() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sprout':
        return <Sprout className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Package':
        return <Package className="w-6 h-6" />;
      case 'CupSoda':
        return <CupSoda className="w-6 h-6" />;
      default:
        return <CupSoda className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="process"
      className="py-24 bg-white dark:bg-[#281D14]/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            Sourced Ethically, Prepared Masterfully
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            The Farmer-to-Cup Journey
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Central Line on desktop, Left Line on mobile */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6F4E37] via-[#C8A165] to-[#6F4E37]/10 -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge (Circle on the line) */}
                  <div className="absolute left-[23px] md:left-1/2 top-0 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="w-12 h-12 rounded-full bg-[#6F4E37] text-[#FAF7F2] dark:bg-[#C8A165] dark:text-gray-900 flex items-center justify-center font-display font-bold text-base shadow-lg border-4 border-[#FAF7F2] dark:border-[#1C140E]"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Content Panel */}
                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6, type: 'spring', damping: 20 }}
                      className="p-6 sm:p-8 bg-[#FAF7F2] dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-sm flex flex-col sm:flex-row gap-5 items-start"
                    >
                      {/* Thumbnail Image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-premium overflow-hidden shrink-0 shadow-inner border border-[#C8A165]/10">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Text */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#6F4E37] dark:text-[#C8A165]">
                          {getIcon(step.iconName)}
                          <span className="text-xs font-bold uppercase tracking-wider">Step 0{step.step}</span>
                        </div>
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-gray-900 dark:text-[#FAF7F2]">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacing for layout alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
