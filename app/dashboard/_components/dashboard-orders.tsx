import { ArrowUpRight } from "lucide-react";
import { orders } from "../_data/dashboard-data";

export function DashboardOrders() {
  return <section id="orders" className="dashboard-card orders-card"><div className="card-title-row"><div><p className="card-kicker">Latest transactions</p><h2>Recent Orders</h2></div><button className="view-all-button" type="button">View all <ArrowUpRight /></button></div><div className="orders-table-wrap"><table><caption className="sr-only">Recent orders</caption><thead><tr><th>Order ID</th><th>Customer</th><th>Product</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead><tbody>{orders.map((order) => <tr key={order.id}><td><b>{order.id}</b></td><td>{order.customer}</td><td>{order.product}</td><td>{order.date}</td><td><b>{order.amount}</b></td><td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td></tr>)}</tbody></table></div></section>;
}
