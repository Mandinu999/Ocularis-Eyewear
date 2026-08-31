import React from "react";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Story</h1>
        <p className="text-lg text-zinc-500">
          Founded in 2026, Ocularis was born from a simple idea: premium eyewear should be accessible, beautifully designed, and crafted to last a lifetime.
        </p>
      </div>

      <div className="aspect-[21/9] relative rounded-3xl overflow-hidden mb-20">
        <Image 
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" 
          fill 
          alt="Eyewear workshop" 
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">The Craft</h2>
          <p className="text-zinc-600 leading-relaxed">
            Every frame is meticulously designed in our studio, combining timeless aesthetics with modern engineering. We source only the highest quality acetates and metals, ensuring that each pair of glasses is not only striking but incredibly durable.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">The Vision</h2>
          <p className="text-zinc-600 leading-relaxed">
            We believe that eyewear is more than just a medical device—it's a form of self-expression. Our mission is to empower individuals to see clearly while looking their absolute best, without the traditional retail markups.
          </p>
        </div>
      </div>
    </div>
  );
}
