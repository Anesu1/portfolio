"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { caseStudies } from "../content";

// Full-page scroll-driven particle storyboard. One shape per section, tied
// to what that section is actually saying, not just decoration:
//
//   hero        -> loose sphere cluster        (systems/connections)
//   about       -> tight single nucleus        (network -> individual)
//   engagement  -> 3 separate clusters         (full-time/contract/async)
//   strengths   -> triangle of 3 clusters      (3 pillars)
//   work        -> 4 clusters, one lit brighter as its row scrolls by
//   proof       -> ascending bar chart         (43s -> 2s improvement)
//   stack       -> 4-column grid/lattice       (4 tool categories)
//   client      -> 4 small separate webs       (distinct relationships)
//   contact     -> arrow pointing at the form
//   footer      -> "Anesu1" wordmark
//
// Section boundaries are measured from the real DOM (data-scene-stop
// attributes / ids in page.tsx), not fixed fractions of page height — actual
// section heights vary a lot, and fixed fractions would drift out of sync
// with the content the moment copy changes length.
//
// Four drivers, all additive: ambient auto-rotation (time), cursor parallax
// (damped), scroll progress (sampled once per frame, no extra listener), and
// a per-stop "settle" weight that damps rotation toward a stable pose for
// shapes that need to read clearly (grid, bars, arrow, text) while staying
// livelier for the more abstract network-y ones (hero, about, client).
//
// Fixed-positioned so it stays pinned to the viewport as the page scrolls.
// Purely decorative: aria-hidden, no pointer events, skipped entirely below
// the md breakpoint, and skipped when the user prefers reduced motion — no
// RAF loop and no listeners at all in that case, not just a slower version.
const ACCENT = 0xd83000; // matches --accent: rgb(216,48,0) in globals.css
const NODE_COUNT = 320;
const MAX_LINK_DIST = 1.05;
const WORDMARK = "Anesu1";

function smoothstep(t: number) {
  const c = Math.min(Math.max(t, 0), 1);
  return c * c * (3 - 2 * c);
}

/** Distributes `total` points across `groups` as evenly as possible (e.g.
 * 320 across 3 groups -> [107, 107, 106]), used for the multi-cluster shapes. */
function splitCounts(total: number, groups: number): number[] {
  const base = Math.floor(total / groups);
  const remainder = total - base * groups;
  return Array.from({ length: groups }, (_, i) => base + (i < remainder ? 1 : 0));
}

function fillTightCluster(out: Float32Array, start: number, count: number, cx: number, cy: number, cz: number, radius: number) {
  for (let k = 0; k < count; k++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const idx = (start + k) * 3;
    out[idx] = cx + r * Math.sin(phi) * Math.cos(theta);
    out[idx + 1] = cy + r * Math.sin(phi) * Math.sin(theta);
    out[idx + 2] = cz + r * Math.cos(phi);
  }
}

/** Renders `text` to an offscreen canvas and samples `count` positions from
 * its lit pixels, mapped into a small XY-plane range centered on the origin
 * — this is what makes the particle cloud able to resolve into legible text. */
function sampleTextPositions(text: string, count: number): Float32Array {
  const w = 640;
  const h = 160;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 110px Arial, Helvetica, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, w / 2, h / 2 + 6);

  const data = ctx.getImageData(0, 0, w, h).data;
  const lit: Array<[number, number]> = [];
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      if (data[(y * w + x) * 4] > 128) lit.push([x, y]);
    }
  }
  for (let i = lit.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lit[i], lit[j]] = [lit[j], lit[i]];
  }

  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const [px, py] = lit.length > 0 ? lit[i % lit.length] : [w / 2, h / 2];
    out[i * 3] = (px / w - 0.5) * 4.6;
    out[i * 3 + 1] = -(py / h - 0.5) * 1.15;
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
  }
  return out;
}

