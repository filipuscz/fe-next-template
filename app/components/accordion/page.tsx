import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { AccordionShowcase } from "./_components/accordion-showcase";

export const metadata: Metadata = {
  title: "Accordion — YoruSpace Components",
  description: "YoruSpace accordion component showcase.",
};

export default function AccordionPage() {
  return <WorkspaceShell mainId="component-content" activePage="accordion"><AccordionShowcase /></WorkspaceShell>;
}
