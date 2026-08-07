"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";
import type { ReactElement, ReactNode } from "react";

export type ModalProps = {
  trigger: ReactElement;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  staticBackdrop?: boolean;
  scrollBody?: boolean;
  className?: string;
};

export function Modal({ trigger, title, description, children, footer, open, defaultOpen, onOpenChange, staticBackdrop = false, scrollBody = false, className }: ModalProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  return <Dialog.Root open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <div className="modal-yoru-portal" ref={setPortalContainer} />
    {portalContainer && <Dialog.Portal container={portalContainer}>
      <Dialog.Overlay className="modal-yoru-overlay">
        <Dialog.Content className={["modal-yoru-content", scrollBody ? "modal-yoru-content--scrollable" : "", className].filter(Boolean).join(" ")} onPointerDownOutside={staticBackdrop ? (event) => event.preventDefault() : undefined}>
          <div className="modal-yoru-header"><div><Dialog.Title className="modal-yoru-title">{title}</Dialog.Title>{description && <Dialog.Description className="modal-yoru-description">{description}</Dialog.Description>}</div><Dialog.Close className="modal-yoru-close" aria-label="Close dialog"><X aria-hidden="true" /></Dialog.Close></div>
          <div className="modal-yoru-body">{children}</div>
          <div className="modal-yoru-footer">{footer ?? <Dialog.Close className="button-yoru button-yoru--secondary button-yoru--solid">Close</Dialog.Close>}</div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>}
  </Dialog.Root>;
}
