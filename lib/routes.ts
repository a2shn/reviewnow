export const routes = {
  home: "/",
  dashboard: "/app",
  auth: "/auth",
  terms: "/terms",
  privacy: "/privacy",
  settings: "/settings",
  billing: "/billing",
  project: (id: string) => `/project/${id}`,
  resources: {
    github: "https://github.com/forkbombx/reviewnow",
    docs: "/docs",
  },
} as const;
