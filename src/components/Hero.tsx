import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ArrowRight, Star, ShoppingBag, Leaf, Plus } from 'lucide-react';
import { products } from '../data';
import { Product } from '../types';

interface HeroProps {
  onOrderNowClick: () => void;
  onViewMenuClick: () => void;
  onAddToCart?: (product: Product) => void;
}

export default function Hero({ onOrderNowClick, onViewMenuClick, onAddToCart }: HeroProps) {
  const gayoProduct = products.find(p => p.id === 'prod-gayo-arabica') || products[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(gayoProduct);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#FAF7F2]/40 dark:from-[#1C140E] dark:via-[#1C140E] dark:to-[#1C140E]/40"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#6F4E37]/5 dark:bg-[#6F4E37]/10 rounded-full blur-3xl -z-10 animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C8A165]/5 dark:bg-[#C8A165]/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>

      {/* Floating Coffee Beans / Leaves Animation (Micro-interactions) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-[10%] text-[#C8A165]/20 dark:text-[#C8A165]/10 hidden md:block"
        >
          <Coffee className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[15%] text-[#6F4E37]/20 dark:text-[#6F4E37]/10 hidden md:block"
        >
          <Leaf className="w-6 h-6" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[#C8A165] font-semibold tracking-widest uppercase text-xs w-fit mx-auto lg:mx-0 mb-6"
          >
            <span className="w-8 h-[1px] bg-[#C8A165]"></span>
            Premium Indonesian Origin
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#6F4E37] dark:text-[#FAF7F2] mb-6"
          >
            Authentic <br />Indonesian <br />
            <span className="text-[#C8A165]">Coffee</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Freshly roasted beans from local farmers with premium quality. Experience the soul of the archipelago in every single drop.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={onOrderNowClick}
              className="w-full sm:w-auto px-8 py-4 bg-[#6F4E37] text-white font-bold rounded-premium flex items-center justify-center gap-3 transition-transform duration-300 hover:scale-[1.03] shadow-lg shadow-[#6F4E37]/20 hover:shadow-xl hover:shadow-[#6F4E37]/30 cursor-pointer"
            >
              <span>View Menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={onViewMenuClick}
              className="w-full sm:w-auto px-8 py-4 border-2 border-[#6F4E37]/20 text-[#6F4E37] dark:text-[#C8A165] font-bold rounded-premium hover:bg-white dark:hover:bg-[#281D14] transition-colors cursor-pointer flex items-center justify-center"
            >
              <span>Our Story</span>
            </button>
          </motion.div>

          {/* Inline mini reviews or trust factors */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 pt-8 border-t border-[#C8A165]/10 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg mx-auto lg:mx-0"
          >
            <div className="p-4 rounded-premium bg-white dark:bg-[#281D14] shadow-sm border border-[#6F4E37]/5 dark:border-white/5">
              <div className="text-xl sm:text-2xl font-bold text-[#6F4E37] dark:text-[#C8A165]">5000+</div>
              <div className="text-[10px] uppercase tracking-wider text-[#2C2C2C]/50 dark:text-gray-400">Happy Customers</div>
            </div>
            <div className="p-4 rounded-premium bg-white dark:bg-[#281D14] shadow-sm border border-[#6F4E37]/5 dark:border-white/5">
              <div className="text-xl sm:text-2xl font-bold text-[#6F4E37] dark:text-[#C8A165]">4.9★</div>
              <div className="text-[10px] uppercase tracking-wider text-[#2C2C2C]/50 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="p-4 rounded-premium bg-white dark:bg-[#281D14] shadow-sm border border-[#6F4E37]/5 dark:border-white/5">
              <div className="text-xl sm:text-2xl font-bold text-[#6F4E37] dark:text-[#C8A165]">150+</div>
              <div className="text-[10px] uppercase tracking-wider text-[#2C2C2C]/50 dark:text-gray-400">Daily Sales</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Right Media */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', damping: 20 }}
            className="relative w-full max-w-[450px]"
          >
            {/* Soft background rotating circles */}
            <div className="absolute inset-4 rounded-full border-2 border-[#C8A165]/20 dark:border-[#C8A165]/10 -z-10 animate-spin" style={{ animationDuration: '45s' }}></div>

            {/* Main Interactive Card Container */}
            <div className="w-full aspect-[4/5] bg-[#6F4E37] rounded-premium overflow-hidden relative shadow-2xl group border border-[#C8A165]/20">
              {/* Image backdrop with zoom */}
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                alt="Authentic Indonesian Arabica Gayo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/20"></div>

              {/* Wireframe Rotating Circles (Aesthetic detailing) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[500px] h-[500px] rounded-full border border-white/30 rotate-45 animate-spin" style={{ animationDuration: '60s' }}></div>
                <div className="absolute w-[400px] h-[400px] rounded-full border border-white/20 -rotate-12 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }}></div>
              </div>

              {/* Top rotating background text (Aesthetic flair) */}
              <div className="absolute top-10 right-[-30px] rotate-90 select-none pointer-events-none">
                <span className="text-[80px] font-black text-white/5 whitespace-nowrap tracking-tighter">FRESH ROASTED</span>
              </div>

              {/* Bottom Glass Card Info overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-premium text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold font-display">Arabica Gayo</h3>
                    <p className="text-xs text-white/80 italic">Takengon, Aceh Gayo</p>
                  </div>
                  <span className="px-3 py-1 bg-[#C8A165] rounded-full text-[10px] font-bold text-gray-900 shadow-sm">NEW</span>
                </div>
                <p className="text-[11px] leading-relaxed opacity-90 mb-4 font-sans line-clamp-2">
                  Exquisite floral notes with a medium body and chocolate undertones. Locally sourced and hand-picked.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold font-display">Rp 95.000</span>
                  <button
                    onClick={handleQuickAdd}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-gray-900 font-bold shadow-md hover:bg-[#C8A165] hover:text-white transition-all cursor-pointer focus:outline-none"
                    aria-label="Quick add Arabica Gayo to cart"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* EST 2018 Top-Left Floating Badge */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C8A165] rounded-full flex flex-col items-center justify-center text-[#6F4E37] border-4 border-[#FAF7F2] dark:border-[#1C140E] shadow-xl">
              <span className="text-[10px] font-extrabold leading-none tracking-wider font-display uppercase">EST.</span>
              <span className="text-lg font-black font-display tracking-tighter">2018</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
