"use client";

import { useEffect, useRef } from "react";

export function useDismissiblePopover(open: boolean, onDismiss: () => void, options?: { onEscape?: () => void }) {
  const controlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const dismissOnOutsidePress = (event: MouseEvent) => {
      if (!controlRef.current?.contains(event.target as Node)) onDismiss();
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
        options?.onEscape?.();
      }
    };
    document.addEventListener("mousedown", dismissOnOutsidePress);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("mousedown", dismissOnOutsidePress);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [onDismiss, open, options]);

  return controlRef;
}
