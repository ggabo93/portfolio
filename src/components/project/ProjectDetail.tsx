"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, GitBranch, Clock } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Props {
  project: Project;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase text-[#8A8A85] mb-5">
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-[#E5E4E0] p-7 bg-white ${className}`}>
      {children}
    </div>
  );
}

export function ProjectDetail({ project }: Props) {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1C1A]">

      {/* Back nav */}
      <div className="sticky top-0 z-50 border-b border-[#E5E4E0] bg-[rgba(250,250,248,0.92)] backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-mono text-[11px] text-[#8A8A85] hover:text-[#1C1C1A] transition-colors"
          >
            <ArrowLeft size={13} />
            Volver
          </Link>
          <div className="flex items-center gap-4">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-[#8A8A85] hover:text-[#2D5A3D] transition-colors">
                <ExternalLink size={12} />
                {project.url.replace("https://", "")}
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-[#8A8A85] hover:text-[#1C1C1A] transition-colors">
                <GitBranch size={12} />
                repo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-[10px] text-[#8A8A85] tracking-[0.2em]">{project.number}</span>
            {project.status === "production" && (
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-[#2D5A3D] bg-[#EEF4F0] px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D]" />
                En producción
              </span>
            )}
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#8A8A85]">
              <Clock size={10} />
              {project.hoursInvested}h invertidas
            </span>
          </div>

          <h1 className="font-serif text-[clamp(36px,6vw,80px)] font-normal leading-none tracking-[-0.02em] text-[#1C1C1A] mb-5">
            {project.name}
          </h1>

          <p className="font-sans text-[17px] text-[#6B6B66] leading-[1.7] font-light max-w-2xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Stack */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <TechTag key={t} name={t} variant="accent" />
            ))}
          </div>
        </ScrollReveal>

        {/* Problem / Idea / Result grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E4E0] border border-[#E5E4E0] mb-12">
          {[
            { label: "El problema", content: project.problem },
            { label: "La idea", content: project.idea },
            { label: "El resultado", content: project.result },
          ].map(({ label, content }, i) => (
            <ScrollReveal key={label} delay={i * 0.07}>
              <div className="bg-[#FAFAF8] p-7 h-full">
                <Label>{label}</Label>
                <p className="font-sans text-[13.5px] text-[#4A4A45] leading-[1.7] font-light">{content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture */}
        <ScrollReveal className="mb-6">
          <Card>
            <Label>Arquitectura</Label>
            <p className="font-sans text-[14px] text-[#6B6B66] leading-relaxed font-light mb-6">
              {project.architecture.description}
            </p>
            <div className="space-y-3">
              {project.architecture.layers.map((layer, i) => (
                <div key={i} className="flex gap-5 items-baseline">
                  <span className="font-mono text-[10px] text-[#2D5A3D] w-36 flex-shrink-0">
                    {layer.name}
                  </span>
                  <span className="font-sans text-[13.5px] text-[#6B6B66] leading-relaxed font-light">
                    {layer.detail}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* Decisions */}
        {project.decisions.length > 0 && (
          <ScrollReveal className="mb-6">
            <Card>
              <Label>Decisiones técnicas</Label>
              <div className="space-y-6">
                {project.decisions.map((d, i) => (
                  <div key={i} className={i > 0 ? "pt-6 border-t border-[#E5E4E0]" : ""}>
                    <p className="font-sans text-[14px] text-[#4A4A45] font-medium mb-4">{d.question}</p>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-[#EEF4F0] border border-[rgba(45,90,61,0.15)] p-4">
                        <p className="font-mono text-[9px] text-[#2D5A3D] tracking-widest uppercase mb-2">elegido</p>
                        <p className="font-sans text-[12.5px] text-[#4A4A45] leading-relaxed font-light">{d.chosen}</p>
                      </div>
                      <div className="bg-[#F3F2EF] border border-[#E5E4E0] p-4">
                        <p className="font-mono text-[9px] text-[#A8A8A3] tracking-widest uppercase mb-2">descartado</p>
                        <p className="font-sans text-[12.5px] text-[#8A8A85] leading-relaxed font-light">{d.rejected}</p>
                      </div>
                    </div>
                    <p className="font-sans text-[13px] text-[#8A8A85] leading-relaxed font-light pl-1">
                      ↳ {d.reason}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        )}

        {/* Errors */}
        {project.errors.length > 0 && (
          <ScrollReveal className="mb-6">
            <Card>
              <Label>Errores reales · lo que salió mal</Label>
              <div className="space-y-3">
                {project.errors.map((err, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-[10px] text-[#2D5A3D] mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-[13.5px] text-[#6B6B66] leading-relaxed font-light">{err}</p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        )}

        {/* What I'd improve */}
        <ScrollReveal className="mb-16">
          <Card>
            <Label>Qué mejoraría</Label>
            <p className="font-sans text-[13.5px] text-[#6B6B66] leading-relaxed font-light">
              {project.whatIWouldImprove}
            </p>
          </Card>
        </ScrollReveal>

        {/* Footer nav */}
        <ScrollReveal>
          <div className="flex items-center justify-between pt-8 border-t border-[#E5E4E0]">
            <Link
              href="/#projects"
              className="flex items-center gap-2 font-mono text-[11px] text-[#8A8A85] hover:text-[#1C1C1A] transition-colors"
            >
              <ArrowLeft size={12} />
              Todos los proyectos
            </Link>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] text-[#2D5A3D] hover:opacity-70 transition-opacity"
              >
                Ver en producción
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
