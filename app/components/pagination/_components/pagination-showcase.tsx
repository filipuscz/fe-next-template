"use client";

import { useState } from "react";
import { Pagination, type PaginationAlignment } from "@/app/components/ui/pagination";

const alignments: Array<{ value: PaginationAlignment; title: string; note: string }> = [
  { value: "start", title: "Start", note: "Default alignment" },
  { value: "center", title: "Center", note: "Balanced layout" },
  { value: "end", title: "End", note: "Trailing alignment" },
];

function ShowcaseCard({ eyebrow, title, note, children }: { eyebrow: string; title: string; note: string; children: React.ReactNode }) {
  return <section className="pagination-showcase-card"><div className="pagination-showcase-heading"><div><p className="card-kicker">{eyebrow}</p><h2>{title}</h2></div><span>{note}</span></div>{children}</section>;
}

export function PaginationShowcase() {
  const [currentPage, setCurrentPage] = useState(2);

  return <main id="component-content" className="dashboard-main component-showcase pagination-showcase"><header className="component-showcase-header"><p className="dashboard-eyebrow">Components <span>/</span> Pagination</p><h1>Pagination</h1><p>Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.</p></header><div className="pagination-showcase-grid"><ShowcaseCard eyebrow="Foundation" title="Example" note="Current page"><div className="pagination-showcase-example"><p aria-live="polite">Showing page <b>{currentPage}</b> of 5</p><Pagination totalPages={5} page={currentPage} onPageChange={setCurrentPage} label="Example pagination" /></div></ShowcaseCard><ShowcaseCard eyebrow="Layout" title="Alignment" note="Three positions"><div className="pagination-showcase-alignments">{alignments.map(({ value, title, note }) => <div className="pagination-showcase-alignment" key={value}><div><b>{title}</b><span>{note}</span></div><Pagination totalPages={3} defaultPage={2} alignment={value} label={`${title} aligned pagination`} /></div>)}</div></ShowcaseCard></div></main>;
}
