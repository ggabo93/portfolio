"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-end px-6 md:px-12 pb-14 relative overflow-hidden">
      <div className="relative z-10 max-w-[1180px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.14em] text-[#8C8C88] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6E9BFF] animate-pulse-accent" />
          Disponible · Córdoba, Argentina
        </motion.div>

        <h1 className="font-sans text-display-xl font-extrabold text-[#F5F5F3] mb-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="block"
          >
            Construyo
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            className="block"
          >
            productos con IA.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-sans text-[16px] md:text-[18px] text-[#8C8C88] font-normal max-w-[520px] leading-[1.6]"
        >
          Full-stack, de la idea al deploy en producción — con clientes reales en Córdoba, Argentina.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="absolute bottom-9 left-6 md:left-12 flex items-center gap-3"
      >
        <span className="font-mono text-[11px] tracking-[0.12em] text-[#8C8C88] uppercase">Scroll ↓</span>
      </motion.div>
    </section>
  );
}
