import type { CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import { activities } from "../_data/dashboard-data";

const bars = [{ label: "Design", value: "$20.2k", width: "84%" }, { label: "Product", value: "$14.5k", width: "60%" }, { label: "Growth", value: "$9.1k", width: "38%" }, { label: "Other", value: "$4.4k", width: "18%" }];

export function DashboardSecondary() {
  return <section className="secondary-grid"><article className="dashboard-card category-card"><div className="card-title-row"><div><p className="card-kicker">Revenue split</p><h2>Sales by Category</h2></div><button className="period-button" type="button">This month <ChevronDown /></button></div><div className="bar-chart" role="img" aria-label="Sales by category: Design 42 percent, Product 30 percent, Growth 19 percent, Other 9 percent">{bars.map((bar) => <div key={bar.label}><span>{bar.label}</span><i style={{ "--bar": bar.width } as CSSProperties} /><b>{bar.value}</b></div>)}</div></article><article className="dashboard-card activity-card"><div className="card-title-row"><div><p className="card-kicker">Team pulse</p><h2>Recent Activity</h2></div><a href="#activity">View all</a></div><ol className="activity-list">{activities.map((activity) => <li key={activity.name}><span className={`activity-avatar ${activity.color}`}>{activity.initials}</span><p><b>{activity.name}</b> {activity.action}<small>{activity.time}</small></p></li>)}</ol></article></section>;
}
