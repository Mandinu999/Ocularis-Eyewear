"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-muted-foreground max-w-3xl leading-relaxed">
          I'm currently in my junior year pursuing a B.S. in Computer Science. My journey started with building small Python scripts, and now I'm architecting full-stack applications and exploring machine learning models. I love participating in hackathons, contributing to open source, and learning the latest technologies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <GraduationCap className="text-primary mb-4" size={32} />,
            title: "Education",
            desc: "B.S. Computer Science\nTech University\nExpected Grad: May 2027",
          },
          {
            icon: <Code2 className="text-accent mb-4" size={32} />,
            title: "Engineering",
            desc: "Passionate about clean code, scalable architecture, and modern web frameworks like Next.js and React.",
          },
          {
            icon: <Cpu className="text-blue-400 mb-4" size={32} />,
            title: "Interests",
            desc: "Distributed Systems, AI/ML Integrations, and creating seamless User Experiences.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 rounded-2xl bento-card flex flex-col"
          >
            {item.icon}
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
