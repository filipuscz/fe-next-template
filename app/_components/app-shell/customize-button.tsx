"use client";

import { Palette } from "lucide-react";

export function CustomizeButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return <button className="customize-button" type="button" onClick={onClick} aria-expanded={open} aria-controls="dashboard-customize"><Palette /><span>Customize</span></button>;
}
