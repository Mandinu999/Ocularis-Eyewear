"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart } from "@/lib/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const shipping = 15.00;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shipping + tax;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 mb-10 transition-colors">
        <ArrowLeft size={16} />
        <span>Return to shop</span>
      </Link>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
        {/* Checkout Form */}
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First name"
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
              />
              <input 
                type="text" 
                placeholder="Last name"
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
              />
              <input 
                type="text" 
                placeholder="Address"
                className="col-span-2 w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
              />
              <input 
                type="text" 
                placeholder="City"
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
              />
              <input 
                type="text" 
                placeholder="Postal code"
                className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Payment</h2>
            <div className="p-6 border border-zinc-200 rounded-2xl bg-zinc-50">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Card number"
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Expiration date (MM/YY)"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Security code"
                    className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
            <ShieldCheck size={20} />
            Place Order • ${total.toFixed(2)}
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[450px]">
          <div className="bg-zinc-50 p-8 rounded-3xl sticky top-28">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4">
              {cart.length === 0 ? (
                <p className="text-zinc-500">Your cart is empty.</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 bg-zinc-200 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} fill alt={item.name} className="object-cover" unoptimized />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-900 text-white text-xs flex items-center justify-center rounded-full font-bold">
                        {item.quantity}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex justify-between font-medium">
                        <h3>{item.name}</h3>
                        <span>${item.price * item.quantity}</span>
                      </div>
                      <p className="text-sm text-zinc-500">{item.category}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="space-y-4 border-t border-zinc-200 pt-6">
              <div className="flex justify-between text-zinc-600">
                <span>Subtotal</span>
                <span className="font-medium text-zinc-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>Shipping</span>
                <span className="font-medium text-zinc-900">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-zinc-600">
                <span>Estimated Tax</span>
                <span className="font-medium text-zinc-900">${tax.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t border-zinc-200 mt-6 pt-6">
              <span className="text-xl font-bold">Total</span>
              <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
