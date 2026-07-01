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
    value: 3,
    size: "md",
    // resolver: async () => { const { data } = await supabase.from('projects').select('count'); return data[0].count; }
  },
  {
    id: "modules",
    label: "Módulos entregados",
    value: 20,
    unit: "+",
    size: "md",
  },
  {
    id: "bots",
    label: "Bots en producción",
    value: 1,
    size: "sm",
  },
{
    id: "hours",
    label: "Horas invertidas",
    value: 240,
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
    id: "services",
    label: "Servicios en producción",
    value: 5,
    size: "sm",
  },
];
