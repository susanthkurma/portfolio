"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
      
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-white font-medium">
          <Link href="#about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="#certifications" className="hover:text-cyan-400 transition">
            Certifications
          </Link>

          <Link href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <Link
            href="#about"
            className="block px-6 py-3 text-white hover:bg-slate-800"
          >
            About
          </Link>

          <Link
            href="#skills"
            className="block px-6 py-3 text-white hover:bg-slate-800"
          >
            Skills
          </Link>

          <Link
            href="#projects"
            className="block px-6 py-3 text-white hover:bg-slate-800"
          >
            Projects
          </Link>

          <Link
            href="#contact"
            className="block px-6 py-3 text-white hover:bg-slate-800"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}