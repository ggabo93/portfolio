import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="mailto:ggabo93@gmail.com"
          className="flex items-center gap-2 font-sans text-[14px] text-[#F5F5F3] hover:text-[#6E9BFF] transition-colors duration-200"
        >
          <Mail size={14} />
          <span className="underline underline-offset-4 decoration-[rgba(255,255,255,0.2)] hover:decoration-[#6E9BFF]">
            ggabo93@gmail.com
          </span>
        </a>
        <p className="font-mono text-[11px] text-[#5A5A57] tracking-[0.04em]">
          © 2026 Gabriel González · Córdoba, Argentina
        </p>
      </div>
    </footer>
  );
}
