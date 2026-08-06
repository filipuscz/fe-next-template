import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { CollapseShowcase } from "./_components/collapse-showcase";

export const metadata: Metadata = { title: "Collapse — YoruSpace Components", description: "YoruSpace collapse component showcase." };

export default function CollapsePage() { return <WorkspaceShell mainId="component-content" activePage="collapse"><CollapseShowcase /></WorkspaceShell>; }
