import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../lib/site";
import SiteHeader from "./components/site-header";
import { heroContent, logos4 } from "./content";

const SITE_URL = SITE_ORIGIN || "http://localhost:3000";

// Favicons are handled by Next.js's file-based convention: src/app/icon.png,
// src/app/apple-icon.png, and src/app/favicon.ico (an "AN" monogram in the
// site's accent color) are auto-detected and injected into <head> — no
// explicit metadata.icons entry needed.
export const metadata = {
  "metadataBase": new URL(SITE_URL),
  "title": "Anesu Ndoro — Full-Stack Engineer",
  "description": heroContent.headline,
  "alternates": {
    "canonical": "/"
  },
  "openGraph": {
    "title": "Anesu Ndoro — Full-Stack Engineer",
    "description": heroContent.headline,
    "url": "/",
    "type": "website"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Anesu Ndoro — Full-Stack Engineer",
    "description": heroContent.headline
  }
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};

// Person/WebSite JSON-LD — only facts already published elsewhere on the
// site (name, site URL, GitHub/LinkedIn from the footer's own logos4 list).
// No job title, employer, or credential claims here: those belong in
// visible copy the user has reviewed, not in schema a crawler reads first.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anesu Ndoro",
  "url": SITE_URL,
  "sameAs": logos4.map((l) => l.href),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="min-h-full block text-foreground [font-family:'Inter_Tight',_sans-serif] text-base font-normal not-italic leading-6 tracking-[-0.32px] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
