interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 mb-12 ${className}`}>
      <span className="font-mono text-[10px] font-500 tracking-[0.16em] uppercase text-[#8A8A85]">
        {children}
      </span>
      <div className="flex-1 h-px bg-[#E5E4E0]" />
    </div>
  );
}
