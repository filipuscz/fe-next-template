"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cloneElement, useState } from "react";
import type { CSSProperties, MouseEvent, ReactElement, ReactNode } from "react";
import { useWorkspacePreferences } from "@/app/_components/providers/workspace-preferences-provider";
import { accents } from "@/app/_lib/workspace-theme";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export type TooltipProps = {
  trigger: ReactElement;
  content: ReactNode;
  side?: TooltipSide;
  align?: "start" | "center" | "end";
  sideOffset?: number;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <TooltipPrimitive.Provider delayDuration={300} skipDelayDuration={150}>{children}</TooltipPrimitive.Provider>;
}

export function Tooltip({ trigger, content, side = "top", align = "center", sideOffset = 10, open, defaultOpen = false, onOpenChange }: TooltipProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const { accent, dark } = useWorkspacePreferences();
  const theme = accents[accent][dark ? "dark" : "light"];
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = (nextOpen: boolean) => {
    if (!isControlled) setUncontrolledOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };
  const triggerProps = trigger.props as { onClick?: (event: MouseEvent<HTMLElement>) => void };
  const triggerWithTap = cloneElement(trigger as ReactElement<{ onClick?: (event: MouseEvent<HTMLElement>) => void }>, {
    onClick: (event: MouseEvent<HTMLElement>) => {
      triggerProps.onClick?.(event);
      if (event.defaultPrevented) return;
      window.setTimeout(() => setOpen(!isOpen), 0);
    },
  });

  const tooltipStyle = { "--tooltip-surface": dark ? "#2d2938" : "#fdfcff", "--tooltip-foreground": dark ? "#f7f5fa" : "#24212f", "--tooltip-border": dark ? "#484251" : "#dedbe7", "--tooltip-primary": theme.primary, "--tooltip-primary-subtle": theme.subtle } as CSSProperties;
  return <TooltipPrimitive.Root open={isOpen} onOpenChange={setOpen}><TooltipPrimitive.Trigger asChild>{triggerWithTap}</TooltipPrimitive.Trigger><TooltipPrimitive.Portal><TooltipPrimitive.Content className="tooltip-yoru" style={tooltipStyle} side={side} align={align} sideOffset={sideOffset} collisionPadding={16} hideWhenDetached><span>{content}</span><TooltipPrimitive.Arrow className="tooltip-yoru-arrow" width={14} height={7} /></TooltipPrimitive.Content></TooltipPrimitive.Portal></TooltipPrimitive.Root>;
}
