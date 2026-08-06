"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { accents } from "@/app/_lib/workspace-theme";
import { useWorkspacePreferences } from "@/app/_components/providers/workspace-preferences-provider";
import { AppearancePanel } from "./appearance-panel";
import { WorkspaceSideNav } from "./workspace-side-nav";
import { WorkspaceTopNav } from "./workspace-top-nav";

export function WorkspaceShell({ children, mainId = "dashboard-content", activePage = "dashboard" }: { children: ReactNode; mainId?: string; activePage?: "dashboard" | "accordion" | "alert" | "badge" | "button" }) {
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<"overview" | "analytics" | "orders">("overview");
  const { accent, background, dark, setAccent, setBackground, setDark } = useWorkspacePreferences();
  const selectedAccent = accents[accent];
  useEffect(() => { if (activePage !== "dashboard") return; const updateActiveSection = () => { const analytics = document.getElementById("analytics"); const orders = document.getElementById("orders"); const threshold = 132; if (orders && orders.getBoundingClientRect().top <= threshold) setActiveSection("orders"); else if (analytics && analytics.getBoundingClientRect().top <= threshold) setActiveSection("analytics"); else setActiveSection("overview"); }; updateActiveSection(); window.addEventListener("scroll", updateActiveSection, { passive: true }); return () => window.removeEventListener("scroll", updateActiveSection); }, [activePage]);
  return <div className={`dashboard-yoru ${dark ? "theme-dark" : "theme-light"} background-${background} ${collapsed ? "sidebar-collapsed" : ""}`} style={{ "--accent": selectedAccent.start, "--scene-end": selectedAccent.end } as CSSProperties}><a className="skip-link" href={`#${mainId}`}>Skip to main content</a><WorkspaceTopNav activePage={activePage} activeSection={activeSection} customizeOpen={customizeOpen} menuOpen={mobileMenuOpen} onCustomize={() => setCustomizeOpen((open) => !open)} onMenuToggle={() => setMobileMenuOpen((open) => !open)} /><WorkspaceSideNav activePage={activePage} collapsed={collapsed} mobileOpen={mobileMenuOpen} onToggle={() => setCollapsed((value) => !value)} onDismiss={() => setMobileMenuOpen(false)} /><AppearancePanel open={customizeOpen} dark={dark} accent={accent} background={background} onDarkChange={() => setDark(!dark)} onAccentChange={setAccent} onBackgroundChange={setBackground} />{children}</div>;
}
