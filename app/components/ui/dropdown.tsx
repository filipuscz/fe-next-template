"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { useDismissiblePopover } from "@/app/_components/app-shell/_hooks/use-dismissible-popover";

export type DropdownEntry =
  | { type: "item"; label: string; href?: string; active?: boolean; disabled?: boolean; onSelect?: () => void }
  | { type: "header"; label: string }
  | { type: "divider" };

export type DropdownDirection = "down" | "up" | "start" | "end";
export type DropdownTriggerStyle = "button" | "link";
export type DropdownButtonVariant = "primary" | "secondary" | "outline";

type DropdownProps = {
  label: ReactNode;
  items: readonly DropdownEntry[];
  ariaLabel?: string;
  direction?: DropdownDirection;
  triggerStyle?: DropdownTriggerStyle;
  variant?: DropdownButtonVariant;
  split?: boolean;
  onPrimaryAction?: () => void;
};

export function Dropdown({ label, items, ariaLabel, direction = "down", triggerStyle = "button", variant = "primary", split = false, onPrimaryAction }: DropdownProps) {
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const pendingFocusRef = useRef<"first" | "last" | null>(null);
  const [open, setOpen] = useState(false);
  const dismiss = useCallback(() => setOpen(false), []);
  const controlRef = useDismissiblePopover(open, dismiss, { onEscape: () => triggerRef.current?.focus() });
  const enabledItems = items.reduce<number[]>((indexes, item, index) => item.type === "item" && !item.disabled ? [...indexes, index] : indexes, []);

  useEffect(() => {
    if (!open || !pendingFocusRef.current) return;
    const index = pendingFocusRef.current === "first" ? enabledItems[0] : enabledItems.at(-1);
    itemRefs.current[index ?? -1]?.focus();
    pendingFocusRef.current = null;
  }, [enabledItems, open]);

  const toggle = (target: "first" | "last" | null = null) => {
    pendingFocusRef.current = target;
    setOpen((value) => !value);
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    if (!open) {
      setOpen(true);
      pendingFocusRef.current = event.key === "ArrowDown" ? "first" : "last";
    }
  };

  const onMenuKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    const currentIndex = itemRefs.current.findIndex((item) => item === document.activeElement);
    const currentEnabledIndex = enabledItems.indexOf(currentIndex);
    let nextIndex: number | undefined;
    if (event.key === "ArrowDown") nextIndex = enabledItems[(currentEnabledIndex + 1) % enabledItems.length];
    if (event.key === "ArrowUp") nextIndex = enabledItems[(currentEnabledIndex - 1 + enabledItems.length) % enabledItems.length];
    if (event.key === "Home") nextIndex = enabledItems[0];
    if (event.key === "End") nextIndex = enabledItems.at(-1);
    if (nextIndex === undefined) return;
    event.preventDefault();
    itemRefs.current[nextIndex]?.focus();
  };

  const triggerClass = `dropdown-yoru-trigger dropdown-yoru-trigger--${triggerStyle} dropdown-yoru-trigger--${variant}`;
  const renderItem = (item: DropdownEntry, index: number) => {
    if (item.type === "header") return <p className="dropdown-yoru-header" role="presentation" key={`${item.label}-${index}`}>{item.label}</p>;
    if (item.type === "divider") return <div className="dropdown-yoru-divider" role="separator" key={`divider-${index}`} />;
    const className = `dropdown-yoru-item ${item.active ? "is-active" : ""}`;
    const ref = (element: HTMLElement | null) => { itemRefs.current[index] = element; };
    if (item.href && !item.disabled) return <a className={className} href={item.href} ref={ref} role="menuitem" aria-current={item.active ? "page" : undefined} onClick={dismiss} key={item.label}>{item.label}</a>;
    return <button className={className} type="button" ref={ref} role="menuitem" disabled={item.disabled} aria-disabled={item.disabled || undefined} onClick={() => { item.onSelect?.(); dismiss(); }} key={item.label}>{item.label}</button>;
  };

  return <div className={`dropdown-yoru dropdown-yoru--${direction}`} ref={controlRef}>
    <div className={split ? "dropdown-yoru-split" : undefined}>
      {split && <button className={`${triggerClass} dropdown-yoru-primary-action`} type="button" onClick={onPrimaryAction}>{label}</button>}
      <button className={triggerClass} type="button" ref={triggerRef} onClick={() => toggle()} onKeyDown={onTriggerKeyDown} aria-haspopup="menu" aria-expanded={open} aria-controls={menuId} aria-label={ariaLabel ?? (typeof label === "string" ? `${label} menu` : "Open menu")} data-state={open ? "open" : "closed"}>{split ? <><span className="sr-only">Open menu</span><ChevronDown aria-hidden="true" /></> : <>{label}<ChevronDown aria-hidden="true" /></>}</button>
    </div>
    {open && <div id={menuId} className="dropdown-yoru-menu" role="menu" aria-label={ariaLabel ?? "Dropdown menu"} onKeyDown={onMenuKeyDown}>{items.map(renderItem)}</div>}
  </div>;
}
