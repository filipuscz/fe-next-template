import { ArrowDownRight, ArrowUpRight, CircleDollarSign, CreditCard, ShoppingBag, UsersRound } from "lucide-react";
import { metrics } from "../_data/dashboard-data";

const icons = { revenue: CircleDollarSign, customers: UsersRound, orders: ShoppingBag, conversion: CreditCard };

export function DashboardMetrics() {
  return <section className="metric-grid" aria-label="Key metrics">{metrics.map(({ label, value, change, icon, up }) => { const Icon = icons[icon]; return <article className="metric-card" key={label}><div className="metric-card-head"><span>{label}</span><span className="metric-icon"><Icon /></span></div><strong>{value}</strong><p className={up ? "positive" : "negative"}>{up ? <ArrowUpRight /> : <ArrowDownRight />}{change}<span>vs. last month</span></p><div className={`metric-trend ${up ? "trend-up" : "trend-down"}`} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div></article>; })}</section>;
}
