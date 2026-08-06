import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { ButtonShowcase } from "./_components/button-showcase";

export const metadata: Metadata = { title: "Button — YoruSpace Components", description: "YoruSpace button component showcase." };

export default function ButtonPage() { return <WorkspaceShell mainId="component-content" activePage="button"><ButtonShowcase /></WorkspaceShell>; }
