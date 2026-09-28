"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiEye,
  FiFileText,
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiBriefcase,
  FiAward,
  FiLayers,
  FiExternalLink,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiBriefcase,
    title: "3+ Years Engineering Experience",
    desc: "Hands-on experience architecting scalable ERP platforms, distributed microservices, and cross-platform desktop & mobile apps.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack & Hardware Systems",
    desc: "Proficient in React, Next.js, Node.js, PostgreSQL, Redis, Python, and ZKTeco biometric TCP/IP hardware synchronization.",
  },
  {
    icon: FiAward,
    title: "Google Certified Specializations",
    desc: "Google Cybersecurity Specialization and Google Data Analytics Specialization credentials.",
  },
  {
    icon: FiCheckCircle,
    title: "ATS-Optimized & Recruiter Ready",
    desc: "Structured 2-page document formatted for high readability, clean typography, and automated applicant tracking systems.",
  },
];

const ResumeSection = () => {
  const [copied, setCopied] = useState(false);
  const resumeUrl = "/Resume_Abidur_Rahman.pdf";

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const fullUrl = `${window.location.origin}${resumeUrl}`;
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="resume" className="py-12 space-y-10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            CURRICULUM VITAE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
            Download My Resume
          </h2>
        </div>
        <p className="text-stone-600 text-sm max-w-md">
          A comprehensive breakdown of my software engineering experience, production architectures, technical competencies, and verified credentials.
        </p>
      </div>

      {/* Main Feature Container */}
      <div className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/10 overflow-hidden">
        {/* Subtle background glow accents */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-indigo-500/10 to-transparent pointer-events-none rounded-full blur-2xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 to-transparent pointer-events-none rounded-full blur-2xl" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Key Highlights & Download Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-mono text-teal-300 border border-white/15">
                <FiFileText className="w-3.5 h-3.5" />
                <span>PDF Format • 2 Pages • ~70 KB</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Abidur Rahman (Mr.AbidAkash)
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Full-Stack Software Developer specializing in resilient distributed systems, enterprise ERP/HRM platforms, biometric hardware integrations, and modern web applications.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5 hover:bg-white/[0.08] transition-colors"
                  >
                    <div className="flex items-center gap-2 text-teal-400 font-semibold text-xs sm:text-sm">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary Direct Download Button */}
              <a
                href={resumeUrl}
                download="Resume_Abidur_Rahman.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-stone-950 font-bold text-sm rounded-full shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5 transition-all duration-200 group cursor-pointer"
              >
                <FiDownload className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Secondary View Online Button */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-full border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <FiEye className="w-4 h-4 text-teal-300" />
                <span>Preview Online</span>
                <FiExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* Copy Direct Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 bg-transparent hover:bg-white/10 text-stone-300 hover:text-white font-medium text-xs rounded-full border border-white/15 transition-all duration-200 cursor-pointer"
                title="Copy direct link to resume"
              >
                {copied ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-teal-400 font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Mock Document Card Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="relative w-full max-w-sm group"
            >
              {/* Decorative stacked shadow card behind */}
              <div className="absolute inset-0 bg-stone-700/50 rounded-2xl rotate-2 translate-x-2 translate-y-2 pointer-events-none transition-transform group-hover:rotate-3 group-hover:translate-x-3 group-hover:translate-y-3" />

              {/* Main Document Preview Card */}
              <div className="relative bg-[#fcfbf9] text-stone-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-stone-200/90 overflow-hidden">
                {/* Top Document Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-mono font-bold uppercase rounded tracking-wider flex items-center gap-1">
                    <FiFileText className="w-3 h-3" /> PDF
                  </span>
                </div>

                {/* Simulated Document Content */}
                <div className="space-y-4 text-left">
                  {/* Name and Title */}
                  <div className="space-y-1">
                    <h4 className="text-xl font-bold tracking-tight text-stone-900 leading-snug">
                      Abidur Rahman
                    </h4>
                    <p className="text-xs font-semibold text-teal-700 font-mono">
                      Full-Stack Software Developer
                    </p>
                    <p className="text-[11px] text-stone-500">
                      Dhaka, Bangladesh • mr.abidakash@gmail.com
                    </p>
                  </div>

                  {/* Summary preview */}
                  <div className="space-y-1 pt-2 border-t border-stone-100">
                    <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-stone-400">
                      Professional Summary
                    </p>
                    <p className="text-[11px] text-stone-600 leading-relaxed line-clamp-3">
                      With 3+ years of hands-on experience designing resilient distributed systems, enterprise ERP/HRM platforms, and cross-platform applications. Skilled in building high-performance backends (Node.js, PostgreSQL, MongoDB, Redis) and modern frontends (React, Next.js, TypeScript).
                    </p>
                  </div>

                  {/* Experience item preview */}
                  <div className="space-y-1 pt-2 border-t border-stone-100">
                    <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-stone-400">
                      Latest Experience
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-800">Software Developer</span>
                      <span className="text-[10px] font-mono text-stone-500">Nov 2024 – Present</span>
                    </div>
                    <p className="text-[11px] font-medium text-teal-700">SkillersZone LTD, Bangladesh</p>
                    <p className="text-[11px] text-stone-500 line-clamp-2">
                      • Engineered scalable ERP platform with biometric TCP/IP sync, payroll automation, and telemetry monitoring.
                    </p>
                  </div>

                  {/* Core skills mini tags */}
                  <div className="pt-2 border-t border-stone-100 space-y-1.5">
                    <p className="text-[10px] uppercase font-mono font-bold tracking-wider text-stone-400">
                      Key Competencies
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "Python"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 bg-stone-100 text-stone-700 rounded text-[10px] font-mono"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Overlay on Hover */}
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-stone-900/85 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6 text-center cursor-pointer"
                >
                  <div className="p-3 rounded-full bg-teal-500 text-stone-950 shadow-lg">
                    <FiEye className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-bold text-sm">Click to Preview Full Resume</p>
                    <p className="text-stone-300 text-xs">Opens PDF in a new tab</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 text-white rounded-full text-xs font-mono font-medium">
                    <span>View 2 Pages</span>
                    <FiExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-white rounded-xl shadow-lg border border-stone-200/80 flex items-center gap-1.5 text-xs font-bold text-stone-800">
                <FiCheckCircle className="w-4 h-4 text-teal-600" />
                <span>Verified 2026</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
