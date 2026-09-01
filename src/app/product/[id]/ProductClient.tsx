"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Truck, ShieldCheck, Undo2 } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-zinc-900 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-zinc-900 font-medium">{product.name}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        
        <div className="flex-1 w-full relative aspect-square bg-zinc-100 rounded-3xl overflow-hidden">
          <Image 
            src={product.image} 
            fill 
            alt={product.name} 
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">{product.category}</span>
            <div className="flex items-center gap-1 text-zinc-900">
              <Star size={16} className="fill-current" />
              <span className="font-semibold text-sm">{product.rating}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.name}</h1>
          <div className="text-2xl text-zinc-600 font-medium mb-8">${product.price}</div>
          
          <p className="text-zinc-600 leading-relaxed mb-10">
            {product.description} Crafted from premium materials to ensure durability and comfort. The perfect accessory to complete any look, offering both UV protection and impeccable style.
          </p>

          <div className="flex items-center gap-6 mb-10">
            <div className="flex items-center border border-zinc-200 rounded-full">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center hover:bg-zinc-50 rounded-l-full transition-colors"
              >-</button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 flex items-center justify-center hover:bg-zinc-50 rounded-r-full transition-colors"
              >+</button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-zinc-900 text-white h-12 rounded-full font-medium hover:bg-zinc-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-200">
            <div className="flex items-center gap-3 text-zinc-600">
              <Truck size={20} className="text-zinc-400" />
              <span className="text-sm">Free express shipping over $150</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <Undo2 size={20} className="text-zinc-400" />
              <span className="text-sm">30-day hassle-free returns</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600">
              <ShieldCheck size={20} className="text-zinc-400" />
              <span className="text-sm">2-year extensive warranty</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
