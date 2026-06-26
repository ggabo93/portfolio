"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="py-section px-6 max-w-6xl mx-auto">
      <div className="border border-[#1a1a1a] rounded-3xl p-12 md:p-20 bg-[#0c0c0c] text-center">
        <ScrollReveal>
          <span className="font-mono text-[10px] text-[#333] tracking-[0.2em] uppercase block mb-8">
            · disponible para proyectos ·
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-serif-italic text-display-lg text-[#f2f2f2] mb-6 text-balance">
            Hablemos de tu{" "}
            <span className="text-[#c8ff00]">producto.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-[#444] text-base max-w-md mx-auto mb-12 leading-relaxed">
            Si tenés una idea que necesita un producto — no un freelancer que escribe código — escribime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ggabo93@gmail.com"
              className="font-mono text-sm text-[#080808] bg-[#c8ff00] px-8 py-3.5 rounded-xl hover:bg-[#d4ff30] transition-colors duration-200 font-500"
            >
              ggabo93@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/gogabriel7"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-[#555] border border-[#1a1a1a] px-8 py-3.5 rounded-xl hover:border-[#2a2a2a] hover:text-[#888] transition-all duration-200"
            >
              LinkedIn →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
