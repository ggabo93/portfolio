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
      "Una financiera de Córdoba capturaba leads por WhatsApp manual y gestionaba solicitudes en una planilla de Excel sin estructura. Sin visibilidad del pipeline, los leads se perdían y no había forma de medir conversión.",
    idea:
      "Landing que simula el préstamo en tiempo real y convierte el interés en un lead estructurado, más un panel admin con pipeline visual, actualización en tiempo real y exports para que el equipo opere desde un solo lugar.",
    result:
      "Sitio en producción en teciprestamos.com.ar. Panel admin con dashboard de KPIs, tabla de leads con Realtime (sin polling), exports CSV/Excel/PDF, emails transaccionales automáticos al equipo y al solicitante, rate limiting por IP y autenticación segura. El equipo pasó de perder leads en WhatsApp a tener visibilidad completa del pipeline.",
    whatIWouldImprove:
      "Agregar un CMS headless para que el cliente edite las tasas y condiciones sin necesidad de código. Implementar WhatsApp Business API oficial para automatizar el seguimiento post-solicitud. Conectar con un CRM externo para escalar el pipeline.",
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
        question: "¿Cómo trasladar la identidad visual del cliente al código?",
        chosen: "Traducir el PDF de branding (paleta, tipografías, logo) provisto por un diseñador a design tokens reutilizables en Tailwind",
        rejected: "Definir colores y fuentes a criterio propio",
        reason: "El cliente ya había invertido en identidad visual — mi trabajo era implementarla con precisión, no reinventarla.",
      },
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
    hoursInvested: 60,
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
    slug: "capitl",
    number: "02",
    name: "Capitl",
    tagline: "SaaS interno de gestión de préstamos, cobranza y caja para una financiera.",
    category: "saas",
    status: "production",
    problem:
      "La operación completa —clientes, préstamos, cuotas, mora, represtamistas y caja— se gestionaba en un Excel desestructurado. Sin fórmulas consistentes, sin historial confiable: cuando el volumen creció, los pagos se perdían, la caja no cerraba y calcular la mora era manual.",
    idea:
      "Reemplazar el Excel por un SaaS interno con módulos dedicados: alta de clientes, wizard de préstamos multi-paso, seguimiento de cuotas con mora automática, cobranza, caja diaria multi-moneda ARS/USD y gestión de represtamistas con comisiones separadas.",
    result:
      "Sistema en producción con 7 módulos completos. El cálculo de mora, las comisiones de represtamistas y el balance de caja que antes tomaban horas de trabajo manual en Excel ahora son automáticos e instantáneos. La operación pasó de un Excel compartido a un sistema con roles, historial y trazabilidad completa.",
    whatIWouldImprove:
      "Agregar notificaciones push para cobranzas vencidas sin necesidad de ingresar al sistema. Exportar reportes de caja por período para contabilidad. Dashboard con curva de mora histórica y proyección de cartera.",
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
    hoursInvested: 100,
    startedAt: "2026-04-01",
    shippedAt: "2026-05-01",
  },
  {
    slug: "celestina",
    number: "03",
    name: "Celestina",
    tagline: "APP de gestión + bot de WhatsApp para una distribuidora de agua.",
    category: "gestión",
    status: "production",
    problem:
      "Una distribuidora de agua gestionaba repartos, cuentas de clientes, inventario, caja y comisiones de repartidores en un Excel desestructurado. Sin automatización: los clientes inactivos se perdían silenciosamente y las deudas vencidas se descubrían tarde o nunca.",
    idea:
      "App web mobile-first con dos módulos diferenciados: panel administrativo completo para el dueño (clientes, almacén, caja, comisiones e historial) y vista de reparto para el repartidor (ruta del día, confirmación de entregas y registro de pagos). Más un bot de WhatsApp que corre automáticamente: avisa a clientes sin consumo en 14 días y recuerda deudas vencidas.",
    result:
      "App en producción con roles diferenciados. El administrador opera desde el panel con visibilidad total de la operación; el repartidor accede solo a su vista de ruta desde el celular. El bot de WhatsApp corre diariamente en Render con Docker y reemplazó el seguimiento manual. Las cobranzas vencidas y el seguimiento de clientes inactivos que antes dependían de revisar el Excel hoy son automáticos.",
    whatIWouldImprove:
      "Migrar el bot a WhatsApp Business API oficial para eliminar el riesgo de ban. Agregar geotracking en tiempo real para seguimiento de rutas. Convertir la app en una aplicación nativa (React Native) para mejor experiencia del repartidor en campo. Dashboard de métricas de cobranza y eficiencia de rutas.",
    stack: ["React", "Vite", "Supabase", "Node.js", "Docker", "Render"],
    architecture: {
      description: "Frontend React SPA con dos vistas por rol + bot Node.js completamente independiente. Ambos conectados a la misma instancia de Supabase.",
      layers: [
        { name: "Panel Admin", detail: "Vista completa: clientes, almacén, caja, comisiones e historial de repartos. Solo accesible para el rol admin." },
        { name: "Vista Repartidor", detail: "Mobile-first: ruta del día, confirmación de entregas y registro de pagos. Acceso limitado por rol." },
        { name: "Auth + Roles", detail: "Supabase Auth con RPC get_my_role(). El rol determina qué módulos ve cada usuario." },
        { name: "Bot WhatsApp", detail: "Node.js con whatsapp-web.js + Puppeteer. Express dummy server para que Render no lo mate." },
        { name: "Cron + Anti-ban", detail: "node-cron a las 10 AM. Delays aleatorios entre 65s y 150s entre mensajes para evitar bloqueos." },
        { name: "Persistencia", detail: "Docker volume en Render para mantener la sesión de WhatsApp entre reinicios sin re-escanear QR." },
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
