import { timeline } from "@/lib/data/timeline";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const typeLabel: Record<string, string> = {
  milestone: "Hito",
  project: "Proyecto",
  learning: "Formación",
  tool: "Herramienta",
};

export function Timeline() {
  return (
    <section id="timeline" className="py-section px-6 md:px-16 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
          Trayectoria
        </div>
        <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-normal tracking-[-0.02em] text-[#1C1C1A] mb-16">
          Dónde estuve.
        </h2>
      </ScrollReveal>

      <div className="space-y-0">
        {timeline.map((entry, i) => (
          <ScrollReveal key={i} delay={0.05 + i * 0.06}>
            <div className="flex gap-6 md:gap-12 py-10 border-t border-[#E5E4E0]">
              {/* Date */}
              <div className="w-[100px] flex-shrink-0">
                <span className="font-mono text-[11px] text-[#8A8A85] tracking-[0.04em]">
                  {entry.date}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start gap-4 mb-3 flex-wrap">
                  <h3 className="font-sans text-[20px] font-500 text-[#1C1C1A]">
                    {entry.title}
                  </h3>
                  <span className="font-mono text-[10px] text-[#8A8A85] tracking-[0.06em] uppercase flex-shrink-0">
                    {typeLabel[entry.type] ?? entry.type}
                  </span>
                </div>
                <p className="font-sans text-[14px] text-[#6B6B66] leading-[1.76] font-light max-w-xl">
                  {entry.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
