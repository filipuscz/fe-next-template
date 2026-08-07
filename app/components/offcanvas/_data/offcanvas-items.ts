export const workspaceNavigation = [
  { label: "Dashboard", description: "Workspace overview", href: "/dashboard" },
  { label: "Accordion", description: "Expandable content", href: "/components/accordion" },
  { label: "List group", description: "Series of content", href: "/components/list-group" },
] as const;

export const placementOptions = [
  { value: "start", label: "Start" },
  { value: "end", label: "End" },
  { value: "top", label: "Top" },
  { value: "bottom", label: "Bottom" },
] as const;
