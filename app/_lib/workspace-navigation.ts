export const workspacePageIds = [
  "dashboard",
  "forms",
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
  "popovers",
  "sortable",
  "tooltips",
  "form-control",
  "input-group",
  "select",
  "checks",
  "range",
  "floating-labels",
  "form-layout",
  "advanced-select",
  "date-picker",
  "editor",
  "file-uploader",
  "advanced-range",
  "rating",
  "emoji-button",
  "validation",
  "wizard",
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
  { id: "popovers", label: "Popovers", href: "/components/popovers" },
  { id: "sortable", label: "Sortable", href: "/components/sortable" },
  { id: "tooltips", label: "Tooltips", href: "/components/tooltips" },
  { id: "form-control", label: "Form control", href: "/forms/basic/form-control" },
  { id: "input-group", label: "Input group", href: "/forms/basic/input-group" },
  { id: "select", label: "Select", href: "/forms/basic/select" },
  { id: "checks", label: "Checks", href: "/forms/basic/checks" },
  { id: "range", label: "Range", href: "/forms/basic/range" },
  { id: "floating-labels", label: "Floating labels", href: "/forms/basic/floating-labels" },
  { id: "form-layout", label: "Form layout", href: "/forms/basic/layout" },
  { id: "advanced-select", label: "Advanced select", href: "/forms/advance/select" },
  { id: "date-picker", label: "Date picker", href: "/forms/advance/date-picker" },
  { id: "editor", label: "Editor", href: "/forms/advance/editor" },
  { id: "file-uploader", label: "File uploader", href: "/forms/advance/file-uploader" },
  { id: "advanced-range", label: "Advanced range", href: "/forms/advance/range" },
  { id: "rating", label: "Rating", href: "/forms/advance/rating" },
  { id: "emoji-button", label: "Emoji button", href: "/forms/advance/emoji-button" },
  { id: "validation", label: "Validation", href: "/forms/validation" },
  { id: "wizard", label: "Wizard", href: "/forms/wizard" },
] as const satisfies ReadonlyArray<{ id: Exclude<WorkspacePageId, "dashboard">; label: string; href: string }>;

const formPageIds = new Set<WorkspacePageId>([
  "form-control", "input-group", "select", "checks", "range", "floating-labels", "form-layout",
  "advanced-select", "date-picker", "editor", "file-uploader", "advanced-range", "rating", "emoji-button",
  "validation", "wizard",
]);

export const formNavigation = componentNavigation.filter((item) => formPageIds.has(item.id));
export const componentLibraryNavigation = componentNavigation.filter((item) => !formPageIds.has(item.id));
const basicFormPageIds = new Set<WorkspacePageId>(["form-control", "input-group", "select", "checks", "range", "floating-labels", "form-layout"]);
const advanceFormPageIds = new Set<WorkspacePageId>(["advanced-select", "date-picker", "editor", "file-uploader", "advanced-range", "rating", "emoji-button"]);
export const basicFormNavigation = formNavigation.filter((item) => basicFormPageIds.has(item.id));
export const advanceFormNavigation = formNavigation.filter((item) => advanceFormPageIds.has(item.id));
export const generalFormNavigation = formNavigation.filter((item) => !basicFormPageIds.has(item.id) && !advanceFormPageIds.has(item.id));

export function componentNavigationItem(page: Exclude<WorkspacePageId, "dashboard">) {
  return componentNavigation.find((item) => item.id === page);
}
