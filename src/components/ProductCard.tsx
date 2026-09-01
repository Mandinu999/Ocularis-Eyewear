import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <Link href={`/product/${product.id}`} className="block relative aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4">
        <Image 
          src={product.image} 
          fill 
          alt={product.name} 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          unoptimized
        />
        
        
        <button 
          onClick={toggleWishlist}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors z-10"
        >
          <Heart size={18} className={`transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-zinc-600"}`} />
        </button>

        
        <button 
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur text-zinc-900 py-3 rounded-xl font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
        >
          Add to Cart
        </button>
      </Link>

      <Link href={`/product/${product.id}`} className="flex justify-between items-start flex-grow">
        <div>
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">{product.category}</p>
          <h3 className="text-lg font-medium group-hover:text-zinc-600 transition-colors">{product.name}</h3>
          
          
          <div className="flex items-center gap-1 mt-1">
            <Star size={14} className="fill-zinc-900 text-zinc-900" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
        </div>
        <span className="font-semibold">${product.price}</span>
      </Link>
    </motion.div>
  );
}
