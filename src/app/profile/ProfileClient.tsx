"use client";

import React, { useState } from "react";
import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/data";

interface ProfileProps {
  user: any;
  orders: any[];
  wishlistProducts: Product[];
}

export default function ProfileClient({ user, orders, wishlistProducts }: ProfileProps) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
      
      <div className="w-full md:w-64 flex-shrink-0">
        <div className="bg-zinc-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
          <User size={40} className="text-zinc-400" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-1">{user.name}</h2>
        <p className="text-zinc-500 text-sm mb-8">{user.email}</p>

        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab("profile")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <User size={18} />
            My Profile
          </button>
          <button 
            onClick={() => setActiveTab("orders")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'orders' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <Package size={18} />
            Orders
          </button>
          <button 
            onClick={() => setActiveTab("wishlist")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'wishlist' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <Heart size={18} />
            Wishlist
          </button>
          <button 
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'settings' ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`}
          >
            <Settings size={18} />
            Settings
          </button>
          <div className="h-px bg-zinc-200 my-2"></div>
          <Link href="/login" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
            <LogOut size={18} />
            Sign Out
          </Link>
        </nav>
      </div>

      
      <div className="flex-1 space-y-12">
        {activeTab === "profile" && (
          <section>
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-zinc-200">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-zinc-500 mb-1">Full Name</p>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Email Address</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Phone Number</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500 mb-1">Member Since</p>
                <p className="font-medium">{new Date(user.joinedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <button 
              onClick={() => setActiveTab("settings")}
              className="mt-6 px-6 py-2 border border-zinc-300 rounded-full font-medium hover:bg-zinc-50 transition-colors"
            >
              Edit Information
            </button>
          </section>
        )}

        {activeTab === "orders" && (
          <section>
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-zinc-200">Recent Orders</h3>
            {orders.length > 0 ? (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-zinc-200 rounded-2xl hover:border-zinc-300 transition-colors">
                    <div>
                      <p className="font-medium mb-1">Order {order.id.slice(0, 8).toUpperCase()}</p>
                      <p className="text-sm text-zinc-500">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex items-center gap-6 mt-4 sm:mt-0">
                      <div className="text-right">
                        <p className="font-medium">${order.total.toFixed(2)}</p>
                        <p className="text-sm text-emerald-600 font-medium">{order.status}</p>
                      </div>
                      <button className="text-sm font-medium underline underline-offset-4 hover:text-zinc-600">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-zinc-50 rounded-2xl">
                <Package size={40} className="mx-auto text-zinc-300 mb-4" />
                <p className="text-zinc-500">You haven't placed any orders yet.</p>
              </div>
            )}
          </section>
        )}

        {activeTab === "wishlist" && (
          <section>
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-zinc-200">My Wishlist</h3>
            {wishlistProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {wishlistProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-zinc-50 rounded-2xl">
                <Heart size={40} className="mx-auto text-zinc-300 mb-4" />
                <p className="text-zinc-500">Your wishlist is empty.</p>
              </div>
            )}
          </section>
        )}

        {activeTab === "settings" && (
          <section>
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-zinc-200">Account Settings</h3>
            <form className="max-w-md space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                <input type="text" defaultValue={user.name} className="w-full px-4 py-2 border border-zinc-300 rounded-lg outline-none focus:border-zinc-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Email Address</label>
                <input type="email" defaultValue={user.email} className="w-full px-4 py-2 border border-zinc-300 rounded-lg outline-none focus:border-zinc-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
                <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-2 border border-zinc-300 rounded-lg outline-none focus:border-zinc-900" />
              </div>
              <button className="mt-4 bg-zinc-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors">
                Save Changes
              </button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}
