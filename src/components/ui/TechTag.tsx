interface TechTagProps {
  name: string;
  variant?: "default" | "accent" | "muted";
}

export function TechTag({ name, variant = "default" }: TechTagProps) {
  const styles = {
    default: "bg-transparent border border-[#E5E4E0] text-[#6B6B66]",
    accent: "bg-[#EEF4F0] border border-[rgba(45,90,61,0.2)] text-[#2D5A3D]",
    muted: "bg-transparent border border-[#E5E4E0] text-[#A8A8A3]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 font-mono text-[10px] font-500 tracking-wide ${styles[variant]}`}
    >
      {name}
    </span>
  );
}
