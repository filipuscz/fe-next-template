import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { WorkspacePreferencesProvider } from "./_components/providers/workspace-preferences-provider";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Yoru — Sign in",
  description: "Sign in to your calm, focused Yoru workspace.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><WorkspacePreferencesProvider>{children}</WorkspacePreferencesProvider></body>
    </html>
  );
}
