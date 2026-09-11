"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiRedis,
} from "react-icons/si";

const techStack = [
  { icon: SiTypescript, color: "text-blue-600" },
  { icon: SiReact, color: "text-sky-500" },
  { icon: SiNextdotjs, color: "text-stone-900" },
  { icon: SiNodedotjs, color: "text-green-600" },
  { icon: SiPostgresql, color: "text-indigo-600" },
  { icon: SiRedis, color: "text-red-600" },
  { icon: SiTailwindcss, color: "text-teal-500" },
];

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-20 md:pb-18 overflow-hidden">
      {/* Background glow accents (Optimized with radial gradients instead of heavy blurs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/60 via-indigo-50/20 to-transparent pointer-events-none rounded-full" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-200/40 to-transparent pointer-events-none rounded-full" />
      <div className="absolute top-48 -left-24 w-72 h-72 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-200/40 to-transparent pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center sm:items-start space-y-8 tex-center sm:text-left order-2 lg:order-1"
        >
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-teal-200/60 rounded-full text-xs font-semibold text-teal-800 shadow-sm hover:shadow-md transition-shadow cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            <span className="tracking-widest uppercase text-[10px] sm:text-xs font-mono">
              AVAILABLE FOR NEW PROJECTS
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-900 leading-[1.1]"
            >
              Hi, I&apos;m <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block pb-2">
                Mr.AbidAkash
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-xl font-medium"
            >
              Full-Stack Software Developer engineering high-performance web
              applications, scalable architectures, and premium digital
              experiences.
            </motion.p>
          </div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="relative overflow-hidden inline-flex items-center gap-2 px-8 py-4 bg-stone-900 hover:bg-teal-700 text-white text-sm font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <span className="relative z-10">Start a Project</span>
              <FiArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/50 backdrop-blur-sm hover:bg-white text-stone-900 border border-stone-200/80 text-sm font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>View Portfolio</span>
            </Link>
          </motion.div>

          {/* Tech Stack Marquee / Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-8 border-t border-stone-200/60 w-full"
          >
            <p className="text-xs font-mono uppercase text-stone-400 tracking-wider mb-4 text-center sm:text-left">
              Core Technologies
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-6 flex-wrap">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`text-3xl text-stone-400 hover:${tech.color} transition-colors duration-300`}
                  >
                    <Icon />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2"
        >
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
            {/* Multi-layered animated rings */}
            <div className="absolute inset-0 border-[1px] border-teal-200 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border-[1px] border-indigo-200 border-dashed rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Glow effect behind image (Optimized with radial gradient instead of blur) */}
            <div className="absolute inset-4 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400/40 via-indigo-500/10 to-transparent rounded-full animate-pulse pointer-events-none" />

            {/* Floating Morph Picture Container */}
            <div className="absolute inset-8 overflow-hidden rounded-full border-4 border-white shadow-2xl FloatingAnimation bg-stone-100 z-10">
              <Image
                alt="Mr.AbidAkash Profile"
                src="/MrAbidAkash.jpg"
                fill
                priority
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 sm:right-10 z-20 glass-panel px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                  Experience
                </p>
                <p className="text-sm font-bold text-stone-900">3+ Years</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
