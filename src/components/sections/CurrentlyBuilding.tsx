import { currentProject } from "@/lib/data/projects";

export function CurrentlyBuilding() {
  const items = Array(6).fill(null).map((_, i) => (
    <span key={i} className="inline-flex items-center gap-4 mx-8 shrink-0">
      <span className="w-1 h-1 rounded-full bg-[#c8ff00]" />
      <span className="font-mono text-[11px] text-[#444] tracking-wide">
        Construyendo ahora:
      </span>
      <span className="font-mono text-[11px] text-[#888]">
        {currentProject.name}
      </span>
      <span className="font-mono text-[11px] text-[#2a2a2a]">·</span>
      <span className="font-mono text-[11px] text-[#333]">
        {currentProject.stack.join(" · ")}
      </span>
    </span>
  ));

  return (
    <div className="border-y border-[#1a1a1a] overflow-hidden py-3 bg-[#080808]">
      <div className="flex animate-ticker whitespace-nowrap">
        {items}
        {items}
      </div>
    </div>
  );
}
