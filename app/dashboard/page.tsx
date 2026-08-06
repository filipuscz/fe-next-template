import type { Metadata } from "next";
import "../globals.css";
import { DashboardContent } from "./_components/dashboard-content";
import { DashboardExperience } from "./_components/dashboard-experience";

export const metadata: Metadata = {
  title: "Dashboard — YoruSpace",
  description: "YoruSpace workspace dashboard.",
};

export default function DashboardPage() {
  return <DashboardExperience><DashboardContent /></DashboardExperience>;
}
