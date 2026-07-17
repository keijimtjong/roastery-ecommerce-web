import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Users, ShoppingBag, Star, Calendar } from 'lucide-react';

interface StatCounterProps {
  value: number;
  suffix: string;
  duration?: number;
}

function StatCounter({ value, suffix, duration = 1500 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function - easeOutQuad
      const easedProgress = progress * (2 - progress);
      const currentCount = Math.floor(easedProgress * (end - start) + start);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl text-gray-900 dark:text-[#FAF7F2]">
      {count.toLocaleString('id-ID')}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const stats = [
    {
      id: 'stat-customers',
      icon: <Users className="w-5 h-5" />,
      label: 'Happy Customers',
      value: 5000,
      suffix: '+',
      desc: 'Local citizens, students, and tourists who love our brew'
    },
    {
      id: 'stat-beans',
      icon: <ShoppingBag className="w-5 h-5" />,
      label: 'Coffee Cups Sold Daily',
      value: 150,
      suffix: '+',
      desc: 'Freshly brewed and roasted specialty cups served daily'
    },
    {
      id: 'stat-rating',
      icon: <Star className="w-5 h-5" />,
      label: 'Average Rating',
      value: 4.9,
      suffix: '★',
      desc: 'Based on 1,200+ online reviews and Google map listings'
    },
    {
      id: 'stat-experience',
      icon: <Calendar className="w-5 h-5" />,
      label: 'Years Experience',
      value: 5,
      suffix: ' Yrs',
      desc: 'Perfecting the craft of roasting and manual brewing since 2021'
    }
  ];

  return (
    <section
      className="py-16 bg-gradient-to-r from-[#6F4E37] to-[#5C402E] text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A165_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-premium border border-white/10 shadow-lg relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
            >
              {/* Pulsing visual blob behind icon */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#C8A165]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              {/* Icon Container */}
              <div className="w-10 h-10 rounded-premium bg-[#FAF7F2]/10 text-[#C8A165] flex items-center justify-center mb-4 border border-white/10">
                {stat.icon}
              </div>

              {/* Counter Number */}
              <div className="mb-2">
                {stat.id === 'stat-rating' ? (
                  <span className="font-display font-black text-4xl sm:text-5xl text-gray-900 dark:text-[#FAF7F2]">
                    4.9★
                  </span>
                ) : (
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>

              {/* Label & Description */}
              <h3 className="font-display font-extrabold text-base sm:text-lg text-[#FAF7F2] mb-1">
                {stat.label}
              </h3>
              <p className="text-[11px] sm:text-xs text-white/70 max-w-[200px] leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
