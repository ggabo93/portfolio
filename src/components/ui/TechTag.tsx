interface TechTagProps {
  name: string;
  variant?: "default" | "accent" | "muted";
}

export function TechTag({ name, variant = "default" }: TechTagProps) {
  const styles = {
    default: "bg-transparent border border-[rgba(255,255,255,0.1)] text-[#8C8C88]",
    accent: "bg-[rgba(110,155,255,0.12)] border border-[rgba(110,155,255,0.28)] text-[#6E9BFF]",
    muted: "bg-transparent border border-[rgba(255,255,255,0.1)] text-[#5A5A57]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-[5px] font-mono text-[10px] font-medium tracking-wide ${styles[variant]}`}
    >
      {name}
    </span>
  );
}
