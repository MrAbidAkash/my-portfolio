"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-stone-900 via-stone-800 to-black text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Glow effect overlay */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3"
        >
          <span className="inline-block px-4 py-1.5 bg-teal-500/10 text-teal-400 font-mono text-xs uppercase tracking-widest rounded-full border border-teal-500/20">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s build something <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">extraordinary</span> together
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-xl mx-auto">
            Have a project in mind or want to discuss technical strategy? Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-10 p-8 bg-teal-500/10 border border-teal-500/30 rounded-2xl text-center space-y-3"
          >
            <FiCheckCircle className="w-12 h-12 text-teal-400 mx-auto" />
            <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
            <p className="text-stone-300 text-sm">
              Thank you for reaching out. I&apos;ll review your message and get in touch soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-full text-sm font-medium transition-colors"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Project Subject
              </label>
              <input
                type="text"
                placeholder="Web Application / Full-Stack Project / Consultation"
                className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
                Project Overview *
              </label>
              <textarea
                rows={5}
                required
                placeholder="Tell me about your project, goals, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-stone-900/80 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FiSend className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
