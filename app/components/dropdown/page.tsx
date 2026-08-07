import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { DropdownShowcase } from "./_components/dropdown-showcase";

export const metadata: Metadata = { title: "Dropdown — YoruSpace Components", description: "YoruSpace dropdown component showcase." };

export default function DropdownPage() {
  return <WorkspaceShell mainId="component-content" activePage="dropdown"><DropdownShowcase /></WorkspaceShell>;
}
