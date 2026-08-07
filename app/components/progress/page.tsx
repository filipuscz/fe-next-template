import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { ProgressShowcase } from "./_components/progress-showcase";

export const metadata: Metadata = { title: "Progress — YoruSpace Components", description: "YoruSpace progress component showcase." };

export default function ProgressPage() {
  return <WorkspaceShell mainId="component-content" activePage="progress"><ProgressShowcase /></WorkspaceShell>;
}
