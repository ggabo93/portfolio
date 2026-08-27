"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-section px-6 md:px-12 max-w-[1000px] mx-auto">
      <ScrollReveal>
        <div className="font-mono text-[12px] tracking-[0.14em] text-[#8C8C88] uppercase mb-8">
          01 · Sobre mí
        </div>
        <p className="font-sans text-[24px] md:text-[32px] font-medium leading-[1.3] tracking-[-0.01em] text-[#F5F5F3] mb-8">
          Empecé Ingeniería en Informática y una certificación en Data Analytics. Desde fines de 2025 uso esa base
          junto con <span className="text-[#6E9BFF]">Claude Code como par de trabajo</span> —no como
          autocompletado— para construir productos completos: frontend, backend, base de datos y deploy.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <p className="font-sans text-[16px] text-[#8C8C88] font-normal leading-[1.7] max-w-[720px]">
          Entregué tres apps en producción a clientes reales en Córdoba: una landing + panel admin para una
          fintech, un SaaS de gestión de préstamos y un sistema con bot de WhatsApp para una distribuidora. En
          paralelo estoy construyendo un dashboard comercial para una empresa de frutos secos y convirtiendo ese
          sistema de distribuidora en MiSodería, un SaaS multi-tenant propio con marca, diseño y tests
          automatizados. Todas con código real, decisiones documentadas y errores que aprendí en el camino.
        </p>
      </ScrollReveal>
    </section>
  );
}
