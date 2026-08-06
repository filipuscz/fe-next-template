import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { BadgeShowcase } from "./_components/badge-showcase";

export const metadata: Metadata = { title: "Badge ? YoruSpace Components", description: "YoruSpace badge component showcase." };

export default function BadgePage() {
  return <WorkspaceShell mainId="component-content" activePage="badge"><BadgeShowcase /></WorkspaceShell>;
}
