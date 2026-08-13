import type { TimelineEntry } from "@/lib/types";

export const timeline: TimelineEntry[] = [
  {
    date: "2026-08",
    title: "Celestina se convierte en producto",
    description: "Bifurqué el código de Celestina en un SaaS multi-tenant propio: una sola base de datos sirve a todas las distribuidoras futuras, aisladas por RLS, con roles firmados en el token de sesión en vez de leídos del cliente.",
    type: "project",
  },
  {
    date: "2026-07",
    title: "Auditoría de seguridad en TECI∞",
    description: "Con la fintech ya manejando dinero y datos reales, hice una auditoría completa: cerré una brecha de autorización entre la app y la base de datos, y sumé 2FA obligatorio, log de auditoría inmutable y un libro de caja append-only.",
    type: "learning",
  },
  {
    date: "2026-06",
    title: "Portfolio como producto",
    description: "Empiezo a tratar mi presencia online como un producto, no un CV. Este sitio es el resultado.",
    type: "milestone",
  },
  {
    date: "2026-05",
    title: "TECI∞ en producción",
    description: "Primera fintech entregada. Landing + panel admin completo. Incorporé Supabase Realtime (WebSockets con RLS) y emails transaccionales con Resend.",
    type: "project",
  },
  {
    date: "2026-04",
    title: "Bot de WhatsApp en Render",
    description: "Primer deploy dockerizado. whatsapp-web.js + Puppeteer + cron jobs. Aprendí sobre persistencia en containers.",
    type: "project",
  },
  {
    date: "2026-02",
    title: "Capitl en producción",
    description: "Primer SaaS interno real. Reemplazó un Excel desestructurado por un sistema multi-módulo con auth por roles, wizard de préstamos y cálculo automático de mora.",
    type: "project",
  },
  {
    date: "2026-01",
    title: "Adopción de Claude Code",
    description: "Empiezo a usar Claude Code como par de trabajo, no solo como asistente. Cambio de paradigma total.",
    type: "tool",
  },
  {
    date: "2025-12",
    title: "Vibe coding como método",
    description: "Entiendo que el valor no es escribir código, es construir productos. La IA es el multiplicador.",
    type: "milestone",
  },
  {
    date: "2025-09",
    title: "Certificación Data Analytics",
    description: "Python, SQL, Power BI, bases de datos relacionales. La analítica de datos potencia las decisiones de producto.",
    type: "learning",
  },
  {
    date: "2022",
    title: "Full Stack Developer — Coderhouse",
    description: "Carrera de desarrollo web full stack: HTML/CSS, JavaScript, React y Node.js. Primer acercamiento serio al desarrollo web completo.",
    type: "learning",
  },
  {
    date: "2020",
    title: "Ingeniería en Informática",
    description: "2 años de fundamentos: algoritmos, arquitecturas, bases de datos. La base técnica que hace que todo lo demás tenga sentido.",
    type: "learning",
  },
];
