"use client";

import { Moon, Sun } from "lucide-react";
import type { CSSProperties } from "react";
import { accents, backgrounds, type Accent, type Background } from "../_lib/dashboard-theme";

type Props = { open: boolean; dark: boolean; accent: Accent; background: Background; onDarkChange: () => void; onAccentChange: (accent: Accent) => void; onBackgroundChange: (background: Background) => void };

export function DashboardCustomizePanel({ open, dark, accent, background, onDarkChange, onAccentChange, onBackgroundChange }: Props) {
  if (!open) return null;
  return <aside id="dashboard-customize" className="dashboard-customize" aria-label="Customize dashboard"><div className="customize-heading"><div><p>Appearance</p><span>Make your workspace yours</span></div><button type="button" onClick={onDarkChange} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun /> : <Moon />}</button></div><fieldset><legend>Accent color</legend><div className="customize-swatches">{(Object.keys(accents) as Accent[]).map((name) => { const item = accents[name]; return <button key={name} className={accent === name ? "selected" : ""} type="button" onClick={() => onAccentChange(name)} aria-pressed={accent === name} style={{ "--swatch-start": item.start, "--swatch-end": item.end } as CSSProperties}><i /><span>{item.label}</span></button>; })}</div></fieldset><fieldset><legend>Canvas mood</legend><div className="customize-canvases">{backgrounds.map((name) => <button key={name} className={background === name ? "selected" : ""} type="button" onClick={() => onBackgroundChange(name)} aria-pressed={background === name}>{name}</button>)}</div></fieldset></aside>;
}
