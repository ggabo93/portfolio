import type { Learning } from "@/lib/types";

export const learnings: Learning[] = [
  {
    id: "1",
    title: "La IA no reemplaza el criterio — lo amplifica",
    body: "Cuanto mejor entiendo el problema, mejores son las soluciones que obtengo con IA. Un prompt vago da una solución vaga. El criterio técnico sigue siendo el diferencial.",
    category: "mindset",
    date: "2026-06",
  },
  {
    id: "2",
    title: "El código serverless tiene estado cero entre requests",
    body: "Aprendido con el rate limiting de TECI. Un Map en memoria no persiste entre instancias de Vercel. Todo estado compartido va a la base de datos.",
    category: "technical",
    date: "2026-05",
  },
  {
    id: "3",
    title: "Entregar rápido no es lo mismo que entregar mal",
    body: "Vibe coding no significa sin arquitectura. Significa arquitectura que puedo implementar solo, rápido, con criterio. El código que no puedo mantener no sirve.",
    category: "process",
    date: "2026-04",
  },
  {
    id: "4",
    title: "El producto importa más que la tecnología",
    body: "Nadie le importa si usé Server Components o no. Le importa si el panel admin le ahorra 2 horas por día. Empiezo siempre por el problema, nunca por el stack.",
    category: "product",
    date: "2026-03",
  },
  {
    id: "5",
    title: "Docker es inevitable cuando deployás un proceso con estado",
    body: "El bot de WhatsApp necesitaba persistir la sesión entre reinicios. Sin volumen Docker, cada deploy pedía re-escanear el QR. Aprendí a pensar en contenedores como unidades de estado.",
    category: "technical",
    date: "2026-04",
  },
];
