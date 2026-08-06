import type { ReactNode } from "react";

export type BadgeVariant = "default" | "secondary" | "success" | "warning" | "destructive" | "outline";

export function Badge({ children, variant = "default" }: { children: ReactNode; variant?: BadgeVariant }) {
  return <span className={`badge-yoru badge-yoru--${variant}`}>{children}</span>;
}
