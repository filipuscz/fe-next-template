import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { PaginationShowcase } from "./_components/pagination-showcase";

export const metadata: Metadata = {
  title: "Pagination — YoruSpace Components",
  description: "YoruSpace pagination component showcase.",
};

export default function PaginationPage() {
  return <WorkspaceShell mainId="component-content" activePage="pagination"><PaginationShowcase /></WorkspaceShell>;
}
