import { timeline } from "@/lib/data/timeline";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const typeColors = {
  milestone: "#c8ff00",
  project: "#888",
  learning: "#555",
  tool: "#444",
};

export function Timeline() {
  return (
    <section id="timeline" className="py-section px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionLabel>Evolución</SectionLabel>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-[#1a1a1a] hidden md:block" />

        <div className="space-y-8">
          {timeline.map((entry, i) => (
            <ScrollReveal key={i} delay={0.05 + i * 0.06}>
              <div className="flex gap-6 md:gap-12">
                {/* Date */}
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="font-mono text-[10px] text-[#333] tracking-wide">
                    {entry.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden md:flex flex-shrink-0 items-start justify-center w-2 mt-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: typeColors[entry.type] }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="font-sans font-600 text-[#c8c8c8] text-sm mb-1">
                    {entry.title}
                  </h3>
                  <p className="text-[#444] text-sm leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
