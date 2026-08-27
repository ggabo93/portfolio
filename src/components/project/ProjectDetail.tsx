"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Clock, Play } from "lucide-react";
import type { Project } from "@/lib/types";
import { TechTag } from "@/components/ui/TechTag";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Props {
  project: Project;
}

const heroImages: Record<string, string> = {
  "teci-prestamos": "/projects/teci/hero.png",
  misoderia: "/projects/misoderia/hero.png",
};

const galleryImages: Record<string, [string, string]> = {
  "teci-prestamos": ["/projects/teci/gallery-1.png", "/projects/teci/gallery-2.png"],
  misoderia: ["/projects/misoderia/gallery-1.png", "/projects/misoderia/gallery-2.png"],
};

const videoSrc: Record<string, string> = {
  "teci-prestamos": "/videos/teci.mp4",
  misoderia: "/videos/misoderia.mp4",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-[#8C8C88]">
      {children}
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 py-10 border-b border-[rgba(255,255,255,0.1)]">
      <Label>{label}</Label>
      <div className="md:col-span-2">{children}</div>
    </div>
  );
}

function Statement({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[16px] md:text-[19px] text-[#F5F5F3]/90 leading-[1.6] font-normal">{children}</p>
  );
}

export function ProjectDetail({ project }: Props) {
  const image = heroImages[project.slug];
  const gallery = galleryImages[project.slug];
  const video = videoSrc[project.slug];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F3]">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ mixBlendMode: "difference" }}>
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="flex items-center gap-2 font-sans text-[13px] text-[#F5F5F3] hover:opacity-60 transition-opacity"
          >
            <ArrowLeft size={14} />
            Proyectos
          </Link>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-[#F5F5F3] hover:opacity-60 transition-opacity"
            >
              <ExternalLink size={12} />
              ver sitio
            </a>
          )}
        </div>
      </header>

      {/* Header / hero */}
      <div className="relative h-screen min-h-[560px] w-full overflow-hidden">
        {image ? (
          <Image src={image} alt={project.name} fill priority className="object-cover" sizes="100vw" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-[#141414]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-14 max-w-[1180px] mx-auto w-full"
        >
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono text-[11px] text-[#F5F5F3]/70 tracking-[0.2em]">{project.number}</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] ${
                project.status === "production" ? "bg-[rgba(110,155,255,0.14)] text-[#6E9BFF]" : "bg-white/10 text-[#F5F5F3]/70"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === "production" ? "bg-[#6E9BFF]" : "bg-[#F5F5F3]/60"}`} />
              {project.status === "production" ? "En producción" : "En desarrollo"}
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#F5F5F3]/70">
              <Clock size={11} />
              {project.hoursInvested}h invertidas
            </span>
          </div>

          <h1 className="font-sans text-display-xl font-extrabold text-[#F5F5F3] mb-5">{project.name}</h1>
          <p className="font-sans text-[16px] md:text-[19px] text-[#F5F5F3]/70 leading-[1.6] max-w-2xl">
            {project.tagline}
          </p>
        </motion.div>
      </div>

      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Tags */}
        <ScrollReveal className="mb-4">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((t) => (
              <TechTag key={t} name={t} variant="accent" />
            ))}
          </div>
          {project.services && project.services.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.services.map((t) => (
                <TechTag key={t} name={t} variant="muted" />
              ))}
            </div>
          )}
        </ScrollReveal>

        {/* Problema / Solución / Resultado */}
        <div className="mt-12 border-t border-[rgba(255,255,255,0.1)]">
          <ScrollReveal>
            <Row label="Problema">
              <Statement>{project.problem}</Statement>
            </Row>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Row label="Solución">
              <Statement>{project.idea}</Statement>
            </Row>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Row label="Resultado">
              <Statement>{project.result}</Statement>
            </Row>
          </ScrollReveal>
        </div>

        {/* Video demo */}
        <ScrollReveal className="mt-16 mb-16">
          <div className="relative w-full aspect-video rounded-[6px] overflow-hidden surface">
            {video ? (
              <video src={video} controls playsInline preload="metadata" className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                  <Play size={18} className="text-[#8C8C88] ml-0.5" />
                </div>
                <span className="font-mono text-[11px] tracking-[0.1em] text-[#5A5A57] uppercase">
                  Video demo próximamente
                </span>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Gallery */}
        {gallery && (
          <ScrollReveal className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.1)] rounded-[6px] overflow-hidden">
              {gallery.map((src) => (
                <div key={src} className="relative aspect-square bg-[#141414]">
                  <Image src={src} alt={project.name} fill className="object-cover" sizes="(min-width: 768px) 590px, 100vw" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        )}

        {/* Architecture */}
        <ScrollReveal className="mb-4">
          <div className="surface rounded-[6px] p-7 md:p-9">
            <Label>Arquitectura</Label>
            <p className="font-sans text-[14px] text-[#8C8C88] leading-relaxed mt-5 mb-7">
              {project.architecture.description}
            </p>
            <div className="space-y-4">
              {project.architecture.layers.map((layer, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-1.5 md:gap-5 md:items-baseline">
                  <span className="font-mono text-[11px] text-[#6E9BFF] md:w-40 flex-shrink-0">{layer.name}</span>
                  <span className="font-sans text-[13.5px] text-[#8C8C88] leading-relaxed">{layer.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Decisions */}
        {project.decisions.length > 0 && (
          <ScrollReveal className="mb-4">
            <div className="surface rounded-[6px] p-7 md:p-9">
              <Label>Decisiones técnicas</Label>
              <div className="space-y-7 mt-6">
                {project.decisions.map((d, i) => (
                  <div key={i} className={i > 0 ? "pt-7 border-t border-[rgba(255,255,255,0.1)]" : ""}>
                    <p className="font-sans text-[14.5px] text-[#F5F5F3] font-medium mb-4">{d.question}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                      <div className="rounded-[5px] bg-[rgba(110,155,255,0.08)] border border-[rgba(110,155,255,0.2)] p-4">
                        <p className="font-mono text-[9px] text-[#6E9BFF] tracking-widest uppercase mb-2">elegido</p>
                        <p className="font-sans text-[12.5px] text-[#F5F5F3]/80 leading-relaxed">{d.chosen}</p>
                      </div>
                      <div className="rounded-[5px] bg-white/[0.03] border border-[rgba(255,255,255,0.1)] p-4">
                        <p className="font-mono text-[9px] text-[#5A5A57] tracking-widest uppercase mb-2">descartado</p>
                        <p className="font-sans text-[12.5px] text-[#8C8C88] leading-relaxed">{d.rejected}</p>
                      </div>
                    </div>
                    <p className="font-sans text-[13px] text-[#8C8C88] leading-relaxed pl-1">↳ {d.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Errors */}
        {project.errors.length > 0 && (
          <ScrollReveal className="mb-4">
            <div className="surface rounded-[6px] p-7 md:p-9">
              <Label>Errores reales · lo que salió mal</Label>
              <div className="space-y-3 mt-6">
                {project.errors.map((err, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="font-mono text-[10px] text-[#6E9BFF] mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-sans text-[13.5px] text-[#8C8C88] leading-relaxed">{err}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* What I'd improve */}
        <ScrollReveal className="mb-4">
          <div className="surface rounded-[6px] p-7 md:p-9">
            <Label>Qué mejoraría</Label>
            <p className="font-sans text-[13.5px] text-[#8C8C88] leading-relaxed mt-5">
              {project.whatIWouldImprove}
            </p>
          </div>
        </ScrollReveal>

        {/* Footer nav */}
        <ScrollReveal className="mt-12">
          <div className="flex items-center justify-between pt-8 border-t border-[rgba(255,255,255,0.1)]">
            <Link
              href="/#projects"
              className="flex items-center gap-2 font-mono text-[11px] text-[#8C8C88] hover:text-[#F5F5F3] transition-colors"
            >
              <ArrowLeft size={12} />
              Todos los proyectos
            </Link>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[11px] text-[#6E9BFF] hover:opacity-70 transition-opacity"
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
