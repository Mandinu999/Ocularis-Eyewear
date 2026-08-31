import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white tracking-tight">Ocularis</div>
        <div className="flex gap-6 text-sm">
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/story" className="hover:text-white transition-colors">Our Story</Link>
        </div>
        <div className="text-sm">© 2026 Ocularis. All rights reserved.</div>
      </div>
    </footer>
  );
}
