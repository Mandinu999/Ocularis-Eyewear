"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Check, CreditCard, MapPin, Mail, ChevronRight } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const shipping = 15.00;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  const steps = [
    { num: 1, title: "Information", icon: <Mail size={16} /> },
    { num: 2, title: "Shipping", icon: <MapPin size={16} /> },
    { num: 3, title: "Payment", icon: <CreditCard size={16} /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <Link href="/shop" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-10 transition-colors">
        <ArrowLeft size={16} />
        <span>Return to shop</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
        
        <div className="flex-1">
          {/* Progress Bar */}
          <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-200 dark:bg-zinc-800 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-zinc-900 dark:bg-white -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
            {steps.map(s => (
              <div key={s.num} className="relative z-10 flex flex-col items-center gap-2">
                <button 
                  onClick={() => s.num < step && setStep(s.num as any)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    step >= s.num 
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900' 
                      : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {step > s.num ? <Check size={16} /> : s.icon}
                </button>
                <span className={`text-xs font-bold uppercase tracking-wider ${step >= s.num ? 'text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-600'}`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          {/* Form Steps */}
          <div className="relative overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Contact Information</h2>
                  <input 
                    type="email" 
                    placeholder="Email address"
                    className="w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                  />
                  <div className="flex items-center gap-3 mt-4">
                    <input type="checkbox" id="newsletter" className="w-4 h-4 rounded text-zinc-900 focus:ring-zinc-900" />
                    <label htmlFor="newsletter" className="text-sm text-zinc-600 dark:text-zinc-400">Email me with news and offers</label>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full mt-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue to Shipping <ChevronRight size={18} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="First name"
                      className="w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                    />
                    <input 
                      type="text" 
                      placeholder="Last name"
                      className="w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                    />
                    <input 
                      type="text" 
                      placeholder="Address"
                      className="col-span-2 w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                    />
                    <input 
                      type="text" 
                      placeholder="City"
                      className="w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                    />
                    <input 
                      type="text" 
                      placeholder="Postal code"
                      className="w-full px-4 py-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                    />
                  </div>
                  <div className="flex gap-4 mt-8">
                    <button 
                      onClick={() => setStep(1)}
                      className="px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white"
                    >
                      Back
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                      Continue to Payment <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white">Payment</h2>
                  
                  {/* Apple Pay / Google Pay Placeholder */}
                  <div className="flex flex-col gap-3 mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
                    <button className="w-full bg-black text-white h-12 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                      <svg viewBox="0 0 384 512" className="h-4 w-4 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
                      Pay
                    </button>
                    <button className="w-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white h-12 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                      Google Pay
                    </button>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-4 bg-[#fafafa] dark:bg-[#09090b] text-zinc-500">Or pay with card</span></div>
                  </div>

                  <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-zinc-50 dark:bg-zinc-900">
                    <div className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Card number"
                        className="w-full px-4 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="Expiration (MM/YY)"
                          className="w-full px-4 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                        />
                        <input 
                          type="text" 
                          placeholder="Security code"
                          className="w-full px-4 py-4 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-all text-zinc-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-8">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-6 py-4 rounded-xl font-bold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white"
                    >
                      Back
                    </button>
                    <button className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 py-4 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                      <ShieldCheck size={20} />
                      Pay ${total.toFixed(2)}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        
        <div className="lg:w-[450px]">
          <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl sticky top-28 border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white">Order Summary</h2>
            
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4">
              {cart.length === 0 ? (
                <p className="text-zinc-500 dark:text-zinc-400">Your cart is empty.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} fill alt={item.name} className="object-cover" unoptimized />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs flex items-center justify-center rounded-full font-bold">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between font-medium">
                        <h3 className="text-zinc-900 dark:text-white">{item.name}</h3>
                        <span className="text-zinc-900 dark:text-white">${item.price * item.quantity}</span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.category}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4 border-t border-zinc-200 dark:border-zinc-800 pt-6">
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900 dark:text-white">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Shipping</span>
                <span className="font-medium text-zinc-900 dark:text-white">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                <span>Estimated Tax</span>
                <span className="font-medium text-zinc-900 dark:text-white">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-zinc-200 dark:border-zinc-800 mt-6 pt-6">
              <span className="text-xl font-bold text-zinc-900 dark:text-white">Total</span>
              <span className="text-2xl font-bold text-zinc-900 dark:text-white">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
