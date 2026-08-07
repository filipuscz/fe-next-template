import { ListGroup } from "@/app/components/ui/list-group";
import { activeItems, backgroundItems, badgeItems, exampleItems, flushItems, linkItems } from "../_data/list-group-items";

const sections = [
  { kicker: "Foundation", title: "Example", detail: "Content rows", items: exampleItems, label: "List group example" },
  { kicker: "Selection", title: "Active Item", detail: "Current view", items: activeItems, label: "List group with an active item" },
  { kicker: "Compact", title: "List group flush", detail: "Edge-to-edge", items: flushItems, label: "Flush list group", variant: "flush" as const },
  { kicker: "Supporting detail", title: "List group with badge", detail: "Counts included", items: badgeItems, label: "List group with badges" },
  { kicker: "Semantic states", title: "List group background", detail: "Status context", items: backgroundItems, label: "List group background variants", wide: true },
  { kicker: "Navigation", title: "List group with Link", detail: "Real routes", items: linkItems, label: "List group links" },
];

export function ListGroupShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase list-group-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> List group</p><h1>List group</h1><p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p></header><div className="list-group-showcase-grid">{sections.map((section) => <section className={`list-group-showcase-card ${section.wide ? "list-group-showcase-card--wide" : ""}`} key={section.title}><div className="list-group-showcase-heading"><div><p className="card-kicker">{section.kicker}</p><h2>{section.title}</h2></div><span>{section.detail}</span></div><ListGroup items={section.items} label={section.label} variant={section.variant} /></section>)}</div></main>;
}
