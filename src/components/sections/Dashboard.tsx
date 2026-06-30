"use client";

import { dashboardMetrics } from "@/lib/data/metrics";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export function Dashboard() {
  return (
    <section id="dashboard" className="py-section px-6 md:px-16 bg-[#F3F2EF]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
            Números
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-normal tracking-[-0.02em] text-[#1C1C1A] mb-3">
            En cifras.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D5D4D0] border border-[#D5D4D0]">
          {dashboardMetrics.map((metric, i) => {
            const colSpan =
              metric.size === "lg"
                ? "col-span-2"
                : metric.size === "md"
                ? "col-span-2 md:col-span-2"
                : "col-span-1";

            return (
              <ScrollReveal
                key={metric.id}
                delay={0.04 + i * 0.04}
                className={colSpan}
              >
                <div className="bg-[#FAFAF8] px-6 py-5 h-full min-h-[120px] flex flex-col justify-between hover:bg-white transition-colors duration-200">
                  <span className="font-mono text-[10px] tracking-[0.08em] text-[#8A8A85] uppercase">
                    {metric.label}
                  </span>
                  <div>
                    {typeof metric.value === "number" ? (
                      <AnimatedNumber
                        value={metric.value}
                        unit={metric.unit ?? ""}
                        className={`font-serif font-normal text-[#1C1C1A] leading-none ${
                          metric.size === "lg"
                            ? "text-5xl"
                            : metric.size === "md"
                            ? "text-4xl"
                            : "text-3xl"
                        }`}
                      />
                    ) : (
                      <span className="font-serif font-normal text-3xl text-[#1C1C1A] leading-none">
                        {metric.value}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
