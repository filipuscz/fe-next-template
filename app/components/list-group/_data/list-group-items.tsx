import { Badge } from "@/app/components/ui/badge";
import type { ListGroupItem } from "@/app/components/ui/list-group";

export const exampleItems: readonly ListGroupItem[] = [
  { id: "workspace", title: "Workspace overview", description: "Keep projects, members, and shared resources in one place." },
  { id: "members", title: "Members", description: "Invite collaborators and manage their roles." },
  { id: "activity", title: "Activity", description: "Review the latest updates across your workspace." },
];

export const activeItems: readonly ListGroupItem[] = [
  { id: "inbox", title: "Inbox", description: "Messages and mentions that need your attention." },
  { id: "assigned", title: "Assigned to me", description: "Tasks you are responsible for this week.", active: true },
  { id: "completed", title: "Completed", description: "Recently finished workspace tasks." },
];

export const flushItems: readonly ListGroupItem[] = [
  { id: "privacy", title: "Privacy preferences", description: "Control how workspace information is shared." },
  { id: "notifications", title: "Notification settings", description: "Choose when you want to hear from YoruSpace." },
  { id: "security", title: "Security and sessions", description: "Review trusted devices and sign-in activity." },
];

export const badgeItems: readonly ListGroupItem[] = [
  { id: "review", title: "Review requests", description: "Access requests waiting for an owner.", badge: <Badge variant="warning">3</Badge> },
  { id: "releases", title: "New releases", description: "Workspace updates published this month.", badge: <Badge>12</Badge> },
  { id: "archive", title: "Archived projects", description: "Projects preserved for future reference.", badge: <Badge variant="secondary">24</Badge> },
];

export const backgroundItems: readonly ListGroupItem[] = [
  { id: "primary", title: "Design system refreshed", description: "New accent-aware styles are ready to review.", background: "primary" },
  { id: "success", title: "Workspace backed up", description: "Your latest changes are stored safely.", background: "success" },
  { id: "warning", title: "Storage nearing its limit", description: "8% of your workspace storage remains.", background: "warning" },
  { id: "danger", title: "Publishing needs attention", description: "One public page could not be updated.", background: "danger" },
];

export const linkItems: readonly ListGroupItem[] = [
  { id: "dashboard", title: "Dashboard", description: "Return to the workspace overview.", href: "/dashboard" },
  { id: "accordion", title: "Accordion", description: "Explore the expandable content component.", href: "/components/accordion" },
  { id: "badge", title: "Badge", description: "Explore concise labels and counts.", href: "/components/badge" },
];
