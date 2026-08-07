import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { ListGroupShowcase } from "./_components/list-group-showcase";

export const metadata: Metadata = {
  title: "List group — YoruSpace Components",
  description: "YoruSpace list group component showcase.",
};

export default function ListGroupPage() {
  return <WorkspaceShell mainId="component-content" activePage="list-group"><ListGroupShowcase /></WorkspaceShell>;
}
