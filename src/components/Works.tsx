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
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
    ],
    img: "/ERP-SKZ.png",
    description:
      "A scalable ERP solution featuring HRM, CRM, and Task Management modules capable of efficiently managing thousands of leads.",
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "hrm-system",
    title: "Enterprise HRM & Payroll System",
    category: "Full-Stack Web App",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Ant Design",
      "Tailwind CSS",
      "MongoDB",
      "node-zklib",
      "ZKTeco Biometric",
    ],
    img: "/HR-Management-System-HRM.png",
    description:
      "A comprehensive HR and payroll management platform featuring hardware-level integration with ZKTeco biometric devices via TCP/IP. Implemented automated cron-driven attendance synchronization, dynamic shift policy mapping, late/early departure tracking, and an automated payroll engine computing net salaries, deductions, and PDF payslips.",
    year: "2026",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "pc-monitoring",
    title: "PC Monitoring & Remote Management Platform",
    category: "Desktop & Web System",
    tags: ["Python", "Electron.js", "React.js", "Node.js", "Express.js", "MongoDB", "Telemetry"],
    img: "/cyntrafold-overview.jpg",
    description:
      "A cross-platform enterprise device monitoring and remote management platform supporting Windows and macOS. Built desktop agents using Python and Electron.js to process and synchronize millions of activity records from hundreds of managed endpoints, including application usage, browser activity, clipboard events, screenshots, screen recordings, and system telemetry analysis with MongoDB.",
    year: "2026",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "kaajlagbe",
    title: "KaajLagbe (Home Services Marketplace)",
    category: "SaaS Product",
    tags: [
      "Next.js",
      "React Native (Expo)",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
      "PWA",
    ],
    img: "/kaajLagbe.png",
    description:
      "An on-demand home services marketplace connecting homeowners with verified local service professionals across Bangladesh. Built a progressive web app (PWA) and cross-platform mobile app featuring geolocation-based tradie matching, job posting, real-time quotation/bidding, in-app messaging, and automated push notifications.",
    year: "2026",
    demoUrl: "https://kaajlagbe.com",
    githubUrl: "#",
  },
  {
    id: "chattimeai",
    title: "ChatTimeAI",
    category: "SaaS Product",
    tags: ["Next.js", "AI Integration", "Tailwind CSS"],
    img: "/ChatTime-AI-Intelligent-Conversational-Platform.png",
    description:
      "An AI-powered SaaS application built with Next.js for intelligent conversations.",
    year: "2025",
    demoUrl: "https://chattimeai.com",
    githubUrl: "#",
  },
  {
    id: "digital-soft-card",
    title: "Digital Soft Card Dashboard",
    category: "Web Application",
    tags: ["Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    img: "/ghotion.png",
    description:
      "A fully featured Super Admin and Company Admin dashboard for managing organizations, employees, and digital business cards, enabling centralized company management.",
    year: "2024",
    demoUrl: "https://softcard.app",
    githubUrl: "#",
  },
  {
    id: "partner-referral",
    title: "Partner & Referral Program Module",
    category: "Web Application",
    tags: ["Next.js", "AI Validation", "Automated Onboarding"],
    img: "/ghotion.png",
    description:
      "An AI-driven partner and referral platform with automated onboarding workflows, AI-powered validation, and streamlined partner pipelines.",
    year: "2025",
    demoUrl: "https://everythingainow.com/",
    githubUrl: "#",
  },
  {
    id: "tradie-directory",
    title: "Tradie Business Directory Platform",
    category: "Web Application",
    tags: ["Next.js", "GoHighLevel CRM", "Google Maps API", "AI Validation"],
    img: "/ghotion.png",
    description:
      "A directory platform for tradies featuring GoHighLevel CRM integration, AI-powered validation, Google Maps radius matching (5–10 km search), automated reminders, and client management workflows.",
    year: "2025",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "innovomart",
    title: "InnovoMart",
    category: "WordPress Website",
    tags: ["WordPress", "E-Commerce"],
    img: "/Innovomart-–-Innovomart.png",
    description:
      "A digital e-commerce storefront platform built with WordPress.",
    year: "2026",
    demoUrl: "https://innovomart.com/",
    githubUrl: "#",
  },
  {
    id: "innovoexportimport",
    title: "Innovo Export Import",
    category: "WordPress Website",
    tags: ["WordPress", "Corporate"],
    img: "/Innovo-Exports-Imports-–-You-want-it-We-build-it-best-.png",
    description:
      "A professional export-import business website built with WordPress.",
    year: "2025",
    demoUrl: "https://innovoexportimport.com/",
    githubUrl: "#",
  },
  {
    id: "matinhajiksa",
    title: "Matin Haji KSA",
    category: "WordPress Website",
    tags: ["WordPress", "Corporate"],
    img: "/Electro-Mechanical-–-Matin-Haji-Company-LTD.png",
    description:
      "A corporate website for Matin Haji Company Ltd. in Saudi Arabia.",
    year: "2024",
    demoUrl: "https://matinhajiksa.com/",
    githubUrl: "#",
  },
  {
    id: "rico-bd",
    title: "Rico BD",
    category: "WordPress Website",
    tags: ["WordPress", "Business"],
    img: "/ghotion.png",
    description:
      "A local business directory and corporate website built with WordPress.",
    year: "2026",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "vynteex-platform",
    title: "Vynteex (Digital Course Platform)",
    category: "Landing Page",
    tags: ["Next.js", "Payload CMS", "Tailwind CSS"],
    img: "/Health-Solutions.png",
    description:
      "A high-conversion Bangla-language digital course selling platform focused on relationship, intimacy, and health education.",
    year: "2025",
    demoUrl: "https://vynteex.com",
    githubUrl: "#",
  },
  {
    id: "englishfnf",
    title: "English FnF",
    category: "Landing Page",
    tags: ["Next.js", "Payload CMS", "Tailwind CSS"],
    img: "/GuideFNF.png",
    description:
      "An educational landing page platform dynamically managed with Payload CMS.",
    year: "2026",
    demoUrl: "https://englishfnf.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "vynteex-store",
    title: "Vynteex Store",
    category: "E-Commerce Landing Page",
    tags: ["Next.js", "Payload CMS", "Tailwind CSS"],
    img: "/Payload-Blank-Template.png",
    description:
      "A product-focused e-commerce landing page featuring variant selection.",
    year: "2026",
    demoUrl: "https://vynteex.xyz",
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
        {projectsData.slice(0, 6).map((project, index) => (
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
