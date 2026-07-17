import { motion } from 'motion/react';
import { Award, Flame, Coins, Zap, Smile, Wifi, Armchair, Leaf } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Beans',
      desc: '100% hand-picked single-origin specialty grade coffee beans with scores above 84+ on the SCAA scale.'
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Freshly Roasted',
      desc: 'Roasted in-house weekly in small batches by our certified roastmasters to ensure peak freshness and aroma.'
    },
    {
      icon: <Coins className="w-6 h-6" />,
      title: 'Affordable Premium',
      desc: 'Exceptional specialty-grade taste priced transparently and accessibly to enrich daily community lifestyles.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast & Precise Service',
      desc: 'Speedy preparation utilizing premium machines and certified baristas who respect extraction times.'
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: 'Friendly Staff',
      desc: 'Warm, hospitable, and knowledgeable Indonesian baristas who love guiding coffee exploration journeys.'
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Free High-Speed Wi-Fi',
      desc: 'Reliable, lightning-fast fiber optic connections perfect for remote working, studying, or virtual streaming.'
    },
    {
      icon: <Armchair className="w-6 h-6" />,
      title: 'Comfortable Place',
      desc: 'Minimalist, air-conditioned, and beautifully green interior styled with comfortable ergonomic seating.'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Eco-Friendly & Green',
      desc: 'Biodegradable sugarcane straws, custom paper cups, and fully compostable ground-refuse initiatives.'
    }
  ];

  return (
    <section
      id="features"
      className="py-24 bg-[#FAF7F2] dark:bg-[#1C140E] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#C8A165]/5 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-display font-semibold tracking-wider text-[#C8A165] uppercase"
          >
            Crafted with Care, Served with Passion
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Why Choose Kopi Nusantara
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        {/* Features Bento/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-6 bg-white dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
            >
              {/* Subtle top color bar */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-[#6F4E37] to-[#C8A165] group-hover:w-full transition-all duration-300"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-premium bg-[#6F4E37]/5 dark:bg-[#C8A165]/10 text-[#6F4E37] dark:text-[#C8A165] flex items-center justify-center mb-5 group-hover:bg-[#6F4E37] group-hover:text-white transition-all duration-300 shadow-inner">
                {item.icon}
              </div>

              {/* Typography */}
              <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-[#FAF7F2] mb-2 group-hover:text-[#6F4E37] dark:group-hover:text-[#C8A165] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
