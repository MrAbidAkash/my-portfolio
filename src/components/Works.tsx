"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export const projectsData = [
  {
    id: "erp-platform",
    title: "Enterprise ERP Platform",
    category: "Full-Stack Web App",
    tags: ["React", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Redis"],
    img: "/ghotion.png",
    description:
      "A scalable ERP solution featuring HRM, CRM, and Task Management modules capable of efficiently managing thousands of leads.",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pc-monitoring",
    title: "PC Monitoring & Remote Management",
    category: "Desktop & Web System",
    tags: ["Python", "Electron.js", "React.js", "Node.js", "MongoDB"],
    img: "/ghotion.png",
    description:
      "A cross-platform enterprise device monitoring platform processing millions of activity records from hundreds of endpoints.",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "digital-soft-card",
    title: "Digital Soft Card Dashboard",
    category: "Web Application",
    tags: ["Next.js", "Node.js", "Express.js"],
    img: "/ghotion.png",
    description:
      "A fully featured Super Admin and Company Admin dashboard for managing organizations, employees, and digital business cards.",
    year: "2024",
    demoUrl: "https://softcard.app",
    githubUrl: "#",
  },
  {
    id: "vynteex-platform",
    title: "Vynteex (Digital Course Platform)",
    category: "E-Commerce",
    tags: ["Next.js", "Payload CMS", "Tailwind CSS"],
    img: "/ghotion.png",
    description:
      "A high-conversion Bangla-language digital course selling platform focused on relationship, intimacy, and health education.",
    year: "2023",
    demoUrl: "https://vynteex.com",
    githubUrl: "#",
  },
  {
    id: "partner-referral",
    title: "Partner & Referral Program Module",
    category: "Web Application",
    tags: ["AI Validation", "Automated Onboarding"],
    img: "/ghotion.png",
    description:
      "Implemented a partner referral system with AI-powered validation, automating partner onboarding.",
    year: "2025",
    demoUrl: "https://everythingainow.com/",
    githubUrl: "#",
  },
  {
    id: "business-directory",
    title: "Business Directory Website",
    category: "Full-Stack Web App",
    tags: ["GoHighLevel CRM", "Google Maps API", "AI Validation"],
    img: "/ghotion.png",
    description:
      "A directory platform for tradies with GoHighLevel CRM integration, AI-powered validation, and Google Maps integration.",
    year: "2025",
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
