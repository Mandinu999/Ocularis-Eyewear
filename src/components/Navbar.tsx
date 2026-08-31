"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import SearchModal from "./SearchModal";

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 hover:bg-zinc-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            <Link href="/" className="text-xl font-bold tracking-tight">Ocularis</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/shop" className="hover:text-zinc-500 transition-colors">Shop</Link>
            <Link href="/services" className="hover:text-zinc-500 transition-colors">Services</Link>
            <Link href="/story" className="hover:text-zinc-500 transition-colors">Our Story</Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="p-2 hover:bg-zinc-100 rounded-full transition-colors hidden sm:block"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={20} />
            </button>
            <Link href="/profile" className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <User size={20} />
            </Link>
            <button 
              className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-zinc-900 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col">
          <div className="px-6 h-20 flex items-center justify-between border-b border-zinc-200">
            <span className="text-xl font-bold tracking-tight">Ocularis</span>
            <button 
              className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
              onClick={closeMobileMenu}
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col px-6 py-8 gap-6 text-2xl font-medium">
            <Link href="/shop" onClick={closeMobileMenu} className="hover:text-zinc-500 transition-colors">Shop</Link>
            <Link href="/services" onClick={closeMobileMenu} className="hover:text-zinc-500 transition-colors">Services</Link>
            <Link href="/story" onClick={closeMobileMenu} className="hover:text-zinc-500 transition-colors">Our Story</Link>
            <div className="h-px bg-zinc-200 w-full my-4"></div>
            <button 
              className="flex items-center gap-4 hover:text-zinc-500 transition-colors text-left"
              onClick={() => {
                closeMobileMenu();
                setIsSearchOpen(true);
              }}
            >
              <Search size={24} /> Search
            </button>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
