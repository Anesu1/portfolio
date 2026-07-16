import { cn } from "../../lib/utils";

/**
 * Self-contained "Open to Work" status badge. No external image asset —
 * the card, corner markers and peel interaction are all CSS/SVG-language
 * primitives built from the site's existing design tokens.
 *
 * The accent-colored folded corner doubles as both the "open" status
 * marker and the hover interaction: on hover it lifts and rotates away
 * from the card, like a sticker corner peeling back, then settles on
 * hover-out. Pure CSS transition — no JS state needed, so this stays a
 * Server Component. `prefers-reduced-motion` is respected via Tailwind's
 * `motion-reduce:` variant, which zeroes the transform outright.
 */
export default function OpenToWorkBadge({ className }: { className?: string } = {}) {
  return (
    <div
      className={cn(
        "group relative w-34 h-34 shrink-0 select-none max-md:w-28 max-md:h-28",
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 rounded-[10px] border border-solid border-border bg-color-002 px-4 text-center overflow-hidden">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
        <p className="[font-family:'Bebas_Neue',_sans-serif] text-2xl leading-6 tracking-[0.06em] text-color-001 uppercase max-md:text-xl max-md:leading-5">
          <span className="block">Open to</span>
          <span className="block">Work</span>
        </p>
      </div>

      {/* Corner markers borrow the site's existing decorative corner-square language (see site-header.tsx). */}
      <div aria-hidden="true" className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
      <div aria-hidden="true" className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />

      {/* Peeling accent corner: the "open" status marker + the hover peel interaction. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-px -right-px h-9 w-9 origin-bottom-left [clip-path:polygon(100%_0,0_0,100%_100%)] bg-accent transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-6 motion-reduce:transition-none motion-reduce:transform-none"
      />
    </div>
  );
}
