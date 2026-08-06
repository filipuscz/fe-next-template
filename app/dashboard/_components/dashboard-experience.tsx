"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { DashboardCustomizePanel } from "./dashboard-customize-panel";
import { DashboardSideNav } from "./dashboard-side-nav";
import { DashboardTopNav } from "./dashboard-top-nav";
import { accents, type Accent, type Background } from "../_lib/dashboard-theme";

export function DashboardExperience({ children }: { children: ReactNode }) {
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"overview" | "analytics" | "orders">("overview");
  const [accent, setAccent] = useState<Accent>("violet");
  const [background, setBackground] = useState<Background>("aurora");
  const [dark, setDark] = useState(false);
  const selectedAccent = accents[accent];
  useEffect(() => { const updateActiveSection = () => { const analytics = document.getElementById("analytics"); const orders = document.getElementById("orders"); const threshold = 132; if (orders && orders.getBoundingClientRect().top <= threshold) setActiveSection("orders"); else if (analytics && analytics.getBoundingClientRect().top <= threshold) setActiveSection("analytics"); else setActiveSection("overview"); }; updateActiveSection(); window.addEventListener("scroll", updateActiveSection, { passive: true }); return () => window.removeEventListener("scroll", updateActiveSection); }, []);
  return <div className={`dashboard-yoru ${dark ? "theme-dark" : "theme-light"} background-${background} ${collapsed ? "sidebar-collapsed" : ""}`} style={{ "--accent": selectedAccent.start, "--scene-end": selectedAccent.end } as CSSProperties}><a className="skip-link" href="#dashboard-content">Skip to dashboard content</a><DashboardTopNav activeSection={activeSection} customizeOpen={customizeOpen} menuOpen={mobileMenuOpen} onCustomize={() => setCustomizeOpen((open) => !open)} onMenuToggle={() => setMobileMenuOpen((open) => !open)} /><DashboardSideNav collapsed={collapsed} mobileOpen={mobileMenuOpen} onToggle={() => setCollapsed((value) => !value)} onDismiss={() => setMobileMenuOpen(false)} /><DashboardCustomizePanel open={customizeOpen} dark={dark} accent={accent} background={background} onDarkChange={() => setDark((value) => !value)} onAccentChange={setAccent} onBackgroundChange={setBackground} />{children}</div>;
}
