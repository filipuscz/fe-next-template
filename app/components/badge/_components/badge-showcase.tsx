import { Check, CircleAlert, Clock3, Sparkles, Tag } from "lucide-react";
import { Badge, type BadgeVariant } from "@/app/components/ui/badge";

const badges: { label: string; variant?: BadgeVariant }[] = [
  { label: "Default" }, { label: "Secondary", variant: "secondary" }, { label: "Approved", variant: "success" }, { label: "3", variant: "warning" }, { label: "99+", variant: "destructive" }, { label: "Outline", variant: "outline" },
];
const iconBadges: { label: string; variant: BadgeVariant; icon: typeof Check }[] = [
  { label: "Verified", variant: "success", icon: Check }, { label: "New release", variant: "default", icon: Sparkles }, { label: "Review needed", variant: "warning", icon: Clock3 }, { label: "Beta", variant: "outline", icon: Tag }, { label: "Action required", variant: "destructive", icon: CircleAlert },
];

export function BadgeShowcase() {
  return <main id="component-content" className="dashboard-main component-showcase badge-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Badge</p><h1>Badge</h1><p>Documentation and examples for badges, our small count and labeling component.</p></header><div className="badge-showcase-grid"><section className="badge-showcase-card"><div className="badge-showcase-heading"><div><p className="card-kicker">Examples</p><h2>Badges</h2></div><span>Labels & counts</span></div><p className="badge-showcase-description">Use a badge to label a status, call out a category, or show a concise count.</p><div className="badge-showcase-list">{badges.map((badge) => <Badge key={badge.label} variant={badge.variant}>{badge.label}</Badge>)}</div></section><section className="badge-showcase-card"><div className="badge-showcase-heading"><div><p className="card-kicker">Supporting detail</p><h2>Badge with icons</h2></div><span>Clear context</span></div><p className="badge-showcase-description">Pair a familiar icon with a short label when the status benefits from an additional visual cue.</p><div className="badge-showcase-list">{iconBadges.map((badge) => { const Icon = badge.icon; return <Badge key={badge.label} variant={badge.variant}><Icon aria-hidden="true" />{badge.label}</Badge>; })}</div></section></div></main>;
}
