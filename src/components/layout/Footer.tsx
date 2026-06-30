export function Footer() {
  return (
    <footer className="bg-[#161614] border-t border-[#242422]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3 flex-wrap">
        <p className="font-mono text-[11px] text-[#4A4A45] tracking-[0.04em]">
          © 2026 Gabriel González · Córdoba, Argentina
        </p>
        <p className="font-mono text-[11px] text-[#3A3A38] tracking-[0.04em]">
          Construido con IA · Entregado a clientes reales
        </p>
      </div>
    </footer>
  );
}
