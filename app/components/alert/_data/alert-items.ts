import type { AlertVariant } from "@/app/components/ui/alert";

export type AlertItem = { id: string; variant: AlertVariant; title: string; description: string; action: string; confirmation: string };

export const alertItems: readonly AlertItem[] = [
  { id: "invite", variant: "info", title: "Invitation waiting for review", description: "Mika Tan requested access to the Product Design workspace.", action: "Review request", confirmation: "Opening Mika Tan?s access request." },
  { id: "saved", variant: "success", title: "Workspace changes saved", description: "Your dashboard layout is now available to everyone on the team.", action: "View dashboard", confirmation: "Opening the updated dashboard." },
  { id: "storage", variant: "warning", title: "Storage is almost full", description: "You have used 92% of this workspace?s storage allowance.", action: "Review files", confirmation: "Opening storage management." },
  { id: "publish", variant: "destructive", title: "Publishing did not finish", description: "We could not update the public workspace page. Your latest edits are safe.", action: "Try again", confirmation: "Retrying the workspace update." },
];
