export type Accent = "violet" | "sunset" | "ocean" | "lime";
export type Background = "aurora" | "paper" | "midnight";

export type ThemeTokens = {
  primary: string;
  primaryForeground: string;
  primaryEnd: string;
};

export const accents: Record<Accent, ThemeTokens & { label: string; start: string; end: string }> = {
  violet: { label: "Violet dusk", start: "#5638df", end: "#c548d5", primary: "#5638df", primaryForeground: "#ffffff", primaryEnd: "#744de8" },
  sunset: { label: "Sunset gold", start: "#d93670", end: "#f2a33d", primary: "#c42660", primaryForeground: "#ffffff", primaryEnd: "#dd7540" },
  ocean: { label: "Ocean blue", start: "#096bdb", end: "#4ee1d2", primary: "#096bdb", primaryForeground: "#ffffff", primaryEnd: "#148fbd" },
  lime: { label: "Electric lime", start: "#5d870d", end: "#158d83", primary: "#4f750b", primaryForeground: "#ffffff", primaryEnd: "#147b72" },
};

export const backgrounds: Background[] = ["aurora", "paper", "midnight"];
