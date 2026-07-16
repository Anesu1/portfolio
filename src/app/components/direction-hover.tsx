"use client";

import { useReducedMotion } from "framer-motion";
import { useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

type Edge = "top" | "right" | "bottom" | "left";

// Whichever edge of the bounding rect is closest to the pointer wins — that's
// the edge the sweep enters from (or exits toward).
function closestEdge(rect: DOMRect, x: number, y: number): Edge {
  const distances: [Edge, number][] = [
    ["top", y - rect.top],
    ["bottom", rect.bottom - y],
    ["left", x - rect.left],
    ["right", rect.right - x],
  ];
  return distances.reduce((closest, current) => (current[1] < closest[1] ? current : closest))[0];
}

function offscreenTransform(edge: Edge): string {
  switch (edge) {
    case "top":
      return "translate3d(0, -100%, 0)";
    case "bottom":
      return "translate3d(0, 100%, 0)";
    case "left":
      return "translate3d(-100%, 0, 0)";
    case "right":
      return "translate3d(100%, 0, 0)";
  }
}

const SWEEP_TRANSITION = "transform 420ms cubic-bezier(0.65, 0, 0.35, 1)";

export default function DirectionHover({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handlePointerEnter = (e: ReactPointerEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const sweep = sweepRef.current;
    const text = textRef.current;
    if (!wrap || !sweep || !text) return;

    const rect = wrap.getBoundingClientRect();
    const edge = closestEdge(rect, e.clientX, e.clientY);

    // Snap the sweep to the entry edge with no transition, then animate it
    // in on the next frame so it visibly travels from that edge.
    sweep.style.transition = "none";
    sweep.style.transform = offscreenTransform(edge);
    void sweep.offsetHeight; // force reflow so the snap commits before animating
    sweep.style.transition = SWEEP_TRANSITION;
    sweep.style.transform = "translate3d(0, 0, 0)";

    // Toggle rather than just add: text-color-001 is already present in the
    // static className below, and it has the same specificity as text-accent
    // (both single-class selectors), so which one wins the cascade depends on
    // generated stylesheet order, not DOM class order — merely adding
    // text-accent on top left text-color-001's rule silently winning.
    text.classList.remove("text-color-001");
    text.classList.add("text-accent");
  };

  const handlePointerLeave = (e: ReactPointerEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const sweep = sweepRef.current;
    const text = textRef.current;
    if (!wrap || !sweep || !text) return;

    const rect = wrap.getBoundingClientRect();
    const edge = closestEdge(rect, e.clientX, e.clientY);

    sweep.style.transition = SWEEP_TRANSITION;
    sweep.style.transform = offscreenTransform(edge);

    text.classList.remove("text-accent");
    text.classList.add("text-color-001");
  };

  if (prefersReducedMotion) {
    return (
      <div className={`block text-color-001 transition-colors duration-300 ease-out hover:text-accent ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative block overflow-hidden ${className}`}
    >
      <span
        ref={sweepRef}
        aria-hidden="true"
        className="absolute inset-0 -z-1 block bg-accent/15 pointer-events-none"
        style={{ transform: "translate3d(-100%, 0, 0)" }}
      />
      <span ref={textRef} className="relative block text-color-001 transition-colors duration-300 ease-out">
        {children}
      </span>
    </div>
  );
}
