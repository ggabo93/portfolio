"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="py-section px-6 md:px-16 bg-[#1C1C1A] relative overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="hidden md:block absolute bottom-0 right-8 font-serif-italic select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(140px, 22vw, 280px)", color: "#FAFAF8", opacity: 0.04 }}
      >
        GG
      </div>

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="font-mono text-[10px] tracking-[0.14em] text-[#5A5A57] uppercase mb-7">
            Contacto
          </div>
          <h2 className="font-serif text-[clamp(40px,7vw,100px)] font-normal tracking-[-0.025em] text-[#FAFAF8] leading-[0.92] mb-11">
            Trabajemos<br />
            <em className="font-serif-italic text-[#2D5A3D]">juntos.</em>
          </h2>
          <p className="font-sans text-[16px] text-[#8A8A85] font-light leading-[1.68] mb-12 max-w-[480px]">
            Contame sobre tu proyecto o idea y lo convertimos en un producto real.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:ggabo93@gmail.com"
              className="inline-flex items-center gap-2 bg-[#2D5A3D] text-[#FAFAF8] font-sans text-[13px] px-7 py-3.5 hover:bg-[#225239] transition-colors duration-200"
            >
              ggabo93@gmail.com →
            </a>
            <a
              href="https://linkedin.com/in/gogabriel7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#3A3A38] text-[#8A8A85] font-sans text-[13px] px-7 py-3.5 hover:border-[#6B6B68] hover:text-[#D0CFCB] transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
