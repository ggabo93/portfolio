import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="px-6 md:px-12 pt-36 md:pt-48 pb-16 md:pb-24">
      <div className="max-w-[1180px] mx-auto">
        <p className="flex items-center gap-3 text-sm text-[#A5A5A0] mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6E9BFF]" />
          Gabriel González · Desarrollador de sistemas de gestión
        </p>
        <h1 className="text-[clamp(2.8rem,7.4vw,7rem)] leading-[1.02] tracking-[-0.055em] font-semibold max-w-[1100px] text-balance">
          Herramientas para<br className="hidden sm:block" /> gestionar mejor.
        </h1>
        <div className="grid md:grid-cols-[1fr_auto] gap-9 md:gap-20 items-end mt-10 md:mt-14">
          <div>
            <p className="text-base md:text-xl leading-relaxed text-[#A5A5A0] max-w-[640px]">
              Desarrollo sistemas que ordenan la operación de un negocio:
              clientes, cobros, inventario y reportes. Del relevamiento a la puesta
              en producción, con seguimiento y mejoras sobre el uso real.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="button-primary">Ver proyectos <ArrowDown size={16} /></a>
              <a href="#contact" className="button-secondary">Hablemos de tu negocio <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <p className="text-sm text-[#8C8C88] md:text-right leading-relaxed">
            Córdoba, Argentina<br />
            <Link href="/#about" className="text-[#D4D4CE] underline underline-offset-4 decoration-white/20 hover:text-[#6E9BFF]">Procesos, datos y desarrollo</Link>
          </p>
        </div>
        <div className="flex flex-wrap gap-x-9 gap-y-3 border-t border-white/10 pt-6 mt-12 md:mt-16 text-sm text-[#A5A5A0]">
          <span>Gestión de clientes y membresías</span>
          <span>Cobros y cuentas corrientes</span>
          <span>Operaciones y reportes</span>
        </div>
      </div>
    </section>
  );
}
