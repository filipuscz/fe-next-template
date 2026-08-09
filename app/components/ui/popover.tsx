"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import { X } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

export type PopoverProps = {
  trigger: ReactElement;
  title: ReactNode;
  children: ReactNode;
  ariaLabel: string;
  dismissible?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
};

export function Popover({ trigger, title, children, ariaLabel, dismissible = false, open, defaultOpen, onOpenChange, side = "bottom", align = "start", className }: PopoverProps) {
  return <PopoverPrimitive.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content className={["popover-yoru", className].filter(Boolean).join(" ")} side={side} align={align} sideOffset={10} aria-label={ariaLabel} onOpenAutoFocus={(event) => event.preventDefault()}>
        <div className="popover-yoru-header"><h3>{title}</h3>{dismissible ? <PopoverPrimitive.Close asChild><button type="button" className="popover-yoru-close" aria-label="Close popover"><X aria-hidden="true" /></button></PopoverPrimitive.Close> : null}</div>
        <div className="popover-yoru-body">{children}</div>
        <PopoverPrimitive.Arrow className="popover-yoru-arrow" width={15} height={8} />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>;
}
