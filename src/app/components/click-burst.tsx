"use client";

import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
};

const PARTICLE_COUNT = 7;
const BURST_DURATION = 420;

function BurstParticle({ x, y, dx, dy, onDone }: { x: number; y: number; dx: number; dy: number; onDone: () => void }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const rafIds = { first: 0, second: 0 };

    // Double rAF: let the "spawn" state (centered, opaque) paint first, then
    // flip to the "flown out, faded" state so the CSS transition animates it.
    rafIds.first = requestAnimationFrame(() => {
      rafIds.second = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(0.4)`;
        el.style.opacity = "0";
      });
    });
    const timeout = window.setTimeout(onDone, BURST_DURATION);

    return () => {
      cancelAnimationFrame(rafIds.first);
      cancelAnimationFrame(rafIds.second);
      window.clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      ref={ref}
      className="absolute block h-1.5 w-1.5 rounded-full bg-accent"
      style={{
        left: x,
        top: y,
        opacity: 1,
        transform: "translate(-50%, -50%) translate(0, 0) scale(1)",
        transition: `transform ${BURST_DURATION}ms ease-out, opacity ${BURST_DURATION}ms ease-out`,
      }}
    />
  );
}

export default function ClickBurst({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const removeParticle = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handleClick = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const spawned: Particle[] = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.4;
      const distance = 26 + Math.random() * 20;
      idRef.current += 1;
      return {
        id: idRef.current,
        x,
        y,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
      };
    });

    setParticles((prev) => [...prev, ...spawned]);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <div ref={wrapRef} onClick={handleClick} className={`relative inline-block ${className}`}>
      {children}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((p) => (
          <BurstParticle key={p.id} x={p.x} y={p.y} dx={p.dx} dy={p.dy} onDone={() => removeParticle(p.id)} />
        ))}
      </div>
    </div>
  );
}
