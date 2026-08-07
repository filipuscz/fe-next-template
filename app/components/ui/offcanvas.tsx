"use client";

import { useEffect, useId, useRef } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { X } from "lucide-react";

export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";

export type OffcanvasProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: ReactNode;
  id?: string;
  placement?: OffcanvasPlacement;
  backdrop?: boolean;
  modal?: boolean;
};

const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Offcanvas({ open, onOpenChange, title, children, id, placement = "start", backdrop = true, modal = true }: OffcanvasProps) {
  const generatedId = useId();
  const panelId = id ?? `offcanvas-${generatedId}`;
  const titleId = `${panelId}-title`;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const focusOriginRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    focusOriginRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    if (modal) document.body.style.overflow = "hidden";
    const frame = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      window.cancelAnimationFrame(frame);
      if (modal) document.body.style.overflow = previousOverflow;
      if (focusOriginRef.current?.isConnected) focusOriginRef.current.focus();
    };
  }, [modal, open]);

  const close = () => onOpenChange(false);

  const onPanelKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (!modal || event.key !== "Tab") return;

    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(focusableSelector));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!open) return null;

  return <div className={`offcanvas-yoru-layer offcanvas-yoru--${placement}`} data-modal={modal || undefined}>
    {backdrop ? <button type="button" className="offcanvas-yoru-backdrop" aria-label={`Close ${title}`} onClick={close} /> : null}
    <section id={panelId} className="offcanvas-yoru-panel" role="dialog" aria-modal={modal || undefined} aria-labelledby={titleId} onKeyDown={onPanelKeyDown}>
      <header className="offcanvas-yoru-header"><h2 id={titleId}>{title}</h2><button ref={closeButtonRef} className="offcanvas-yoru-close" type="button" onClick={close} aria-label={`Close ${title}`}><X aria-hidden="true" /></button></header>
      <div className="offcanvas-yoru-body">{children}</div>
    </section>
  </div>;
}
