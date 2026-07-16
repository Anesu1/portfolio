"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypeWriterProps = {
  prefix?: string;
  taglines?: string[];
  className?: string;
};

const DEFAULT_PREFIX = "I ship ";
const DEFAULT_TAGLINES = [
  "AI-integrated products.",
  "production React from Figma/Webflow.",
  "real-time fraud detection bots.",
];
const DEFAULT_CLASSNAME =
  "block max-w-160 mt-6 pb-8 text-color-001 text-lg leading-[1.6875rem] tracking-[-0.36px]";

const TYPING_SPEED = 55; // ms per character while typing
const DELETING_SPEED = 30; // ms per character while deleting
const PAUSE_AFTER_TYPED = 1500; // ms to hold the fully-typed tagline
const PAUSE_AFTER_DELETED = 300; // ms to hold before typing the next tagline
const CURSOR_BLINK_INTERVAL = 500; // ms

export default function TypeWriter({
  prefix = DEFAULT_PREFIX,
  taglines = DEFAULT_TAGLINES,
  className = DEFAULT_CLASSNAME,
}: TypeWriterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");
  const [showCursor, setShowCursor] = useState(true);

  const current = taglines[taglineIndex % taglines.length] ?? "";

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < current.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPED);
      }
    } else {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setTaglineIndex((i) => (i + 1) % taglines.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETED);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charCount, current, taglines.length, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const blink = setInterval(() => setShowCursor((s) => !s), CURSOR_BLINK_INTERVAL);
    return () => clearInterval(blink);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <p className={className}>
        <span className="text-color-001">{prefix}</span>
        <span className="text-accent">{taglines[0]}</span>
      </p>
    );
  }

  const visible = current.slice(0, charCount);
  const fullAccessibleText = `${prefix}${taglines.join(", ")}.`;

  return (
    <p className={`${className} min-h-[3.375rem]`}>
      <span className="sr-only">{fullAccessibleText}</span>
      <span aria-hidden="true">
        <span className="text-color-001">{prefix}</span>
        <span className="text-accent">{visible}</span>
        <span className="text-accent" style={{ opacity: showCursor ? 1 : 0 }}>
          _
        </span>
      </span>
    </p>
  );
}
