"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="py-section px-6 md:px-16 bg-[#F3F2EF]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
            Stack real
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-normal tracking-[-0.02em] text-[#1C1C1A] mb-16">
            Con qué construyo.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
          <div>
            <ScrollReveal className="mb-9 pb-9 border-b border-[#D5D4D0]">
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-4">
                Frontend
              </div>
              <p className="font-sans text-[20px] font-light text-[#1C1C1A] leading-[1.5]">
                Next.js · React · TypeScript · Tailwind · Shadcn/ui · Framer Motion
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.06} className="mb-9 pb-9 border-b border-[#D5D4D0]">
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-4">
                Backend &amp; Datos
              </div>
              <p className="font-sans text-[20px] font-light text-[#1C1C1A] leading-[1.5]">
                Supabase · PostgreSQL · Node.js · Zod · React Hook Form · TanStack Table
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-4">
                Infraestructura
              </div>
              <p className="font-sans text-[20px] font-light text-[#1C1C1A] leading-[1.5]">
                Vercel · Render · Docker · Resend · Vite
              </p>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal className="mb-9 pb-9 border-b border-[#D5D4D0]">
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-4">
                Automatización
              </div>
              <p className="font-sans text-[20px] font-light text-[#1C1C1A] leading-[1.5]">
                WhatsApp Web API · Puppeteer · Cron jobs
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.06} className="mb-9 pb-9 border-b border-[#D5D4D0]">
              <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-4">
                Analítica
              </div>
              <p className="font-sans text-[20px] font-light text-[#1C1C1A] leading-[1.5]">
                Python · SQL · Power BI
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="bg-[#1C1C1A] p-8 relative overflow-hidden">
                <div className="font-mono text-[10px] tracking-[0.1em] text-[#5A5A57] uppercase mb-4">
                  Cómo trabajo
                </div>
                <p className="font-serif-italic text-[20px] font-light text-[#FAFAF8] leading-[1.5]">
                  &ldquo;Claude Code como par de trabajo: planificación, arquitectura y debugging real, no solo autocompletado.&rdquo;
                </p>
                <div
                  aria-hidden
                  className="absolute -bottom-7 -right-1.5 font-serif-italic text-[100px] font-light leading-none select-none pointer-events-none"
                  style={{ color: "#2D5A3D", opacity: 0.22 }}
                >
                  ∞
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
