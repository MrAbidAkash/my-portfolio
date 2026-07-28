"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-stone-900 text-stone-300 mt-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Abidur<span className="text-teal-400">Rahman</span>
            </Link>
            <p className="text-sm text-stone-400 mt-1">
              Full-Stack Software Developer & UI/UX Craftsman
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-stone-400 hover:text-teal-400 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2.5 bg-stone-800 hover:bg-teal-500/20 hover:text-teal-400 rounded-full transition-all"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/mrabidakash"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 bg-stone-800 hover:bg-teal-500/20 hover:text-teal-400 rounded-full transition-all"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2.5 bg-stone-800 hover:bg-teal-500/20 hover:text-teal-400 rounded-full transition-all"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Abidur Rahman. Built with Next.js, Tailwind CSS & Framer Motion.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-full transition-all text-xs font-mono cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <FiArrowUp className="w-3.5 h-3.5 text-teal-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
