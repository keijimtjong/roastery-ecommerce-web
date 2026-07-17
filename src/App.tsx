import { useState, useEffect } from 'react';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import Menu from './components/Menu';
import Statistics from './components/Statistics';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Product, CartItem } from './types';

export default function App() {
  // Theme state (Dark Mode / Light Mode)
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Shopping Cart states
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Active navigation highlight section
  const [activeSection, setActiveSection] = useState<string>('home');

  // Side Effect: Theme application
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Side Effect: Sync Cart with local persistence
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Side Effect: Monitor viewport scrolling to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home', 'about', 'features', 'process', 'menu', 'gallery', 'reviews', 'blog', 'faq', 'contact'
      ];
      
      const scrollPosition = window.scrollY + 120; // offset of navbar + margin

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Quick helper to jump straight to sections
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen transition-colors duration-300 bg-[#FAF7F2] dark:bg-[#1C140E] text-[#2C2C2C] dark:text-gray-100 selection:bg-[#C8A165]/30">
      {/* Search Engine Optimization meta tags and LD-JSON scripts */}
      <SEO />

      {/* Sticky Header Glass Navbar */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOrderNowClick={() => scrollToSection('menu')}
          onViewMenuClick={() => scrollToSection('about')}
          onAddToCart={handleAddToCart}
        />

        {/* About Us Story */}
        <About />

        {/* Why Choose Us */}
        <Features />

        {/* Farmer-to-Cup Illustrated Process */}
        <Process />

        {/* Menu & Store Grid */}
        <Menu onAddToCart={handleAddToCart} />

        {/* Live Counters Stats */}
        <Statistics />

        {/* Masonry Photo Gallery & Lightbox */}
        <Gallery />

        {/* Client Testimonials Slider */}
        <Reviews />

        {/* Coffee Education Blog Posts */}
        <Blog />

        {/* Interactive FAQ Accordions */}
        <FAQ />

        {/* Map & Reservation / Message Form */}
        <Contact />
      </main>

      {/* Translucent Footer */}
      <Footer />

      {/* Right-Side Checkout Shopping Cart Drawer */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
