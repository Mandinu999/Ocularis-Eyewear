"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col items-center justify-center min-h-[80vh] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 text-primary text-sm font-medium mb-8"
      >
        <Terminal size={16} />
        <span>CS Undergraduate @ Tech University</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      >
        Building the future with <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          code & coffee.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
      >
        I'm Alex, a software engineering student passionate about scalable systems, modern web architectures, and artificial intelligence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          View Projects <ArrowRight size={18} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 glass px-6 py-3 rounded-lg font-medium hover:bg-white/5 transition-colors"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
