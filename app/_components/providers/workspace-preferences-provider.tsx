"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { accents, backgrounds, type Accent, type Background } from "@/app/_lib/workspace-theme";

type WorkspacePreferences = {
  accent: Accent;
  background: Background;
  dark: boolean;
  setAccent: (accent: Accent) => void;
  setBackground: (background: Background) => void;
  setDark: (dark: boolean) => void;
};

type StoredPreferences = Pick<WorkspacePreferences, "accent" | "background" | "dark">;

const STORAGE_KEY = "yoruspace.workspace-preferences";
const WorkspacePreferencesContext = createContext<WorkspacePreferences | null>(null);

export function WorkspacePreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<StoredPreferences>({ accent: "violet", background: "aurora", dark: false });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const saved = JSON.parse(stored) as Partial<StoredPreferences>;
          setPreferences({ accent: saved.accent && saved.accent in accents ? saved.accent : "violet", background: saved.background && backgrounds.includes(saved.background) ? saved.background : "aurora", dark: typeof saved.dark === "boolean" ? saved.dark : false });
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      } finally {
        setHydrated(true);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [hydrated, preferences]);

  return <WorkspacePreferencesContext.Provider value={{ ...preferences, setAccent: (accent) => setPreferences((current) => ({ ...current, accent })), setBackground: (background) => setPreferences((current) => ({ ...current, background })), setDark: (dark) => setPreferences((current) => ({ ...current, dark })) }}>{children}</WorkspacePreferencesContext.Provider>;
}

export function useWorkspacePreferences() {
  const preferences = useContext(WorkspacePreferencesContext);
  if (!preferences) throw new Error("useWorkspacePreferences must be used within WorkspacePreferencesProvider");
  return preferences;
}
