"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "react-icons/si";

const techIcons = [
  { icon: SiReact, title: "React 19" },
  { icon: SiNextdotjs, title: "Next.js 15" },
  { icon: SiTypescript, title: "TypeScript" },
  { icon: SiNodedotjs, title: "Node.js" },
  { icon: SiTailwindcss, title: "Tailwind CSS" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiMongodb, title: "MongoDB" },
  { icon: SiPrisma, title: "Prisma ORM" },
];

const services = [
  {
    title: "UI/UX & Frontend Architecture",
    icon: FiLayout,
    description:
      "Crafting pixel-perfect, accessible, and responsive user interfaces with Next.js, React, Tailwind CSS, and smooth Framer Motion animations.",
    number: "01",
  },
  {
    title: "Full-Stack Web Applications",
    icon: FiCode,
    description:
      "Building scalable web solutions end-to-end with modern frameworks, serverless APIs, type safety, and seamless third-party integrations.",
    number: "02",
  },
  {
    title: "API & Backend Systems",
    icon: FiServer,
    description:
      "Designing resilient RESTful and GraphQL APIs, microservices, authentication systems, and optimized backend query pipelines.",
    number: "03",
  },
  {
    title: "Database Modeling & Performance",
    icon: FiDatabase,
    description:
      "Architecting efficient SQL & NoSQL data schemas, index optimizations, caching layers, and reliable data migrations.",
    number: "04",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Mission = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="py-12 space-y-16"
    >
      {/* Mission Banner Card */}
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-br from-teal-900 via-stone-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl space-y-8 relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold leading-relaxed text-stone-100">
            &ldquo;Turning complex ideas into clean, efficient, future-ready code — delivering web applications where exceptional user experience and core business goals align seamlessly.&rdquo;
          </h2>

          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-4">
              Core Tech Stack & Ecosystem:
            </p>
            <div className="flex flex-wrap gap-3">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-stone-200 text-xs font-medium cursor-pointer"
                >
                  <tech.icon className="text-base text-teal-400" />
                  <span>{tech.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
              EXPERT SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
              How Can I Assist You?
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-md">
            Tailored software development solutions engineered to elevate your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="flex items-start justify-between">
                <div className="p-3.5 rounded-2xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={26} />
                </div>
                <span className="text-2xl font-mono font-bold text-stone-300 group-hover:text-teal-600 transition-colors">
                  {service.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-stone-900 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
