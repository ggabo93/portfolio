import { currentProject } from "@/lib/data/projects";

export function CurrentlyBuilding() {
  const items = Array(6).fill(null).map((_, i) => (
    <span key={i} className="inline-flex items-center gap-4 mx-8 shrink-0">
      <span className="w-1 h-1 rounded-full bg-[#2D5A3D]" />
      <span className="font-mono text-[11px] text-[#8A8A85] tracking-wide">
        Construyendo ahora:
      </span>
      <span className="font-mono text-[11px] text-[#4A4A45]">
        {currentProject.name}
      </span>
      <span className="font-mono text-[11px] text-[#C0BFBA]">·</span>
      <span className="font-mono text-[11px] text-[#A8A8A3]">
        {currentProject.stack.join(" · ")}
      </span>
    </span>
  ));

  return (
    <div className="border-y border-[#E5E4E0] overflow-hidden py-3 bg-[#FAFAF8]">
      <div className="flex animate-ticker whitespace-nowrap">
        {items}
        {items}
      </div>
    </div>
  );
}
