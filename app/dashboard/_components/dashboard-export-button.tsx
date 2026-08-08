"use client";

import { Check, Download } from "lucide-react";
import { useState } from "react";

export function DashboardExportButton() {
  const [exported, setExported] = useState(false);
  function exportDashboard() {
    setExported(true);
    window.setTimeout(() => setExported(false), 2200);
  }
  return <button className={`button-yoru button-yoru--primary dashboard-export ${exported ? "is-complete" : ""}`} type="button" onClick={exportDashboard} aria-live="polite">{exported ? <><Check />Ready</> : <><Download />Export</>}</button>;
}
