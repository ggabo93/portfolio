"use client";

import { motion } from "framer-motion";

const words = ["Construyo", "productos", "con IA."];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16 max-w-6xl mx-auto">
      <div className="max-w-4xl">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] text-[#444] tracking-[0.2em] uppercase mb-12"
        >
          Gabriel Gonzalez · Product Developer · Córdoba, ARG
        </motion.p>

        {/* Main statement */}
        <h1 className="text-display-xl font-serif-italic leading-[0.92] tracking-[-0.04em] text-[#f2f2f2] mb-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
              className="block"
            >
              {word === "con IA." ? (
                <>
                  con{" "}
                  <span className="text-[#c8ff00]">IA.</span>
                </>
              ) : word}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-lg text-[#555] leading-relaxed max-w-lg font-light"
        >
          Uso IA para construir productos que resuelven problemas reales —{" "}
          <span className="text-[#888]">
            desde el diseño hasta la infraestructura.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="flex items-center gap-6 mt-14"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 font-mono text-[11px] text-[#c8ff00] hover:opacity-70 transition-opacity"
          >
            <span>Ver proyectos</span>
            <span>↓</span>
          </a>
          <a
            href="mailto:ggabo93@gmail.com"
            className="font-mono text-[11px] text-[#444] hover:text-[#888] transition-colors"
          >
            ggabo93@gmail.com
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 right-6 font-mono text-[10px] text-[#2a2a2a] tracking-widest uppercase rotate-90 origin-right"
      >
        scroll
      </motion.div>
    </section>
  );
}
