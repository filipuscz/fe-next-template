import type { Metadata } from "next";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { PopoversShowcase } from "./_components/popovers-showcase";

export const metadata: Metadata = {
  title: "Popovers — YoruSpace Components",
  description: "YoruSpace popover component showcase.",
};

export default function PopoversPage() {
  return <WorkspaceShell mainId="component-content" activePage="popovers"><PopoversShowcase /></WorkspaceShell>;
}
