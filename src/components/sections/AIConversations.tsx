"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const conversations = projects
  .filter((p) => p.featuredConversation?.length)
  .map((p) => ({ project: p.name, turns: p.featuredConversation! }));

export function AIConversations() {
  const [active, setActive] = useState(0);
  const convo = conversations[active];

  if (!conversations.length) return null;

  return (
    <section className="py-section px-6 md:px-16 max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="font-mono text-[10px] tracking-[0.14em] text-[#8A8A85] uppercase mb-5">
          Conversaciones con IA
        </div>
        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-normal tracking-[-0.015em] text-[#1C1C1A] mb-4">
          Decisiones técnicas reales.
        </h2>
        <p className="font-sans text-[14px] text-[#6B6B66] font-light mb-10 max-w-lg">
          Fragmentos de las conversaciones que llevaron a las arquitecturas elegidas. Sin editar.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex gap-2 mb-6 flex-wrap">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`font-mono text-[11px] px-3.5 py-1.5 border transition-all duration-200 ${
                active === i
                  ? "border-[#2D5A3D] text-[#2D5A3D] bg-[#EEF4F0]"
                  : "border-[#E5E4E0] text-[#8A8A85] hover:border-[#C0BFBA] hover:text-[#4A4A45]"
              }`}
            >
              {c.project}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="border border-[#E5E4E0] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#E5E4E0] bg-[#F3F2EF]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#D5D4D0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#D5D4D0]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#EEF4F0] border border-[#C0D8CA]" />
            <span className="font-mono text-[10px] text-[#A8A8A3] ml-2">claude · {convo.project}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 space-y-4 bg-[#FAFAF8]"
            >
              {convo.turns.map((turn, i) => (
                <div key={i} className={`flex gap-3 ${turn.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-mono text-[9px] ${
                    turn.role === "user"
                      ? "bg-[#E5E4E0] text-[#6B6B66]"
                      : "bg-[#EEF4F0] text-[#2D5A3D] border border-[#C0D8CA]"
                  }`}>
                    {turn.role === "user" ? "GG" : "AI"}
                  </div>
                  <div className={`max-w-[80%] px-4 py-3 text-[13px] leading-relaxed font-light ${
                    turn.role === "user"
                      ? "bg-[#F3F2EF] text-[#6B6B66] rounded-xl rounded-tr-sm"
                      : "bg-white border border-[#E5E4E0] text-[#4A4A45] rounded-xl rounded-tl-sm"
                  }`}>
                    {turn.content}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollReveal>
    </section>
  );
}
