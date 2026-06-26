import type { DashboardMetric } from "@/lib/types";

/*
  Arquitectura preparada para APIs reales:
  - resolver() puede ser async y retornar datos de GitHub API, Vercel API, Supabase, etc.
  - Si resolver falla o no existe, se usa `value` como fallback.
  - Para conectar: implementar el resolver correspondiente y agregar las env vars.
*/

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "apps",
    label: "Apps en producción",
    value: 4,
    size: "md",
    // resolver: async () => { const { data } = await supabase.from('projects').select('count'); return data[0].count; }
  },
  {
    id: "commits",
    label: "Commits",
    value: 500,
    unit: "+",
    size: "md",
    // resolver: async () => { const res = await fetch('https://api.github.com/users/ggabo93/events'); ... }
  },
  {
    id: "repos",
    label: "Repositorios",
    value: 8,
    size: "sm",
  },
  {
    id: "deploys",
    label: "Deploys",
    value: 50,
    unit: "+",
    size: "sm",
  },
  {
    id: "hours",
    label: "Horas invertidas",
    value: 280,
    unit: "h",
    size: "lg",
  },
  {
    id: "clients",
    label: "Clientes reales",
    value: 4,
    size: "sm",
  },
  {
    id: "automations",
    label: "Automatizaciones",
    value: 3,
    size: "sm",
  },
  {
    id: "apis",
    label: "APIs integradas",
    value: 7,
    size: "sm",
  },
];
