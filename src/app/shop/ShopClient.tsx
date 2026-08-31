"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";

interface Props {
  products: Product[];
}

export default function ShopClient({ products }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = ["All", "Sunglasses", "Prescription"];

  let filteredProducts = activeCategory === "All" 
    ? [...products]
    : products.filter(p => p.category === activeCategory);

  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Shop All Eyewear</h1>
          <p className="text-zinc-500 max-w-xl mb-6">
            Explore our complete collection of premium sunglasses and prescription glasses. Find the perfect frame to complement your style.
          </p>
          <div className="flex gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-zinc-500">Sort by:</label>
          <select 
            id="sort" 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-zinc-900 focus:border-zinc-900 block p-2.5 outline-none"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
