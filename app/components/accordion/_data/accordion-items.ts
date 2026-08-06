import type { AccordionItem } from "@/app/components/ui/accordion";

export const faqItems: readonly AccordionItem[] = [
  { value: "workspace", title: "How do I invite someone to my workspace?", body: "Open Workspace settings, choose Members, then send an invite to their email address. Invitations inherit your workspace role defaults until you change them." },
  { value: "theme", title: "Does the component follow my appearance settings?", body: "Yes. Every surface, border, hover state, and focus ring uses the current YoruSpace Accent, background, and light or dark theme tokens." },
  { value: "accessibility", title: "Is the accordion keyboard accessible?", body: "Each trigger is a native button with an announced expanded state. Use Tab to reach it, then Enter or Space to open and close its panel." },
];

export const settingsItems: readonly AccordionItem[] = [
  { value: "notifications", title: "Notification preferences", body: "Choose which workspace updates should appear in your notification center and which should be delivered by email." },
  { value: "security", title: "Security and sessions", body: "Review active sessions, configure trusted devices, and manage sign-in recovery options for your workspace." },
  { value: "storage", title: "Storage and exports", body: "Track your current usage and configure the retention period for generated exports and archived files." },
];

export const flushItems: readonly AccordionItem[] = [
  { value: "token", title: "Accent-aware styling", body: "The component inherits the chosen Accent for active borders, icons, focus rings, and soft highlight surfaces." },
  { value: "single", title: "Single or multiple panels", body: "Use a single-open pattern for concise FAQs, or let several panels stay open when users compare settings." },
  { value: "motion", title: "Comfortable motion", body: "Panels use a brief height transition and respect the application-wide reduced-motion preference." },
];
