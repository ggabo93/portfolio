"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Stack" },
  { href: "#timeline", label: "Experiencia" },
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
          ? "bg-[rgba(250,250,248,0.92)] backdrop-blur-md border-b border-[#E5E4E0]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-sans text-[15px] font-500 text-[#1C1C1A] tracking-[-0.01em]">
          Gabriel González
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] text-[#8A8A85] hover:text-[#1C1C1A] transition-colors duration-200 tracking-[0.01em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:ggabo93@gmail.com"
          className="hidden md:flex items-center gap-1.5 font-mono text-[11px] text-[#6B6B66] hover:text-[#2D5A3D] transition-colors duration-200 uppercase tracking-[0.08em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]" />
          disponible
        </a>
      </div>
    </motion.header>
  );
}
