"use client";

import { dashboardMetrics } from "@/lib/data/metrics";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export function Dashboard() {
  return (
    <section id="dashboard" className="py-section px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionLabel>Dashboard</SectionLabel>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p className="text-[#333] text-sm font-mono mb-10">
          // datos estáticos · arquitectura lista para conectar a APIs reales
        </p>
      </ScrollReveal>

      {/* Bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {dashboardMetrics.map((metric, i) => {
          const colSpan = metric.size === "lg" ? "col-span-2" : metric.size === "md" ? "col-span-1 md:col-span-2" : "col-span-1";

          return (
            <ScrollReveal
              key={metric.id}
              delay={0.05 + i * 0.04}
              className={colSpan}
            >
              <div className="border border-[#1a1a1a] rounded-2xl p-6 bg-[#0c0c0c] h-full min-h-[120px] flex flex-col justify-between hover:border-[#242424] transition-colors duration-300">
                <span className="font-mono text-[10px] text-[#333] tracking-wide uppercase">
                  {metric.label}
                </span>
                <div className="flex items-end gap-1">
                  {typeof metric.value === "number" ? (
                    <AnimatedNumber
                      value={metric.value}
                      unit={metric.unit ?? ""}
                      className={`font-sans font-600 text-[#e8e8e8] leading-none ${
                        metric.size === "lg" ? "text-5xl" : metric.size === "md" ? "text-4xl" : "text-3xl"
                      }`}
                    />
                  ) : (
                    <span className="font-sans font-600 text-3xl text-[#e8e8e8] leading-none">
                      {metric.value}
                    </span>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
