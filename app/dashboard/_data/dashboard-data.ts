export const metrics = [
  { label: "Total Revenue", value: "$48,249", change: "+12.5%", icon: "revenue", up: true },
  { label: "Total Customers", value: "2,840", change: "+8.2%", icon: "customers", up: true },
  { label: "Total Orders", value: "1,429", change: "+4.6%", icon: "orders", up: true },
  { label: "Conversion Rate", value: "3.86%", change: "-0.4%", icon: "conversion", up: false },
] as const;

export const activities = [
  { initials: "EM", name: "Elena Morrison", action: "completed order #10482", time: "8 minutes ago", color: "violet" },
  { initials: "JD", name: "Jonas Daniels", action: "upgraded to Studio", time: "26 minutes ago", color: "blue" },
  { initials: "MS", name: "Maya Stone", action: "left a product review", time: "1 hour ago", color: "orange" },
  { initials: "RK", name: "Rafi Kurniawan", action: "created a new workspace", time: "2 hours ago", color: "green" },
] as const;

export const orders = [
  { id: "#10482", customer: "Elena Morrison", product: "Creative Suite", date: "Aug 06, 2026", amount: "$249.00", status: "Completed" },
  { id: "#10481", customer: "Jonas Daniels", product: "Studio Plan", date: "Aug 06, 2026", amount: "$89.00", status: "Completed" },
  { id: "#10480", customer: "Rafi Kurniawan", product: "Team Add-on", date: "Aug 05, 2026", amount: "$120.00", status: "Pending" },
  { id: "#10479", customer: "Maya Stone", product: "Starter Plan", date: "Aug 05, 2026", amount: "$29.00", status: "Cancelled" },
] as const;
