"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-teal-200/40 via-indigo-200/30 to-purple-200/20 blur-3xl pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold text-teal-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span className="tracking-wide uppercase text-[11px] font-mono">AVAILABLE FOR FREELANCE & FULL-TIME WORK</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1]">
            Hi, I&apos;m a <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Software Developer</span>
          </h1>

          {/* Bio Description */}
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl">
            With 5+ years of experience architecting high-performance web applications, specializing in React, Next.js, TypeScript, and modern Cloud & Backend ecosystems.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 hover:bg-teal-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <span>Get In Touch</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-sm font-semibold rounded-full shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <span>View Projects</span>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4 border-t border-stone-200/80 w-full">
            <span className="text-xs font-mono uppercase text-stone-400 tracking-wider">Connect:</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-stone-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-stone-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              aria-label="Email Contact"
              className="p-2 text-stone-600 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Animated Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
            {/* Outer decorative ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-indigo-500 rounded-full opacity-20 blur-xl animate-pulse" />

            {/* Floating Morph Picture Container */}
            <div className="w-full h-full relative overflow-hidden rounded-full border-4 border-white shadow-2xl FloatingAnimation bg-stone-200">
              <Image
                alt="Mr. Abid Akash Profile"
                src="/MrAbidAkash.jpg"
                fill
                priority
                sizes="(max-width: 768px) 300px, 360px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
