export type Accent = "violet" | "sunset" | "ocean" | "lime";
export type Background = "aurora" | "paper" | "midnight";

export type AccentColorTokens = {
  primary: string;
  foreground: string;
  hover: string;
  subtle: string;
  border: string;
  gradientStart: string;
  gradientEnd: string;
  navGradientStart: string;
  navGradientEnd: string;
};

export type ThemeTokens = {
  light: AccentColorTokens;
  dark: AccentColorTokens;
};

export const accents: Record<Accent, ThemeTokens & { label: string }> = {
  violet: {
    label: "Violet dusk",
    light: { primary: "#5638df", foreground: "#fbfaff", hover: "#452ab9", subtle: "#eeeafe", border: "#cfc5f3", gradientStart: "#6847dc", gradientEnd: "#9274ed", navGradientStart: "#3e278e", navGradientEnd: "#7456d6" },
    dark: { primary: "#b8a8ff", foreground: "#281a50", hover: "#d0c5ff", subtle: "#332960", border: "#796bb4", gradientStart: "#8f7ce8", gradientEnd: "#c3b7ff", navGradientStart: "#30245f", navGradientEnd: "#5e4eab" },
  },
  sunset: {
    label: "Sunset rose",
    light: { primary: "#b62b5b", foreground: "#fff9f7", hover: "#922046", subtle: "#fce8ef", border: "#f2b9cb", gradientStart: "#c13f69", gradientEnd: "#de8359", navGradientStart: "#7d1e45", navGradientEnd: "#bd5a55" },
    dark: { primary: "#ffafc4", foreground: "#501125", hover: "#ffc7d5", subtle: "#5b2739", border: "#be718a", gradientStart: "#de7794", gradientEnd: "#ee9b77", navGradientStart: "#5f2139", navGradientEnd: "#874342" },
  },
  ocean: {
    label: "Ocean blue",
    light: { primary: "#0962c7", foreground: "#f7fbff", hover: "#074fa3", subtle: "#e5f0fe", border: "#a9caf5", gradientStart: "#1673d1", gradientEnd: "#3aa6b8", navGradientStart: "#08427f", navGradientEnd: "#177a9c" },
    dark: { primary: "#9dcbff", foreground: "#082c5c", hover: "#c2e0ff", subtle: "#203d61", border: "#6395c8", gradientStart: "#639fe5", gradientEnd: "#77c1ca", navGradientStart: "#173c6c", navGradientEnd: "#205f70" },
  },
  lime: {
    label: "Verdant lime",
    light: { primary: "#537a0b", foreground: "#fbfdf5", hover: "#426208", subtle: "#edf5da", border: "#c7dda1", gradientStart: "#668f15", gradientEnd: "#218a78", navGradientStart: "#3c580b", navGradientEnd: "#1d685b" },
    dark: { primary: "#c5e886", foreground: "#263d08", hover: "#dbf5ad", subtle: "#354b1d", border: "#87a75a", gradientStart: "#9ac35b", gradientEnd: "#58ad96", navGradientStart: "#334d18", navGradientEnd: "#245e53" },
  },
};

export const backgrounds: Background[] = ["aurora", "paper", "midnight"];
