import type { CSSProperties } from "react";

export type ProgressVariant = "primary" | "success" | "info" | "warning" | "danger" | "secondary";
export type ProgressSize = "sm" | "default" | "lg";

export type ProgressSegment = { value: number; label?: string; variant?: ProgressVariant; animated?: boolean };

type ProgressProps = { value?: number; max?: number; label?: string; valueLabel?: string; showValue?: boolean; size?: ProgressSize; variant?: ProgressVariant; striped?: boolean; animated?: boolean; segments?: readonly ProgressSegment[] };

const clamp = (value: number, max: number) => Math.min(Math.max(value, 0), max);

export function Progress({ value = 0, max = 100, label, valueLabel, showValue = false, size = "default", variant = "primary", striped = false, animated = false, segments }: ProgressProps) {
  const safeMax = Math.max(max, 1);
  const hasSegments = Boolean(segments?.length);
  const currentValue = hasSegments ? segments!.reduce((total, segment) => total + clamp(segment.value, safeMax), 0) : clamp(value, safeMax);
  const percentage = Math.round((Math.min(currentValue, safeMax) / safeMax) * 100);
  const resolvedLabel = valueLabel ?? `${percentage}%`;

  return <div className="progress-yoru-wrap">
    {(label || showValue) && <div className="progress-yoru-label"><span>{label}</span>{showValue && <b>{resolvedLabel}</b>}</div>}
    <div className={`progress-yoru progress-yoru--${size}`} role="progressbar" aria-label={label ?? "Progress"} aria-valuemin={0} aria-valuemax={safeMax} aria-valuenow={Math.min(currentValue, safeMax)} aria-valuetext={resolvedLabel}>
      {hasSegments ? segments!.map((segment, index) => <span className={`progress-yoru-fill progress-yoru-fill--${segment.variant ?? variant} ${striped ? "is-striped" : ""} ${animated || segment.animated ? "is-animated" : ""}`} style={{ "--progress-value": `${(clamp(segment.value, safeMax) / safeMax) * 100}%` } as CSSProperties} key={`${segment.label ?? "segment"}-${index}`} title={segment.label}>{segment.label && <span>{segment.label}</span>}</span>) : <span className={`progress-yoru-fill progress-yoru-fill--${variant} ${striped ? "is-striped" : ""} ${animated ? "is-animated" : ""}`} style={{ "--progress-value": `${percentage}%` } as CSSProperties}>{showValue && <span>{resolvedLabel}</span>}</span>}
    </div>
  </div>;
}
