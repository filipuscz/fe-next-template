"use client";

import { Dropdown } from "@/app/components/ui/dropdown";
import { groupedItems, workspaceItems } from "../_data/dropdown-items";

const compactItems = workspaceItems.slice(0, 2);

function ShowcaseCard({ eyebrow, title, note, children }: { eyebrow: string; title: string; note: string; children: React.ReactNode }) {
  return <section className="dropdown-showcase-card"><div className="dropdown-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

export function DropdownShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase dropdown-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Dropdown</p><h1>Dropdown</h1><p>Toggle contextual overlays for displaying lists of links and more without taking focus away from the current workspace.</p></header><div className="dropdown-showcase-grid">
    <ShowcaseCard eyebrow="Foundation" title="Example" note="Contextual menu"><Dropdown label="Open menu" items={workspaceItems} /></ShowcaseCard>
    <ShowcaseCard eyebrow="Text trigger" title="Dropdown Link" note="Low emphasis"><Dropdown label="Quick links" items={workspaceItems} triggerStyle="link" /></ShowcaseCard>
    <ShowcaseCard eyebrow="Emphasis" title="Button Variant" note="Three variants"><div className="dropdown-showcase-actions"><Dropdown label="Primary" items={compactItems} /><Dropdown label="Secondary" items={compactItems} variant="secondary" /><Dropdown label="Outline" items={compactItems} variant="outline" /></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Paired action" title="Button Split" note="Action + menu"><Dropdown label="Create report" items={workspaceItems} split onPrimaryAction={() => undefined} /></ShowcaseCard>
    <ShowcaseCard eyebrow="Placement" title="Directions" note="Four edges"><div className="dropdown-showcase-actions dropdown-showcase-actions--directions"><Dropdown label="Down" items={compactItems} /><Dropdown label="Up" items={compactItems} direction="up" /><Dropdown label="Start" items={compactItems} direction="start" /><Dropdown label="End" items={compactItems} direction="end" /></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Item states" title="Active Link" note="Current route"><Dropdown label="Current page" items={groupedItems} /></ShowcaseCard>
    <ShowcaseCard eyebrow="Item states" title="Disabled Link" note="Unavailable"><Dropdown label="Account actions" items={groupedItems} /></ShowcaseCard>
    <ShowcaseCard eyebrow="Structure" title="Headers & Dividers" note="Grouped actions"><Dropdown label="Workspace menu" items={groupedItems} /></ShowcaseCard>
  </div></main>;
}
