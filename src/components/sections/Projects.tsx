"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechTag } from "@/components/ui/TechTag";

const heroImages: Record<string, string> = {
  "teci-prestamos": "/projects/teci/hero.png",
  misoderia: "/projects/misoderia/hero.png",
};

export function Projects() {
  return (
    <section id="projects" className="py-section px-6 md:px-12 max-w-[1180px] mx-auto">
      <ScrollReveal>
        <div className="flex justify-between items-baseline mb-16 gap-6 flex-wrap">
          <h2 className="font-sans text-display-lg font-extrabold tracking-[-0.02em] text-[#F5F5F3]">
            Proyectos
          </h2>
          <span className="font-mono text-[11px] tracking-[0.1em] text-[#8C8C88] uppercase">
            {projects.length} proyectos · 2025–2026
          </span>
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => {
          const image = heroImages[project.slug];
          return (
            <ScrollReveal key={project.slug} delay={0.05 + i * 0.06}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block h-[88vh] min-h-[560px] overflow-hidden rounded-[6px] surface"
              >
                {image ? (
                  <Image
                    src={image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 1180px, 100vw"
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                    priority={i === 0}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-[#141414] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="relative z-10 flex items-start justify-between p-6 md:p-10">
                  <span className="font-mono text-[12px] tracking-[0.15em] text-[#F5F5F3]/70">
                    {project.number}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] ${
                      project.status === "production"
                        ? "bg-[rgba(110,155,255,0.14)] text-[#6E9BFF]"
                        : "bg-white/10 text-[#F5F5F3]/70"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "production" ? "bg-[#6E9BFF]" : "bg-[#F5F5F3]/60"
                      }`}
                    />
                    {project.status === "production" ? "Producción" : "En desarrollo"}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
                  <h3 className="font-sans text-[32px] md:text-[56px] font-extrabold tracking-[-0.02em] text-[#F5F5F3] leading-none mb-3">
                    {project.name}
                  </h3>
                  <p className="font-sans text-[14px] md:text-[16px] text-[#F5F5F3]/70 max-w-xl mb-5 leading-[1.5]">
                    {project.tagline}
                  </p>
                  <div className="flex items-end justify-between gap-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((t) => (
                        <TechTag key={t} name={t} variant="accent" />
                      ))}
                      {project.stack.length > 4 && (
                        <TechTag name={`+${project.stack.length - 4}`} variant="muted" />
                      )}
                    </div>
                    <ArrowUpRight
                      size={22}
                      className="flex-shrink-0 text-[#F5F5F3]/60 group-hover:text-[#6E9BFF] transition-colors duration-200"
                    />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
