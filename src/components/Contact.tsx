import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, Instagram, Facebook, CalendarDays } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reservationDate: '',
    reservationTime: '',
    guests: '2'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'message' | 'reservation'>('message');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        reservationDate: '',
        reservationTime: '',
        guests: '2'
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#FAF7F2] dark:bg-[#1C140E] relative overflow-hidden"
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
            Visit Our Roastery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-[#FAF7F2] mt-2 mb-4"
          >
            Connect With Kopi Nusantara
          </motion.h2>
          <div className="w-16 h-1 bg-[#6F4E37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Details & Google Maps */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 bg-white dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-md space-y-6">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-[#FAF7F2] border-b border-gray-100 dark:border-gray-800 pb-3">
                Cafe & Roastery Info
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-4 items-start text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2.5 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white">Physical Address</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Jl. Kelapa Dua No. 45, Kebon Jeruk,<br />
                      Jakarta Barat, DKI Jakarta, 11550
                    </p>
                  </div>
                </div>

                {/* WhatsApp & Phone */}
                <div className="flex gap-4 items-start text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2.5 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white">Phone & WhatsApp</h4>
                    <a
                      href="https://wa.me/6281234567890?text=Hi%20Kopi%20Nusantara,%20I'd%20like%20to%20ask%20about%20your%20single-origin%20beans!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 block text-[#6F4E37] dark:text-[#C8A165] font-semibold hover:underline"
                    >
                      +62 812-3456-7890 (Main Office)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2.5 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white">Email Address</h4>
                    <a
                      href="mailto:hello@kopinusantara.com"
                      className="mt-0.5 block text-[#6F4E37] dark:text-[#C8A165] font-semibold hover:underline"
                    >
                      hello@kopinusantara.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start text-sm text-gray-600 dark:text-gray-300">
                  <div className="p-2.5 bg-[#6F4E37]/10 text-[#6F4E37] dark:text-[#C8A165] rounded-premium h-fit mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 dark:text-white">Business Hours</h4>
                    <p className="mt-0.5 leading-relaxed">
                      Monday – Sunday<br />
                      08:00 AM – 10:00 PM (GMT+7)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels buttons */}
              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-start gap-3">
                <a
                  href="https://instagram.com/kopinusantara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-premium hover:bg-[#6F4E37] hover:text-white transition-all shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/kopinusantara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-premium hover:bg-[#6F4E37] hover:text-white transition-all shadow-sm"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@kopinusantara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-premium hover:bg-[#6F4E37] hover:text-white transition-all shadow-sm flex items-center justify-center font-display font-bold text-xs"
                  aria-label="TikTok Account"
                >
                  <span className="leading-none text-sm font-black">🎵</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="rounded-premium overflow-hidden shadow-md border border-[#C8A165]/10 h-64 relative bg-gray-200">
              <iframe
                title="Google Maps Location for Kopi Nusantara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5768536647996!2d106.77028167571617!3d-6.187340260620977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6fe0e7eefeb%3sJl.+Kelapa+Dua+No.45%2c+Kebon+Jeruk%2c+Jakarta+Barat!5e0!3m2!1sen!2sid!4v1720000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-md relative">
              
              {/* Form Mode Tabs */}
              <div className="flex border-b border-gray-100 dark:border-gray-800 pb-3 mb-6">
                <button
                  onClick={() => {
                    setActiveTab('message');
                    setIsSubmitted(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-display font-bold rounded-premium transition-all cursor-pointer ${
                    activeTab === 'message'
                      ? 'bg-[#6F4E37] text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('reservation');
                    setIsSubmitted(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-display font-bold rounded-premium transition-all cursor-pointer ${
                    activeTab === 'reservation'
                      ? 'bg-[#6F4E37] text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Book Table</span>
                </button>
              </div>

              {/* Success Screen Overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white dark:bg-[#281D14] z-10 flex flex-col items-center justify-center text-center p-8 rounded-premium"
                  >
                    <motion.div
                      initial={{ scale: 0.8, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-emerald-500 mb-4"
                    >
                      <CheckCircle2 className="w-16 h-16" />
                    </motion.div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900 dark:text-[#FAF7F2] mb-2">
                      {activeTab === 'message' ? 'Thank You For Reaching Out!' : 'Table Reservation Sent!'}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed mb-6">
                      {activeTab === 'message' 
                        ? 'Your message was successfully received. Our hospitality team will contact you back at your email within 24 hours.' 
                        : 'We have registered your booking request. An confirmation text has been prefilled for you or we will email you directly.'}
                    </p>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reservation / Contact Forms */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="form-name" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Full Name</label>
                    <input
                      id="form-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Budi Santoso"
                      className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="form-email" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Email Address</label>
                    <input
                      id="form-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. budi@gmail.com"
                      className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label htmlFor="form-phone" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Phone Number (WhatsApp Active)</label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 081234567890"
                    className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                  />
                </div>

                {/* Mode dependent fields */}
                {activeTab === 'reservation' ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {/* Reservation Date */}
                      <div>
                        <label htmlFor="form-date" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Date</label>
                        <input
                          id="form-date"
                          type="date"
                          name="reservationDate"
                          required={activeTab === 'reservation'}
                          value={formData.reservationDate}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                        />
                      </div>

                      {/* Reservation Time */}
                      <div>
                        <label htmlFor="form-time" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Time</label>
                        <input
                          id="form-time"
                          type="time"
                          name="reservationTime"
                          required={activeTab === 'reservation'}
                          value={formData.reservationTime}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label htmlFor="form-guests" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Guests</label>
                        <select
                          id="form-guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People</option>
                          <option value="3">3 People</option>
                          <option value="4">4 People</option>
                          <option value="5">5 People</option>
                          <option value="6+">6+ People (Group)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* Message / Special Request */}
                <div>
                  <label htmlFor="form-msg" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">
                    {activeTab === 'message' ? 'Message & Question' : 'Special Table Request (Optional)'}
                  </label>
                  <textarea
                    id="form-msg"
                    name="message"
                    required={activeTab === 'message'}
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      activeTab === 'message'
                        ? "Hi Kopi Nusantara! I'd like to ask if you offer custom coffee grinding parameters..."
                        : "e.g. We would prefer a quiet window seat with a power outlet for laptop work..."
                    }
                    className="w-full p-3 bg-gray-50 dark:bg-[#1C140E] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors resize-none dark:text-white"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#6F4E37] text-white rounded-premium font-display font-semibold text-sm hover:bg-[#5C402E] transition-colors shadow-md shadow-[#6F4E37]/10 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {activeTab === 'message' ? 'Send Message Now' : 'Confirm Table Reservation'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
