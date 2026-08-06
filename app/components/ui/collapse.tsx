"use client";

import type { ReactNode } from "react";

export function Collapse({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return <div id={id} className={`collapse-yoru ${open ? "is-open" : ""}`}><div>{children}</div></div>;
}
