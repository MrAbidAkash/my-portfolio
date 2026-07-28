"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiCopy, FiCheck, FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { useState } from "react";

const ConnectSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "mrabidakash@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialPills = [
    { label: "GITHUB", href: "https://github.com", icon: FiGithub },
    { label: "LINKEDIN", href: "https://linkedin.com/in/mrabidakash", icon: FiLinkedin },
    { label: "TWITTER", href: "https://twitter.com", icon: FiTwitter },
    { label: "EMAIL ME", href: `mailto:${email}`, icon: FiMail },
  ];

  return (
    <section className="py-12 w-full space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Direct Email & Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-8"
        >
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-600 font-semibold">
              STAY CONNECTED
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
              Let&apos;s connect <br /> and start a project
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Whether you need a full-stack web app built from scratch, technical leadership, or developer consulting, my inbox is always open.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-stone-100">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 text-lg sm:text-xl font-bold text-stone-900 hover:text-teal-600 transition-colors"
              >
                <span>{email}</span>
                <span className="p-1.5 rounded-full bg-stone-900 text-white">
                  <FiArrowUpRight className="w-4 h-4" />
                </span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full text-xs font-mono font-medium transition-colors cursor-pointer"
              >
                {copied ? <FiCheck className="w-3.5 h-3.5 text-teal-600" /> : <FiCopy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Social Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-6 bg-gradient-to-br from-teal-600 via-teal-700 to-indigo-800 text-white p-8 sm:p-10 rounded-3xl shadow-md flex flex-col justify-between space-y-8 relative overflow-hidden"
        >
          <div className="space-y-2 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-200">
              SOCIAL NETWORKS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">Follow My Journey</h3>
            <p className="text-teal-100 text-sm max-w-md">
              Check out my latest code repositories, technical articles, and design updates across social platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10 pt-4">
            {socialPills.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-xs sm:text-sm shadow-sm hover:bg-white hover:text-stone-900 transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                <FiArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectSection;
