"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Proyectos" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#timeline", label: "Timeline" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.88)] backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-500 text-[#f2f2f2] hover:text-[#c8ff00] transition-colors duration-200">
          GG
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-[#888] hover:text-[#f2f2f2] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:ggabo93@gmail.com"
          className="hidden md:flex items-center gap-1.5 font-mono text-xs text-[#888] hover:text-[#c8ff00] transition-colors duration-200"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />
          disponible
        </a>
      </div>
    </motion.header>
  );
}
