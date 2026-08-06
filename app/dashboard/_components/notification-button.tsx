"use client";

import { useCallback, useState } from "react";
import { Bell, CheckCheck, MessageCircle, PackageCheck, Sparkles } from "lucide-react";
import { useDismissiblePopover } from "../_hooks/use-dismissible-popover";

const notifications = [
  { title: "Order #10482 is complete", detail: "Elena Morrison completed Creative Suite.", time: "8m", icon: PackageCheck },
  { title: "New team message", detail: "Maya shared feedback on the July report.", time: "26m", icon: MessageCircle },
  { title: "Your weekly insight is ready", detail: "Revenue is up 12.5% from last week.", time: "1h", icon: Sparkles },
] as const;

export function NotificationButton() {
  const [open, setOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const dismiss = useCallback(() => setOpen(false), []);
  const controlRef = useDismissiblePopover(open, dismiss);

  return <div className="notification-control" ref={controlRef}>
    <button type="button" className="nav-icon-button notification-button" onClick={() => setOpen((value) => !value)} aria-label={hasUnread ? "Notifications, 3 unread" : "Notifications"} aria-expanded={open} aria-controls="dashboard-notifications">
      <Bell />
      {hasUnread && <span className="notification-badge" aria-hidden="true">3</span>}
    </button>
    {open && <section id="dashboard-notifications" className="notification-popover" role="dialog" aria-label="Notifications">
      <div className="notification-heading"><div><p>Notifications</p><span>{hasUnread ? "You have 3 unread updates" : "You are all caught up"}</span></div><button type="button" onClick={() => setHasUnread(false)} disabled={!hasUnread}><CheckCheck />Mark all read</button></div>
      <ul className="notification-list">
        {notifications.map(({ title, detail, time, icon: Icon }) => <li key={title} className={hasUnread ? "is-unread" : ""}><span className="notification-item-icon"><Icon /></span><div><b>{title}</b><p>{detail}</p><time>{time}</time></div></li>)}
      </ul>
    </section>}
  </div>;
}
