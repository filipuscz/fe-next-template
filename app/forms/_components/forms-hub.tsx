"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { DayPicker } from "react-day-picker";
import { useDropzone } from "react-dropzone";
import { CalendarDays, Check, ChevronDown, FileWarning, FolderOpen, UploadCloud } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { CSSProperties } from "react";
import { WorkspaceShell } from "@/app/_components/app-shell/workspace-shell";
import { useWorkspacePreferences } from "@/app/_components/providers/workspace-preferences-provider";
import { accents } from "@/app/_lib/workspace-theme";

const formAreas = [
  { title: "Basic", href: "/forms/basic", description: "Controls, groups, selects, checks, ranges, labels, and layout." },
  { title: "Advance", href: "/forms/advance", description: "Searchable selection, date tools, editor, upload, ratings, and emoji input." },
  { title: "Validation", href: "/forms/validation", description: "Helpful recovery guidance for native and custom validation." },
  { title: "Wizard", href: "/forms/wizard", description: "Progressive multi-step forms that keep longer tasks manageable." },
];

function RadixSelect({ value, onValueChange, style }: { value: string; onValueChange: (value: string) => void; style: CSSProperties }) {
  return <SelectPrimitive.Root value={value} onValueChange={onValueChange} name="workspace-type"><SelectPrimitive.Trigger className="forms-hub-select-trigger" aria-label="Workspace type"><SelectPrimitive.Value /><SelectPrimitive.Icon><ChevronDown aria-hidden="true" /></SelectPrimitive.Icon></SelectPrimitive.Trigger><SelectPrimitive.Portal><SelectPrimitive.Content className="forms-hub-select-content" style={style} position="popper" sideOffset={8}><SelectPrimitive.Viewport>{["Design workspace", "Engineering workspace", "Marketing workspace"].map((item) => <SelectPrimitive.Item key={item} className="forms-hub-select-item" value={item}><SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText><SelectPrimitive.ItemIndicator><Check aria-hidden="true" /></SelectPrimitive.ItemIndicator></SelectPrimitive.Item>)}</SelectPrimitive.Viewport></SelectPrimitive.Content></SelectPrimitive.Portal></SelectPrimitive.Root>;
}

function FormsHubContent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [workspaceType, setWorkspaceType] = useState("Design workspace");
  const { accent, dark } = useWorkspacePreferences();
  const theme = accents[accent][dark ? "dark" : "light"];
  const { acceptedFiles, fileRejections, getRootProps, getInputProps, isDragActive } = useDropzone({ accept: { "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"], "application/pdf": [".pdf"] }, maxFiles: 3, maxSize: 10 * 1024 * 1024 });
  const portalStyle = { "--forms-hub-surface": dark ? "#2d2938" : "#fdfcff", "--forms-hub-foreground": dark ? "#f7f5fa" : "#24212f", "--forms-hub-border": dark ? "#484251" : "#dedbe7", "--forms-hub-primary": theme.primary, "--forms-hub-primary-subtle": theme.subtle } as CSSProperties;
  return <main id="forms-content" className="dashboard-main forms-hub"><header className="component-showcase-header"><p className="dashboard-eyebrow">Workspace <span>/</span> Forms</p><h1>Forms</h1><p>Build focused, accessible data-entry experiences from resilient native controls and progressive enhancement.</p></header><section className="forms-hub-grid" aria-label="Forms workbench"><article className="forms-hub-card forms-hub-card--workbench"><div className="forms-hub-heading"><div><p className="card-kicker">Interactive workbench</p><h2>Create a workspace</h2></div><span>Native + accessible</span></div><div className="forms-hub-workbench"><label className="forms-field"><span>Workspace name</span><input className="forms-input" defaultValue="YoruSpace" /></label><label className="forms-field"><span>Workspace type</span><RadixSelect value={workspaceType} onValueChange={setWorkspaceType} style={portalStyle} /></label><div className="forms-hub-calendar"><div><span className="forms-hub-label">Launch date</span><p>{selectedDate ? selectedDate.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" }) : "Choose a date"}</p></div><CalendarDays aria-hidden="true" /><DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} showOutsideDays /></div><div {...getRootProps({ className: `forms-hub-dropzone ${isDragActive ? "is-drag-active" : ""}` })}><input {...getInputProps()} /><UploadCloud aria-hidden="true" /><b>{isDragActive ? "Drop the files here" : "Drop files or browse"}</b><span>PNG, JPG, or PDF · up to 10MB · 3 files</span></div>{acceptedFiles.length > 0 ? <ul className="forms-hub-file-list">{acceptedFiles.map((file) => <li key={`${file.name}-${file.lastModified}`}><Check aria-hidden="true" />{file.name}</li>)}</ul> : null}{fileRejections.length > 0 ? <ul className="forms-hub-file-list forms-hub-file-list--error">{fileRejections.map(({ file, errors }) => <li key={`${file.name}-${file.lastModified}`}><FileWarning aria-hidden="true" />{file.name}: {errors[0]?.message}</li>)}</ul> : null}</div></article><article className="forms-hub-card"><div className="forms-hub-heading"><div><p className="card-kicker">Catalogue</p><h2>Choose a form pattern</h2></div><span>Four areas</span></div><div className="forms-hub-links">{formAreas.map((area) => <Link key={area.title} href={area.href}><FolderOpen aria-hidden="true" /><span><b>{area.title}</b><small>{area.description}</small></span><ChevronDown aria-hidden="true" /></Link>)}</div></article></section></main>;
}

export function FormsHub() {
  return <WorkspaceShell mainId="forms-content" activePage="forms"><FormsHubContent /></WorkspaceShell>;
}
