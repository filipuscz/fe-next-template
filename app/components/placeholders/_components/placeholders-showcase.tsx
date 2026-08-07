import { Placeholder, type PlaceholderAnimation, type PlaceholderSize, type PlaceholderVariant } from "@/app/components/ui/placeholder";

const widths = ["100%", "75%", "50%", "25%"];
const colors: PlaceholderVariant[] = ["neutral", "primary", "success", "warning", "danger"];
const sizes: PlaceholderSize[] = ["sm", "default", "lg"];
const animations: PlaceholderAnimation[] = ["none", "pulse", "wave"];

function ShowcaseCard({ eyebrow, title, note, children }: { eyebrow: string; title: string; note: string; children: React.ReactNode }) {
  return <section className="placeholders-showcase-card"><div className="placeholders-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

export function PlaceholdersShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase placeholders-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Placeholders</p><h1>Placeholders</h1><p>Use loading placeholders for your components or pages to indicate something may still be loading.</p></header><div className="placeholders-showcase-grid">
    <ShowcaseCard eyebrow="Foundation" title="Example" note="Reserved layout"><div className="placeholder-profile-card" aria-busy="true" aria-label="Loading profile"><Placeholder shape="circle" width={42} height={42} animation="wave" /><div><Placeholder width="42%" /><Placeholder width="78%" size="sm" /><Placeholder width="58%" size="sm" /></div></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Dimensions" title="Width" note="Flexible values"><div className="placeholders-showcase-list">{widths.map((width) => <div className="placeholder-row" key={width}><span>{width}</span><Placeholder width={width} animation="pulse" /></div>)}</div></ShowcaseCard>
    <ShowcaseCard eyebrow="Surface" title="Color" note="Semantic variants"><div className="placeholders-showcase-list">{colors.map((variant) => <div className="placeholder-row" key={variant}><span>{variant}</span><Placeholder variant={variant} width="78%" /></div>)}</div></ShowcaseCard>
    <ShowcaseCard eyebrow="Dimensions" title="Sizing" note="Three heights"><div className="placeholders-showcase-list">{sizes.map((size) => <div className="placeholder-row" key={size}><span>{size}</span><Placeholder size={size} width="78%" /></div>)}</div></ShowcaseCard>
    <ShowcaseCard eyebrow="Motion" title="Animation" note="Reduced-motion safe"><div className="placeholders-showcase-list">{animations.map((animation) => <div className="placeholder-row" key={animation}><span>{animation}</span><Placeholder animation={animation} width="78%" label={animation === "wave" ? "Loading activity" : undefined} /></div>)}</div></ShowcaseCard>
  </div></main>;
}
