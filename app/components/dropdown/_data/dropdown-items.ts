import type { DropdownEntry } from "@/app/components/ui/dropdown";

export const workspaceItems: readonly DropdownEntry[] = [
  { type: "item", label: "Dashboard", href: "/dashboard" },
  { type: "item", label: "Accordion", href: "/components/accordion" },
  { type: "item", label: "Button", href: "/components/button" },
];

export const groupedItems: readonly DropdownEntry[] = [
  { type: "header", label: "Workspace" },
  { type: "item", label: "Overview", href: "/dashboard" },
  { type: "item", label: "Current component", href: "/components/dropdown", active: true },
  { type: "divider" },
  { type: "header", label: "Account" },
  { type: "item", label: "Settings", disabled: true },
  { type: "item", label: "Sign out", onSelect: () => undefined },
];
