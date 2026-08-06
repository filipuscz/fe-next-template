"use client";

import { Menu } from "lucide-react";
import { CustomizeButton } from "./customize-button";
import { NotificationButton } from "./notification-button";
import { ProfileMenu } from "./profile-menu";

export function DashboardTopNav({ activeSection, customizeOpen, menuOpen, onCustomize, onMenuToggle }: { activeSection: "overview" | "analytics" | "orders"; customizeOpen: boolean; menuOpen: boolean; onCustomize: () => void; onMenuToggle: () => void }) {
  return <nav className="top-nav-yoru" aria-label="Primary navigation"><a className="top-nav-brand" href="/dashboard">YoruSpace</a><div className="top-nav-links" aria-label="Workspace links"><a className={activeSection === "overview" ? "active" : ""} href="#dashboard-content" aria-current={activeSection === "overview" ? "page" : undefined}>Overview</a><a className={activeSection === "analytics" ? "active" : ""} href="#analytics" aria-current={activeSection === "analytics" ? "page" : undefined}>Analytics</a><a className={activeSection === "orders" ? "active" : ""} href="#orders" aria-current={activeSection === "orders" ? "page" : undefined}>Orders</a></div><div className="top-nav-actions"><CustomizeButton open={customizeOpen} onClick={onCustomize} /><NotificationButton /><ProfileMenu /><button type="button" className="nav-menu-button" onClick={onMenuToggle} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="dashboard-sidebar"><Menu /></button></div></nav>;
}
