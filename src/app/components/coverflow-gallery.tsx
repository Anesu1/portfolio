"use client";
import Link from "next/link";
import { motion, useReducedMotion, type Transition } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GalleryCursor from "./gallery-cursor";

export type CoverflowSlide = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  image: string;
};

// Apple-style Cover Flow: the active slide sits upright and largest, dead
// center; every other slide is tilted on its Y axis, scaled down, dimmed and
// pushed back in Z, more so the further it sits from center — a receding
// perspective row rather than a flat filmstrip. Active index is tracked in
// React state and mirrored onto the root element as `data-active-work-slide`
// so hero-scene.tsx's particle-highlight pass can read it directly instead of
// measuring DOM rects (there's no longer a stack of discrete sticky rows).
function wrapIndex(i: number, length: number) {
  if (length <= 0) return 0;
  return ((i % length) + length) % length;
}

const SPRING: Transition = { type: "spring", stiffness: 300, damping: 32, mass: 0.9 };
const INSTANT: Transition = { duration: 0 };
const DRAG_STEP_THRESHOLD = 0.15; // fraction of card spacing needed to change slides via drag

export default function CoverflowGallery({ slides }: { slides: CoverflowSlide[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [spacing, setSpacing] = useState(240);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);

  const count = slides.length;
  const safeIndex = wrapIndex(activeIndex, count);
  const activeSlide = slides[safeIndex];

  // Card spacing scales with the gallery's own width so the layout stays
  // sensible from phones to ultra-wide desktops without a pile of breakpoint
  // special-casing in the transform math itself.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    function measure() {
      const w = el!.clientWidth;
      setSpacing(Math.max(150, Math.min(300, Math.round(w * 0.2))));
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  function goTo(index: number) {
    setActiveIndex(wrapIndex(index, count));
  }
  function go(direction: 1 | -1) {
    setDragX(0);
    setActiveIndex((prev) => wrapIndex(prev + direction, count));
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === "mouse") return;
    pointerIdRef.current = e.pointerId;
    dragStartXRef.current = e.clientX;
    hasDraggedRef.current = false;
    setIsDragging(true);
    // Deliberately NOT capturing the pointer here: setPointerCapture retargets
    // the native `click` event that follows pointerup to the capturing element
    // (this track div) instead of whatever is visually under the cursor — so a
    // plain click on the active card's <Link> would never reach it, silently
    // breaking navigation. Capture is only taken once real drag movement is
    // detected below, so a simple click passes through to the Link untouched.
  }
  function handlePointerMove(e: React.PointerEvent) {
    if (pointerIdRef.current !== e.pointerId) return;
    const delta = e.clientX - dragStartXRef.current;
    if (Math.abs(delta) > 5 && !hasDraggedRef.current) {
      hasDraggedRef.current = true;
      trackRef.current?.setPointerCapture(e.pointerId);
    }
    setDragX(delta);
  }
  function endDrag(e: React.PointerEvent) {
    if (pointerIdRef.current !== e.pointerId) return;
    // Only commit a slide change once the drag has crossed a meaningful
    // fraction of one card's spacing — short drags just snap back to place.
    const fraction = dragX / spacing;
    const committed = Math.trunc(fraction + Math.sign(fraction) * DRAG_STEP_THRESHOLD);
    if (committed !== 0) setActiveIndex((prev) => wrapIndex(prev - committed, count));
    setDragX(0);
    setIsDragging(false);
    try {
      trackRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      // capture may already have been released by the browser — safe to ignore
    }
    pointerIdRef.current = null;
    requestAnimationFrame(() => {
      hasDraggedRef.current = false;
    });
  }

  function handleSelect(i: number) {
    if (hasDraggedRef.current) return;
    goTo(i);
  }
  function handleActiveClick(e: React.MouseEvent) {
    if (hasDraggedRef.current) e.preventDefault();
  }

  if (count === 0) return null;

  return (
    <div
      ref={rootRef}
      data-active-work-slide={safeIndex}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected work gallery"
      onKeyDown={handleKeyDown}
      className="relative block w-full outline-none rounded-[10px] focus-visible:ring-2 focus-visible:ring-accent"
    >
      <GalleryCursor label="View Project" containerRef={rootRef} />
      <span className="sr-only" aria-live="polite">
        {`Slide ${safeIndex + 1} of ${count}: ${activeSlide.title}`}
      </span>

      <div className="relative overflow-hidden py-16 max-md:py-9 md:max-lg:py-12" style={{ perspective: "1400px" }}>
        <div
          ref={trackRef}
          className="relative h-104 max-md:h-68 md:max-lg:h-84 touch-pan-y select-none cursor-none"
          style={{ transformStyle: "preserve-3d" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {slides.map((slide, i) => {
            const isActive = i === safeIndex;
            const rawOffset = i - safeIndex - dragX / spacing;
            // Shortest wrap-around path so the carousel doesn't visibly spin
            // the long way round when jumping from the last slide to the first.
            let offset = rawOffset;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const absOffset = Math.abs(offset);

            const x = offset * spacing;
            const z = -absOffset * 110;
            const rotateY = Math.max(-62, Math.min(62, -offset * 38));
            const scale = Math.max(0.55, 1 - absOffset * 0.2);
            const opacity = Math.max(0.12, 1 - absOffset * 0.38);
            const zIndex = Math.round(200 - absOffset * 10);

            const transition = prefersReducedMotion || isDragging ? INSTANT : SPRING;

            const cardBody = (
              <>
                <div
                  className={`relative w-full aspect-4/5 overflow-hidden rounded-[10px] border border-solid transition-colors duration-300 ${
                    isActive ? "border-accent" : "border-border"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={`${slide.title} preview`}
                    loading="lazy"
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="block h-full w-full object-cover align-middle [filter:grayscale(1)]"
                  />
                </div>
                <span
                  className={`block text-center [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-6.75 tracking-[-0.4px] transition-colors duration-300 max-md:text-lg md:max-lg:text-xl ${
                    isActive ? "text-color-001" : "text-color-001/50"
                  }`}
                >
                  {slide.title}
                </span>
              </>
            );

            return (
              <motion.div
                key={slide.slug}
                className="absolute inset-0 flex items-center justify-center"
                style={{ zIndex }}
                animate={{ x, z, rotateY, scale, opacity }}
                transition={transition}
              >
                <div
                  className="pointer-events-auto w-56 max-md:w-38 md:max-lg:w-46 flex flex-col gap-4 max-md:gap-2.5"
                  style={{ pointerEvents: absOffset > 2 ? "none" : "auto" }}
                >
                  {isActive ? (
                    <Link
                      href={`/work/${slide.slug}`}
                      onClick={handleActiveClick}
                      className="flex flex-col gap-4 max-md:gap-2.5"
                    >
                      {cardBody}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSelect(i)}
                      aria-label={`View ${slide.title}`}
                      className="flex cursor-none flex-col gap-4 max-md:gap-2.5"
                    >
                      {cardBody}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-none items-center justify-center rounded-full border border-solid border-border bg-background text-color-001 transition-colors duration-300 hover:border-accent hover:text-accent max-md:h-9 max-md:w-9"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-none items-center justify-center rounded-full border border-solid border-border bg-background text-color-001 transition-colors duration-300 hover:border-accent hover:text-accent max-md:h-9 max-md:w-9"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-3.25 px-6 pb-12 text-center max-md:pb-8">
        <p className="max-w-110 text-foreground">{activeSlide.oneLiner}</p>
        <div className="flex flex-wrap justify-center gap-3.5 max-md:gap-2.5">
          {activeSlide.tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center justify-center rounded-[100px] border border-solid border-border px-6 py-2.5 text-sm leading-4.25 tracking-[normal] text-color-001 uppercase"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2.5 pb-16 max-md:pb-9 md:max-lg:pb-12">
        {slides.map((slide, i) => (
          <button
            key={slide.slug}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${slide.title}`}
            aria-current={i === safeIndex ? "true" : undefined}
            className={`h-2 cursor-none rounded-full transition-[width,background-color] duration-300 ${
              i === safeIndex ? "w-6 bg-accent" : "w-2 bg-border hover:bg-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
