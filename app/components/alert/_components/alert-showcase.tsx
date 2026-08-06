"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { Alert } from "@/app/components/ui/alert";
import { alertItems } from "../_data/alert-items";

export function AlertShowcase() {
  const [visibleAlerts, setVisibleAlerts] = useState(() => alertItems.map((item) => item.id));
  const [announcement, setAnnouncement] = useState("Four alert examples are available.");
  const visibleItems = alertItems.filter((item) => visibleAlerts.includes(item.id));
  const dismiss = (id: string, title: string) => { setVisibleAlerts((items) => items.filter((item) => item !== id)); setAnnouncement(`${title} dismissed.`); };
  const reset = () => { setVisibleAlerts(alertItems.map((item) => item.id)); setAnnouncement("All alert examples restored."); };

  return <main id="component-content" className="dashboard-main component-showcase alert-showcase">
    <header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Alert</p><h1>Alert</h1><p>Provide contextual feedback messages for typical user actions with flexible, easy-to-scan alerts.</p></header>
    <div className="alert-showcase-toolbar"><p>Use an alert to surface an important status, explain what happened, and offer a clear next step.</p><button type="button" className="alert-showcase-reset" onClick={reset} disabled={visibleItems.length === alertItems.length}><RotateCcw aria-hidden="true" />Reset examples</button></div>
    <p className="sr-only" aria-live="polite" aria-atomic="true">{announcement}</p>
    <div className="alert-showcase-grid">
      {visibleItems.map((item) => <section className="alert-showcase-card" key={item.id}><div className="alert-showcase-heading"><p className="card-kicker">{item.variant}</p><span>{item.action}</span></div><Alert variant={item.variant} title={item.title} description={item.description} action={{ label: item.action, onClick: () => setAnnouncement(item.confirmation) }} onDismiss={() => dismiss(item.id, item.title)} /></section>)}
      {visibleItems.length === 0 ? <section className="alert-showcase-empty"><h2>All examples are dismissed</h2><p>Restore them to compare each feedback state again.</p></section> : null}
    </div>
  </main>;
}
