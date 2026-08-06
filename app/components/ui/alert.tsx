"use client";

import type { ReactNode } from "react";
import { CheckCircle2, Info, OctagonAlert, TriangleAlert, X } from "lucide-react";

export type AlertVariant = "info" | "success" | "warning" | "destructive";
export type AlertAction = { label: string; onClick: () => void };
export type AlertProps = { variant?: AlertVariant; title: string; description?: ReactNode; action?: AlertAction; onDismiss?: () => void };

const icons = { info: Info, success: CheckCircle2, warning: TriangleAlert, destructive: OctagonAlert };

export function Alert({ variant = "info", title, description, action, onDismiss }: AlertProps) {
  const Icon = icons[variant];
  const role = variant === "destructive" ? "alert" : "status";

  return <section className={`alert-yoru alert-yoru--${variant}`} role={role} aria-live={variant === "destructive" ? "assertive" : "polite"}>
    <Icon className="alert-yoru-icon" aria-hidden="true" />
    <div className="alert-yoru-copy">
      <h3>{title}</h3>
      {description ? <div>{description}</div> : null}
      {action ? <button type="button" className="alert-yoru-action" onClick={action.onClick}>{action.label}</button> : null}
    </div>
    {onDismiss ? <button type="button" className="alert-yoru-dismiss" onClick={onDismiss} aria-label={`Dismiss ${title} alert`}><X aria-hidden="true" /></button> : null}
  </section>;
}
