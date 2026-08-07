"use client";

import { BellRing, CircleHelp, FileText, MessageCircleMore } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Popover } from "@/app/components/ui/popover";

function ShowcaseCard({ eyebrow, title, note, children }: { eyebrow: string; title: string; note: string; children: React.ReactNode }) {
  return <section className="popovers-showcase-card"><div className="popovers-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

export function PopoversShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase popovers-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Popovers</p><h1>Popovers</h1><p>A popover is a transient overlay anchored to a specific control, giving people contextual detail without taking them away from their work.</p></header><div className="popovers-showcase-grid">
    <ShowcaseCard eyebrow="Foundation" title="Basic Example" note="Anchored detail"><Popover trigger={<Button appearance="outline" iconLeft={<CircleHelp aria-hidden="true" />}>View guidance</Button>} title="Keep your brief focused" ariaLabel="Project brief guidance"><div className="popovers-showcase-copy"><FileText aria-hidden="true" /><p>Start with the outcome, then add supporting context. Short briefs are easier for collaborators to review.</p></div></Popover><p className="popovers-showcase-hint">Click the trigger again, press Escape, or click outside to close.</p></ShowcaseCard>
    <ShowcaseCard eyebrow="Utility" title="Dismissible Example" note="Explicit close"><Popover dismissible trigger={<Button iconLeft={<BellRing aria-hidden="true" />}>Review reminder</Button>} title="Review due tomorrow" ariaLabel="Review reminder"><div className="popovers-showcase-copy"><BellRing aria-hidden="true" /><p>Two comments are waiting on the launch plan. Set aside a few minutes to give the team clear next steps.</p></div><div className="popovers-showcase-footer"><span>2 unread comments</span><MessageCircleMore aria-hidden="true" /></div></Popover><p className="popovers-showcase-hint">The close control provides a visible dismissal path while preserving keyboard support.</p></ShowcaseCard>
  </div></main>;
}
