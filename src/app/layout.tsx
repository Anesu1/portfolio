import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import SiteHeader from "./components/site-header";

// Favicons are handled by Next.js's file-based convention: src/app/icon.png,
// src/app/apple-icon.png, and src/app/favicon.ico (an "AN" monogram in the
// site's accent color) are auto-detected and injected into <head> — no
// explicit metadata.icons entry needed.
export const metadata = {
  "metadataBase": new URL(SITE_ORIGIN || "http://localhost:3000"),
  "title": "Anesu Ndoro — Full-Stack Engineer",
  "description": "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code.",
  "openGraph": {
    "title": "Anesu Ndoro — Full-Stack Engineer",
    "description": "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code.",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Anesu Ndoro — Full-Stack Engineer",
    "description": "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code."
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="min-h-full block text-foreground [font-family:'Inter_Tight',_sans-serif] text-base font-normal not-italic leading-6 tracking-[-0.32px] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
