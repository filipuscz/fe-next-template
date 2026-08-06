import type { Metadata } from "next";
import "../globals.css";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { DashboardContent } from "./_components/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard — YoruSpace",
  description: "YoruSpace workspace dashboard.",
};

export default function DashboardPage() {
  return <WorkspaceShell><DashboardContent /></WorkspaceShell>;
}
