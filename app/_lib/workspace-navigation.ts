export const workspacePageIds = [
  "dashboard",
  "accordion",
  "alert",
  "badge",
  "button",
  "collapse",
  "dropdown",
  "list-group",
  "modal",
  "pagination",
  "progress",
  "offcanvas",
  "placeholders",
] as const;

export type WorkspacePageId = (typeof workspacePageIds)[number];

export const componentNavigation = [
  { id: "accordion", label: "Accordion", href: "/components/accordion" },
  { id: "alert", label: "Alert", href: "/components/alert" },
  { id: "badge", label: "Badge", href: "/components/badge" },
  { id: "button", label: "Button", href: "/components/button" },
  { id: "collapse", label: "Collapse", href: "/components/collapse" },
  { id: "dropdown", label: "Dropdown", href: "/components/dropdown" },
  { id: "list-group", label: "List group", href: "/components/list-group" },
  { id: "modal", label: "Modals", href: "/components/modal" },
  { id: "pagination", label: "Pagination", href: "/components/pagination" },
  { id: "progress", label: "Progress", href: "/components/progress" },
  { id: "offcanvas", label: "Offcanvas", href: "/components/offcanvas" },
  { id: "placeholders", label: "Placeholders", href: "/components/placeholders" },
] as const satisfies ReadonlyArray<{ id: Exclude<WorkspacePageId, "dashboard">; label: string; href: string }>;

export function componentNavigationItem(page: Exclude<WorkspacePageId, "dashboard">) {
  return componentNavigation.find((item) => item.id === page);
}
