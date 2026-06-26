interface TechTagProps {
  name: string;
  variant?: "default" | "accent" | "muted";
}

export function TechTag({ name, variant = "default" }: TechTagProps) {
  const styles = {
    default: "bg-[#111] border border-[#242424] text-[#888]",
    accent: "bg-[rgba(200,255,0,0.08)] border border-[rgba(200,255,0,0.2)] text-[#c8ff00]",
    muted: "bg-transparent border border-[#1a1a1a] text-[#444]",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[10px] font-500 tracking-wide ${styles[variant]}`}>
      {name}
    </span>
  );
}
