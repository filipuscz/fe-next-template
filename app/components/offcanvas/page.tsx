import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { OffcanvasShowcase } from "./_components/offcanvas-showcase";

export const metadata: Metadata = {
  title: "Offcanvas — YoruSpace Components",
  description: "YoruSpace offcanvas component showcase.",
};

export default function OffcanvasPage() {
  return <WorkspaceShell mainId="component-content" activePage="offcanvas"><OffcanvasShowcase /></WorkspaceShell>;
}
