import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, Send, Check, Heart, Mail, Shield, ShieldAlert } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2C2C] dark:bg-[#150E09] text-gray-300 pt-20 pb-10 relative overflow-hidden border-t border-[#C8A165]/10">
      {/* Background soft lighting overlay */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C8A165]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5 pb-16">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center gap-2">
            <div className="p-2.5 bg-[#C8A165] text-gray-900 rounded-premium">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-[#FAF7F2]">
              Kopi <span className="text-[#C8A165]">Nusantara</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting premium single-origin coffee sourced directly and ethically from family-owned smallholder plantations across the magnificent Indonesian archipelago.
          </p>
          <div className="text-xs text-gray-500">
            <p>Sourced Sifiably. Roasted In-house. Served Fresh.</p>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About Us', href: '#about' },
              { label: 'Why Us', href: '#features' },
              { label: 'Our Process', href: '#process' },
              { label: 'Menu', href: '#menu' },
              { label: 'Reviews', href: '#reviews' },
              { label: 'Blog', href: '#blog' },
              { label: 'FAQ', href: '#faq' }
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-[#C8A165] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
            Our Offerings
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Aceh Gayo Arabica Beans
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Bali Kintamani Arabica Beans
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Sulawesi Toraja Arabica Beans
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Lampung Gold Robusta Beans
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Signature 18-Hour Cold Brew
              </a>
            </li>
            <li>
              <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('#menu'); }} className="hover:text-[#C8A165] transition-colors">
                Espresso & Latte Selection
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-display font-bold text-sm text-white uppercase tracking-widest">
            Newsletter
          </h4>
          <p className="text-sm text-gray-400 leading-normal">
            Subscribe to receive expert coffee tips, brewing guides, and exclusive roasting discounts.
          </p>

          <form onSubmit={handleSubscribe} className="relative mt-2">
            <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-premium relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-transparent w-full px-3 text-sm focus:outline-none text-white placeholder-gray-500"
                aria-label="Email address for newsletter"
                disabled={subscribed}
              />
              <button
                type="submit"
                disabled={subscribed}
                className={`p-3 rounded-premium flex items-center justify-center transition-all focus:outline-none ${
                  subscribed
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#C8A165] hover:bg-[#b89053] text-gray-900 hover:scale-105'
                }`}
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>

            <AnimatePresence>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1 top-full mt-2 text-xs text-emerald-400 font-semibold"
                >
                  ✓ Subscribed! Check your inbox soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>

      {/* Sub-Footer: Legal & Credits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-6">
        <p className="order-2 sm:order-1 flex items-center gap-1">
          <span>&copy; {currentYear} Kopi Nusantara. All rights reserved.</span>
          <span className="text-red-500/60">
            <Heart className="w-3.5 h-3.5 fill-current inline" />
          </span>
          <span>Crafted for Indonesian UMKM MSMEs.</span>
        </p>

        {/* Legal links */}
        <div className="order-1 sm:order-2 flex items-center gap-6 text-gray-500">
          <a href="#privacy" className="hover:text-gray-300 transition-colors flex items-center gap-1">
            <Shield className="w-3 h-3" />
            <span>Privacy Policy</span>
          </a>
          <a href="#terms" className="hover:text-gray-300 transition-colors flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" />
            <span>Terms of Service</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
