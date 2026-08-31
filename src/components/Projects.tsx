"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI Code Reviewer",
    description: "A GitHub App that uses OpenAI's API to automatically review pull requests, suggesting improvements and catching bugs before they are merged.",
    tech: ["Next.js", "TypeScript", "OpenAI", "GitHub API"],
    github: "#",
    live: "#",
  },
  {
    title: "SyncSpace",
    description: "Real-time collaborative workspace with video calling, live document editing, and kanban boards for remote teams.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    github: "#",
    live: "#",
  },
  {
    title: "AlgoVisualizer",
    description: "Interactive web platform to visualize sorting and pathfinding algorithms, helping students learn CS fundamentals.",
    tech: ["Vue.js", "D3.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "CryptoTracker",
    description: "High-performance dashboard tracking real-time cryptocurrency prices, trends, and portfolio values using WebSocket streams.",
    tech: ["Next.js", "Framer Motion", "Redis"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl mx-auto px-6 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Some things I've built to solve problems.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 rounded-2xl bento-card flex flex-col group relative overflow-hidden"
          >
            {/* Background glowing blob effect on hover */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

            <div className="flex justify-between items-start mb-6">
              <FolderGit2 className="text-primary" size={36} />
              <div className="flex gap-3">
                <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                  <FaGithub size={20} />
                </a>
                <a href={project.live} className="text-muted-foreground hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, j) => (
                <span key={j} className="text-xs font-medium text-accent">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
