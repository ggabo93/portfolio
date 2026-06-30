import { learnings } from "@/lib/data/learnings";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const categoryLabel: Record<string, string> = {
  technical: "técnico",
  product: "producto",
  process: "proceso",
  mindset: "mindset",
};

export function Learnings() {
  return (
    <section className="py-section px-6 md:px-16 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
          Aprendizajes
        </div>
        <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-normal tracking-[-0.02em] text-[#1C1C1A] mb-16">
          Lo que aprendí.
        </h2>
      </ScrollReveal>

      <div className="divide-y divide-[#E5E4E0]">
        {learnings.map((item, i) => (
          <ScrollReveal key={item.id} delay={0.04 + i * 0.06}>
            <div className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 py-8 hover:bg-[#F7F6F3] -mx-2 px-2 transition-colors duration-200">
              <div className="pt-0.5">
                <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#8A8A85]">
                  {categoryLabel[item.category]}
                </span>
                <p className="font-mono text-[10px] text-[#C0BFBA] mt-1">{item.date}</p>
              </div>
              <div>
                <h3 className="font-sans font-500 text-[#1C1C1A] text-[15px] mb-2 group-hover:text-[#2D5A3D] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="font-sans text-[14px] text-[#6B6B66] leading-[1.76] font-light">
                  {item.body}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
