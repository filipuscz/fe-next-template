import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { SortableShowcase } from "./_components/sortable-showcase";

export const metadata: Metadata = { title: "Sortable — YoruSpace Components", description: "YoruSpace sortable component showcase." };

export default function SortablePage() { return <WorkspaceShell mainId="component-content" activePage="sortable"><SortableShowcase /></WorkspaceShell>; }
