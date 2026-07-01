"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechTag } from "@/components/ui/TechTag";

export function Projects() {
  return (
    <section id="projects" className="py-section px-6 md:px-16 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="flex justify-between items-baseline mb-20 gap-6 flex-wrap">
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-normal tracking-[-0.02em] text-[#1C1C1A]">
            Proyectos entregados
          </h2>
          <span className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase">
            {projects.length} proyectos · 2025–2026
          </span>
        </div>
      </ScrollReveal>

      <div className="space-y-0 divide-y divide-[#E5E4E0]">
        {projects.map((project, i) => (
          <ScrollReveal key={project.slug} delay={0.05 + i * 0.07}>
            <Link href={`/projects/${project.slug}`} className="group block py-14">
              <div className="flex flex-col md:flex-row gap-12">
                {/* Left col */}
                <div className="w-full md:w-[200px] flex-shrink-0">
                  <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-3">
                    {project.number}
                  </div>
                  <h3 className="font-serif text-[40px] font-normal text-[#1C1C1A] tracking-[-0.01em] leading-none mb-3 group-hover:text-[#2D5A3D] transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.status === "production" && (
                    <div className="inline-flex items-center gap-1.5 bg-[#EEF4F0] px-2.5 py-1.5">
                      <div className="w-1.5 h-1.5 bg-[#2D5A3D] rounded-full" />
                      <span className="font-mono text-[10px] text-[#2D5A3D] tracking-[0.06em] uppercase">
                        Producción
                      </span>
                    </div>
                  )}
                  {project.status === "building" && (
                    <div className="inline-flex items-center gap-1.5 bg-[#F3F0E5] px-2.5 py-1.5">
                      <div className="w-1.5 h-1.5 bg-[#B8963E] rounded-full" />
                      <span className="font-mono text-[10px] text-[#B8963E] tracking-[0.06em] uppercase">
                        En desarrollo
                      </span>
                    </div>
                  )}
                </div>

                {/* Center col */}
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-[15px] text-[#4A4A45] leading-[1.74] font-light mb-8 max-w-xl">
                    {project.problem}
                  </p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Problema", content: project.problem.slice(0, 80) + "…" },
                      { label: "Solución", content: project.idea.slice(0, 80) + "…" },
                      { label: "Resultado", content: project.result.slice(0, 80) + "…" },
                    ].map(({ label, content }) => (
                      <div key={label}>
                        <div className="font-mono text-[10px] tracking-[0.1em] text-[#8A8A85] uppercase mb-2">
                          {label}
                        </div>
                        <p className="font-sans text-[12.5px] text-[#6B6B66] leading-[1.68] font-light">
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                </div>

                {/* Right col: metric strip */}
                <div className="flex-shrink-0 flex flex-col gap-1 w-full md:w-auto">
                  <div className="border border-[#E5E4E0] grid grid-cols-2 md:grid-cols-1 gap-px bg-[#E5E4E0]">
                    <div className="bg-[#FAFAF8] px-5 py-4">
                      <div className="font-serif text-[28px] font-normal text-[#1C1C1A] leading-none">
                        {project.hoursInvested}h
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.08em] text-[#8A8A85] uppercase mt-1">
                        Invertidas
                      </div>
                    </div>
                    <div className="bg-[#FAFAF8] px-5 py-4">
                      <div className="font-serif text-[28px] font-normal text-[#1C1C1A] leading-none">
                        {project.stack.length}
                      </div>
                      <div className="font-mono text-[9px] tracking-[0.08em] text-[#8A8A85] uppercase mt-1">
                        Tecnologías
                      </div>
                    </div>
                    {project.url && (
                      <div className="bg-[#FAFAF8] px-5 py-4 col-span-2 md:col-span-1">
                        <div className="font-mono text-[10px] text-[#2D5A3D] truncate">
                          ↗ {project.url.replace("https://", "")}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-end mt-6">
                <ArrowUpRight
                  size={18}
                  className="text-[#C0BFBA] group-hover:text-[#2D5A3D] transition-colors duration-200"
                />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
