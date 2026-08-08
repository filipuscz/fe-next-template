import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { TooltipsShowcase } from "./_components/tooltips-showcase";

export const metadata: Metadata = {
  title: "Tooltips — YoruSpace Components",
  description: "YoruSpace tooltip component showcase.",
};

export default function TooltipsPage() {
  return <WorkspaceShell mainId="component-content" activePage="tooltips"><TooltipsShowcase /></WorkspaceShell>;
}
