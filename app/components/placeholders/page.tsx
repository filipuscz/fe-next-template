import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { PlaceholdersShowcase } from "./_components/placeholders-showcase";

export const metadata: Metadata = { title: "Placeholders — YoruSpace Components", description: "YoruSpace loading placeholder component showcase." };

export default function PlaceholdersPage() {
  return <WorkspaceShell mainId="component-content" activePage="placeholders"><PlaceholdersShowcase /></WorkspaceShell>;
}
