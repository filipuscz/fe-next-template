"use client";

import type { ReactNode } from "react";

export function Collapse({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <div id={id} className="collapse-yoru" data-state={open ? "open" : "closed"} aria-hidden={!open} inert={!open}>
      <div className="collapse-yoru-inner">{children}</div>
    </div>
  );
}
