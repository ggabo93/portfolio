import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "teci-prestamos",
    number: "01",
    name: "TECI∞ Préstamos",
    tagline: "Landing fintech + panel admin completo para una financiera argentina.",
    category: "fintech",
    status: "production",
    problem:
      "Una financiera de Córdoba necesitaba capturar leads online y gestionar sus solicitudes de préstamo sin depender de planillas de Excel y WhatsApps manuales.",
    idea:
      "Un sitio que simula el préstamo en tiempo real y convierte el interés en un lead estructurado, más un panel admin premium que hace que el equipo gestione todo desde un solo lugar.",
    result:
      "Landing en producción en teciprestamos.com.ar. Panel admin con dashboard, KPIs, gráficos, Realtime, exports CSV/Excel/PDF, emails transaccionales automáticos y autenticación.",
    whatIWouldImprove:
      "Agregar un CMS headless para que el cliente edite las tasas sin código. Implementar WhatsApp Business API para automatizar el seguimiento.",
    stack: ["Next.js", "TypeScript", "Supabase", "Resend", "Vercel", "Tailwind"],
    architecture: {
      description: "Next.js 16 App Router con Server Components puros en la landing y Client Components solo donde hay interactividad. Supabase como backend completo.",
      layers: [
        { name: "Landing (RSC)", detail: "Server Components puros, zero JS en el HTML inicial" },
        { name: "Modal", detail: "Lazy-loaded Client Component, solo se descarga cuando el usuario lo abre" },
        { name: "API Routes", detail: "POST /api/solicitud con rate limiting por IP via Supabase" },
        { name: "Supabase Realtime", detail: "Panel admin actualiza la tabla en tiempo real con setAuth fix" },
        { name: "Emails", detail: "Resend con templates extraídos en lib/emails/" },
      ],
    },
    decisions: [
      {
        question: "¿Cómo hacer rate limiting en Vercel serverless?",
        chosen: "Contar rows por IP en Supabase en la última hora",
        rejected: "In-memory Map",
        reason: "Las Vercel Functions son stateless — cada deploy es una instancia nueva. Un Map en memoria no persiste entre requests.",
      },
      {
        question: "¿Usar middleware o verificación en cada route?",
        chosen: "Proxy middleware que verifica Supabase Auth en cada request a /admin",
        rejected: "Verificación manual en cada page",
        reason: "Un solo lugar de verdad para la auth. Si cambia la lógica, se cambia en un archivo.",
      },
    ],
    errors: [
      "createClient() a nivel módulo causaba 'supabaseUrl is required' en build time. Fix: moverlo dentro del handler.",
      "Resend 403 porque usaba subdomain send.teciprestamos.com.ar en lugar del dominio raíz verificado.",
      "Supabase Realtime no actualizaba porque faltaba setAuth(session.access_token) antes de suscribir al canal.",
    ],
    hoursInvested: 120,
    url: "https://teciprestamos.com.ar",
    startedAt: "2026-05-01",
    shippedAt: "2026-06-01",
    featuredConversation: [
      { role: "user", content: "Necesito que el panel de leads se actualice en tiempo real sin recargar la página. Tengo Supabase." },
      { role: "assistant", content: "Usá Supabase Realtime. El problema que vas a tener: con RLS activado, el canal WebSocket necesita autenticación. Tenés que llamar supabase.realtime.setAuth(session.access_token) antes de suscribirte, sino los events no llegan aunque el insert esté permitido." },
      { role: "user", content: "Lo hice pero sigue sin funcionar. Agrego una política SELECT para authenticated?" },
      { role: "assistant", content: "Exacto. Realtime necesita que el usuario autenticado tenga política SELECT en la tabla, aunque uses el service key para insertar. Agregá: CREATE POLICY 'authenticated can select' ON solicitudes FOR SELECT TO authenticated USING (true);" },
    ],
  },
  {
    slug: "prestamos-admin",
    number: "02",
    name: "Préstamos Admin",
    tagline: "SaaS interno de gestión completa para una empresa de préstamos.",
    category: "saas",
    status: "production",
    problem:
      "Una empresa de préstamos manejaba clientes, cuotas, cobranza y caja con planillas. Cuando el volumen creció, perdían pagos y la caja no cerraba.",
    idea:
      "Un sistema interno completo: alta de clientes, wizard de préstamos, seguimiento de cuotas, cobranza, caja diaria y gestión de represtamistas, todo en una sola pantalla.",
    result:
      "SaaS en producción. Módulos: clientes, préstamos, cobranza, cajas, transacciones, represtamistas, mi cuenta. Wizard multi-paso para nuevos préstamos con validación completa.",
    whatIWouldImprove:
      "Agregar notificaciones push para cobranzas vencidas. Exportar reportes de caja por período. Dashboard con tendencia de mora.",
    stack: ["Next.js", "TypeScript", "Supabase", "Shadcn/ui", "Zod", "TanStack Table", "Tailwind"],
    architecture: {
      description: "Next.js App Router con autenticación por rol. Shadcn/ui para los componentes de form. TanStack Table para las tablas con sorting/filtering del lado del cliente.",
      layers: [
        { name: "Auth", detail: "Supabase Auth con roles: admin / operador" },
        { name: "Forms", detail: "React Hook Form + Zod para validación en cada paso del wizard" },
        { name: "Tables", detail: "TanStack Table con filtering, sorting y pagination client-side" },
        { name: "DB", detail: "PostgreSQL en Supabase. RLS por rol de usuario." },
      ],
    },
    decisions: [
      {
        question: "¿Wizard de préstamo en un solo form o multi-step?",
        chosen: "Multi-step con estado local en React",
        rejected: "Un form gigante en una sola pantalla",
        reason: "El volumen de datos por préstamo es grande. En un form largo el usuario se pierde. El wizard guía paso a paso y reduce errores.",
      },
    ],
    errors: [
      "El campo whatsapp era integer en Supabase. Los números argentinos (con código de área) superaban el límite. Fix: cambiar a text + validar longitud en el frontend.",
    ],
    hoursInvested: 80,
    startedAt: "2026-04-01",
    shippedAt: "2026-05-01",
  },
  {
    slug: "celestina",
    number: "03",
    name: "Celestina",
    tagline: "Sistema de gestión + bot de WhatsApp para una distribuidora.",
    category: "gestión",
    status: "production",
    problem:
      "Una distribuidora manejaba repartos, caja y comisiones en papel. Las cobranzas vencidas pasaban desapercibidas y los clientes sin actividad se perdían.",
    idea:
      "App de gestión interna + un bot de WhatsApp que envía mensajes automáticos: seguimiento a clientes sin consumo en 14 días y alertas de deuda vencida.",
    result:
      "App React en producción con módulos de almacén, caja, comisiones, clientes y repartos. Bot deployado en Render con Docker que corre cron jobs diarios.",
    whatIWouldImprove:
      "Migrar el bot a WhatsApp Business API oficial para evitar el riesgo de ban. Agregar dashboard de métricas de cobranza.",
    stack: ["React", "Vite", "Supabase", "Node.js", "Docker", "Render"],
    architecture: {
      description: "Frontend React SPA + bot Node.js completamente independiente. Ambos conectados a la misma instancia de Supabase.",
      layers: [
        { name: "Frontend", detail: "React + Vite SPA. Supabase JS client directo." },
        { name: "Bot", detail: "Node.js con whatsapp-web.js + Puppeteer. Express dummy server para que Render no lo mate." },
        { name: "Cron", detail: "node-cron: checkNotificaciones() todos los días a las 10:00 AM." },
        { name: "Anti-ban", detail: "Delays aleatorios entre 65s y 150s entre mensajes. Nunca dos en el mismo minuto." },
        { name: "Persistencia", detail: "Docker volume en Render para persistir la sesión de WhatsApp entre reinicios." },
      ],
    },
    decisions: [
      {
        question: "¿Cómo evitar que Render mate el proceso del bot?",
        chosen: "Express dummy server que responde en el puerto que Render requiere",
        rejected: "Background Worker de Render",
        reason: "El plan gratuito de Render requiere un puerto HTTP. El Express sirve solo para mantener vivo el proceso.",
      },
    ],
    errors: [
      "Sin el volumen persistente en Render, cada deploy pedía escanear el QR de WhatsApp de nuevo. Fix: disco persistente montado en el path de LocalAuth.",
      "Dos mensajes al mismo cliente en el mismo minuto provocaban ban temporal. Fix: delay aleatorio mínimo de 65 segundos entre envíos.",
    ],
    hoursInvested: 60,
    startedAt: "2026-03-01",
    shippedAt: "2026-04-01",
  },
  {
    slug: "fesh-nuts",
    number: "04",
    name: "Fesh Nuts",
    tagline: "Dashboard comercial para empresa de frutos secos.",
    category: "gestión",
    status: "production",
    problem: "Una empresa de frutos secos necesitaba visualizar sus ventas, clientes y finanzas en un solo lugar.",
    idea: "Dashboard interno con módulos de clientes, ventas y finanzas. React SPA liviana, sin backend pesado.",
    result: "App en producción con 4 módulos: Clients, Dashboard, Finance, Sales. Deploy en Vercel.",
    whatIWouldImprove: "Conectar a una fuente de datos real. Agregar exportación de reportes por período.",
    stack: ["React", "Vite", "Tailwind"],
    architecture: {
      description: "React SPA pura. Estado local, sin backend externo por ahora.",
      layers: [
        { name: "UI", detail: "React + React Router para navegación entre módulos" },
        { name: "Estado", detail: "Estado local por módulo. Listo para conectar a Supabase." },
      ],
    },
    decisions: [],
    errors: [],
    hoursInvested: 20,
    startedAt: "2026-04-15",
    shippedAt: "2026-05-01",
  },
];

export const currentProject = {
  name: "Portfolio personal",
  description: "Este mismo sitio. Construido con Next.js, Framer Motion y mucho criterio.",
  stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"] as const,
  startedAt: "2026-06-26",
};
