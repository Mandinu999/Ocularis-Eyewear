"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-3xl mx-auto px-6 py-24 scroll-mt-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold tracking-tight mb-6">Let's Connect</h2>
        <p className="text-muted-foreground mb-10 text-lg">
          I'm currently looking for 2027 Summer Internship opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 mb-16"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="flex justify-center items-center gap-6">
          <SocialLink href="#" icon={<FaGithub size={24} />} label="GitHub" />
          <SocialLink href="#" icon={<FaLinkedin size={24} />} label="LinkedIn" />
          <SocialLink href="#" icon={<FaTwitter size={24} />} label="Twitter" />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      className="p-3 glass rounded-full text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
    >
      {icon}
    </a>
  );
}
