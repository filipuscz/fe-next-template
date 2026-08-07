"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { componentNavigationItem, type WorkspacePageId } from "@/app/_lib/workspace-navigation";
import { CustomizeButton } from "./customize-button";
import { NotificationButton } from "./notification-button";
import { ProfileMenu } from "./profile-menu";

export function WorkspaceTopNav({ activePage, activeSection, customizeOpen, menuOpen, onCustomize, onMenuToggle }: { activePage: WorkspacePageId; activeSection: "overview" | "analytics" | "orders"; customizeOpen: boolean; menuOpen: boolean; onCustomize: () => void; onMenuToggle: () => void }) {
  const component = activePage === "dashboard" ? undefined : componentNavigationItem(activePage);
  const links = component ? <Link className="active" href={component.href} aria-current="page">Components / {component.label}</Link> : <><a className={activeSection === "overview" ? "active" : ""} href="#dashboard-content" aria-current={activeSection === "overview" ? "page" : undefined}>Overview</a><a className={activeSection === "analytics" ? "active" : ""} href="#analytics" aria-current={activeSection === "analytics" ? "page" : undefined}>Analytics</a><a className={activeSection === "orders" ? "active" : ""} href="#orders" aria-current={activeSection === "orders" ? "page" : undefined}>Orders</a></>;
  return <nav className="top-nav-yoru" aria-label="Primary navigation"><Link className="top-nav-brand" href="/dashboard">YoruSpace</Link><div className="top-nav-links" aria-label="Workspace links">{links}</div><div className="top-nav-actions"><CustomizeButton open={customizeOpen} onClick={onCustomize} /><NotificationButton /><ProfileMenu /><button type="button" className="nav-menu-button" onClick={onMenuToggle} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="dashboard-sidebar"><Menu /></button></div></nav>;
}
