const experience = [
  {
    period: "2025 — Actualidad",
    company: "Trabajo independiente",
    role: "Desarrollo de sistemas de gestión",
    description: "Relevo procesos con los usuarios, diseño bases de datos y construyo aplicaciones completas. Implementación, puesta en producción y mantenimiento de herramientas para gimnasios, financieras y distribución.",
  },
  {
    period: "2024 — Actualidad",
    company: "Celestina",
    role: "Co-fundador · Operaciones y administración",
    description: "Gestión de pedidos, entregas, inventario, cobranzas y atención al cliente. Desarrollé el sistema del negocio a partir de las necesidades de su operación diaria.",
  },
  {
    period: "Sep. 2017 — Feb. 2025",
    company: "Renault",
    role: "Analista y auditor de calidad",
    description: "Más de siete años en control de procesos, análisis de desvíos y seguimiento de incidencias. Elaboración de reportes e indicadores y coordinación con Producción y Calidad hasta el cierre de cada caso.",
  },
];

const education = [
  { title: "Licenciatura en Logística", institution: "Instituto Universitario Aeronáutico", detail: "En curso" },
  { title: "Gestión de Compras y Logística", institution: "Diplomatura · UNC / Mundos E", detail: "En curso" },
  { title: "Data Analytics", institution: "Digital House", detail: "Python, SQL y Power BI" },
  { title: "Full Stack Developer", institution: "Coderhouse", detail: "Desarrollo web" },
  { title: "Metodologías Ágiles y Scrum", institution: "Digital House", detail: "Formación complementaria" },
  { title: "Técnico Mecánico de nivel medio", institution: "Instituto Técnico Renault", detail: "Secundario completo" },
];

export function About() {
  return (
    <section id="about" className="py-section px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <h2 className="text-display-md font-semibold">Sobre mí</h2>
            <p className="text-sm text-[#8C8C88] mt-4">Gabriel González<br />Córdoba, Argentina</p>
            <a href="https://www.linkedin.com/in/gogabriel7/" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-[#6E9BFF] mt-5 underline underline-offset-4">Mi perfil en LinkedIn</a>
          </div>
          <div>
            <p className="text-2xl md:text-[32px] leading-[1.3] tracking-[-0.025em] text-balance">
              Antes de desarrollar sistemas, trabajé con los procesos que esos sistemas tienen que resolver.
            </p>
            <div className="text-base text-[#A5A5A0] leading-relaxed mt-6 space-y-4 max-w-[710px]">
              <p>Mi experiencia combina calidad industrial, gestión de un negocio propio y desarrollo de software. En Renault aprendí a observar procesos, documentar problemas y seguir cada incidencia hasta su resolución. En Celestina, a ocuparme de clientes, pedidos, stock y cobranzas en primera persona.</p>
              <p>Hoy llevo esa mirada a herramientas de gestión: entender cómo se trabaja, ordenar la información y construir una solución que se pueda usar todos los días. Me involucro desde la definición del problema hasta la implementación y las mejoras posteriores.</p>
              <p>Trabajo con Next.js, React, TypeScript y PostgreSQL, junto con SQL, Excel y Power BI para analizar información. Uso IA como apoyo al desarrollo; las decisiones se apoyan en las reglas del negocio, la validación y la experiencia de los usuarios.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-28">
          <h3 className="text-2xl font-semibold tracking-tight mb-8">Experiencia laboral</h3>
          {experience.map((item) => (
            <article key={item.company} className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-16 py-8 border-t border-white/10">
              <div>
                <p className="text-sm text-[#8C8C88] mb-2">{item.period}</p>
                <p className="text-xl font-medium">{item.company}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">{item.role}</h4>
                <p className="text-[15px] text-[#A5A5A0] leading-relaxed max-w-[660px]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl font-semibold tracking-tight mb-8">Formación</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {education.map((item) => (
              <article key={item.title} className="border-t border-white/10 py-6">
                <h4 className="text-base font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-[#A5A5A0] leading-relaxed">{item.institution}</p>
                <p className="text-sm text-[#8C8C88] mt-2">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
