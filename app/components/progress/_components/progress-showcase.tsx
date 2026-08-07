import { Progress, type ProgressVariant } from "@/app/components/ui/progress";

const backgrounds: ProgressVariant[] = ["primary", "success", "info", "warning", "danger"];

function ShowcaseCard({ eyebrow, title, note, children }: { eyebrow: string; title: string; note: string; children: React.ReactNode }) {
  return <section className="progress-showcase-card"><div className="progress-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

export function ProgressShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase progress-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Progress</p><h1>Progress</h1><p>Documentation and examples for custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.</p></header><div className="progress-showcase-grid">
    <ShowcaseCard eyebrow="Foundation" title="Example" note="Stacked & animated"><div className="progress-showcase-list"><Progress label="Project completion" value={62} showValue /><Progress label="Workspace allocation" segments={[{ value: 38, label: "Design", variant: "primary" }, { value: 26, label: "Build", variant: "info", animated: true }, { value: 14, label: "Review", variant: "success" }]} striped /></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Supporting detail" title="Label" note="Clear status"><div className="progress-showcase-list"><Progress label="Upload complete" value={72} showValue /><Progress label="Quarterly target" value={48} valueLabel="48 of 100 tasks" showValue variant="success" /></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Sizing" title="Height" note="Three sizes"><div className="progress-showcase-list"><Progress label="Small progress" value={34} size="sm" showValue /><Progress label="Default progress" value={56} showValue /><Progress label="Large progress" value={78} size="lg" showValue /></div></ShowcaseCard>
    <ShowcaseCard eyebrow="Visual status" title="Background" note="Semantic colors"><div className="progress-showcase-list">{backgrounds.map((variant, index) => <Progress key={variant} label={variant.charAt(0).toUpperCase() + variant.slice(1)} value={28 + index * 14} variant={variant} showValue />)}</div></ShowcaseCard>
  </div></main>;
}
