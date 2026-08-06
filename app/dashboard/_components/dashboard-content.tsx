import { DashboardAnalytics } from "./dashboard-analytics";
import { DashboardDateRange } from "./dashboard-date-range";
import { DashboardExportButton } from "./dashboard-export-button";
import { DashboardMetrics } from "./dashboard-metrics";
import { DashboardOrders } from "./dashboard-orders";
import { DashboardSecondary } from "./dashboard-secondary";

export function DashboardContent() {
  return <main id="dashboard-content" className="dashboard-main"><header className="dashboard-header"><div><p className="dashboard-eyebrow">Wednesday, August 06</p><h1>Dashboard</h1><p>Welcome back, Yorupus. Here&apos;s what&apos;s happening today.</p></div><div className="dashboard-header-actions"><DashboardDateRange /><DashboardExportButton /></div></header><DashboardMetrics /><DashboardAnalytics /><DashboardSecondary /><DashboardOrders /></main>;
}
