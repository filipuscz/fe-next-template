import type { CSSProperties } from "react";

export type PlaceholderVariant = "neutral" | "primary" | "success" | "warning" | "danger";
export type PlaceholderSize = "sm" | "default" | "lg";
export type PlaceholderAnimation = "none" | "pulse" | "wave";
export type PlaceholderShape = "line" | "block" | "circle";

type PlaceholderProps = {
  width?: string | number;
  height?: string | number;
  size?: PlaceholderSize;
  variant?: PlaceholderVariant;
  animation?: PlaceholderAnimation;
  shape?: PlaceholderShape;
  label?: string;
};

export function Placeholder({ width = "100%", height, size = "default", variant = "neutral", animation = "none", shape = "line", label }: PlaceholderProps) {
  const style = { "--placeholder-width": typeof width === "number" ? `${width}px` : width, "--placeholder-height": height === undefined ? undefined : typeof height === "number" ? `${height}px` : height } as CSSProperties;
  return <span className={`placeholder-yoru placeholder-yoru--${size} placeholder-yoru--${variant} placeholder-yoru--${shape} placeholder-yoru--${animation}`} style={style} {...(label ? { role: "status", "aria-label": label } : { "aria-hidden": true })} />;
}
