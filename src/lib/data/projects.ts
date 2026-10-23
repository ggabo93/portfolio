import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "gymadmin",
    number: "05",
    name: "GymAdmin",
    tagline: "La operación del gimnasio en un solo sistema: socios, membresías, cobros, caja y control de acceso.",
    featured: true,
    nameNote: "Nombre provisional · Sistema de gestión para gimnasios",
    role: "Relevamiento, diseño de la experiencia, desarrollo full stack, implementación y mantenimiento evolutivo.",
    cover: { src: "/projects/gymadmin/administracion.png", alt: "Administración de GymAdmin con resumen mensual, vencimientos y caja; datos ficticios" },
    mediaNote: "Capturas de la aplicación y sus componentes reales en entornos de prueba. Los nombres, documentos e importes son ficticios; las cifras ilustran la interfaz y no representan resultados del negocio. Fénix es la identidad de una instalación, no la marca de la plataforma.",
    gallery: [
      { src: "/projects/gymadmin/recepcion.png", alt: "Recepción de GymAdmin con búsqueda de socio, indicadores y últimos ingresos de prueba", caption: "Recepción: búsqueda de socios y seguimiento de ingresos. Consultar un documento no registra una asistencia.", width: 1440, height: 1009 },
      { src: "/projects/gymadmin/seguimiento.png", alt: "Componente de administración con saldos, membresías vencidas y próximos vencimientos usando datos ficticios", caption: "Seguimiento operativo: desde una alerta se accede al socio que necesita atención, sin revisar fichas una por una.", width: 1326, height: 508 },
      { src: "/projects/gymadmin/reportes.png", alt: "Reportes de prueba de GymAdmin con cobros, cargos internos, socios y asistencia por período", caption: "Reportes: cobros, cargos internos, saldos y asistencia. Cada indicador distingue la situación actual del período consultado.", width: 1440, height: 1423 },
    ],
    highlights: [
      { title: "Recepción y asistencia", description: "Consulta de socios, vigencia del plan y cupo semanal. El ingreso requiere una acción explícita y confirmación; buscar o abrir una ficha no genera asistencias accidentales." },
      { title: "Membresías y renovaciones", description: "Planes, vigencias y contratos históricos. La renovación conserva las condiciones acordadas y registra el pago en la misma operación, con protección frente a reintentos." },
      { title: "Cobros y caja diaria", description: "Pagos parciales, saldos, comprobantes imprimibles y cierres de caja por medio de pago. El historial permite seguir qué se cobró y qué continúa pendiente." },
      { title: "Seguimiento y reportes", description: "Socios con saldo, membresías vencidas y próximos vencimientos enlazados a sus fichas. Reportes por período, exportación a CSV y registro de actividad para acompañar la administración." },
      { title: "Rutinas compartidas", description: "Plantillas, borradores y versiones publicadas. Cada rutina se puede consultar desde un enlace revocable o descargar como PDF a partir de la misma versión." },
      { title: "Acceso autónomo opcional", description: "Integración con teclado, pantalla de ingreso y controlador de puerta. El acceso local dispone de respaldo de hasta 24 horas con una copia vigente; la administración web sigue necesitando conexión." },
    ],
    category: "gestión",
    status: "production",
    problem: "En un gimnasio, recepción y administración necesitan trabajar con la misma información: quién tiene un plan vigente, quién puede ingresar, qué se cobró y qué queda pendiente. Si membresías, pagos y asistencias no se mantienen consistentes, aparecen renovaciones duplicadas, saldos difíciles de explicar y tareas que dependen de revisar cada ficha por separado.",
    idea: "Construir una herramienta que acompañe el trabajo diario: recepción para consultar y registrar ingresos, fichas para gestionar membresías y pagos, y una administración que reúna caja, alertas e indicadores. Las reglas de vigencia, cupos y cobros se validan en el servidor y cada operación conserva su historial.",
    result: "Sistema en producción en Gimnasio Fénix, con gestión de socios, planes, renovaciones, cobros, caja diaria, rutinas y control de acceso. La administración permite identificar saldos y vencimientos, abrir la ficha correspondiente y exportar información. Los reportes distinguen cargos internos, dinero cobrado, saldos y asistencias por período. El producto continúa evolucionando con mejoras en la recepción, la fecha real de los pagos y el seguimiento de pendientes.",
    whatIWouldImprove: "Medir los tiempos de atención y la utilidad de los reportes en la operación diaria, recoger comentarios de usuarios y priorizar mejoras a partir de esos resultados.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind", "Zod"],
    architecture: {
      description: "Aplicación web en Next.js y TypeScript, con PostgreSQL y Supabase para autenticación y persistencia. El servidor concentra las reglas de negocio y los permisos por gimnasio. Un componente local independiente permite integrar el acceso físico y su respaldo limitado sin entregar permisos administrativos a la terminal.",
      layers: [
        { name: "Operación", detail: "Socios, planes, contratos, asistencias, cobros e historial de movimientos." },
        { name: "Acceso de socios", detail: "Control de acceso vinculado a la gestión de socios y sus membresías." },
        { name: "Integridad", detail: "Renovación y pago atómicos, protección ante reintentos y validaciones de consistencia en la base." },
        { name: "Reportes", detail: "Indicadores calculados en SQL con definiciones explícitas para períodos, saldos y comparaciones; exportaciones para seguimiento operativo." },
        { name: "Permisos", detail: "Sesión y pertenencia por gimnasio, RLS y reportes financieros limitados al administrador." },
      ],
    },
    decisions: [
      {
        question: "¿Cómo evitar que una consulta registre un ingreso por error?",
        chosen: "Separar la búsqueda del socio de la acción de ingreso y revalidar al confirmar.",
        rejected: "Registrar una asistencia automáticamente al consultar el documento.",
        reason: "Recepción necesita poder revisar una ficha sin alterar el historial. Una solicitud de apertura tampoco equivale a un cruce físico confirmado.",
      },
      {
        question: "¿Qué pasa si se repite una renovación o un cobro?",
        chosen: "Operaciones atómicas y protección frente a reintentos, con historial conservado.",
        rejected: "Crear el contrato y su pago como acciones independientes sin control de duplicados.",
        reason: "Una respuesta perdida o un doble clic no deberían generar dos pagos ni dejar una membresía a medio registrar.",
      },
      {
        question: "¿Cómo mantener consistentes los indicadores?",
        chosen: "Calcularlos desde cargos, pagos y asistencias con definiciones documentadas.",
        rejected: "Mezclar saldos actuales con resultados históricos sin distinguir su alcance.",
        reason: "Cada indicador debe mostrar qué mide, qué período utiliza y cómo puede verificarse contra los registros de origen.",
      },
    ],
    errors: [],
    startedAt: "2026-09-30",
  },
  {
    slug: "teci-prestamos",
    number: "01",
    name: "TECI∞ Préstamos",
    cover: { src: "/projects/teci/hero.png", alt: "Presentación de TECI Préstamos y su sistema de gestión" },
    gallery: [
      { src: "/projects/teci/gallery-1.png", alt: "Vista del producto TECI Préstamos", caption: "Captación y seguimiento de solicitudes.", width: 1600, height: 900 },
      { src: "/projects/teci/gallery-2.png", alt: "Panel de gestión de TECI Préstamos", caption: "Administración de la operación crediticia.", width: 1600, height: 900 },
    ],
    videoDemo: "/videos/teci.mp4",
    tagline: "Plataforma fintech de originación y gestión de préstamos (LOS + LMS) para una financiera argentina.",
    category: "fintech",
    status: "paused",
    problem:
      "Una financiera de Córdoba se lanzaba desde cero y no tenía ningún canal digital: sin landing, sin captura de leads, sin evaluación crediticia y sin forma de gestionar préstamos más allá de un Excel y WhatsApp informal. La alternativa del mercado era alquilar un software de gestión para financieras con licencia mensual y contrato de permanencia — pagando por integraciones con terceros que en realidad se pueden contratar directo.",
    idea:
      "Construir a medida la plataforma completa en vez de alquilarla: originación (LOS) —landing que simula el préstamo, captura el lead y corre un filtro crediticio automático— y gestión/servicing (LMS) —alta de préstamos, cronograma de cuotas, cobranza y mora. Con un motor de decisión crediticia que consulta la Central de Deudores del BCRA (API pública y gratuita) para pre-aprobar o rechazar en el momento, y un diseño de cobros agnóstico de proveedor para no quedar atado a ningún gateway.",
    result:
      "Plataforma desarrollada y puesta en producción para captar solicitudes y administrar préstamos, cuotas, cobranzas y caja. Incluye simulador, evaluación inicial, panel de seguimiento y reportes. El proyecto se encuentra actualmente en pausa, con el sitio público en mantenimiento; se conserva como caso de desarrollo e implementación.",
    whatIWouldImprove:
      "Integrar Nosis/Veraz como capa de scoring paga sobre el filtro BCRA gratuito. Enchufar el gateway de débito recurrente (el diseño ya es agnóstico) y firma electrónica para el onboarding. CMS headless para que el cliente edite tasas sin código.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Radix UI", "TanStack Table", "Recharts"],
    services: ["Resend", "Vercel"],
    architecture: {
      description: "Next.js 16 App Router con Server Components puros en la landing y Client Components solo donde hay interactividad. Supabase (PostgreSQL + Auth + Realtime) como backend completo. Módulos separados de originación (LOS) y gestión de préstamos (LMS).",
      layers: [
        { name: "Landing (RSC)", detail: "Server Components puros, zero JS en el HTML inicial" },
        { name: "Credit Decisioning", detail: "Filtro BCRA Central de Deudores: construye el CUIL desde DNI+sexo, consulta la API pública y auto-rutea el lead. Corre sincrónico con fallback seguro para responder al cliente en el momento" },
        { name: "Loan Management", detail: "Función SQL atómica genera préstamo + cronograma de cuotas. Campos de cobro agnósticos de gateway (metodo_cobro / gateway) para no atarse a un proveedor" },
        { name: "API Routes", detail: "POST /api/solicitud con rate limiting por IP; /api/prestamos y /api/cuotas con service client + auth sobre tablas con RLS sin políticas públicas" },
        { name: "Supabase Realtime", detail: "Panel admin actualiza la tabla en tiempo real con setAuth fix" },
        { name: "Emails", detail: "Resend con templates extraídos en lib/emails/, enviados en after() para no sumar latencia" },
        { name: "Seguridad & Auditoría", detail: "2FA (TOTP) obligatorio para el panel admin, log de auditoría inmutable por cada acción sensible, libro de caja append-only (las anulaciones se revierten con un asiento nuevo, nunca se borra), CAPTCHA anti fuerza-bruta en el login" },
      ],
    },
    decisions: [
      {
        question: "¿Comprar un software de gestión para financieras o construirlo a medida?",
        chosen: "Construir a medida y contratar los proveedores externos (buró, débito, firma) directo",
        rejected: "Alquilar un software de gestión para financieras del mercado, con licencia mensual y contrato de permanencia",
        reason: "El 'sistema' que venden es en gran parte un caño hacia terceros (Nosis, procesadoras, AFIP). Construyendo el software propio y contratando a esos proveedores directo, se elimina el margen del intermediario, el lock-in, y se gana control total del dato.",
      },
      {
        question: "¿Dónde correr la evaluación crediticia: en la landing o en el panel?",
        chosen: "Filtro BCRA gratis y sincrónico en la captura + informe pago (Nosis) recién en revisión manual",
        rejected: "Correr el informe pago automáticamente en cada submit de la landing",
        reason: "Un informe pago por cada submit sangra plata en tráfico no calificado y abre la puerta a abuso. El BCRA es gratis y oficial: filtra los casos malos sin costo; el informe caro queda para los leads que valen la pena.",
      },
      {
        question: "¿Cómo hacer rate limiting en Vercel serverless?",
        chosen: "Contar rows por IP en Supabase en la última hora",
        rejected: "In-memory Map",
        reason: "Las Vercel Functions son stateless — cada deploy es una instancia nueva. Un Map en memoria no persiste entre requests.",
      },
      {
        question: "¿Cómo blindar el acceso a datos financieros antes de escalar el negocio?",
        chosen: "Auditoría de seguridad completa apenas el sistema empezó a manejar dinero y datos de clientes reales",
        rejected: "Confiar en que la validación de la aplicación (Next.js) alcanza como única barrera de autorización",
        reason: "La auditoría encontró una brecha real entre lo que la aplicación validaba y lo que la base de datos permitía por debajo: un flujo quedaba protegido en la capa de app pero no en la capa de datos. La autorización tiene que garantizarse en cada capa, no asumirse desde una sola.",
      },
    ],
    errors: [
      "createClient() a nivel módulo causaba 'supabaseUrl is required' en build time. Fix: moverlo dentro del handler.",
      "Supabase Realtime no actualizaba porque faltaba setAuth(session.access_token) antes de suscribir al canal.",
      "El pre-filtro crediticio corría en after() (post-respuesta), así que no podía avisarle al cliente en el momento. Fix: moverlo a sincrónico con timeout y fallback que nunca rechaza ante una falla del BCRA.",
      "La lógica de 2FA obligatorio solo detectaba 'falta completar el segundo factor', no 'todavía no hay ningún factor cargado' — dejaba pasar cuentas sin enrolar. Fix: chequear explícitamente si existe un factor verificado, no solo comparar niveles de autenticación.",
      "El cobro de una cuota no era atómico: dos requests casi simultáneos (doble click, retry de red) podían leer el mismo estado 'pendiente' y cobrarla dos veces antes de que el primero terminara de escribir. Fix: la operación de cobro pasó a ser atómica en la base, no un read-then-write desde la aplicación.",
    ],
    hoursInvested: 150,
    url: "https://teciprestamos.com.ar",
    startedAt: "2026-05-01",
    shippedAt: "2026-06-01",
    featuredConversation: [
      { role: "user", content: "Necesito que el panel se actualice en tiempo real sin recargar la página. Tengo Supabase." },
      { role: "assistant", content: "Usá Supabase Realtime. El detalle que te va a trabar: con RLS activado, el canal WebSocket necesita autenticación. Hay que llamar supabase.realtime.setAuth(session.access_token) antes de suscribirse, sino los eventos no llegan aunque el insert esté permitido." },
      { role: "user", content: "Lo hice pero sigue sin llegar nada. ¿Falta algo del lado de las políticas?" },
      { role: "assistant", content: "Sí. Realtime necesita que el rol autenticado tenga una política SELECT, aunque insertes con el service key. Y la clave es acotarla al admin real, no dejarla abierta a cualquier usuario autenticado: si no, exponés los datos a cualquiera que tenga una sesión." },
    ],
  },
  {
    slug: "misoderia",
    number: "04",
    name: "MiSodería",
    cover: { src: "/projects/misoderia/hero.png", alt: "Capturas de MiSodería en escritorio y celular" },
    gallery: [
      { src: "/projects/misoderia/gallery-1.png", alt: "Administración de MiSodería", caption: "Clientes, cuentas y operación desde el panel administrativo.", width: 1600, height: 900 },
      { src: "/projects/misoderia/gallery-2.png", alt: "Vista móvil de MiSodería para repartidores", caption: "Ruta y registro de entregas desde el celular.", width: 1200, height: 1200 },
    ],
    videoDemo: "/videos/misoderia.mp4",
    tagline: "Gestión para distribuidoras de agua y soda: clientes, abonos, inventario, rutas y cobranzas, con información separada por empresa.",
    category: "saas",
    status: "building",
    problem:
      "Celestina resolvía la logística de un solo cliente. Escalar el negocio a una segunda o tercera distribuidora con ese mismo código significaba clonar el proyecto y levantar un deploy y una base de Supabase nuevos por cada una — sin aislamiento real entre clientes y con cada bug o feature multiplicado por N instancias a mantener. Y como producto sin marca ni diseño propio, tampoco había nada presentable para mostrarle a un cliente nuevo.",
    idea:
      "Fork de Celestina reescrito como SaaS multi-tenant real —una sola base de datos y un solo deploy sirven a todas las distribuidoras, aisladas entre sí por Row Level Security— y relanzado como producto con nombre propio: MiSodería. Tenancy y rol viajan firmados en el token de sesión vía un Custom Access Token Hook, con un motor de facturación server-side (pg_cron) y un panel de operador de plataforma sin acceso directo a datos de tenants. Sobre esa base, un rediseño visual premium completo y una suite de tests automatizados sobre la lógica de negocio más sensible: la plata.",
    result:
      "Producto multi-tenant funcional y ya rebrandeado como MiSodería, con logo y sistema de diseño propio. Rediseño premium completo —inspirado en Linear/Stripe, con tema claro/oscuro real— sobre las cuatro superficies del producto: panel admin, vista del repartidor, panel de plataforma y versión mobile (11 pantallas). Un mismo repartidor puede tener ruta, caja e historial separados dentro de la misma empresa multi-tenant. Los flujos de contraseña se endurecieron: cambio obligatorio en el primer login tras un alta o un reset, y el admin de cada distribuidora puede resetear la contraseña de sus propios repartidores sin pedirme ayuda. La operación de rutas prioriza la venta directa y permite agrupar el recorrido administrativo por repartidor. La facturación granula cada cobro en abono, adicional y extras, y el catálogo de productos ahora se puede vender en cualquier entrega, no solo en Venta Directa. Y lo más importante para un sistema que maneja plata de terceros: se sumó una suite de tests con Vitest que cubre el motor de facturación (facturar_cliente, sincronizar_mensualidades, absorción de crédito), aislamiento entre tenants por RLS e idempotencia del cron — cada caso de test cita la regla de negocio que protege, para saber qué se rompió si alguna vez falla.",
    whatIWouldImprove:
      "Flujo de self-service para que una distribuidora nueva se dé de alta sola, sin intervención manual del operador. Panel de planes/facturación para que la comercialización sea autogestionada, no manual por mi parte. Sumar cobertura de tests end-to-end sobre los flujos de UI, no solo sobre la lógica de negocio pura.",
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Tailwind", "Vitest"],
    services: ["OneSignal"],
    architecture: {
      description: "Fork de Celestina reescrito para multi-tenancy real: misma base de código de producto, pero con aislamiento de datos por empresa, roles inyectados server-side, un sistema de diseño propio (MiSodería) y una suite de tests automatizados sobre la lógica de negocio crítica.",
      layers: [
        { name: "Tenancy", detail: "Custom Access Token Hook inyecta empresa_id y rol en el JWT al login — RLS los lee directo del token, no de una tabla que el cliente pueda falsear." },
        { name: "RLS", detail: "Cada tabla de negocio filtra por empresa_id = empresa_actual() con USING y WITH CHECK — una empresa no puede leer ni escribir filas de otra." },
        { name: "Funciones SECURITY DEFINER", detail: "Las funciones de negocio que reciben un id como parámetro (ej. facturación) verifican explícitamente que ese id sea de la empresa de quien llama, porque dentro de una SECURITY DEFINER RLS no se aplica solo." },
        { name: "Facturación", detail: "pg_cron dispara facturacion_diaria() una vez por día, recorre todas las empresas activas y genera la deuda de los clientes con abono mensual." },
        { name: "Panel de plataforma", detail: "El operador no lee tablas de negocio directo — todo pasa por una Edge Function que valida sus permisos contra plataforma_admins." },
        { name: "Diseño", detail: "Sistema visual propio (MiSodería): monocromo con un único acento, tema claro/oscuro funcional, rediseñado en admin, mobile, vista repartidor y panel de plataforma." },
        { name: "Testing", detail: "Vitest sobre el motor de facturación, absorción de crédito, aislamiento RLS entre tenants e idempotencia del cron diario — cada test cita la regla de negocio documentada que protege." },
      ],
    },
    decisions: [
      {
        question: "¿Clonar el código por cada cliente nuevo o construir multi-tenancy real?",
        chosen: "Una sola base de datos y un solo deploy para todas las empresas, aisladas por RLS",
        rejected: "Seguir el patrón de Celestina: un proyecto de Supabase y un deploy por cliente",
        reason: "Clonar no escala: cada bug hay que arreglarlo N veces, cada feature hay que desplegarla N veces. Multi-tenant real significa un solo lugar donde mantener el producto.",
      },
      {
        question: "¿Dónde inyectar el rol y la empresa del usuario?",
        chosen: "Custom Access Token Hook — quedan firmados en el JWT",
        rejected: "Leerlos de una tabla o de localStorage en cada request",
        reason: "Si el rol se lee de un lugar que el cliente controla, se puede falsificar. Firmado en el token, el backend confía en el mismo valor que usa RLS del lado del servidor.",
      },
      {
        question: "¿Qué testear primero en un producto que recién arranca a escribir tests?",
        chosen: "La lógica de facturación y liquidación de dinero, antes que la UI",
        rejected: "Empezar por tests de componentes o end-to-end",
        reason: "Un bug visual se nota enseguida; un bug de facturación se nota un mes después, cuando la caja no cierra. El riesgo más caro de no testear es el que toca plata.",
      },
    ],
    errors: [
      "Dentro de una función SECURITY DEFINER, RLS no se aplica automáticamente aunque la tabla tenga políticas — hubo que agregar un chequeo explícito de que el id recibido por parámetro pertenece a la empresa de quien llama, en cada función de negocio que toca datos por id.",
      "empresa_actual() explotaba cuando el JWT no traía claims (sesión vieja, token sin refrescar) en vez de simplemente no matchear ninguna fila. Fix: manejar el caso de claims vacíos explícitamente, cubierto ahora por un test de aislamiento RLS.",
      "Las mensualidades ya abonadas podían revertirse a 'pendiente' si la deuda total del cliente se recalculaba después. Fix: la sincronización respeta los meses ya saldados en vez de recorrerlos todos de nuevo.",
    ],
    hoursInvested: 120,
    startedAt: "2026-07-17",
  },
  {
    slug: "capitl",
    number: "02",
    name: "Capitl",
    tagline: "Gestión interna para una financiera: clientes, préstamos, cuotas, mora y caja en pesos y dólares.",
    category: "saas",
    status: "production",
    problem:
      "A diferencia de una financiera que arranca de cero, ésta ya operaba a volumen —pero todo el back-office (clientes, préstamos, cuotas, mora, represtamistas y caja multi-moneda) vivía en un Excel desestructurado. Sin fórmulas consistentes ni historial confiable: los pagos se perdían, la caja no cerraba y la mora se calculaba a mano. No era un problema de captar clientes, sino de operar los que ya tenían.",
    idea:
      "Reemplazar el Excel por un SaaS interno enfocado en el servicing y la tesorería (no en la captación): alta de clientes, wizard de préstamos multi-paso, seguimiento de cuotas con mora automática, cobranza, caja diaria multi-moneda ARS/USD y gestión de represtamistas con comisiones separadas. Es el back-office puro, sin canal público.",
    result:
      "Sistema en producción con 7 módulos completos. El cálculo de mora, las comisiones de represtamistas y el balance de caja multi-moneda que antes tomaban horas de trabajo manual en Excel ahora son automáticos e instantáneos. La operación pasó de un Excel compartido a un sistema con roles, historial y trazabilidad completa.",
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
    tagline: "Gestión de una distribuidora de agua: pedidos, inventario, reparto, cuentas corrientes y seguimiento de cobranzas.",
    category: "gestión",
    status: "production",
    problem:
      "Una distribuidora de agua gestionaba repartos, cuentas de clientes, inventario, caja y comisiones de repartidores en un Excel desestructurado. Sin automatización: los clientes inactivos se perdían silenciosamente y las deudas vencidas se descubrían tarde o nunca.",
    idea:
      "App web mobile-first con dos módulos diferenciados: panel administrativo completo para el dueño (clientes, almacén, caja, comisiones e historial) y vista de reparto para el repartidor (ruta del día, confirmación de entregas y registro de pagos). Más un bot de WhatsApp que corre automáticamente: avisa a clientes sin consumo en 14 días y recuerda deudas vencidas.",
    result:
      "App en producción con roles diferenciados. El administrador opera desde el panel con visibilidad total de la operación; el repartidor accede solo a su vista de ruta desde el celular. El bot de WhatsApp corre diariamente en Render con Docker y reemplazó el seguimiento manual. Las cobranzas vencidas y el seguimiento de clientes inactivos que antes dependían de revisar el Excel hoy son automáticos. Iteración constante desde el lanzamiento: historial global de transacciones, filtro por mes para ver quién debe qué período puntual, y una corrección de un bug de coma flotante que bloqueaba retiros de caja del repartidor cuando el monto no cerraba exacto. La programación mensual de entregas contempla el día preferido del cliente y la última entrega confirmada, y se reprograma cuando cambia esa preferencia. También se sumó un registro independiente para la planta llenadora externa que le provee los bidones al cliente, con su propio stock separado del inventario general. Después: fecha de instalación editable como ancla fija del ciclo de facturación mensual (antes se recalculaba y corría la fecha de cobro), comisión de repartidor configurable por cliente en vez de un porcentaje fijo global, y baja definitiva de clientes cuando hace falta borrar en vez de solo pausar.",
    whatIWouldImprove:
      "Migrar el bot a WhatsApp Business API oficial para eliminar el riesgo de ban. Agregar geotracking en tiempo real para seguimiento de rutas. Convertir la app en una aplicación nativa (React Native) para mejor experiencia del repartidor en campo. Dashboard de métricas de cobranza y eficiencia de rutas.",
    stack: ["React", "Vite", "Supabase", "Node.js"],
    services: ["Docker", "Render"],
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
      "Un bug de precisión de coma flotante en JavaScript hacía que un retiro de caja del repartidor se bloqueara cuando el monto disponible no cerraba con exactitud matemática. Fix: redondeo explícito antes de comparar montos, en vez de comparar floats crudos.",
      "El recalculo automático de mensualidades podía 'desmarcar como pagado' un mes que ya estaba saldado, si se disparaba después de un pago parcial. Fix: la sincronización deja en paz los meses ya cerrados en vez de recorrerlos todos de nuevo.",
    ],
    hoursInvested: 145,
    startedAt: "2026-03-01",
    shippedAt: "2026-04-01",
  },
];
