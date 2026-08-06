"use client";

import { CalendarDays, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

function toDateInput(date: Date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${date}T12:00:00`));
}

export function DashboardDateRange() {
  const [open, setOpen] = useState(false);
  const [end, setEnd] = useState("2026-08-06");
  const [days, setDays] = useState(30);
  const [start, setStart] = useState("2026-07-08");
  function setRangeDays(value: number) { const nextStart = new Date(`${end}T12:00:00`); nextStart.setDate(nextStart.getDate() - value + 1); setDays(value); setStart(toDateInput(nextStart)); }
  return <div className="date-range-control"><button className="range-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="dashboard-date-picker"><CalendarDays /><span>{formatDate(start)} – {formatDate(end)}</span><ChevronDown /></button>{open && <section id="dashboard-date-picker" className="date-picker-popover" aria-label="Date range selector"><div className="date-picker-title"><span><CalendarDays />Date range</span><button type="button" onClick={() => setOpen(false)} aria-label="Close date range">×</button></div><div className="date-inputs"><label>From<input type="date" value={start} max={end} onChange={(event) => setStart(event.target.value)} /></label><label>To<input type="date" value={end} min={start} onChange={(event) => setEnd(event.target.value)} /></label></div><label className="date-slider"><span><SlidersHorizontal />Drag to choose range <b>{days} days</b></span><input type="range" min="7" max="90" step="1" value={days} onChange={(event) => setRangeDays(Number(event.target.value))} /></label><div className="date-presets">{[7, 30, 90].map((value) => <button type="button" key={value} className={days === value ? "selected" : ""} onClick={() => setRangeDays(value)}>Last {value} days</button>)}</div></section>}</div>;
}
