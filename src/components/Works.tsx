"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projectsData = [
  {
    id: "ghotion",
    title: "Ghotion — AI Note Taking App",
    category: "Full-Stack Web App",
    tags: ["Next.js", "React", "Tailwind CSS", "OpenAI", "Prisma"],
    img: "/ghotion.png",
    description:
      "A modern workspace combining rich-text markdown editing, block-based note organization, and embedded AI writing assistance.",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "nexus-chat",
    title: "Nexus — Real-Time Chat & Collaboration",
    category: "Real-Time System",
    tags: ["TypeScript", "Next.js", "Socket.io", "Tailwind CSS", "MongoDB"],
    img: "/ghotion.png",
    description:
      "Instant messaging application featuring workspace channels, direct audio calls, online presence, and file attachment uploads.",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "wander-travel",
    title: "Wanderlust — Travel & Booking Platform",
    category: "Web Application",
    tags: ["React", "Node.js", "Express", "Stripe API", "PostgreSQL"],
    img: "/ghotion.png",
    description:
      "Complete travel discovery and reservation platform with interactive map integration, user reviews, and secure checkout payment flows.",
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "enterprise-crm",
    title: "Orbit CRM — Enterprise Operations Suite",
    category: "SaaS Product",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "PostgreSQL"],
    img: "/ghotion.png",
    description:
      "Customer relationship management dashboard equipped with analytical charts, pipeline deal tracking, and automated email workflows.",
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const Works = () => {
  return (
    <section className="py-12 space-y-10" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
        >
          <span>View All Projects</span>
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Banner */}
            <div className="relative w-full h-64 sm:h-72 bg-stone-100 overflow-hidden border-b border-stone-100">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-semibold text-stone-800 shadow-sm">
                {project.year}
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-600 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs font-mono rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-stone-100">
                <a
                  href={project.demoUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-teal-600 transition-colors"
                >
                  <span>Live Preview</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <FiGithub className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Works;
