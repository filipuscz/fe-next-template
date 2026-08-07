"use client";

import { useEffect, useRef } from "react";
import { GripVertical, MoveDown, MoveUp } from "lucide-react";
import SortableJS, { type SortableEvent } from "sortablejs";

export type SortableItem = { id: string; title: string; description?: string };

export function SortableList({ id, items, onOrderChange, onCrossListMove, group, animation = 180, handle = ".sortable-yoru-handle", delay = 0, delayOnTouchOnly = false, disabled = false, label }: { id: string; items: readonly SortableItem[]; onOrderChange: (items: SortableItem[]) => void; onCrossListMove?: (itemId: string, fromId: string, toId: string, oldIndex: number, newIndex: number) => void; group?: string; animation?: number; handle?: string; delay?: number; delayOnTouchOnly?: boolean; disabled?: boolean; label: string }) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef(items);

  useEffect(() => { itemsRef.current = items; }, [items]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const sync = (sortable: SortableJS) => {
      const byId = new Map(itemsRef.current.map((item) => [item.id, item]));
      onOrderChange(sortable.toArray().map((id) => byId.get(id)).filter((item): item is SortableItem => Boolean(item)));
    };
    const sortable = SortableJS.create(list, { group, animation, handle, delay, delayOnTouchOnly, disabled, ghostClass: "is-ghost", chosenClass: "is-chosen", dragClass: "is-dragging", onEnd: (event: SortableEvent) => {
      if (event.from !== list || event.oldIndex === undefined || event.newIndex === undefined) return;
      window.requestAnimationFrame(() => {
        if (event.from === event.to) sync(sortable);
        else onCrossListMove?.(event.item.dataset.id ?? "", event.from.dataset.sortableId ?? "", event.to.dataset.sortableId ?? "", event.oldIndex!, event.newIndex!);
      });
    } });
    return () => sortable.destroy();
  }, [animation, delay, delayOnTouchOnly, disabled, group, handle, onCrossListMove, onOrderChange]);

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target], next[index]];
    onOrderChange(next);
  };

  return <ul ref={listRef} className="sortable-yoru-list" data-sortable-id={id} aria-label={label}>{items.map((item, index) => <li className="sortable-yoru-item" data-id={item.id} key={item.id}><span className="sortable-yoru-handle" aria-hidden="true"><GripVertical /></span><div className="sortable-yoru-copy"><b>{item.title}</b>{item.description ? <span>{item.description}</span> : null}</div><div className="sortable-yoru-controls"><button type="button" aria-label={`Move ${item.title} up`} onClick={() => move(index, -1)} disabled={index === 0}><MoveUp aria-hidden="true" /></button><button type="button" aria-label={`Move ${item.title} down`} onClick={() => move(index, 1)} disabled={index === items.length - 1}><MoveDown aria-hidden="true" /></button></div></li>)}</ul>;
}
