"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-6 py-3.5 bg-white/80 backdrop-blur-md rounded-full border border-stone-200/80 shadow-sm transition-shadow hover:shadow-md">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-stone-900 group">
            Mr.<span className="text-teal-600 transition-colors group-hover:text-teal-500">AbidAkash</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-stone-100/80 p-1 rounded-full border border-stone-200/50">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-stone-900 bg-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-200/50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Call CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-900 hover:bg-teal-600 text-white text-xs font-semibold rounded-full transition-all duration-200 shadow-sm group cursor-pointer"
            >
              <span>Book a Call</span>
              <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-stone-700 hover:text-black focus:outline-none"
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pt-2"
          >
            <nav className="flex flex-col bg-white/95 backdrop-blur-lg rounded-2xl p-4 border border-stone-200 shadow-xl space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                      isActive
                        ? "bg-teal-50 text-teal-700 font-bold"
                        : "text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-center py-3 bg-stone-900 text-white text-sm font-semibold rounded-xl hover:bg-teal-600 transition-colors"
              >
                Book a Call
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
