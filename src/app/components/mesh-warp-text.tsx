"use client";

import { useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type MeshWarpTextProps = {
  text?: string;
  className?: string;
};

const DEFAULT_TEXT = "Full-Stack. AI-Integrated.";
const DEFAULT_CLASSNAME =
  "block max-w-240 text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[6rem] leading-[5.5rem] tracking-[-1.6px] uppercase max-md:text-[2.75rem] max-md:leading-[2.5rem] md:max-lg:text-[4.5rem] md:max-lg:leading-[4.25rem]";

// Tuning constants for the cursor-follow spring + chromatic-fringe effect.
const RADIUS = 150; // px — cursor influence radius around a character's rest center
const MAX_DISPLACEMENT = 16; // px — clamp on how far a character can be dragged
const STIFFNESS = 0.16; // spring pull toward the current target
const DAMPING = 0.82; // velocity decay each frame (spring-back damping)
const FRINGE_SPREAD = 0.5; // extra offset applied to the red/cyan duplicate layers
const FRINGE_MAX_OPACITY = 0.75;

type CharState = {
  el: HTMLSpanElement | null;
  redEl: HTMLSpanElement | null;
  cyanEl: HTMLSpanElement | null;
  cx: number; // rest center, viewport-relative (recomputed on measure)
  cy: number;
  x: number; // current spring displacement
  y: number;
  vx: number;
  vy: number;
};

function createCharState(): CharState {
  return { el: null, redEl: null, cyanEl: null, cx: 0, cy: 0, x: 0, y: 0, vx: 0, vy: 0 };
}

export default function MeshWarpText({
  text = DEFAULT_TEXT,
  className = DEFAULT_CLASSNAME,
}: MeshWarpTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const mouseRef = useRef({ x: -99999, y: -99999 });
  const rafRef = useRef<number | null>(null);

  const chars = useMemo(() => Array.from(text), [text]);
  const charStatesRef = useRef<CharState[]>([]);
  // Rebuild the physics-state array only when the character count changes,
  // keeping stable object identities across re-renders otherwise.
  const charStates = useMemo(() => chars.map(() => createCharState()), [chars.length]);
  charStatesRef.current = charStates;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      for (const c of charStatesRef.current) {
        if (!c.el) continue;
        c.cx = containerRect.left + c.el.offsetLeft + c.el.offsetWidth / 2;
        c.cy = containerRect.top + c.el.offsetTop + c.el.offsetHeight / 2;
      }
    };

    measure();

    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(measure, 120);
    };
    window.addEventListener("resize", onResize);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    const onPointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const resetMouse = () => {
      mouseRef.current.x = -99999;
      mouseRef.current.y = -99999;
    };
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) resetMouse();
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", resetMouse);
    window.addEventListener("blur", resetMouse);
    document.addEventListener("mouseout", onMouseOut);

    const tick = () => {
      const { x: mx, y: my } = mouseRef.current;

      for (const c of charStatesRef.current) {
        if (!c.el) continue;

        const dx = mx - c.cx;
        const dy = my - c.cy;
        const dist = Math.hypot(dx, dy);

        let targetX = 0;
        let targetY = 0;
        if (dist < RADIUS && dist > 0.01) {
          const pull = 1 - dist / RADIUS;
          const strength = pull * pull;
          targetX = (dx / dist) * strength * MAX_DISPLACEMENT;
          targetY = (dy / dist) * strength * MAX_DISPLACEMENT;
        }

        c.vx = (c.vx + (targetX - c.x) * STIFFNESS) * DAMPING;
        c.vy = (c.vy + (targetY - c.y) * STIFFNESS) * DAMPING;
        c.x += c.vx;
        c.y += c.vy;

        c.el.style.transform = `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0)`;

        const magnitude = Math.hypot(c.x, c.y);
        const fringeT = Math.min(magnitude / MAX_DISPLACEMENT, 1);
        const fringeOpacity = (fringeT * FRINGE_MAX_OPACITY).toFixed(2);

        if (c.redEl) {
          c.redEl.style.opacity = fringeOpacity;
          c.redEl.style.transform = `translate3d(${(c.x * FRINGE_SPREAD).toFixed(2)}px, ${(c.y * FRINGE_SPREAD).toFixed(2)}px, 0)`;
        }
        if (c.cyanEl) {
          c.cyanEl.style.opacity = fringeOpacity;
          c.cyanEl.style.transform = `translate3d(${(-c.x * FRINGE_SPREAD).toFixed(2)}px, ${(-c.y * FRINGE_SPREAD).toFixed(2)}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", resetMouse);
      window.removeEventListener("blur", resetMouse);
      document.removeEventListener("mouseout", onMouseOut);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, [prefersReducedMotion, chars.length]);

  if (prefersReducedMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <h1 ref={containerRef} className={`${className} relative`}>
      {chars.map((ch, i) => {
        if (ch === " ") {
          return (
            <span key={i} style={{ whiteSpace: "pre" }}>
              {" "}
            </span>
          );
        }
        return (
          <span
            key={i}
            ref={(el) => {
              const state = charStatesRef.current[i];
              if (state) state.el = el;
            }}
            style={{ display: "inline-block", position: "relative", willChange: "transform" }}
          >
            {ch}
            <span
              aria-hidden="true"
              ref={(el) => {
                const state = charStatesRef.current[i];
                if (state) state.redEl = el;
              }}
              className="pointer-events-none select-none absolute inset-0"
              style={{ color: "#ff3b30", mixBlendMode: "screen", opacity: 0 }}
            >
              {ch}
            </span>
            <span
              aria-hidden="true"
              ref={(el) => {
                const state = charStatesRef.current[i];
                if (state) state.cyanEl = el;
              }}
              className="pointer-events-none select-none absolute inset-0"
              style={{ color: "#00e5ff", mixBlendMode: "screen", opacity: 0 }}
            >
              {ch}
            </span>
          </span>
        );
      })}
    </h1>
  );
}
