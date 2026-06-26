/* ================================================================
   TYPES — Single source of truth for all data shapes
   ================================================================ */

export type TechTag =
  | "Next.js" | "React" | "TypeScript" | "Tailwind" | "Shadcn/ui"
  | "Supabase" | "PostgreSQL" | "Node.js" | "Docker" | "Vercel" | "Render"
  | "Resend" | "Framer Motion" | "WhatsApp API" | "Puppeteer" | "Vite"
  | "React Hook Form" | "Zod" | "TanStack Table" | "Claude AI" | "Gemini";

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
  category: ProjectCategory;
  status: ProjectStatus;
  problem: string;
  idea: string;
  result: string;
  whatIWouldImprove: string;
  stack: TechTag[];
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  errors: string[];
  hoursInvested: number;
  url?: string;
  repo?: string;
  videoDemo?: string;
  startedAt: string;
  shippedAt?: string;
  featuredConversation?: AIConversationTurn[];
}

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  type: "milestone" | "learning" | "project" | "tool";
}

export interface Learning {
  id: string;
  title: string;
  body: string;
  category: "technical" | "product" | "process" | "mindset";
  date: string;
}

export interface Lab {
  name: string;
  description: string;
  status: "building" | "idea" | "shipped";
  stack: TechTag[];
}

/* ── Dashboard ── */
export type MetricResolver = () => Promise<number | string> | number | string;

export interface DashboardMetric {
  id: string;
  label: string;
  value: number | string;
  unit?: string;
  size: "sm" | "md" | "lg";
  resolver?: MetricResolver;
}
