"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export function ShareButton() {
  const [status, setStatus] = useState("");
  async function share() {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        setStatus("Enlace copiado");
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) setStatus("Copiá el enlace desde la barra del navegador");
    }
  }
  return <div><button type="button" onClick={share} className="inline-flex items-center gap-2 text-sm text-[#D4D4CE] hover:text-[#6E9BFF]"><Share2 size={14} /> Compartir</button><span role="status" className="block text-xs text-[#A5A5A0] mt-1">{status}</span></div>;
}
