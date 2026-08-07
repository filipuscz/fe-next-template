"use client";

import { useCallback, useState } from "react";
import { SortableList, type SortableItem } from "@/app/components/ui/sortable";

const starterItems: SortableItem[] = [
  { id: "brief", title: "Refine project brief", description: "Clarify the outcomes for the next review." },
  { id: "research", title: "Collect research", description: "Gather supporting customer insights." },
  { id: "prototype", title: "Prototype key flow", description: "Prepare a focused first interaction." },
];

const plannedItems: SortableItem[] = [{ id: "copy", title: "Write release copy", description: "Prepare the workspace announcement." }, { id: "qa", title: "Schedule QA", description: "Book a final quality pass." }];
const progressItems: SortableItem[] = [{ id: "design", title: "Review design system", description: "Align the component tokens." }, { id: "handoff", title: "Prepare handoff", description: "Document implementation notes." }];
const workflowItems = new Map([...plannedItems, ...progressItems].map((item) => [item.id, item]));

export function SortableShowcase() {
  const [basic, setBasic] = useState(starterItems);
  const [options, setOptions] = useState(starterItems);
  const [planned, setPlanned] = useState(plannedItems);
  const [inProgress, setInProgress] = useState(progressItems);
  const setPlannedOrder = useCallback((next: SortableItem[]) => setPlanned(next), []);
  const setProgressOrder = useCallback((next: SortableItem[]) => setInProgress(next), []);
  const moveBetweenStages = useCallback((itemId: string, fromId: string, toId: string, oldIndex: number, newIndex: number) => {
    if (fromId === toId) return;
    const item = workflowItems.get(itemId);
    if (!item) return;
    if (fromId === "planned") setPlanned((items) => items.filter((candidate) => candidate.id !== itemId)); else setInProgress((items) => items.filter((candidate) => candidate.id !== itemId));
    if (toId === "planned") setPlanned((items) => [...items.slice(0, newIndex), item, ...items.slice(newIndex)]); else setInProgress((items) => [...items.slice(0, newIndex), item, ...items.slice(newIndex)]);
  }, []);

  return <main id="component-content" className="dashboard-main component-showcase sortable-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Sortable</p><h1>Sortable</h1><p>Reorderable drag-and-drop lists for modern browsers and touch devices.</p></header><div className="sortable-showcase-grid"><section className="sortable-showcase-card"><div className="sortable-showcase-heading"><div><p className="card-kicker">Foundation</p><h2>Basic Example</h2></div><span>Drag to reorder</span></div><p className="sortable-showcase-description">Drag a row by its handle, or use the keyboard-accessible move controls.</p><SortableList id="basic" items={basic} onOrderChange={setBasic} label="Basic sortable project tasks" /></section><section className="sortable-showcase-card"><div className="sortable-showcase-heading"><div><p className="card-kicker">Configured</p><h2>User Options</h2></div><span>Touch ready</span></div><p className="sortable-showcase-description">This list uses a 150ms animation, handle-only dragging, and a small touch delay.</p><SortableList id="options" items={options} onOrderChange={setOptions} animation={150} delay={150} delayOnTouchOnly label="Sortable list with user options" /></section><section className="sortable-showcase-card sortable-showcase-card--wide"><div className="sortable-showcase-heading"><div><p className="card-kicker">Connected lists</p><h2>Multiple Targets</h2></div><span>Move between stages</span></div><p className="sortable-showcase-description">Drag work between stages to update its current workflow location.</p><div className="sortable-showcase-targets"><section><h3>Planned</h3><SortableList id="planned" items={planned} onOrderChange={setPlannedOrder} onCrossListMove={moveBetweenStages} group="workspace-workflow" label="Planned work" /></section><section><h3>In progress</h3><SortableList id="in-progress" items={inProgress} onOrderChange={setProgressOrder} onCrossListMove={moveBetweenStages} group="workspace-workflow" label="Work in progress" /></section></div></section></div></main>;
}
