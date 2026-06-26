import { learnings } from "@/lib/data/learnings";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categoryLabel = {
  technical: "técnico",
  product: "producto",
  process: "proceso",
  mindset: "mindset",
};

export function Learnings() {
  return (
    <section className="py-section px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionLabel>Aprendizajes</SectionLabel>
      </ScrollReveal>

      <div className="space-y-0 divide-y divide-[#111]">
        {learnings.map((item, i) => (
          <ScrollReveal key={item.id} delay={0.05 + i * 0.06}>
            <div className="group grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-4 md:gap-10 py-8 hover:bg-[#0c0c0c] -mx-4 px-4 rounded-xl transition-colors duration-200">
              <div>
                <span className="font-mono text-[10px] text-[#333] tracking-[0.12em] uppercase">
                  {categoryLabel[item.category]}
                </span>
                <p className="font-mono text-[10px] text-[#2a2a2a] mt-1">{item.date}</p>
              </div>
              <div>
                <h3 className="font-sans font-600 text-[#c8c8c8] text-sm mb-2 group-hover:text-[#f2f2f2] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#444] text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
