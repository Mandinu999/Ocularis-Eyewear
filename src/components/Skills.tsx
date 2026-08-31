"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["TypeScript", "Python", "Java", "C++", "SQL"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Framer Motion"] },
  { category: "Tools & DBs", items: ["Git", "Docker", "PostgreSQL", "MongoDB", "AWS", "Figma"] },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-4">Tech Arsenal</h2>
        <p className="text-muted-foreground">Technologies I work with to build modern applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 rounded-2xl border-t border-t-white/10"
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
