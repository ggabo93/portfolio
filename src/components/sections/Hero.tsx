"use client";

import { motion } from "framer-motion";
import { currentProject } from "@/lib/data/projects";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-6 md:px-16 pt-24 pb-20 relative overflow-hidden">

      {/* Watermark */}
      <div
        aria-hidden
        className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 font-serif-italic select-none pointer-events-none"
        style={{ fontSize: "clamp(160px, 27vw, 400px)", fontWeight: 300, fontStyle: "normal", color: "#1C1C1A", opacity: 0.035, lineHeight: 1 }}
      >
        GG
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-mono text-[11px] tracking-[0.14em] text-[#8A8A85] uppercase mb-7"
        >
          Product Developer · Vibe Coding desde 2025
        </motion.div>

        <h1 className="font-serif text-[clamp(52px,11vw,158px)] font-normal leading-[0.92] tracking-[-0.025em] text-[#1C1C1A] mb-16">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="block"
          >
            Gabriel
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="block font-serif-italic text-[#2D5A3D]"
          >
            González.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.92 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-[#E5E4E0] pt-7 gap-8"
        >
          <p className="font-sans text-[clamp(15px,1.5vw,18px)] text-[#4A4A45] font-light max-w-[500px] leading-[1.68]">
            Construyo productos reales usando IA como copiloto — desde la idea hasta el deploy en producción. Cuatro apps entregadas a clientes reales en Córdoba, Argentina.
          </p>
          <div className="text-left md:text-right flex-shrink-0">
            <div className="font-mono text-[10px] tracking-[0.12em] text-[#8A8A85] uppercase mb-1.5">
              Construyendo ahora
            </div>
            <div className="font-sans text-[15px] text-[#1C1C1A]">{currentProject.name}</div>
            <div className="font-sans text-[14px] text-[#8A8A85] mt-0.5">Córdoba, Argentina</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="hidden md:flex absolute bottom-9 left-16 items-center gap-3"
      >
        <div className="w-9 h-px bg-[#D0CFC9]" />
        <span className="font-mono text-[10px] tracking-[0.12em] text-[#A8A8A3] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
