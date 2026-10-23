import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/lib/types";
import { projectStatusLabels } from "@/lib/project-status";

function Status({ project }: { project: Project }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-[#C5C5BF]">
      <span className={`h-1.5 w-1.5 rounded-full ${project.status === "production" ? "bg-[#6E9BFF]" : "bg-[#A5A5A0]"}`} />
      {projectStatusLabels[project.status]}
    </span>
  );
}

export function Projects() {
  const featured = projects.find((project) => project.featured);
  const others = projects.filter((project) => project !== featured);

  return (
    <section id="projects" className="px-6 md:px-12 pb-section max-w-[1276px] mx-auto">
      <div className="flex justify-between items-end gap-6 flex-wrap mb-9 pt-8 border-t border-white/10">
        <h2 className="text-display-md font-semibold">Proyectos de gestión</h2>
        <p className="text-sm text-[#8C8C88]">Sistemas construidos para operaciones reales</p>
      </div>
      {featured && (
        <article className="featured-project overflow-hidden rounded-xl border border-white/15 bg-[#14171C] mb-12">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="p-7 md:p-10 lg:py-14 flex flex-col items-start">
              <div className="flex flex-wrap items-center gap-5 mb-9">
                <p className="text-sm text-[#6E9BFF]">Proyecto más reciente</p>
                <Status project={featured} />
              </div>
              <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.04em]">{featured.name}</h3>
              <p className="text-xs text-[#8C8C88] mt-3">{featured.nameNote}</p>
              <p className="text-lg md:text-xl leading-relaxed text-[#D4D4CE] mt-7 max-w-md">{featured.tagline}</p>
              <ul className="space-y-3 mt-7 text-sm text-[#A5A5A0]">
                <li>Recepción y control de acceso de socios</li>
                <li>Membresías, renovaciones y cobros</li>
                <li>Caja, vencimientos y reportes</li>
              </ul>
              <Link href={`/projects/${featured.slug}`} className="button-primary mt-9">
                Conocer el proyecto <ArrowUpRight size={17} />
              </Link>
            </div>
            <Link href={`/projects/${featured.slug}`} aria-label="Ver el caso de GymAdmin" className="block relative bg-[#222830] p-5 md:p-9 lg:pt-16 lg:pr-0 lg:pb-0 overflow-hidden group">
              <div className="flex gap-1.5 rounded-t-lg bg-[#303740] p-3" aria-hidden="true">
                <span className="size-1.5 rounded-full bg-white/25" /><span className="size-1.5 rounded-full bg-white/25" /><span className="size-1.5 rounded-full bg-white/25" />
              </div>
              {featured.cover && <div className="relative aspect-[1.35] lg:aspect-auto lg:h-full min-h-[230px] overflow-hidden bg-[#F6F7F8] rounded-b-lg lg:rounded-none">
                <Image src={featured.cover.src} alt={featured.cover.alt} fill sizes="(min-width: 1024px) 620px, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>}
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 px-7 md:px-10 py-5 border-t border-white/10 text-xs text-[#A5A5A0]">
            <span>Diseño, desarrollo e implementación</span>
            <span>Next.js / TypeScript / PostgreSQL</span>
            <span>Capturas con datos de demostración</span>
          </div>
        </article>
      )}
      <div className="grid md:grid-cols-2 gap-x-7 gap-y-10">
        {others.map((project) => (
          <article key={project.slug} className="group">
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#17191D] border border-white/10">
                {project.cover ? (
                  <Image src={project.cover.src} alt={project.cover.alt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                    <span className="text-sm text-[#8C8C88]">{project.category === "saas" ? "Gestión financiera" : "Distribución y reparto"}</span>
                    <div>
                      <p className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-[-0.04em]">{project.name}</p>
                      <p className="text-sm text-[#A5A5A0] mt-4 max-w-sm leading-relaxed">{project.slug === "capitl" ? "Clientes · Préstamos · Cuotas · Caja" : "Pedidos · Inventario · Repartos · Cobranzas"}</p>
                    </div>
                    <p className="text-xs text-[#8C8C88]">Sistema de gestión en producción</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center gap-4 mt-5">
                <h3 className="text-2xl font-semibold tracking-tight group-hover:text-[#6E9BFF] transition-colors">{project.name}</h3>
                <ArrowUpRight size={20} className="text-[#8C8C88] group-hover:text-[#6E9BFF]" />
              </div>
              <div className="mt-3"><Status project={project} /></div>
              <p className="text-[15px] text-[#A5A5A0] leading-relaxed mt-3">{project.tagline}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.stack.slice(0, 4).map((tech) => <TechTag key={tech} name={tech} variant="muted" />)}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
