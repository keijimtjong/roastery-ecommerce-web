import { motion } from 'motion/react';
import { Eye, Rocket, Leaf, Sprout, Heart, ShieldCheck } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Sprout className="w-5 h-5" />,
      title: 'Farmer Partnerships',
      desc: 'We collaborate directly with over 150 local farming families across the Indonesian archipelago, ensuring ethical trade and fair wages.'
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: 'Ecological Sustainability',
      desc: 'Our beans are shade-grown under native forest canopies, maintaining biodiversity and protecting the volcanic soil.'
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Social Impact',
      desc: 'A percentage of every single bag sold is directly reinvested in rural school supplies and farming equipment.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Direct Trade Sourcing',
      desc: 'We bypass middle-traders entirely. Premium pay goes directly to agricultural families, securing elite microlot quality.'
    }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-[#281D14]/30 relative overflow-hidden"
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
            Sowing Connections, Brewing Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            The Story of Kopi Nusantara
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Media Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="aspect-[3/4] rounded-premium overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=400"
                  alt="Coffee farming in Indonesia"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-premium overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=400"
                  alt="Drying coffee beans"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 pt-8"
            >
              <div className="aspect-square rounded-premium overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400"
                  alt="Fresh roasted beans"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[3/4] rounded-premium overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400"
                  alt="Pouring V60 coffee"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-coffee max-w-none text-gray-600 dark:text-gray-300 space-y-4"
            >
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-[#FAF7F2]">
                An Archipelago of Exceptional Flavors
              </h3>
              <p className="leading-relaxed text-sm sm:text-base">
                Kopi Nusantara was founded in 2021 with a simple yet powerful dream: to bring the authentic, highly diverse flavor profiles of the Indonesian archipelago to coffee lovers while supporting the hard-working agricultural communities behind them. 
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                Our volcanic soils, high equatorial altitudes, and native microclimates yield coffees found nowhere else on earth. By establishing transparent, direct-trade partnerships with local coffee farmers in Aceh Gayo, Bali Kintamani, Toraja, and Lampung, we secure the finest 100% organic beans and pay our farmers premium rates far exceeding Fairtrade requirements.
              </p>
            </motion.div>

            {/* Vision and Mission Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-5 rounded-premium bg-[#FAF7F2] dark:bg-[#281D14] border border-[#C8A165]/10 hover:border-[#C8A165]/20 shadow-sm flex gap-4"
              >
                <div className="p-3 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-gray-900 dark:text-[#FAF7F2] mb-1">Our Vision</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    To establish Indonesian single-origins as the premier global benchmark for specialty coffee while elevating local farmers.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-5 rounded-premium bg-[#FAF7F2] dark:bg-[#281D14] border border-[#C8A165]/10 hover:border-[#C8A165]/20 shadow-sm flex gap-4"
              >
                <div className="p-3 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-gray-900 dark:text-[#FAF7F2] mb-1">Our Mission</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    To source ethically, roast transparently in small batches, and serve masterfully while keeping sustainability at our core.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Direct Sourcing and Highlights Grid */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
              <h4 className="font-display font-bold text-lg text-gray-900 dark:text-[#FAF7F2] mb-4">
                What Sets Our Sourcing Apart
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-1 text-[#C8A165] mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-display font-semibold text-sm text-gray-900 dark:text-[#FAF7F2]">
                        {item.title}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
