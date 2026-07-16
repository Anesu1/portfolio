"use client";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

// Custom "follow" cursor scoped to a single container (the coverflow gallery),
// never page-wide. Only ever active on fine-pointer devices (real mouse/
// trackpad) — on touch/coarse-pointer devices this component renders nothing
// and attaches zero listeners, checked once via matchMedia before anything
// else happens, so there's no dead weight shipped to mobile visitors.
export default function GalleryCursor({
  label,
  containerRef,
}: {
  label: string;
  containerRef: RefObject<HTMLElement | null>;
}) {
  const dotRef = useRef<HTMLDivElement>(null);
  const [finePointer, setFinePointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setFinePointer(true);
  }, []);

  useEffect(() => {
    if (!finePointer) return;
    const container = containerRef.current;
    if (!container) return;

    function handleMove(e: MouseEvent) {
      const dot = dotRef.current;
      if (!dot) return;
      // transform (not left/top) so the browser can composite this on its
      // own layer instead of triggering layout on every mouse move.
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    }
    function handleEnter() {
      container!.style.cursor = "none";
      setVisible(true);
    }
    function handleLeave() {
      container!.style.cursor = "";
      setVisible(false);
    }

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);
    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
      container.style.cursor = "";
    };
  }, [finePointer, containerRef]);

  if (!finePointer) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 top-0 z-50 whitespace-nowrap rounded-[100px] border border-solid border-accent bg-accent px-5 py-2.5 text-sm leading-[1.0625rem] uppercase tracking-[normal] text-color-001 transition-opacity duration-150 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {label}
    </div>
  );
}
