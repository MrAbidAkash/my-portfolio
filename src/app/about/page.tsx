"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiAward, FiCode, FiCpu, FiGlobe } from "react-icons/fi";
import Experience from "@/components/Experience";

const skillsCategories = [
  {
    title: "Front-End",
    skills: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "Ant Design"],
  },
  {
    title: "Back-End",
    skills: ["Node.js", "Nest.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "Webhooks"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Desktop",
    skills: ["Python", "Electron.js"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Prisma ORM", "Payload CMS", "Git", "Docker", "Linux", "Coolify", "Dokploy", "GCP", "AWS"],
  },
  {
    title: "Integrations",
    skills: ["Google Maps API", "Google Calendar API", "GoHighLevel CRM"],
  },
];

const values = [
  {
    icon: FiCode,
    title: "Clean & Maintainable Code",
    desc: "Writing self-documenting, type-safe, and modular code structures built for long-term scalability.",
  },
  {
    icon: FiCpu,
    title: "Performance First",
    desc: "Optimizing Core Web Vitals, server side rendering, image loading, and lightweight assets for sub-second page loads.",
  },
  {
    icon: FiGlobe,
    title: "User-Centered Experience",
    desc: "Combining technical functionality with intuitive, modern visual aesthetics and accessible HTML structure.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 py-6">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-semibold uppercase tracking-widest rounded-full">
          ABOUT MR.ABIDAKASH
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Passionate about building software that makes an impact
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          I am a Full-Stack Software Developer dedicated to turning complex problems into elegant, fast, and user-friendly digital products.
        </p>
      </motion.div>

      {/* Bio Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-sm h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-200">
            <Image
              src="/MrAbidAkash.jpg"
              alt="Mr.AbidAkash"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-7 space-y-6 text-stone-600 text-base leading-relaxed"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Crafting code with precision & creative design vision
          </h2>
          <p>
            Hello! I&apos;m Mr.AbidAkash. Over the past 3+ years, I&apos;ve collaborated with startups, high-growth tech companies, and clients worldwide to design and engineer web applications.
          </p>
          <p>
            My core engineering domain centers around the modern JavaScript & TypeScript ecosystem (React, Next.js, Node.js). Whether building ERP platforms, CRM systems, or desktop applications, I focus heavily on component reusability, server rendering performance, and clean architectural design.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
            <div className="flex items-center gap-3">
              <FiAward className="w-6 h-6 text-teal-600" />
              <div>
                <div className="text-lg font-bold text-stone-900">3+ Years</div>
                <div className="text-xs text-stone-500 font-mono">Industry Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="w-6 h-6 text-teal-600" />
              <div>
                <div className="text-lg font-bold text-stone-900">30+ Projects</div>
                <div className="text-xs text-stone-500 font-mono">Delivered Successfully</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
            CORE PRINCIPLES
          </span>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">
            How I Approach Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-4"
            >
              <div className="p-3 w-fit rounded-xl bg-teal-50 text-teal-600">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">{val.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills Matrix */}
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
            TECHNICAL PROFICIENCY
          </span>
          <h2 className="text-3xl font-bold text-stone-900 tracking-tight">
            Skills & Technology Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-4"
            >
              <h3 className="text-base font-bold text-stone-900 pb-2 border-b border-stone-100">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-xs font-mono text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <Experience />

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
              ACADEMIC BACKGROUND
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Education
            </h2>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm">
            <h3 className="text-lg font-bold text-stone-900">Bachelor of Arts, English Language and Literature</h3>
            <div className="text-sm font-semibold text-teal-600 mb-2">Daffodil International University (DIU)</div>
            <div className="text-xs font-mono text-stone-500 mb-4">2019 — 2022 (Incomplete)</div>
            <p className="text-sm text-stone-600 leading-relaxed">
              Completed coursework through Year 2; left program to pursue full‑time software development.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
              PROFESSIONAL CREDENTIALS
            </span>
            <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
              Licenses & Certifications
            </h2>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex flex-col border-b border-stone-100 pb-4">
              <h3 className="text-base font-bold text-stone-900">Google Cybersecurity Specialization</h3>
              <div className="text-sm text-stone-500">Google</div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-base font-bold text-stone-900">Google Data Analytics Specialization</h3>
              <div className="text-sm text-stone-500">Google</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold">Ready to bring your next project to life?</h2>
        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto">
          I&apos;m currently accepting new freelance opportunities and full-time software engineering roles.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold rounded-full transition-all duration-300 cursor-pointer shadow-lg"
        >
          <span>Let&apos;s Work Together</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
