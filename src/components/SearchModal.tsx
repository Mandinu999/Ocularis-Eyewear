"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setLoading(true);
      fetch('/api/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white/95 backdrop-blur-md">
      <div className="flex items-center justify-between p-6 border-b border-zinc-200">
        <div className="flex-1 flex items-center bg-zinc-100 rounded-full px-4 py-2 max-w-2xl mx-auto">
          <Search size={20} className="text-zinc-500 mr-2" />
          <input
            autoFocus
            type="text"
            placeholder="Search for glasses, sunglasses, collections..."
            className="w-full bg-transparent border-none outline-none text-lg"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button onClick={onClose} className="p-2 ml-4 hover:bg-zinc-100 rounded-full transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 max-w-4xl mx-auto w-full">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="animate-spin text-zinc-500" size={32} />
          </div>
        ) : (
          <>
            {query && results.length === 0 && (
              <div className="text-center text-zinc-500 mt-20">
                No results found for "{query}". Try checking your spelling or using more general terms.
              </div>
            )}

            {results.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={onClose}
                    className="group flex flex-col items-center p-4 rounded-xl hover:bg-zinc-100 transition-colors"
                  >
                    <div className="relative w-32 h-32 mb-4 rounded-lg overflow-hidden bg-zinc-200">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover mix-blend-multiply"
                        unoptimized
                      />
                    </div>
                    <h3 className="font-medium text-center">{product.name}</h3>
                    <p className="text-sm text-zinc-500">{product.category}</p>
                    <p className="font-semibold mt-1">${product.price}</p>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
