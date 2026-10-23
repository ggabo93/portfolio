const links = [
  { href: "#projects", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-[1276px] mx-auto px-5 md:px-12 h-18 flex items-center justify-between gap-3">
        <a href="#hero" className="text-sm md:text-[15px] font-semibold tracking-tight">
          <span className="sm:hidden" aria-hidden="true">GG.</span>
          <span className="hidden sm:inline">Gabriel González</span>
          <span className="sr-only sm:hidden">Gabriel González</span>
        </a>
        <nav aria-label="Navegación principal" className="flex items-center gap-5 md:gap-9">
          {links.map((link) => <a key={link.href} href={link.href} className="text-xs md:text-sm text-[#C5C5BF] hover:text-[#6E9BFF] transition-colors">{link.label}</a>)}
        </nav>
      </div>
    </header>
  );
}
