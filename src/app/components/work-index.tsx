"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import { caseStudies } from "../content";

export default function WorkIndex() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLLIElement[];
    if (rows.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = rows.indexOf(entry.target as HTMLLIElement);
          if (idx >= 0) setActive(idx);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    rows.forEach((row) => io.observe(row));
    return () => io.disconnect();
  }, []);

  return (
    <div data-active-work-slide={active}>
      <ol className="border-b border-line">
        {caseStudies.map((study, i) => (
          <li
            key={study.slug}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
          >
            <Reveal>
              <Link
                href={`/work/${study.slug}`}
                className="group grid gap-5 border-t border-line py-10 transition-colors duration-300 hover:bg-raised md:grid-cols-[4.5rem_1fr_3rem] md:gap-8 md:py-14"
              >
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                  /{String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="max-w-3xl font-display text-[clamp(1.9rem,4vw,3.5rem)] leading-[1.02] tracking-[-0.01em] transition-colors duration-300 group-hover:text-accent">
                    {study.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-muted">{study.oneLiner}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-bone/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {study.number && (
                    <p className="mt-5 max-w-xl font-mono text-xs leading-relaxed text-accent/90">
                      ▸ {study.number}
                    </p>
                  )}
                </div>

                <span
                  aria-hidden="true"
                  className="hidden self-start justify-self-end font-display text-3xl text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:block"
                >
                  ↗
                </span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
