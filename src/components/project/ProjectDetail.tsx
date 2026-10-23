import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ShareButton } from "@/components/ui/ShareButton";
import { projectStatusLabels } from "@/lib/project-status";

interface Props { project: Project }

export function ProjectDetail({ project }: Props) {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
        <nav aria-label="Navegación del proyecto" className="max-w-[1180px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-[#D4D4CE] hover:text-[#6E9BFF]"><ArrowLeft size={15} /> Proyectos</Link>
          <Link href="/#contact" className="text-sm text-[#6E9BFF]">Hablemos de tu proyecto</Link>
        </nav>
      </header>
      <main id="main-content" className="max-w-[1180px] mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <div className="flex items-center gap-5 flex-wrap mb-8 text-sm">
          {project.featured && <p className="text-[#6E9BFF]">Proyecto más reciente</p>}
          <p className="inline-flex items-center gap-2 text-[#B8B8B2]"><span className={`size-1.5 rounded-full ${project.status === "production" ? "bg-[#6E9BFF]" : "bg-[#8C8C88]"}`} />{projectStatusLabels[project.status]}</p>
        </div>
        <h1 className="text-[clamp(3rem,9vw,7rem)] font-semibold leading-none tracking-[-0.05em]">{project.name}</h1>
        {project.nameNote && <p className="text-sm text-[#8C8C88] mt-4">{project.nameNote}</p>}
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-16 mt-9">
          <div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#D4D4CE] text-balance">{project.tagline}</p>
            <Link href="/#contact" className="button-primary mt-7">Consultar por un sistema de gestión <ArrowUpRight size={16} /></Link>
          </div>
          <div className="text-sm text-[#A5A5A0] leading-relaxed md:border-l md:border-white/10 md:pl-8">
            {project.role && <><h2 className="text-sm text-[#F5F5F3] font-medium mb-2">Mi trabajo</h2><p className="mb-5">{project.role}</p></>}
            <div className="flex flex-wrap gap-1.5">{project.stack.map((tech) => <TechTag key={tech} name={tech} variant="muted" />)}</div>
            <div className="flex gap-5 items-center mt-6"><ShareButton />{project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#6E9BFF]">Ver sitio <ExternalLink size={14} /></a>}</div>
          </div>
        </div>

        {project.cover && (
          <figure className="mt-12 md:mt-16">
            <div className={`relative overflow-hidden rounded-lg border border-white/15 ${project.featured ? "aspect-[16/10] bg-[#F5F6F7]" : "aspect-video bg-[#17191D]"}`}>
              <Image src={project.cover.src} alt={project.cover.alt} fill preload sizes="(min-width: 1180px) 1084px, 100vw" className={`object-cover ${project.featured ? "object-top" : ""}`} />
            </div>
            {project.mediaNote && <figcaption className="text-xs text-[#A5A5A0] leading-relaxed mt-4 max-w-[800px]">{project.mediaNote}</figcaption>}
          </figure>
        )}

        <div className="mt-14 md:mt-20">
          {[
            { title: "El problema", text: project.problem },
            { title: "La solución", text: project.idea },
            { title: "El sistema en uso", text: project.result },
          ].map((item) => (
            <section key={item.title} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 border-t border-white/10 py-8 md:py-10">
              <h2 className="text-xl font-medium tracking-tight">{item.title}</h2>
              <p className="text-base md:text-lg leading-relaxed text-[#B8B8B2]">{item.text}</p>
            </section>
          ))}
        </div>

        {project.highlights && (
          <section className="mt-16 md:mt-24" aria-labelledby="capabilities-title">
            <h2 id="capabilities-title" className="text-display-md font-semibold mb-10">Qué permite gestionar</h2>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-8">
              {project.highlights.map((item) => (
                <article key={item.title} className="border-t border-white/15 pt-6">
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-[15px] text-[#A5A5A0] leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.gallery && <ProjectGallery images={project.gallery} />}
        {project.videoDemo && (
          <section className="mt-16 md:mt-24">
            <h2 className="text-display-md font-semibold mb-7">Recorrido del producto</h2>
            <video src={project.videoDemo} controls playsInline preload="none" aria-label={`Recorrido visual de ${project.name}`} className="w-full aspect-video rounded-lg bg-[#141414]" />
            <p className="mt-3 text-xs text-[#A5A5A0]">Recorrido visual sin narración. Las funciones se describen en esta página.</p>
          </section>
        )}

        <section className="mt-16 md:mt-24 border-t border-white/10 pt-10">
          <h2 className="text-display-md font-semibold mb-7">Cómo está construido</h2>
          <p className="text-base text-[#A5A5A0] leading-relaxed max-w-[800px] mb-8">{project.architecture.description}</p>
          <div className="divide-y divide-white/10">
            {project.architecture.layers.map((layer) => (
              <div key={layer.name} className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5">
                <h3 className="text-base font-medium">{layer.name}</h3>
                <p className="text-sm text-[#A5A5A0] leading-relaxed">{layer.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {project.decisions.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight mb-6">Decisiones del proyecto</h2>
            {project.decisions.map((decision) => (
              <details key={decision.question} className="border-t border-white/10 py-5 group">
                <summary className="cursor-pointer text-base font-medium pr-4">{decision.question}</summary>
                <div className="mt-5 space-y-3 text-[15px] text-[#A5A5A0] leading-relaxed max-w-[850px]">
                  <p><span className="text-[#D4D4CE]">Decisión: </span>{decision.chosen}</p>
                  <p><span className="text-[#D4D4CE]">Alternativa evaluada: </span>{decision.rejected}</p>
                  <p>{decision.reason}</p>
                </div>
              </details>
            ))}
          </section>
        )}
        {project.errors.length > 0 && (
          <details className="border-y border-white/10 py-5 mt-8">
            <summary className="cursor-pointer text-base font-medium">Aprendizajes durante el desarrollo</summary>
            <ul className="mt-5 space-y-4 list-disc pl-5 text-sm text-[#A5A5A0] leading-relaxed">{project.errors.map((error) => <li key={error}>{error}</li>)}</ul>
          </details>
        )}
        <section className="mt-14 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-semibold tracking-tight mb-4">Próximos pasos</h2>
          <p className="text-base text-[#A5A5A0] leading-relaxed max-w-[800px]">{project.whatIWouldImprove}</p>
        </section>
        <div className="mt-20 p-7 md:p-10 bg-[#14171C] rounded-lg">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">¿Tu operación necesita una herramienta propia?</h2>
          <p className="text-[#A5A5A0] leading-relaxed mt-4 mb-7 max-w-[640px]">Podemos empezar por el proceso que hoy te lleva más trabajo: clientes, cobros, inventario o seguimiento de la operación.</p>
          <Link href="/#contact" className="button-primary">Contame qué necesitás <ArrowUpRight size={16} /></Link>
        </div>
        <Link href="/#projects" className="inline-flex items-center gap-2 mt-10 text-sm text-[#A5A5A0] hover:text-[#6E9BFF]"><ArrowLeft size={15} /> Todos los proyectos</Link>
      </main>
    </>
  );
}
