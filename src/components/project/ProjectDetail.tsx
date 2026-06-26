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

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[10px] font-medium tracking-[0.18em] uppercase text-[#444] mb-5">
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-[#1a1a1a] rounded-2xl p-7 bg-[#0c0c0c] ${className}`}>
      {children}
    </div>
  );
}

export function ProjectDetail({ project }: Props) {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f2f2f2]">

      {/* Back nav */}
      <div className="sticky top-0 z-50 border-b border-[#111] bg-[rgba(8,8,8,0.9)] backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-mono text-[11px] text-[#444] hover:text-[#f2f2f2] transition-colors"
          >
            <ArrowLeft size={13} />
            Volver
          </Link>
          <div className="flex items-center gap-3">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-[#444] hover:text-[#c8ff00] transition-colors">
                <ExternalLink size={12} />
                {project.url.replace("https://", "")}
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-[#444] hover:text-[#f2f2f2] transition-colors">
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
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] text-[#333] tracking-[0.2em]">{project.number}</span>
            <span className="font-mono text-[10px] text-[#c8ff00] bg-[rgba(200,255,0,0.06)] border border-[rgba(200,255,0,0.12)] px-2.5 py-1 rounded-full">
              {project.status === "production" ? "↗ producción" : project.status}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#333]">
              <Clock size={10} />
              {project.hoursInvested}h invertidas
            </span>
          </div>

          <h1 className="font-serif-italic text-display-lg text-[#f2f2f2] mb-5">
            {project.name}
          </h1>

          <p className="text-[#555] text-lg leading-relaxed max-w-2xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* Stack */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <TechTag key={t} name={t} variant="accent" />
            ))}
          </div>
        </ScrollReveal>

        {/* Problem / Idea / Result grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
          {[
            { label: "El problema", content: project.problem },
            { label: "La idea", content: project.idea },
            { label: "El resultado", content: project.result },
          ].map(({ label, content }, i) => (
            <ScrollReveal key={label} delay={i * 0.07}>
              <Card className="h-full">
                <SectionTitle>{label}</SectionTitle>
                <p className="text-[#666] text-sm leading-relaxed">{content}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture */}
        <ScrollReveal className="mb-8">
          <Card>
            <SectionTitle>Arquitectura</SectionTitle>
            <p className="text-[#555] text-sm leading-relaxed mb-6">
              {project.architecture.description}
            </p>
            <div className="space-y-2">
              {project.architecture.layers.map((layer, i) => (
                <div key={i} className="flex gap-4 items-baseline">
                  <span className="font-mono text-[10px] text-[#c8ff00] w-32 flex-shrink-0">
                    {layer.name}
                  </span>
                  <span className="text-[#444] text-sm leading-relaxed">
                    {layer.detail}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </ScrollReveal>

        {/* Decisions */}
        {project.decisions.length > 0 && (
          <ScrollReveal className="mb-8">
            <Card>
              <SectionTitle>Decisiones técnicas</SectionTitle>
              <div className="space-y-6">
                {project.decisions.map((d, i) => (
                  <div key={i} className={i > 0 ? "pt-6 border-t border-[#1a1a1a]" : ""}>
                    <p className="text-[#888] text-sm font-medium mb-3">{d.question}</p>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="bg-[rgba(200,255,0,0.04)] border border-[rgba(200,255,0,0.1)] rounded-xl p-4">
                        <p className="font-mono text-[9px] text-[#c8ff00] tracking-widest uppercase mb-2">elegido</p>
                        <p className="text-[#888] text-xs leading-relaxed">{d.chosen}</p>
                      </div>
                      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4">
                        <p className="font-mono text-[9px] text-[#333] tracking-widest uppercase mb-2">descartado</p>
                        <p className="text-[#333] text-xs leading-relaxed">{d.rejected}</p>
                      </div>
                    </div>
                    <p className="text-[#444] text-xs leading-relaxed pl-1">↳ {d.reason}</p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        )}

        {/* Errors */}
        {project.errors.length > 0 && (
          <ScrollReveal className="mb-8">
            <Card>
              <SectionTitle>Errores reales · lo que salió mal</SectionTitle>
              <div className="space-y-3">
                {project.errors.map((err, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-[10px] text-[#c8ff00] mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[#555] text-sm leading-relaxed">{err}</p>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        )}

        {/* What I'd improve */}
        <ScrollReveal className="mb-16">
          <Card>
            <SectionTitle>Qué mejoraría</SectionTitle>
            <p className="text-[#555] text-sm leading-relaxed">{project.whatIWouldImprove}</p>
          </Card>
        </ScrollReveal>

        {/* Footer nav */}
        <ScrollReveal>
          <div className="flex items-center justify-between pt-8 border-t border-[#111]">
            <Link
              href="/#projects"
              className="flex items-center gap-2 font-mono text-[11px] text-[#444] hover:text-[#f2f2f2] transition-colors"
            >
              <ArrowLeft size={12} />
              Todos los proyectos
            </Link>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] text-[#c8ff00] hover:opacity-70 transition-opacity"
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
