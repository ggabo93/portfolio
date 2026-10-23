import type { ProjectStatus } from "@/lib/types";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  production: "En producción",
  building: "En desarrollo",
  paused: "En pausa",
  archived: "Archivado",
};
