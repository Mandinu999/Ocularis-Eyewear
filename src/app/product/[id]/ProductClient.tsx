"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Truck, ShieldCheck, Undo2, Camera, X } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ display: 'none', backgroundPosition: '0% 0%' });
  const imageRef = useRef<HTMLDivElement>(null);

  // Mock gallery images since our DB only has one image
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=800"
  ];

  // Mock reviews
  const reviews = [
    { id: 1, user: "Sarah M.", rating: 5, date: "October 12, 2026", comment: "Absolutely love these! The quality is amazing and they fit perfectly." },
    { id: 2, user: "James D.", rating: 4, date: "September 28, 2026", comment: "Great style, slightly heavier than expected but very premium feel." },
    { id: 3, user: "Elena R.", rating: 5, date: "September 15, 2026", comment: "The lenses are super clear. Getting compliments everywhere I go." }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({
      display: 'block',
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-medium">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
        
        {/* Left: Image Gallery */}
        <div className="flex-1 w-full flex flex-col md:flex-row-reverse gap-4">
          <div 
            className="relative flex-1 aspect-square bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden cursor-crosshair"
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomStyle({ display: 'none', backgroundPosition: '0% 0%' })}
          >
            <Image 
              src={gallery[activeImage]} 
              fill 
              alt={product.name} 
              className="object-cover"
              priority
              unoptimized
            />
            {/* Zoom Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${gallery[activeImage]})`,
                backgroundSize: '200%',
                ...zoomStyle
              }}
            />
          </div>
          
          <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
            {gallery.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-zinc-900 dark:border-white' : 'border-transparent hover:border-zinc-300 dark:hover:border-zinc-700'}`}
              >
                <Image src={img} fill alt={`Thumbnail ${idx+1}`} className="object-cover" unoptimized />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">{product.category}</span>
            <div className="flex items-center gap-1 text-zinc-900 dark:text-zinc-100">
              <Star size={16} className="fill-current text-yellow-500" />
              <span className="font-semibold text-sm">{product.rating}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">{product.name}</h1>
          <div className="text-2xl text-zinc-600 dark:text-zinc-300 font-medium mb-8">${product.price}</div>
          
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10">
            {product.description} Crafted from premium materials to ensure durability and comfort. The perfect accessory to complete any look, offering both UV protection and impeccable style.
          </p>

          <button 
            onClick={() => setIsTryOnOpen(true)}
            className="w-full mb-8 flex items-center justify-center gap-2 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 h-14 rounded-full font-bold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <Camera size={20} /> Virtual Try-On
          </button>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
            <div className="flex w-full sm:w-auto items-center border border-zinc-200 dark:border-zinc-700 rounded-full h-14">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-14 h-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-l-full transition-colors text-zinc-900 dark:text-zinc-100"
              >-</button>
              <span className="w-12 text-center font-medium text-zinc-900 dark:text-zinc-100">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-14 h-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-r-full transition-colors text-zinc-900 dark:text-zinc-100"
              >+</button>
            </div>
            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-14 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          <div className="space-y-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <Truck size={20} className="text-zinc-400 dark:text-zinc-500" />
              <span className="text-sm font-medium">Free express shipping over $150</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <Undo2 size={20} className="text-zinc-400 dark:text-zinc-500" />
              <span className="text-sm font-medium">30-day hassle-free returns</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <ShieldCheck size={20} className="text-zinc-400 dark:text-zinc-500" />
              <span className="text-sm font-medium">2-year extensive warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="pt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-3xl font-bold mb-10 text-zinc-900 dark:text-white">Customer Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl h-fit">
            <div className="text-5xl font-bold text-zinc-900 dark:text-white mb-2">{product.rating}</div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className={i < Math.floor(product.rating) ? "fill-yellow-500 text-yellow-500" : "text-zinc-300 dark:text-zinc-700"} />
              ))}
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-6">Based on {reviews.length} reviews</p>
            <button className="w-full bg-transparent border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white h-12 rounded-full font-bold hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors">
              Write a Review
            </button>
          </div>

          <div className="md:col-span-2 space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-zinc-900 dark:text-white">{review.user}</div>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-zinc-300 dark:text-zinc-700"} />
                  ))}
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Virtual Try-On Modal */}
      <AnimatePresence>
        {isTryOnOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-900/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-zinc-950 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Virtual Try-On</h3>
                <button onClick={() => setIsTryOnOpen(false)} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-zinc-500">
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 md:p-12 flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                  <Camera size={48} className="text-zinc-400 dark:text-zinc-600" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-white">Access Camera</h4>
                <p className="text-zinc-500 dark:text-zinc-400 max-w-md mb-8">
                  Allow Ocularis to access your device camera to see how {product.name} looks on your face in real-time.
                </p>
                <div className="flex gap-4 w-full max-w-sm">
                  <button className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 h-12 rounded-full font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                    Enable Camera
                  </button>
                  <button className="flex-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white h-12 rounded-full font-bold hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
                    Upload Photo
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
