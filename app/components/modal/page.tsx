import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { ModalShowcase } from "./_components/modal-showcase";

export const metadata: Metadata = {
  title: "Modals — YoruSpace Components",
  description: "YoruSpace modal component showcase.",
};

export default function ModalPage() {
  return <WorkspaceShell mainId="component-content" activePage="modal"><ModalShowcase /></WorkspaceShell>;
}
