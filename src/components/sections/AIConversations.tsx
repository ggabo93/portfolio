"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const conversations = projects
  .filter((p) => p.featuredConversation?.length)
  .map((p) => ({ project: p.name, turns: p.featuredConversation! }));

export function AIConversations() {
  const [active, setActive] = useState(0);
  const convo = conversations[active];

  if (!conversations.length) return null;

  return (
    <section className="py-section px-6 max-w-6xl mx-auto">
      <ScrollReveal>
        <SectionLabel>Conversaciones con IA</SectionLabel>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <p className="text-[#444] text-sm mb-10 max-w-lg">
          Fragmentos reales de las conversaciones que llevaron a las decisiones técnicas más importantes.
        </p>
      </ScrollReveal>

      {/* Tab selector */}
      <ScrollReveal delay={0.15}>
        <div className="flex gap-2 mb-6 flex-wrap">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`font-mono text-[11px] px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                active === i
                  ? "border-[#c8ff00] text-[#c8ff00] bg-[rgba(200,255,0,0.06)]"
                  : "border-[#1a1a1a] text-[#444] hover:border-[#2a2a2a] hover:text-[#888]"
              }`}
            >
              {c.project}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Chat window */}
      <ScrollReveal delay={0.2}>
        <div className="border border-[#1a1a1a] rounded-2xl overflow-hidden bg-[#0a0a0a]">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[#1a1a1a] bg-[#0c0c0c]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#c8ff00]/30" />
            <span className="font-mono text-[10px] text-[#333] ml-2">claude · {convo.project}</span>
          </div>

          {/* Messages */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="p-6 space-y-4"
            >
              {convo.turns.map((turn, i) => (
                <div
                  key={i}
                  className={`flex gap-3 ${turn.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center font-mono text-[9px] ${
                    turn.role === "user"
                      ? "bg-[#1a1a1a] text-[#888]"
                      : "bg-[rgba(200,255,0,0.1)] text-[#c8ff00] border border-[rgba(200,255,0,0.15)]"
                  }`}>
                    {turn.role === "user" ? "GG" : "AI"}
                  </div>
                  <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    turn.role === "user"
                      ? "bg-[#111] text-[#888] rounded-tr-sm"
                      : "bg-[#0f0f0f] border border-[#1a1a1a] text-[#aaa] rounded-tl-sm"
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
