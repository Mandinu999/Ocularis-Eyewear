"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/CartContext";

export default function CartSidebar() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartTotal, cartCount } = useCart();

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
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="px-6 py-6 border-b border-zinc-100 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your Cart ({cartCount})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-400 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Your cart is empty.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-24 h-24 bg-zinc-100 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} fill alt={item.name} className="object-cover" unoptimized />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-zinc-500">{item.category}</p>
                        </div>
                        <span className="font-semibold">${item.price * item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-zinc-100 rounded-md transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-zinc-100 rounded-md transition-colors"
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
              <div className="p-6 border-t border-zinc-100 space-y-4 bg-zinc-50">
                <div className="flex justify-between text-zinc-500">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <Link 
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full block text-center bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors"
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
