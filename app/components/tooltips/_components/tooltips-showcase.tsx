"use client";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, CircleHelp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Tooltip, TooltipProvider, type TooltipSide } from "@/app/components/ui/tooltip";

const directions: Array<{ side: TooltipSide; label: string; icon: typeof ArrowUp }> = [
  { side: "top", label: "Top", icon: ArrowUp },
  { side: "right", label: "Right", icon: ArrowRight },
  { side: "bottom", label: "Bottom", icon: ArrowDown },
  { side: "left", label: "Left", icon: ArrowLeft },
];

export function TooltipsShowcase() {
  return <TooltipProvider><main id="component-content" className="dashboard-main component-showcase tooltips-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Tooltips</p><h1>Tooltips</h1><p>Tooltips are brief, non-modal messages that provide helpful context without interrupting a workflow. Use a popover instead when people need to take an action.</p></header><section className="tooltips-showcase-card" aria-labelledby="tooltip-example-title"><div className="tooltips-showcase-heading"><div><p className="card-kicker">Foundation</p><h2 id="tooltip-example-title">Example</h2></div><span>Four directions</span></div><p className="tooltips-showcase-description">Hover, focus, or tap a control to reveal the same concise instruction from each edge.</p><div className="tooltips-showcase-grid">{directions.map(({ side, label, icon: Icon }) => <div key={side} className="tooltips-showcase-example"><Tooltip side={side} content="Share this workspace with your collaborators." trigger={<Button appearance="outline" iconLeft={<Icon aria-hidden="true" />}>{label}</Button>} /><span>{label}</span></div>)}</div><p className="tooltips-showcase-hint"><CircleHelp aria-hidden="true" /> Press Escape, tap the trigger again, or tap elsewhere to dismiss an open tooltip.</p></section></main></TooltipProvider>;
}
