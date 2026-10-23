"use client";

import { useRef } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import type { Project } from "@/lib/types";

export function ProjectGallery({ images }: { images: NonNullable<Project["gallery"]> }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const fullImage = useRef<HTMLImageElement>(null);
  const caption = useRef<HTMLParagraphElement>(null);

  function openImage(item: (typeof images)[number]) {
    if (!dialog.current || !fullImage.current || !caption.current) return;
    fullImage.current.src = item.src;
    fullImage.current.alt = item.alt;
    caption.current.textContent = item.caption;
    dialog.current.showModal();
  }

  return (
    <section className="mt-16 md:mt-24" aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="text-display-md font-semibold mb-4">El producto por dentro</h2>
      <p className="text-sm text-[#A5A5A0] mb-9">Seleccioná una captura para verla en detalle.</p>
      <div className="space-y-10">
        {images.map((item) => (
          <figure key={item.src}>
            <button type="button" onClick={() => openImage(item)} aria-label={`Ampliar: ${item.alt}`} className="block w-full relative group overflow-hidden rounded-lg bg-[#F5F6F7] border border-white/15 cursor-zoom-in">
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1180px) 1084px, 100vw" className="w-full h-auto" />
              <span aria-hidden="true" className="absolute top-4 right-4 bg-[#0A0A0A]/85 text-white p-2.5 rounded-full"><ZoomIn size={18} /></span>
            </button>
            <figcaption className="mt-4 text-sm leading-relaxed text-[#A5A5A0] max-w-[820px]">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <dialog ref={dialog} aria-label="Captura ampliada del producto" className="fixed inset-0 m-auto max-w-[96vw] max-h-[94svh] w-[1400px] p-0 rounded-lg bg-[#14171C] text-[#F5F5F3] border border-white/20 backdrop:bg-black/85" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="sticky top-0 z-10 flex justify-between items-center gap-5 p-4 bg-[#14171C] border-b border-white/10">
          <p ref={caption} className="text-sm text-[#C5C5BF]" />
          <button type="button" autoFocus aria-label="Cerrar captura ampliada" onClick={() => dialog.current?.close()} className="p-2 shrink-0 rounded-full hover:bg-white/10"><X size={22} /></button>
        </div>
        {/* Original local screenshots remain readable at their full width. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={fullImage} alt="" className="block w-full h-auto bg-[#F5F6F7]" />
      </dialog>
    </section>
  );
}
