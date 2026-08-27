"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ mixBlendMode: "difference" }}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="font-sans text-[15px] font-semibold text-[#F5F5F3] tracking-[-0.01em]">
          Gabriel González
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[13px] text-[#F5F5F3] hover:opacity-60 transition-opacity duration-200 tracking-[0.01em]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