type Stop = {
  name: string;
  selector: string | null; // null = document bottom (footer)
  shape: Float32Array;
  position: [number, number, number];
  settle: number; // 0 = fully lively rotation, 1 = locked level/stable
  lineOpacity: number; // 0..1, relative to the 0.12 baseline
  scale: number;
};

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // ---- Build every shape, all index-correspondent (node i has a defined
    // position in every one) so morphing between any pair is a per-node lerp.
    const shapeSphere = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      const r = 3 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      shapeSphere[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      shapeSphere[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      shapeSphere[i * 3 + 2] = r * Math.cos(phi);
    }

    const shapeNucleus = new Float32Array(NODE_COUNT * 3);
    fillTightCluster(shapeNucleus, 0, NODE_COUNT, 0, 0, 0, 0.75);

    const shapeTriple = new Float32Array(NODE_COUNT * 3);
    {
      const counts = splitCounts(NODE_COUNT, 3);
      const centers: Array<[number, number]> = [[-1.7, 0], [0, 0], [1.7, 0]];
      let cursor = 0;
      for (let g = 0; g < 3; g++) {
        fillTightCluster(shapeTriple, cursor, counts[g], centers[g][0], centers[g][1], 0, 0.5);
        cursor += counts[g];
      }
    }

    const shapeTriangle = new Float32Array(NODE_COUNT * 3);
    {
      const counts = splitCounts(NODE_COUNT, 3);
      const centers: Array<[number, number]> = [[0, 1.4], [-1.3, -0.9], [1.3, -0.9]];
      let cursor = 0;
      for (let g = 0; g < 3; g++) {
        fillTightCluster(shapeTriangle, cursor, counts[g], centers[g][0], centers[g][1], 0, 0.45);
        cursor += counts[g];
      }
    }

    const WORK_COUNT = Math.max(caseStudies.length, 1);
    const shapeWork = new Float32Array(NODE_COUNT * 3);
    const workClusterOf = new Int8Array(NODE_COUNT); // which cluster each node belongs to, for the highlight pass
    {
      const counts = splitCounts(NODE_COUNT, WORK_COUNT);
      let cursor = 0;
      for (let g = 0; g < WORK_COUNT; g++) {
        const y = 1.6 - (g / Math.max(WORK_COUNT - 1, 1)) * 3.2; // top to bottom, echoing the stacked rows
        const x = g % 2 === 0 ? -0.5 : 0.5;
        fillTightCluster(shapeWork, cursor, counts[g], x, y, 0, 0.42);
        for (let k = 0; k < counts[g]; k++) workClusterOf[cursor + k] = g;
        cursor += counts[g];
      }
    }

    // Bars/grid/webs/arrow all use a narrower horizontal spread than the
    // network-y shapes (sphere/nucleus/triple/triangle/work) — those literal
    // shapes sit in the same right-hand panel as page content (Stack's
    // column list, the Contact form), and earlier versions spanning ~4 world
    // units wide drifted straight over that text/form fields. Keeping x
    // roughly within [-0.9, 0.9] here, combined with a rightward `position`
    // shift per stop, keeps the shape's mass in the panel's outer gutter
    // instead of overlapping content — verified empirically via screenshots
    // at a 1440px viewport, not derived analytically.
    const shapeBars = new Float32Array(NODE_COUNT * 3);
    {
      const BAR_COUNT = 5;
      const counts = splitCounts(NODE_COUNT, BAR_COUNT);
      const heights = [-0.5, 0.1, 0.7, 1.3, 1.9]; // ascending — "the numbers" going up
      let cursor = 0;
      for (let b = 0; b < BAR_COUNT; b++) {
        const x = -0.8 + b * 0.4;
        const top = heights[b];
        for (let k = 0; k < counts[b]; k++) {
          const idx = (cursor + k) * 3;
          shapeBars[idx] = x + (Math.random() - 0.5) * 0.12;
          shapeBars[idx + 1] = -1.6 + Math.random() * (top + 1.6);
          shapeBars[idx + 2] = (Math.random() - 0.5) * 0.3;
        }
        cursor += counts[b];
      }
    }

    const shapeGrid = new Float32Array(NODE_COUNT * 3);
    {
      const COLS = 4;
      const counts = splitCounts(NODE_COUNT, COLS);
      let cursor = 0;
      for (let c = 0; c < COLS; c++) {
        const x = -0.9 + c * 0.6;
        for (let k = 0; k < counts[c]; k++) {
          const idx = (cursor + k) * 3;
          shapeGrid[idx] = x + (Math.random() - 0.5) * 0.1;
          shapeGrid[idx + 1] = -2 + Math.random() * 4;
          shapeGrid[idx + 2] = (Math.random() - 0.5) * 0.4;
        }
        cursor += counts[c];
      }
    }

    const shapeWebs = new Float32Array(NODE_COUNT * 3);
    {
      const counts = splitCounts(NODE_COUNT, 4);
      const centers: Array<[number, number]> = [[-0.8, 0.9], [0.8, 0.9], [-0.8, -0.9], [0.8, -0.9]];
      let cursor = 0;
      for (let g = 0; g < 4; g++) {
        fillTightCluster(shapeWebs, cursor, counts[g], centers[g][0], centers[g][1], 0, 0.32);
        cursor += counts[g];
      }
    }

    const shapeArrow = new Float32Array(NODE_COUNT * 3);
    {
      // A ">" chevron pointing right, toward the contact form: two rays with
      // opposite slopes meeting at the tip — NOT the same slope translated,
      // which would just be one straight line (caught this via sample-data
      // verification: the first version had both rays at slope -1, so it
      // rendered as a single diagonal, not a bent arrow).
      for (let i = 0; i < NODE_COUNT; i++) {
        const onUpperRay = i % 2 === 0;
        const t = Math.random();
        const jitter = (Math.random() - 0.5) * 0.14;
        const idx = i * 3;
        const tailX = -0.5, tipX = 0.5, tipY = 0;
        if (onUpperRay) {
          // (tailX, 0.6) -> tip
          shapeArrow[idx] = tailX + t * (tipX - tailX) + jitter;
          shapeArrow[idx + 1] = 0.6 + t * (tipY - 0.6) + jitter;
        } else {
          // (tailX, -0.6) -> tip
          shapeArrow[idx] = tailX + t * (tipX - tailX) + jitter;
          shapeArrow[idx + 1] = -0.6 + t * (tipY - -0.6) + jitter;
        }
        shapeArrow[idx + 2] = (Math.random() - 0.5) * 0.2;
      }
    }

    const shapeText = sampleTextPositions(WORDMARK, NODE_COUNT);

    const STOPS: Stop[] = [
      { name: "hero", selector: "#hero", shape: shapeSphere, position: [0.6, 0.35, 0], settle: 0, lineOpacity: 1, scale: 1 },
      { name: "about", selector: "#about", shape: shapeNucleus, position: [0.5, 0, 0.3], settle: 0.25, lineOpacity: 0.6, scale: 0.85 },
      { name: "engagement", selector: '[data-scene-stop="engagement"]', shape: shapeTriple, position: [0, 0.2, 0], settle: 0.35, lineOpacity: 0.25, scale: 1 },
      { name: "strengths", selector: '[data-scene-stop="strengths"]', shape: shapeTriangle, position: [0.2, 0, -0.3], settle: 0.6, lineOpacity: 0.15, scale: 1 },
      { name: "work", selector: "#work", shape: shapeWork, position: [0.4, 0, 0], settle: 0.3, lineOpacity: 0.2, scale: 1.1 },
      { name: "proof", selector: '[data-scene-stop="proof"]', shape: shapeBars, position: [1.0, -0.1, 0.4], settle: 0.92, lineOpacity: 0.05, scale: 1.2 },
      { name: "stack", selector: '[data-scene-stop="stack"]', shape: shapeGrid, position: [1.0, 0, -0.4], settle: 0.92, lineOpacity: 0.08, scale: 1.2 },
      { name: "client", selector: '[data-scene-stop="client"]', shape: shapeWebs, position: [1.0, 0, 0.3], settle: 0.5, lineOpacity: 0.45, scale: 1.2 },
      { name: "contact", selector: "#contact", shape: shapeArrow, position: [1.1, 0.1, 0], settle: 0.95, lineOpacity: 0.05, scale: 1.2 },
      { name: "footer", selector: null, shape: shapeText, position: [0, -0.05, 0], settle: 1, lineOpacity: 0, scale: 1.15 },
    ];

    const current = new Float32Array(NODE_COUNT * 3);
    current.set(STOPS[0].shape);

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute("position", new THREE.BufferAttribute(current, 3));
    const pointColors = new Float32Array(NODE_COUNT * 3).fill(1);
    pointsGeometry.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));
    const pointsMaterial = new THREE.PointsMaterial({
      color: ACCENT,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      vertexColors: true,
    });
    group.add(new THREE.Points(pointsGeometry, pointsMaterial));

    // Connections computed once from the resting sphere so the graph
    // topology stays stable while endpoints move — recomputing distances
    // every frame would be O(n^2) per frame for no visual benefit. Only
    // meaningful when adjacent shapes are still network-like; faded out via
    // each stop's `lineOpacity` for the more structured shapes (grid, bars,
    // arrow, text) where crisscrossing sphere-topology lines would just be
    // noise on top of an intentional silhouette.
    const linkPairs: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = shapeSphere[i * 3] - shapeSphere[j * 3];
        const dy = shapeSphere[i * 3 + 1] - shapeSphere[j * 3 + 1];
        const dz = shapeSphere[i * 3 + 2] - shapeSphere[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < MAX_LINK_DIST) linkPairs.push([i, j]);
      }
    }
    const linePositions = new Float32Array(linkPairs.length * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.1 });
    group.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const baseTiltX = 0.3;
    group.rotation.x = baseTiltX;

    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();
    const resizeObserver = new ResizeObserver(() => {
      resize();
      measureBoundaries();
    });
    resizeObserver.observe(container);

    // ---- Section boundaries, measured from the real DOM rather than fixed
    // fractions of page height (section heights vary a lot with content).
    let boundaries: number[] = new Array(STOPS.length).fill(0);
    function measureBoundaries() {
      for (let i = 0; i < STOPS.length; i++) {
        const sel = STOPS[i].selector;
        if (sel === null) {
          boundaries[i] = document.documentElement.scrollHeight - window.innerHeight;
          continue;
        }
        const el = document.querySelector(sel);
        boundaries[i] = el ? el.getBoundingClientRect().top + window.scrollY : boundaries[i - 1] ?? 0;
      }
      for (let i = 1; i < boundaries.length; i++) {
        if (boundaries[i] <= boundaries[i - 1]) boundaries[i] = boundaries[i - 1] + 1;
      }
    }
    measureBoundaries();
    // Fonts/images can shift layout slightly after first paint — one delayed
    // re-measure catches that without needing a MutationObserver.
    const remeasureTimeout = window.setTimeout(measureBoundaries, 800);

    // Selected Work is now a Coverflow Gallery (a single self-contained
    // widget, not a stack of discrete DOM rows), so the "active" row is read
    // straight off the gallery's own exposed state — see `[data-active-work-slide]`
    // below — rather than measured from row rects.
    let cachedActiveSlideEl: Element | null = null;

    // Cursor parallax: tracked on `window`, not the scene's own container,
    // since the container is pointer-events-none (so it can't be a hit-test
    // target itself) and the effect should react to the cursor anywhere on
    // the page, not just when directly over the network graph.
    const pointer = { x: 0, y: 0 };
    function handlePointerMove(e: PointerEvent) {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    }

    const MAX_YAW_TILT = 0.6;
    const MAX_PITCH_TILT = 0.25;
    const DAMPING = 0.06; // lower = smoother/laggier follow, higher = snappier
    const workSegmentIndex = STOPS.findIndex((s) => s.name === "work");

    let rafId: number;
    function animate(t: number) {
      const scrollY = window.scrollY;

      let segment = boundaries.length - 2;
      for (let s = 0; s < boundaries.length - 1; s++) {
        if (scrollY >= boundaries[s] && scrollY <= boundaries[s + 1]) {
          segment = s;
          break;
        }
      }
      if (scrollY < boundaries[0]) segment = 0;
      const span = boundaries[segment + 1] - boundaries[segment];
      const segLocalT = smoothstep(span > 0 ? (scrollY - boundaries[segment]) / span : 0);

      const stopFrom = STOPS[segment];
      const stopTo = STOPS[segment + 1];
      const settle = stopFrom.settle + (stopTo.settle - stopFrom.settle) * segLocalT;
      const liveliness = 1 - settle;

      const targetY = t * 0.00015 * liveliness + pointer.x * MAX_YAW_TILT * liveliness;
      const targetX = baseTiltX * (1 - settle) + pointer.y * MAX_PITCH_TILT * liveliness;
      group.rotation.y += (targetY - group.rotation.y) * DAMPING;
      group.rotation.x += (targetX - group.rotation.x) * DAMPING;
      const targetZ = (1 - settle) * (scrollY / (boundaries[boundaries.length - 1] || 1)) * 0.35;
      group.rotation.z += (targetZ - group.rotation.z) * DAMPING;

      const [posFromX, posFromY, posFromZ] = stopFrom.position;
      const [posToX, posToY, posToZ] = stopTo.position;
      group.position.set(
        posFromX + (posToX - posFromX) * segLocalT,
        posFromY + (posToY - posFromY) * segLocalT,
        posFromZ + (posToZ - posFromZ) * segLocalT
      );

      const shapeFrom = stopFrom.shape;
      const shapeTo = stopTo.shape;
      for (let i = 0; i < NODE_COUNT; i++) {
        const fx = shapeFrom[i * 3], fy = shapeFrom[i * 3 + 1], fz = shapeFrom[i * 3 + 2];
        const tx = shapeTo[i * 3], ty = shapeTo[i * 3 + 1], tz = shapeTo[i * 3 + 2];
        current[i * 3] = fx + (tx - fx) * segLocalT;
        current[i * 3 + 1] = fy + (ty - fy) * segLocalT;
        current[i * 3 + 2] = fz + (tz - fz) * segLocalT;
      }
      pointsGeometry.attributes.position.needsUpdate = true;

      for (let k = 0; k < linkPairs.length; k++) {
        const [i, j] = linkPairs[k];
        const o = k * 6;
        linePositions[o] = current[i * 3];
        linePositions[o + 1] = current[i * 3 + 1];
        linePositions[o + 2] = current[i * 3 + 2];
        linePositions[o + 3] = current[j * 3];
        linePositions[o + 4] = current[j * 3 + 1];
        linePositions[o + 5] = current[j * 3 + 2];
      }
      lineGeometry.attributes.position.needsUpdate = true;

      // Selected Work gets an extra treatment on top of the shape morph:
      // whichever of the 4 clusters corresponds to the slide currently
      // "active" in the Coverflow Gallery is lit brighter than the rest —
      // read directly off the gallery's own `data-active-work-slide`
      // attribute rather than measured from the DOM (there's no longer a
      // stack of discrete rows to measure rects on). Cache the element once
      // found; a single attribute read per frame is cheap regardless.
      const inWorkMode = segment === workSegmentIndex || segment === workSegmentIndex - 1;
      if (inWorkMode) {
        if (!cachedActiveSlideEl) cachedActiveSlideEl = document.querySelector("[data-active-work-slide]");
        const activeRow = cachedActiveSlideEl
          ? parseInt(cachedActiveSlideEl.getAttribute("data-active-work-slide") ?? "0", 10) || 0
          : 0;
        // Fade the highlight in/out with how "into" the work shape we are,
        // so it doesn't snap on the instant the cluster shape forms.
        const highlightStrength = segment === workSegmentIndex ? 1 : segLocalT;
        for (let i = 0; i < NODE_COUNT; i++) {
          const isActive = workClusterOf[i] === activeRow;
          const bright = isActive ? 1 : 1 - 0.7 * highlightStrength;
          pointColors[i * 3] = pointColors[i * 3 + 1] = pointColors[i * 3 + 2] = bright;
        }
        pointsGeometry.attributes.color.needsUpdate = true;
      } else if (pointColors[0] !== 1) {
        pointColors.fill(1);
        pointsGeometry.attributes.color.needsUpdate = true;
      }

      const scale = stopFrom.scale + (stopTo.scale - stopFrom.scale) * segLocalT;
      group.scale.setScalar(scale);
      pointsMaterial.opacity = 0.88 + 0.1 * settle;
      const lineOpacity = stopFrom.lineOpacity + (stopTo.lineOpacity - stopFrom.lineOpacity) * segLocalT;
      lineMaterial.opacity = 0.12 * lineOpacity;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    }
    if (prefersReducedMotion) {
      renderer.render(scene, camera);
    } else {
      window.addEventListener("pointermove", handlePointerMove);
      rafId = requestAnimationFrame(animate);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.clearTimeout(remeasureTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      // Fixed (not absolute): pinned to the viewport so it travels with the
      // user as they scroll, rather than scrolling away with the hero's own
      // document flow. Negative z-index: an absolutely/fixed positioned box
      // with z-index:auto still paints after (i.e. on top of) normal in-flow
      // content in the same stacking context per the CSS painting-order spec
      // — without the negative value this would sit above page content
      // instead of behind it.
      className="pointer-events-none fixed inset-y-0 right-0 -z-10 hidden w-1/2 md:block"
    />
  );
}
