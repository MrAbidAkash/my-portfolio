/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Link from "next/link";
// components/Header.js

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className=" top-0 w-full  z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 bg-white rounded-3xl mt-5 shadow-sm">
        <div className="text-3xl font-bold">
          <a href="/">Mr.Abidakash</a>
        </div>
        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((t) => (
            <Link key={t} href={t === "Home" ? "/" : `/${t.toLowerCase()}`}>
              <span className="hover:text-blue-600">{t}</span>
            </Link>
          ))}
        </nav>
        <button className="hidden md:block px-4 py-2 bg-black text-white rounded-2xl cursor-pointer">
          Book a Call
        </button>
        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" /* hamburger icon SVG */ />
        </button>
      </div>
      {/* Mobile Menu */}
      {open && (
        <nav className="flex flex-col bg-white md:hidden">
          {["Home", "About", "Projects", "Contact"].map((t) => (
            <Link key={t} href={t === "Home" ? "/" : `/${t.toLowerCase()}`}>
              <span className="py-2 px-4 border-b hover:bg-gray-100">{t}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
