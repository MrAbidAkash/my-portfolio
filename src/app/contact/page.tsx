"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { FiMail, FiMapPin, FiClock, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

const contactCards = [
  {
    icon: FiMail,
    title: "Email Address",
    value: "mrabidakash@gmail.com",
    href: "mailto:mrabidakash@gmail.com",
  },
  {
    icon: FiMapPin,
    title: "Current Location",
    value: "Dhaka, Bangladesh (Available Worldwide)",
    href: "#",
  },
  {
    icon: FiClock,
    title: "Working Hours",
    value: "Mon — Fri: 9:00 AM — 6:00 PM (GMT+6)",
    href: "#",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12 py-6">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <span className="inline-block px-4 py-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-semibold uppercase tracking-widest rounded-full">
          START A CONVERSATION
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900">
          Get In Touch
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          I am available for technical consulting, full-stack software development projects, and architectural code reviews.
        </p>
      </motion.div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-start gap-4 group"
          >
            <div className="p-3 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <item.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-400 font-medium">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-stone-900 group-hover:text-teal-700 transition-colors mt-0.5">
                {item.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Interactive Contact Form Component */}
      <ContactForm />

      {/* Direct Social Links */}
      <div className="bg-white p-8 rounded-3xl border border-stone-200/80 shadow-sm text-center space-y-4">
        <h3 className="text-lg font-bold text-stone-900">Connect via Social Channels</h3>
        <div className="flex items-center justify-center space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-teal-600 text-sm font-semibold transition-colors"
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/mrabidakash"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-teal-600 text-sm font-semibold transition-colors"
          >
            <FiLinkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-stone-700 hover:text-teal-600 text-sm font-semibold transition-colors"
          >
            <FiTwitter className="w-4 h-4" />
            <span>Twitter / X</span>
          </a>
        </div>
      </div>
    </div>
  );
}
