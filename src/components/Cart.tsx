import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, MessageSquare, Send, ShoppingBag } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Cart({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}: CartProps) {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [checkoutNotes, setCheckoutNotes] = useState('');
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  };

  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerAddress.trim()) {
      return;
    }

    const subtotal = calculateSubtotal();
    const invoiceNumber = `KN-${Math.floor(100000 + Math.random() * 900000)}`;
    const timestamp = new Date().toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Build WhatsApp Message
    let text = `*☕ INVOICE ORDER - KOPI NUSANTARA ☕*\n`;
    text += `==================================\n`;
    text += `*Invoice:* ${invoiceNumber}\n`;
    text += `*Tanggal:* ${timestamp}\n\n`;
    text += `*Pelanggan:* ${customerName.trim()}\n`;
    text += `*Alamat Kirim:* ${customerAddress.trim()}\n`;
    if (checkoutNotes.trim()) {
      text += `*Catatan:* ${checkoutNotes.trim()}\n`;
    }
    text += `==================================\n\n`;
    text += `*DETAIL PESANAN:*\n`;

    cartItems.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   Qty: ${item.quantity} x ${formatRupiah(item.product.price)}\n`;
      text += `   Subtotal: *${formatRupiah(item.product.price * item.quantity)}*\n\n`;
    });

    text += `==================================\n`;
    text += `*TOTAL PEMBAYARAN:* *${formatRupiah(subtotal)}*\n`;
    text += `==================================\n\n`;
    text += `_Mohon kirimkan koordinat Share-Location WA Anda jika perlu._\n`;
    text += `_Terima kasih atas pesanan Anda di Kopi Nusantara! Our staff will calculate the delivery fee and share bank transfer details immediately._`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/6281234567890?text=${encodedText}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#FAF7F2] dark:bg-[#1C140E] shadow-2xl z-50 flex flex-col justify-between border-l border-[#C8A165]/10"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200/50 dark:border-gray-800 flex items-center justify-between bg-[#6F4E37]/5 dark:bg-white/5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#6F4E37] dark:text-[#C8A165]" />
                <h3 className="font-display font-extrabold text-lg text-gray-900 dark:text-[#FAF7F2]">
                  Your Coffee Cart
                </h3>
                <span className="text-xs bg-[#6F4E37] text-white px-2 py-0.5 rounded-full font-bold">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-premium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-20 space-y-4 h-full">
                  <div className="w-16 h-16 rounded-full bg-[#6F4E37]/5 flex items-center justify-center text-[#6F4E37]">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-gray-900 dark:text-white">Your cart is empty</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-[220px]">
                      Add fresh beans or delicious brews from our menu to get started!
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="mt-2 px-5 py-2.5 bg-[#6F4E37] text-white rounded-premium text-xs font-display font-bold hover:bg-[#5C402E] transition-all cursor-pointer"
                  >
                    Start Browsing
                  </button>
                </div>
              ) : !showCheckoutForm ? (
                /* Item list mode */
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 bg-white dark:bg-[#281D14] border border-[#C8A165]/10 rounded-premium shadow-sm relative group overflow-hidden"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-premium overflow-hidden shrink-0 border border-gray-100 dark:border-gray-800 bg-gray-50">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-display font-bold text-sm text-gray-900 dark:text-white line-clamp-1">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-400 hover:text-red-500 p-1 rounded-premium transition-colors"
                              aria-label={`Remove ${item.product.name} from cart`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500 block">
                            {item.product.origin}
                          </span>
                        </div>

                        {/* Quantity and sub-total actions */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 dark:border-gray-800/40">
                          <span className="font-display font-extrabold text-sm text-[#6F4E37] dark:text-[#C8A165]">
                            {formatRupiah(item.product.price)}
                          </span>

                          <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-premium bg-gray-50 dark:bg-gray-900 overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus:outline-none"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="px-3 text-xs font-bold text-gray-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus:outline-none"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Delivery Address Checkout Form */
                <form id="checkout-form" onSubmit={handleWhatsAppCheckout} className="space-y-4 pt-2">
                  <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-premium text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed mb-4">
                    ☕ <strong>Almost there!</strong> Enter your shipping information below. Clicking submit will directly launch WhatsApp with your prefilled invoice to finalize delivery.
                  </div>

                  <div>
                    <label htmlFor="customer-name" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Your Full Name</label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Budi Santoso"
                      className="w-full p-3 bg-white dark:bg-[#281D14] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors dark:text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="customer-address" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Shipping Delivery Address</label>
                    <textarea
                      id="customer-address"
                      required
                      rows={3}
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="e.g. Perumahan Green Kebon Jeruk Blok C4 No. 12, Kebon Jeruk, Jakarta Barat, 11550"
                      className="w-full p-3 bg-white dark:bg-[#281D14] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors resize-none dark:text-white"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="customer-notes" className="text-xs font-bold text-gray-500 dark:text-gray-400 block mb-1">Special Notes / Grind Sizes (Optional)</label>
                    <textarea
                      id="customer-notes"
                      rows={2}
                      value={checkoutNotes}
                      onChange={(e) => setCheckoutNotes(e.target.value)}
                      placeholder="e.g. Grind Arabica Gayo as Coarse for French Press. Ring doorbell on delivery."
                      className="w-full p-3 bg-white dark:bg-[#281D14] border border-gray-200 dark:border-gray-800 rounded-premium text-sm focus:border-[#C8A165] focus:ring-1 focus:ring-[#C8A165] outline-none transition-colors resize-none dark:text-white"
                    ></textarea>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Actions Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-200/50 dark:border-gray-800 bg-white dark:bg-[#281D14] space-y-4">
                {/* Total Info */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Subtotal Products</span>
                    <span className="font-semibold">{formatRupiah(calculateSubtotal())}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Shipping Fee</span>
                    <span className="font-semibold text-[#6F4E37] dark:text-[#C8A165] italic text-[11px]">Calculated on WA</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-800/40">
                    <span className="font-display font-extrabold text-base text-gray-900 dark:text-white">Total Payment</span>
                    <span className="font-display font-black text-lg text-[#6F4E37] dark:text-[#C8A165]">
                      {formatRupiah(calculateSubtotal())}
                    </span>
                  </div>
                </div>

                {/* Checkout CTA */}
                {!showCheckoutForm ? (
                  <button
                    onClick={() => setShowCheckoutForm(true)}
                    className="w-full py-4 bg-[#6F4E37] text-white rounded-premium font-display font-semibold text-sm hover:bg-[#5C402E] transition-all shadow-md shadow-[#6F4E37]/15 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Delivery Info</span>
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setShowCheckoutForm(false)}
                      className="py-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-premium font-display font-bold text-xs hover:bg-gray-200 transition-all cursor-pointer text-center"
                    >
                      Back to Cart
                    </button>
                    <button
                      form="checkout-form"
                      type="submit"
                      className="py-3 bg-emerald-600 text-white rounded-premium font-display font-semibold text-xs hover:bg-emerald-700 transition-all shadow-md shadow-emerald-500/10 hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Place Order (WA)</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
