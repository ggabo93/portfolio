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
    "w-full bg-transparent border-b border-[rgba(255,255,255,0.1)] text-[#F5F5F3] font-sans text-[14px] py-3 placeholder:text-[#5A5A57] focus:outline-none focus:border-[#6E9BFF] transition-colors duration-200";

  return (
    <section id="contact" className="py-section px-6 md:px-12">
      <div className="max-w-[1180px] mx-auto">
        <ScrollReveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-[#8C8C88] uppercase mb-8">
            Contacto
          </div>
          <h2 className="font-sans text-display-lg font-extrabold tracking-[-0.03em] text-[#F5F5F3] leading-[0.95] mb-8">
            Trabajemos juntos.
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#8C8C88] leading-[1.6] mb-12 max-w-[480px]">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6E9BFF] text-[#0A0A0A] font-sans text-[13px] font-medium px-7 py-3.5 rounded-[5px] hover:opacity-85 transition-opacity duration-200 disabled:opacity-50"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
              </button>
              {status === "sent" && (
                <span className="font-mono text-[11px] text-[#6E9BFF]">Mensaje enviado. Te respondo pronto.</span>
              )}
              {status === "error" && (
                <span className="font-mono text-[11px] text-[#D97575]">Hubo un error. Probá de nuevo más tarde.</span>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
