import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { AlertShowcase } from "./_components/alert-showcase";

export const metadata: Metadata = { title: "Alert ? YoruSpace Components", description: "YoruSpace alert component showcase." };

export default function AlertPage() {
  return <WorkspaceShell mainId="component-content" activePage="alert"><AlertShowcase /></WorkspaceShell>;
}
