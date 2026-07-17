import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data';
import { Product } from '../types';
import { Star, ShoppingCart, Info, Check, X, MapPin } from 'lucide-react';

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Menu' },
    { id: 'coffee-beans', label: 'Coffee Beans' },
    { id: 'espresso', label: 'Espresso Drinks' },
    { id: 'manual-brew', label: 'Manual Brew' },
    { id: 'cold-brew', label: 'Cold Brew' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 1500);
  };

  return (
    <section
      id="menu"
      className="py-24 bg-white dark:bg-[#281D14]/20 relative overflow-hidden"
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
            Handcrafted with Artisanal Passion
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Explore Our Curated Menu
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Categories Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-semibold transition-all duration-300 focus:outline-none cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#6F4E37] text-[#FAF7F2] shadow-md shadow-[#6F4E37]/15 scale-105'
                  : 'bg-[#FAF7F2] dark:bg-[#281D14] text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800 hover:bg-[#6F4E37]/5 dark:hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => setActiveProduct(product)}
                className="bg-[#FAF7F2] dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                {/* Product Image and Badges */}
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/30 via-transparent to-transparent"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 dark:bg-[#1C140E]/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm border border-[#C8A165]/10">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-[11px] font-bold text-gray-900 dark:text-[#FAF7F2]">{product.rating}</span>
                  </div>

                  {/* Origin Badge */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-semibold drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#C8A165]" />
                    <span>{product.origin}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#C8A165] uppercase tracking-widest">
                      {product.category.replace('-', ' ')}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-[#FAF7F2] mt-1 mb-2 group-hover:text-[#6F4E37] dark:group-hover:text-[#C8A165] transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer (Price & CTA) */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-800">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">Price</span>
                      <span className="font-display font-extrabold text-base text-[#6F4E37] dark:text-[#C8A165]">
                        {formatRupiah(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Info Icon Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProduct(product);
                        }}
                        className="p-2 rounded-premium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all focus:outline-none"
                        aria-label="View product details"
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`p-2.5 rounded-premium font-display font-bold text-sm transition-all flex items-center justify-center focus:outline-none ${
                          addedProductId === product.id
                            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                            : 'bg-[#6F4E37] text-white hover:bg-[#5C402E] shadow-md shadow-[#6F4E37]/10 hover:shadow-lg'
                        }`}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        {addedProductId === product.id ? (
                          <Check className="w-4 h-4 animate-bounce" />
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Lightbox Modal */}
        <AnimatePresence>
          {activeProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProduct(null)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FAF7F2] dark:bg-[#1C140E] rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl relative border border-[#C8A165]/20 max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 text-[#FAF7F2] hover:bg-black/60 hover:scale-105 transition-all focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Left Column (Image) */}
                  <div className="relative aspect-square md:h-full min-h-[300px]">
                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Origin Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white font-semibold">
                      <MapPin className="w-4 h-4 text-[#C8A165]" />
                      <span className="text-sm">{activeProduct.origin}</span>
                    </div>
                  </div>

                  {/* Right Column (Content) */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Category and Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold text-[#C8A165] uppercase tracking-widest bg-[#C8A165]/10 dark:bg-[#C8A165]/15 px-2.5 py-1 rounded-full">
                          {activeProduct.category.replace('-', ' ')}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-bold text-gray-900 dark:text-[#FAF7F2]">{activeProduct.rating}</span>
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-[#FAF7F2] mb-3">
                        {activeProduct.name}
                      </h3>

                      {/* Roast Level if applicable */}
                      {activeProduct.roastLevel && (
                        <div className="text-xs mb-4 text-gray-500 dark:text-gray-400">
                          <span className="font-bold uppercase tracking-wider text-gray-400">Roast Profile: </span>
                          <span className="font-semibold text-[#6F4E37] dark:text-[#C8A165]">{activeProduct.roastLevel}</span>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {activeProduct.description}
                      </p>

                      {/* Taste Notes */}
                      {activeProduct.notes && (
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">Taste Aromas</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {activeProduct.notes.map((note, index) => (
                              <span
                                key={index}
                                className="text-[11px] font-semibold bg-[#6F4E37]/5 dark:bg-white/5 border border-[#C8A165]/15 text-[#6F4E37] dark:text-[#C8A165] px-2.5 py-1 rounded-full"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA & Price */}
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">Total Price</span>
                        <span className="font-display font-extrabold text-xl text-[#6F4E37] dark:text-[#C8A165]">
                          {formatRupiah(activeProduct.price)}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          handleAddToCart(activeProduct, e);
                          setActiveProduct(null);
                        }}
                        className="px-6 py-3 bg-[#6F4E37] text-white rounded-premium font-display font-bold text-sm transition-all hover:bg-[#5C402E] shadow-md shadow-[#6F4E37]/15 flex items-center gap-2 cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add To Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
