"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartTotal, cartCount } = useCart();

  const upsellProducts = [
    {
      id: "upsell-1",
      name: "Premium Lens Cleaning Kit",
      price: 15.00,
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: "upsell-2",
      name: "Leather Hard Case",
      price: 25.00,
      image: "https://images.unsplash.com/photo-1621319225732-ee27784f18d7?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-zinc-950 z-50 shadow-2xl flex flex-col border-l border-zinc-200 dark:border-zinc-800"
          >
            <div className="px-6 py-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">Your Cart ({cartCount})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500 dark:text-zinc-400"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-40 flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 space-y-4">
                    <ShoppingBag size={48} strokeWidth={1} />
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-24 h-24 bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden shrink-0">
                        <Image src={item.image} fill alt={item.name} className="object-cover" unoptimized />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-medium text-zinc-900 dark:text-white">{item.name}</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.category}</p>
                          </div>
                          <span className="font-semibold text-zinc-900 dark:text-white">${item.price * item.quantity}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 dark:text-zinc-400"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center text-zinc-900 dark:text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors text-zinc-500 dark:text-zinc-400"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="px-6 pb-6">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">You might also like</h3>
                  <div className="space-y-4">
                    {upsellProducts.map(product => (
                      <div key={product.id} className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900 p-3 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <div className="relative w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden shrink-0">
                          <Image src={product.image} fill alt={product.name} className="object-cover" unoptimized />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-zinc-900 dark:text-white">{product.name}</h4>
                          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-300">${product.price.toFixed(2)}</span>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center shrink-0 hover:scale-105 transition-transform">
                          <Plus size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 space-y-4 bg-zinc-50 dark:bg-[#09090b]">
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500 dark:text-zinc-400">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-zinc-900 dark:text-white">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Link 
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
