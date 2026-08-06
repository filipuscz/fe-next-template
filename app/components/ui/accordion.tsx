"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  value: string;
  title: string;
  body: string;
};

export function Accordion({ items, type = "single", collapsible = true, defaultValue, variant = "card" }: { items: readonly AccordionItem[]; type?: "single" | "multiple"; collapsible?: boolean; defaultValue?: string | string[]; variant?: "card" | "flush" }) {
  const id = useId();
  const defaults = Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : [];
  const [openValues, setOpenValues] = useState<string[]>(defaults);

  const toggle = (value: string) => {
    const isOpen = openValues.includes(value);
    if (type === "multiple") {
      setOpenValues(isOpen ? openValues.filter((item) => item !== value) : [...openValues, value]);
      return;
    }
    if (isOpen && collapsible) setOpenValues([]);
    else if (!isOpen) setOpenValues([value]);
  };

  return <div className={`accordion-yoru accordion-yoru--${variant}`}>
    {items.map((item) => {
      const open = openValues.includes(item.value);
      const panelId = `${id}-${item.value}-panel`;
      const headingId = `${id}-${item.value}-heading`;
      return <section className={`accordion-yoru-item ${open ? "is-open" : ""}`} key={item.value}>
        <h3 id={headingId}><button type="button" onClick={() => toggle(item.value)} aria-expanded={open} aria-controls={panelId}><span>{item.title}</span><ChevronDown aria-hidden="true" /></button></h3>
        <div id={panelId} className="accordion-yoru-panel" role="region" aria-labelledby={headingId}><div><p>{item.body}</p></div></div>
      </section>;
    })}
  </div>;
}
