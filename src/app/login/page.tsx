import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-20 min-h-[calc(100vh-200px)] flex flex-col justify-center">
      <div className="mb-10">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors mb-6">
          <ArrowLeft size={16} />
          <span>Back to store</span>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-zinc-500">Enter your details to access your account.</p>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Password</label>
            <a href="#" className="text-xs font-medium text-zinc-500 hover:text-zinc-900">Forgot password?</a>
          </div>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all"
          />
        </div>
        <button 
          type="button"
          className="w-full bg-zinc-900 text-white py-4 rounded-xl font-medium hover:bg-zinc-800 transition-colors mt-4"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
        <p className="text-zinc-500 text-sm">
          Don't have an account? <a href="#" className="font-semibold text-zinc-900 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
