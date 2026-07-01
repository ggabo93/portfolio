"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: si un bot completó este campo oculto, cortamos acá sin llamar a la API.
    if (data.get("company")) {
      form.reset();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          projectName: data.get("projectName"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent border-b border-[#3A3A38] text-[#FAFAF8] font-sans text-[14px] py-3 placeholder:text-[#5A5A57] focus:outline-none focus:border-[#2D5A3D] transition-colors duration-200";

  return (
    <section id="contact" className="py-section px-6 md:px-16 bg-[#1C1C1A] relative overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="hidden md:block absolute bottom-0 right-8 font-serif-italic select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(140px, 22vw, 280px)", color: "#FAFAF8", opacity: 0.04 }}
      >
        GG
      </div>

      <div className="max-w-6xl mx-auto relative">
        <ScrollReveal>
          <div className="font-mono text-[10px] tracking-[0.14em] text-[#5A5A57] uppercase mb-7">
            Contacto
          </div>
          <h2 className="font-serif text-[clamp(36px,7vw,100px)] font-normal tracking-[-0.025em] text-[#FAFAF8] leading-[0.92] mb-11">
            Trabajemos<br />
            <em className="font-serif-italic text-[#2D5A3D]">juntos.</em>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8A8A85] font-light leading-[1.68] mb-12 max-w-[480px]">
            Contame sobre tu proyecto o idea y lo convertimos en un producto real.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <form onSubmit={handleSubmit} className="max-w-[560px] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {/* Honeypot, oculto para humanos */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <input name="name" required placeholder="Tu nombre" className={inputClass} />
            <input name="projectName" placeholder="Nombre del proyecto" className={inputClass} />
            <input name="email" type="email" required placeholder="Tu email" className={`${inputClass} sm:col-span-2`} />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Contame en qué estás pensando..."
              className={`${inputClass} sm:col-span-2 resize-none`}
            />

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mt-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2D5A3D] text-[#FAFAF8] font-sans text-[13px] px-7 py-3.5 hover:bg-[#225239] transition-colors duration-200 disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
              </button>
              {status === "sent" && (
                <span className="font-mono text-[11px] text-[#2D5A3D]">Mensaje enviado. Te respondo pronto.</span>
              )}
              {status === "error" && (
                <span className="font-mono text-[11px] text-[#B85C5C]">Hubo un error. Probá de nuevo más tarde.</span>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
