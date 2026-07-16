"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * The header's "Menu" affordance was previously decorative — it looked clickable
 * (icon + "Menu" text styled like a button) but had no click handler and did nothing.
 * Since this is a single scrolling page, "menu" only makes sense as in-page section
 * navigation, so this wires it to a real disclosure that jumps to the homepage's
 * hero/about/work/contact sections (rendered site-wide via SiteHeader, so links are
 * homepage-relative to still work from e.g. a case-study page),
 * with proper aria-expanded/aria-controls, Escape-to-close, click-outside-to-close, and
 * focus returned to the trigger on close.
 */
// Homepage-relative, not bare hashes — NavMenu now renders on every route via
// SiteHeader, and a bare "#work" would just rewrite the current page's hash
// instead of navigating back to the homepage section from e.g. /work/raha.
const SECTION_LINKS = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#contact", label: "Contact" },
];

export default function NavMenu({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function handlePointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  const wrapperClassName = variant === "mobile" ? "block min-w-0 cursor-pointer relative" : "block cursor-pointer relative";
  const buttonClassName =
    variant === "mobile"
      ? "inline-flex py-[0.8125rem] px-5 rounded-[10px] justify-center items-center gap-2.5 text-color-001 font-medium leading-7 bg-clr-0 max-md:p-2.5 max-md:gap-[0.3125rem]"
      : "inline-flex py-[0.8125rem] px-5 rounded-[10px] justify-center items-center gap-2.5 text-color-001 font-medium leading-7 bg-clr-0";
  const imgClassName =
    variant === "mobile"
      ? "w-full h-6 block min-w-0 max-w-6 max-h-full overflow-clip object-cover align-middle max-md:w-5 max-md:h-5 max-md:max-w-5"
      : "w-6 h-6 block max-w-6 max-h-full overflow-clip object-cover align-middle";
  const textClassName = variant === "mobile" ? "block min-w-0 leading-4" : "block leading-4";

  return (
    <div className={wrapperClassName} ref={rootRef}>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        className={buttonClassName}
      >
        {/* Decorative — the visible "Menu" text right after it already labels the button,
            so this icon must not repeat that label to screen readers. */}
        <img className={imgClassName} alt="" src="/assets/cloned/svg/b9e3149a4f3b.svg" />
        <span className={textClassName}>Menu</span>
      </button>
      <AnimatePresence>
        {open && (
          /* A plain disclosure, not an ARIA "menu" widget — role="menu"/"menuitem" implies
             the full arrow-key/Home/End menu-widget keyboard contract (WAI-ARIA APG Menu
             Button pattern), which this does not implement. This is just a normal <nav> of
             links, tabbable in document order like any other navigation. */
          <motion.nav
            id={menuId}
            aria-label="Section navigation"
            className="absolute left-0 top-full z-50 mt-2 flex min-w-40 flex-col gap-1 rounded-[10px] border border-solid border-border bg-color-002 p-2 shadow-lg"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
          >
            {SECTION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-color-001 text-sm uppercase tracking-[-0.14px] transition-colors duration-300 ease-out hover:bg-clr-0 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
