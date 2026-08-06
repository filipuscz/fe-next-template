"use client";

import { useState } from "react";
import { ChevronDown, FileText, Layers } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Collapse } from "@/app/components/ui/collapse";

export function CollapseShowcase() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const toggleBoth = () => { const next = !(activityOpen && detailsOpen); setActivityOpen(next); setDetailsOpen(next); };

  return <main id="component-content" className="dashboard-main component-showcase collapse-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Collapse</p><h1>Collapse</h1><p>Toggle the visibility of content across your project with a few classes and our JavaScript plugins.</p></header><div className="collapse-showcase-grid"><section className="collapse-showcase-card"><div className="collapse-showcase-heading"><div><p className="card-kicker">Single target</p><h2>Basic Example</h2></div><span>One panel</span></div><Button appearance="outline" aria-expanded={basicOpen} aria-controls="collapse-basic" iconRight={<ChevronDown aria-hidden="true" />} onClick={() => setBasicOpen((open) => !open)}>{basicOpen ? "Hide details" : "Show details"}</Button><Collapse id="collapse-basic" open={basicOpen}><div className="collapse-yoru-content"><FileText aria-hidden="true" /><div><b>Workspace permissions</b><p>Members with editor access can update project details, invite collaborators, and manage shared views.</p></div></div></Collapse></section><section className="collapse-showcase-card"><div className="collapse-showcase-heading"><div><p className="card-kicker">Coordinated state</p><h2>Multiple Targets</h2></div><span>Two panels</span></div><div className="collapse-showcase-actions"><Button size="sm" appearance="outline" aria-expanded={activityOpen} aria-controls="collapse-activity" onClick={() => setActivityOpen((open) => !open)}>Toggle activity</Button><Button size="sm" appearance="outline" aria-expanded={detailsOpen} aria-controls="collapse-details" onClick={() => setDetailsOpen((open) => !open)}>Toggle details</Button><Button size="sm" aria-expanded={activityOpen && detailsOpen} aria-controls="collapse-activity collapse-details" iconLeft={<Layers aria-hidden="true" />} onClick={toggleBoth}>Toggle both</Button></div><Collapse id="collapse-activity" open={activityOpen}><div className="collapse-yoru-content"><FileText aria-hidden="true" /><div><b>Recent activity</b><p>Three collaborators updated the Briefing board in the last hour.</p></div></div></Collapse><Collapse id="collapse-details" open={detailsOpen}><div className="collapse-yoru-content"><FileText aria-hidden="true" /><div><b>Project details</b><p>The next review is scheduled for Thursday at 10:00 AM.</p></div></div></Collapse></section></div></main>;
}
