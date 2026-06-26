"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TechTag } from "@/components/ui/TechTag";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-section px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionLabel>Proyectos destacados</SectionLabel>
      </ScrollReveal>

      {/* Featured project — full width editorial */}
      <ScrollReveal delay={0.1}>
        <Link href={`/projects/${featured.slug}`} className="group block mb-2">
          <div className="border border-[#1a1a1a] rounded-2xl p-8 md:p-12 hover:border-[#2a2a2a] transition-colors duration-300 bg-[#0c0c0c]">
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-[10px] text-[#333] tracking-[0.2em]">
                {featured.number}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#c8ff00] bg-[rgba(200,255,0,0.06)] border border-[rgba(200,255,0,0.12)] px-2.5 py-1 rounded-full">
                  {featured.status === "production" ? "↗ producción" : featured.status}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-[#333] group-hover:text-[#c8ff00] transition-colors duration-200"
                />
              </div>
            </div>

            <h2 className="font-serif-italic text-display-md text-[#f2f2f2] mb-4 group-hover:text-[#c8ff00] transition-colors duration-300">
              {featured.name}
            </h2>

            <p className="text-[#555] text-base leading-relaxed max-w-2xl mb-8">
              {featured.problem}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {featured.stack.slice(0, 4).map((t) => (
                  <TechTag key={t} name={t} />
                ))}
              </div>
              {featured.url && (
                <span className="font-mono text-[11px] text-[#444] group-hover:text-[#888] transition-colors">
                  {featured.url.replace("https://", "")}
                </span>
              )}
            </div>
          </div>
        </Link>
      </ScrollReveal>

      {/* Asymmetric grid for the rest */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
        {rest.map((project, i) => (
          <ScrollReveal key={project.slug} delay={0.1 + i * 0.07} className={i === 0 ? "md:col-span-2" : ""}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
            <div className="group border border-[#1a1a1a] rounded-2xl p-7 hover:border-[#2a2a2a] transition-colors duration-300 bg-[#0c0c0c] h-full">
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[10px] text-[#2a2a2a] tracking-[0.2em]">
                  {project.number}
                </span>
                <span className="font-mono text-[10px] text-[#333]">{project.category}</span>
              </div>

              <h3 className="font-sans text-lg font-600 text-[#e0e0e0] mb-3 group-hover:text-[#f2f2f2] transition-colors">
                {project.name}
              </h3>

              <p className="text-[#444] text-sm leading-relaxed mb-6 line-clamp-3">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 3).map((t) => (
                  <TechTag key={t} name={t} variant="muted" />
                ))}
              </div>
            </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
