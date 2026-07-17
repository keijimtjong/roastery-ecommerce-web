import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Coffee, ShoppingCart, Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  cartCount: number;
  onCartClick: () => void;
  activeSection: string;
}

export default function Header({
  darkMode,
  setDarkMode,
  cartCount,
  onCartClick,
  activeSection
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Our Process', href: '#process' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of the sticky header
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

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 dark:bg-[#1C140E]/90 backdrop-blur-md shadow-md py-3 border-b border-[#C8A165]/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Kopi Nusantara Home"
          >
            <div className="w-10 h-10 bg-[#6F4E37] text-white rounded-full transition-all duration-300 group-hover:scale-105 shadow-md shadow-[#6F4E37]/10 flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tighter text-[#6F4E37] dark:text-[#FAF7F2]">
              KOPI <span className="text-[#C8A165]">NUSANTARA</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-sm font-medium rounded-premium transition-all duration-300 ${
                    isActive
                      ? 'bg-[#6F4E37]/10 dark:bg-[#C8A165]/15 text-[#6F4E37] dark:text-[#C8A165]'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-[#FAF7F2]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle, Cart, Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-premium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
              aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            {/* Shopping Cart button */}
            <button
              onClick={onCartClick}
              className="relative p-2 rounded-premium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#6F4E37] text-[10px] font-bold text-white shadow-sm ring-2 ring-[#FAF7F2] dark:ring-[#1C140E]"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-premium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-[#FAF7F2] dark:bg-[#1C140E] shadow-2xl p-6 pt-24 flex flex-col justify-between border-l border-[#C8A165]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1.5 overflow-y-auto">
                <span className="text-xs font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-3">
                  Menu Navigation
                </span>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-premium font-display text-base font-semibold transition-all ${
                        isActive
                          ? 'bg-[#6F4E37] text-[#FAF7F2] shadow-md shadow-[#6F4E37]/10'
                          : 'text-[#2C2C2C] dark:text-gray-200 hover:bg-[#6F4E37]/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className={`w-1.5 h-1.5 rounded-full bg-current ${isActive ? 'opacity-100' : 'opacity-0'}`}></span>
                    </a>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 bg-[#6F4E37]/5 dark:bg-white/5 p-4 rounded-premium">
                  <div className="w-10 h-10 rounded-full bg-[#C8A165]/20 flex items-center justify-center text-[#C8A165]">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-[#FAF7F2]">Kopi Nusantara</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Authentic Indonesian Brew</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
