export type Accent = "violet" | "sunset" | "ocean" | "lime";
export type Background = "aurora" | "paper" | "midnight";

export const accents: Record<Accent, { label: string; start: string; end: string }> = {
  violet: { label: "Violet dusk", start: "#5638df", end: "#c548d5" },
  sunset: { label: "Sunset gold", start: "#f0518a", end: "#ffc85c" },
  ocean: { label: "Ocean blue", start: "#096bdb", end: "#4ee1d2" },
  lime: { label: "Electric lime", start: "#82bd32", end: "#24b9b2" },
};

export const backgrounds: Background[] = ["aurora", "paper", "midnight"];
