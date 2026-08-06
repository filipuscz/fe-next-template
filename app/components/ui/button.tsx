import type { ButtonHTMLAttributes, ReactNode } from "react";
import { LoaderCircle, X } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info";
export type ButtonAppearance = "solid" | "subtle" | "outline";
export type ButtonSize = "sm" | "default" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; appearance?: ButtonAppearance; size?: ButtonSize; loading?: boolean; iconLeft?: ReactNode; iconRight?: ReactNode; capsule?: boolean };

export function Button({ children, variant = "primary", appearance = "solid", size = "default", loading = false, iconLeft, iconRight, capsule = false, disabled, className, ...props }: ButtonProps) {
  return <button type="button" {...props} disabled={disabled || loading} aria-busy={loading || undefined} className={["button-yoru", `button-yoru--${variant}`, `button-yoru--${appearance}`, `button-yoru--${size}`, capsule ? "button-yoru--capsule" : "", className].filter(Boolean).join(" ")}>{loading ? <LoaderCircle className="button-yoru-spinner" aria-hidden="true" /> : iconLeft}{children}<>{iconRight}</></button>;
}

export function CloseButton({ "aria-label": ariaLabel, ...props }: Omit<ButtonProps, "children" | "size" | "iconLeft" | "iconRight"> & { "aria-label": string }) {
  return <Button {...props} size="icon" appearance="subtle" aria-label={ariaLabel}><X aria-hidden="true" /></Button>;
}

export function ButtonGroup({ children, label }: { children: ReactNode; label: string }) {
  return <div className="button-yoru-group" role="group" aria-label={label}>{children}</div>;
}
