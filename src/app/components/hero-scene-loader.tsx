"use client";
import dynamic from "next/dynamic";

// `dynamic(..., { ssr: false })` is only valid from within a Client
// Component — page.tsx is a Server Component, so this tiny wrapper is the
// boundary. three.js is ~130KB of JS for a purely decorative desktop-only
// effect (HeroScene itself no-ops below the md breakpoint), so neither the
// server render nor mobile visitors should pay to load it.
const HeroScene = dynamic(() => import("./hero-scene"), { ssr: false });

export default HeroScene;
