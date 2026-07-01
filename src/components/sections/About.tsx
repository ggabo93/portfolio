"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { value: "3", label: "Apps en producción" },
  { value: "4", label: "Clientes reales" },
  { value: "240h", label: "Documentadas" },
  { value: "3", label: "Automatizaciones" },
];

export function About() {
  return (
    <section id="about" className="py-section px-6 md:px-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 md:gap-20">

        {/* Left: stats grid */}
        <div className="w-full md:w-[260px] flex-shrink-0">
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif-italic text-[44px] font-normal text-[#1C1C1A] leading-none">
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.08em] text-[#8A8A85] uppercase mt-1.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: bio */}
        <div className="flex-1">
          <ScrollReveal>
            <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
              Sobre mí
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.1] tracking-[-0.015em] text-[#1C1C1A] mb-9">
              Criterio técnico <em className="font-serif-italic">más</em> velocidad con IA.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="max-w-[560px]">
            <p className="font-sans text-[16px] text-[#4A4A45] leading-[1.78] font-light mb-5">
              Empecé Ingeniería en Informática y, en paralelo, una certificación en Data Analytics (Python, SQL, Power BI). Desde fines de 2025 uso esa base técnica junto con Claude Code como par de trabajo —no como autocompletado— para construir productos completos: frontend, backend, base de datos y deploy.
            </p>
            <p className="font-sans text-[16px] text-[#4A4A45] leading-[1.78] font-light mb-5">
              Entregué tres apps en producción a clientes reales en Córdoba: una landing + panel admin para una fintech, un SaaS de gestión de préstamos y un sistema con bot de WhatsApp para una distribuidora. Además estoy construyendo un dashboard comercial para una empresa de frutos secos. Todas con código real, decisiones documentadas y errores que aprendí en el camino.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
