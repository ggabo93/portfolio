/* ================================================================
   TYPES — Single source of truth for all data shapes
   ================================================================ */

export type TechTag =
  | "Next.js" | "React" | "TypeScript" | "Tailwind" | "Shadcn/ui"
  | "Supabase" | "PostgreSQL" | "Node.js" | "Docker" | "Vercel" | "Render"
  | "Resend" | "Framer Motion" | "WhatsApp API" | "Puppeteer" | "Vite"
  | "React Hook Form" | "Zod" | "TanStack Table" | "Claude AI" | "Gemini"
  | "Radix UI" | "Recharts" | "OneSignal" | "Vitest";

export type ProjectStatus = "production" | "building" | "paused" | "archived";
export type ProjectCategory = "fintech" | "saas" | "automation" | "gestión" | "landing";

export interface ProjectArchitecture {
  description: string;
  layers: { name: string; detail: string }[];
  diagram?: string;
}

export interface ProjectDecision {
  question: string;
  chosen: string;
  rejected: string;
  reason: string;
}

export interface AIConversationTurn {
  role: "user" | "assistant";
  content: string;
}

export interface Project {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  featured?: boolean;
  nameNote?: string;
  role?: string;
  highlights?: { title: string; description: string }[];
  cover?: { src: string; alt: string };
  gallery?: { src: string; alt: string; caption: string; width: number; height: number }[];
  mediaNote?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  problem: string;
  idea: string;
  result: string;
  whatIWouldImprove: string;
  stack: TechTag[];
  services?: TechTag[];
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  errors: string[];
  hoursInvested?: number;
  url?: string;
  repo?: string;
  videoDemo?: string;
  startedAt: string;
  shippedAt?: string;
  featuredConversation?: AIConversationTurn[];
}

