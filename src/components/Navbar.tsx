"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X, ChevronDown } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import SearchModal from "./SearchModal";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md z-40 border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            <Link href="/" className="text-xl font-bold tracking-tight">Ocularis</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium h-full">
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <Link href="/shop" className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors flex items-center gap-1 h-full">
                Shop <ChevronDown size={14} className={`transition-transform duration-300 ${isShopHovered ? "rotate-180" : ""}`} />
              </Link>
              
              <AnimatePresence>
                {isShopHovered && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-2xl overflow-hidden p-6 grid grid-cols-3 gap-6"
                  >
                    <Link href="/shop?category=Sunglasses" className="group block" onClick={() => setIsShopHovered(false)}>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3">
                        <Image src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400" alt="Sunglasses" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <span className="font-semibold block text-center group-hover:text-zinc-500 dark:group-hover:text-zinc-400">Sunglasses</span>
                    </Link>
                    <Link href="/shop?category=Prescription" className="group block" onClick={() => setIsShopHovered(false)}>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3">
                        <Image src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=400" alt="Prescription" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <span className="font-semibold block text-center group-hover:text-zinc-500 dark:group-hover:text-zinc-400">Prescription</span>
                    </Link>
                    <Link href="/shop" className="group block" onClick={() => setIsShopHovered(false)}>
                      <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-3 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm uppercase tracking-wider font-bold">View All</span>
                      </div>
                      <span className="font-semibold block text-center group-hover:text-zinc-500 dark:group-hover:text-zinc-400">All Eyewear</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link href="/services" className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors h-full flex items-center">Services</Link>
            <Link href="/story" className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors h-full flex items-center">Our Story</Link>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors hidden sm:block"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <Link href="/profile" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              <User size={20} />
            </Link>
            <button 
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white dark:bg-[#09090b] md:hidden flex flex-col"
          >
            <div className="px-6 h-20 flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800">
              <span className="text-xl font-bold tracking-tight">Ocularis</span>
              <button 
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                onClick={closeMobileMenu}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 gap-6 text-2xl font-medium">
              <Link href="/shop" onClick={closeMobileMenu} className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">Shop</Link>
              <Link href="/services" onClick={closeMobileMenu} className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">Services</Link>
              <Link href="/story" onClick={closeMobileMenu} className="hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors">Our Story</Link>
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 w-full my-4"></div>
              <button 
                className="flex items-center gap-4 hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors text-left"
                onClick={() => {
                  closeMobileMenu();
                  setIsSearchOpen(true);
                }}
              >
                <Search size={24} /> Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
