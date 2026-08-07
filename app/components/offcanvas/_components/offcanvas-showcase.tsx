"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, PanelBottom, PanelLeft, PanelRight, PanelTop, ShieldCheck } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Offcanvas, type OffcanvasPlacement } from "@/app/components/ui/offcanvas";
import { placementOptions, workspaceNavigation } from "../_data/offcanvas-items";

function ShowcaseCard({ eyebrow, title, note, children, wide = false }: { eyebrow: string; title: string; note: string; children: React.ReactNode; wide?: boolean }) {
  return <section className={`offcanvas-showcase-card ${wide ? "offcanvas-showcase-card--wide" : ""}`}><div className="offcanvas-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

function DrawerNavigation() {
  return <nav className="offcanvas-demo-nav" aria-label="Workspace navigation">{workspaceNavigation.map((item) => <Link href={item.href} key={item.href}><span><b>{item.label}</b><small>{item.description}</small></span><ArrowRight aria-hidden="true" /></Link>)}</nav>;
}

const placementIcons = { start: PanelLeft, end: PanelRight, top: PanelTop, bottom: PanelBottom } as const;

export function OffcanvasShowcase() {
  const [exampleOpen, setExampleOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [placement, setPlacement] = useState<OffcanvasPlacement>("end");
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const selectedPlacement = placementOptions.find((option) => option.value === placement)?.label ?? "End";

  const openPlacement = (nextPlacement: OffcanvasPlacement) => { setPlacement(nextPlacement); setPlacementOpen(true); };

  return <main id="component-content" className="dashboard-main component-showcase offcanvas-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Offcanvas</p><h1>Offcanvas</h1><p>Build hidden sidebars into your project for navigation, shopping carts, and more with a few classes.</p></header><div className="offcanvas-showcase-grid">
    <ShowcaseCard eyebrow="Foundation" title="Example" note="Workspace navigation"><p className="offcanvas-showcase-description">Reveal a focused navigation surface without leaving the current workspace.</p><Button aria-expanded={exampleOpen} aria-controls="offcanvas-example" iconLeft={<Menu aria-hidden="true" />} onClick={() => setExampleOpen(true)}>Open navigation</Button><Offcanvas id="offcanvas-example" open={exampleOpen} onOpenChange={setExampleOpen} title="Workspace navigation"><DrawerNavigation /></Offcanvas></ShowcaseCard>
    <ShowcaseCard eyebrow="Four edges" title="Placement" note="Start to bottom"><p className="offcanvas-showcase-description">Choose the panel edge that best fits the content and available space.</p><div className="offcanvas-placement-actions">{placementOptions.map((option) => { const Icon = placementIcons[option.value]; return <Button key={option.value} size="sm" appearance="outline" aria-expanded={placementOpen && placement === option.value} aria-controls="offcanvas-placement" iconLeft={<Icon aria-hidden="true" />} onClick={() => openPlacement(option.value)}>{option.label}</Button>; })}</div><Offcanvas id="offcanvas-placement" open={placementOpen} onOpenChange={setPlacementOpen} title={`${selectedPlacement} placement`} placement={placement}><div className="offcanvas-demo-message"><ShieldCheck aria-hidden="true" /><div><b>{selectedPlacement} panel</b><p>This panel enters from the {selectedPlacement.toLowerCase()} edge and keeps its content easy to reach.</p></div></div></Offcanvas></ShowcaseCard>
    <ShowcaseCard eyebrow="Modal" title="Backdrop" note="Scrim + focus lock" wide><div className="offcanvas-backdrop-grid"><div><p className="offcanvas-showcase-description">The standard modal offcanvas uses a scrim, traps focus, and locks page scrolling.</p><Button aria-expanded={backdropOpen} aria-controls="offcanvas-backdrop" onClick={() => setBackdropOpen(true)}>Open with backdrop</Button><Offcanvas id="offcanvas-backdrop" open={backdropOpen} onOpenChange={setBackdropOpen} title="Project settings" placement="end"><div className="offcanvas-demo-message"><ShieldCheck aria-hidden="true" /><div><b>Protected workspace controls</b><p>Use the close button, Escape, or the backdrop to dismiss this modal panel.</p></div></div></Offcanvas></div><div><p className="offcanvas-showcase-description">This non-modal drawer has no scrim, focus trap, or scroll lock; Escape and close remain available.</p><Button appearance="outline" aria-expanded={drawerOpen} aria-controls="offcanvas-no-backdrop" onClick={() => setDrawerOpen(true)}>Open without backdrop</Button><Offcanvas id="offcanvas-no-backdrop" open={drawerOpen} onOpenChange={setDrawerOpen} title="Quick notes" placement="end" backdrop={false} modal={false}><div className="offcanvas-demo-message"><Menu aria-hidden="true" /><div><b>Quick notes drawer</b><p>Continue interacting with the page while this lightweight drawer is open.</p></div></div></Offcanvas></div></div></ShowcaseCard>
  </div></main>;
}
