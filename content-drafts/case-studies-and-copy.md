# Portfolio Copy Draft — Phase 0

Sources, in order of authority: **Anesu_Ndoro_Resume_v5.docx** (extracted directly — this is
the ground truth for anything resume-covered), the **Rebuild Plan doc**, and a pass over
**github.com/Anesu1**'s public repos. Nowhere below is a number, stack choice, or detail
invented — where none of the three sources cover something, it's marked `[NEEDS INPUT]`.

---

## Contact / identity facts (from resume — reuse verbatim in footer/contact)

- Email: ndoroanesuk@gmail.com
- Phone: +263 783 977 875
- Location: Remote (UTC+2)
- **Existing domain: anesundoro.me** — you already own this. Phase 5 (launch) should point it at the Vercel deployment instead of leaving the site on a vercel.app subdomain.
- Resume line, reusable verbatim: *"Open to full-time & contract remote roles — worldwide, flexible on overlap hours"*

---

## ⚠️ Discrepancy found — needs your call

The resume's **Work Experience** section lists your Uncommon.org title as **"Software Developer and Technical Lead"** (Nov 2019–Present), with bullets entirely about engineering (platforms shipped, auth systems, APIs, talent showcase platform, donor storytelling platform). **"Regional Hub Lead" does not appear anywhere on the resume** — not as a title, not as a bullet, not the 5,000+ learner program detail.

The Rebuild Plan (§3.4, §7) says to include a Regional Hub Lead line in About, framed as leadership/delivery credibility. That's either:
1. A newer responsibility that hasn't made it onto this resume version yet (in which case the resume should probably get the same line added, so the two documents don't contradict each other when a recruiter checks both), or
2. Something you want on the portfolio only, not the resume, as a deliberate framing choice.

I've left the About draft below **with** the Regional Hub Lead line per the plan's recommendation, but flagging this explicitly since a recruiter cross-referencing resume vs. portfolio would notice a title that only exists on one of the two.

---

## Hero

**Headline** (from plan, unchanged):
> Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code.

**CTAs:** "View Work" (scroll to case studies) + "Download CV"

`Anesu_Ndoro_Resume_v5.docx` is in the project root now, but a `.docx` behind a "Download CV" button reads unusually for a web portfolio — the norm is a PDF. Recommend converting to PDF in Phase 1 and serving that instead, unless you specifically want recruiters to get an editable file.

---

## About (condensed narrative)

> Full-stack engineer with 6+ years shipping AI-integrated production platforms — LLM-powered backends, real-time fraud detection, and full-stack web products — across talent development, e-commerce, cybersecurity, and enterprise domains, as Software Developer and Technical Lead at Uncommon.org. Google Cloud Associate Cloud Engineer certified. BSc Honours Computer Science, NUST, Bulawayo (graduated June 2026). Cut a production system's cold-start latency 95% (~43s → under 2s) through backend architecture work. Currently also running regional operations for a 5,000+ learner program — leadership and delivery experience that carries over directly to senior/staff-level engineering work. Open to full-time and contract remote roles worldwide, flexible on overlap hours.

Rewritten from the actual resume summary paragraph (stronger and more specific than my first draft, which was working from the plan doc alone). Regional Hub Lead line kept per the plan's recommendation — see discrepancy flag above.

---

## Engagement model (repurposed "services" tabs)

Resume already states this outright — using it directly instead of paraphrasing:

- **Full-time** — Open to senior full-time remote roles worldwide, flexible on overlap hours.
- **Contract** — Equally open to contract work — fixed-scope or ongoing. Given the plan's own research (§8) on country-restricted full-time hiring pipelines, this is the more realistic entry point for a Zimbabwe-based applicant right now.
- **Async collaboration** — Comfortable owning a feature or platform end-to-end across time zones without real-time hand-holding.

---

## Proof-metrics strip

1. **43s → <2s (95%+)** — RAHA bot cold-start latency cut via Convex serverless caching + pooled connections. ✅ Confirmed on the resume verbatim, not just the plan doc.
2. **5 services, 1 pipeline** — website-cloner/Ditto's real architecture (compiler, REST API, worker, DB, storage), confirmed from the repo. Reads more "platform depth" than "impressive number" — your call whether it fits a stat card or reads better as case-study prose only.
3. `[NEEDS INPUT]` — Uncommon Global: still no number anywhere (not on resume — it's not a resume bullet at all, only in the plan doc). Page weight before/after WebP? Lighthouse score? Load time?
4. zimsec-vault and Scam Detection are both framed as narrative/utility rather than metric-driven — recommend leaving both out of this strip.

**Recommendation unchanged:** either get a real number for Uncommon Global, or run this strip with 2 cards (RAHA + website-cloner) instead of 4.

---

## Flagship case studies (dedicated `/work/[slug]` pages)

### 1. RAHA — WhatsApp Giveaway Bot with AI Fraud Detection — `/work/raha`

Fully confirmed from the resume — this is now the most complete of the four.

- **Problem:** A consumer giveaway campaign needed a fully WhatsApp-native entry flow (data collection, product-code validation, photo submission) with real-time fraud screening on submitted photos, and without the multi-second cold-start lag that breaks a chat-based flow.
- **Approach:** Production WhatsApp chatbot built on Flask, using Meta's WhatsApp Cloud API for the messaging surface and Convex as a serverless backend. Groq's Llama 4 Scout vision model does real-time fraud detection on user-submitted photos — flagging AI-generated or invalid images via prompt engineering. A web admin dashboard handles real-time entry monitoring, bi-weekly winner draws, CSV export, and product-code management.
- **Stack:** Python · Flask · Convex · Meta WhatsApp Cloud API · Groq AI (Llama 4 Scout, vision) · LLM prompt engineering
- **The number:** Convex backend with optimistic session caching and shared connection pooling cut cold-start latency from ~43s to under 2s (95%+ improvement).
- **Live:** raha-chatbot.onrender.com

### 2. Website Cloner (Ditto) — Design-to-Code Platform — `/work/website-cloner`

- **Problem:** Turning a Webflow/Framer template into a real, production-ready codebase is normally a slow, manual designer-to-engineering handoff — a static design export that a team can't actually ship or extend.
- **Approach:** Full-stack platform (separate open-source frontend and backend repos), powered by Ditto's site-cloning engine: `URL → headless browser capture → normalized render IR → deterministic inference → app generation`. Frontend is a Next.js UI — submit a URL, pick output framework (Next.js or Vite React) and CSS approach (Tailwind or vanilla), poll a job queue, download a ZIP. Backend is a proper multi-service platform: Hono REST API, a queued worker for capture/generation jobs, Drizzle ORM over PostgreSQL, S3/R2-compatible artifact storage, Playwright (Chromium) for the actual browser capture, a CLI unpacker, and a hosted API with an MCP server for programmatic/agent access.
- **Stack:** TypeScript · Next.js · React/Vite · Hono · Drizzle ORM · PostgreSQL · Playwright · Docker · S3/R2
- **The number:** 5 decoupled services (compiler, API, worker, database, storage) orchestrated into one capture-to-code pipeline.
- **The detail worth leading with:** this portfolio's own front-end shell was generated by this same tool — its `ARCHITECTURE.md` literally says "this app is a generated ditto.site clone." A reader can check that claim themselves.
- **Live:** github.com/Anesu1/website-cloner + website-cloner-backend

### 3. Uncommon Global — `/work/uncommon-global`

Unchanged from the last draft — not on the resume (it's not framed as a resume bullet), so the plan doc remains the only source.

- **Problem:** Uncommon.org needed a visually ambitious, scroll-driven site for its global presence, with distinctive visual assets that wouldn't blow the load-time budget.
- **Approach:** Scroll-driven storytelling site in Next.js, paired with a hand-built AI image/video pipeline: identify the last frame → generate the first frame in Google Whisk → generate the transition video in Google Flow → extract frames via ezgif → compress to WebP for load performance.
- **Stack:** Next.js · Google Whisk · Google Flow · ezgif · WebP compression pipeline
- **The number:** `[NEEDS INPUT — see proof-metrics gap #3 above]`

### 4. zimsec-vault — `/work/zimsec-vault`

Not on the resume either (reads as a personal/family project, not a client-facing resume bullet) — plan doc + repo inspection remain the sources.

- **Problem:** A real, personal problem — balancing screentime against required reading/study for a grade-7 student, without constant parental-enforcement friction.
- **Approach:** A screentime-gated reading app: tracks reading time, quizzes on a random 2-of-6 subjects, unlocks screentime only on a pass. Confirmed from the repo's `package.json`: it's a Next.js + Convex app that also depends on the Groq SDK — meaning the quiz is likely AI-generated per session rather than a static question bank, making this a second, independent AI-integration proof point.
- **Stack:** Next.js 16, React 19, Convex, Groq SDK, Framer Motion, GSAP, Tailwind CSS 4 (confirmed from `package.json`)
- **The number:** None, deliberately — plan frames this as "shipped tool with a live user," not a metric.
- **`[NEEDS INPUT]` — still open:** the plan says this "blocks social apps," but a Next.js web app has no OS-level ability to block other apps on a phone, and I found no such mechanism in the repo (no README beyond default create-next-app boilerplate). Is blocking actually enforced by something else — a manually-configured OS Screen Time/Digital Wellbeing setting, a router/DNS rule, a browser extension — with zimsec-vault only being the reading-tracker + quiz-gate used as the unlock condition? Worth getting precisely right before the case study claims a capability the app itself doesn't have.

---

## Scam Detection Web Application — ⚠️ categorization question

Fully confirmed from the resume — but the resume lists this under **"Selected Projects"** (same tier as RAHA and Website Cloner — i.e., your own solo build), **not** under "Client Platforms." The Rebuild Plan, by contrast, put it in §4.2's *secondary client grid* alongside Studio5/Smile Dental/Ouyaoenda/Pacific Cigarette. Those can't both be right — it's either a personal project (5th selected-project tile, or folded into the flagship-adjacent set) or client work (client grid, one-liner only). Your call on which section it belongs in; here's the confirmed detail either way:

- **What it does:** Python-based URL analysis system detecting phishing domains, malicious redirects, and fake payment portals, using cybersecurity heuristics and pattern matching.
- **Stack:** Python · Next.js frontend · URL analysis · cybersecurity heuristics
- **Live:** scam-detector-nu.vercel.app

---

## Client / freelance grid (thumbnail + 1 line)

All four now confirmed directly from the resume's "Client Platforms" section — no more placeholders:

- **Studio5 Architects** — Modern architecture portfolio site: visual storytelling layouts, high-resolution galleries, structured project case studies. (Also confirmed from the repo: Next.js + Sanity CMS, so content is editable without a redeploy.)
- **Smile Dental Surgery** — Responsive clinic site with schema markup and Google Business Profile optimization, built for local patient acquisition.
- **Ouyaoenda E-Commerce** — End-to-end storefront (catalog, cart, checkout) for a premium candle and home-fragrance brand.
- **Pacific Cigarette Company** — Corporate site redesign plus a backend QR-code promotional campaign system — unique code generation, validation, and reward-point tracking at scale.

**Before this grid ships:** confirm NDA status with the dental clinic, cigarette company, and architecture firm per the plan's §4.2 flag — still not my call to make.

---

## Stack by category

Replaced with the actual resume Skills section — more complete and more authoritative than my first draft's inference from the plan doc alone:

- **Frontend:** JavaScript, TypeScript, React, Next.js, HTML, CSS, TailwindCSS, Framer Motion, Flutter
- **AI/ML:** LLM API Integration, Prompt Engineering, AI Fraud Detection Pipelines, Groq AI (Llama 4 Scout vision model), Meta WhatsApp Cloud API, WhatsApp Chatbot Development
- **Backend:** NestJS, Node.js, REST APIs, Microservices Architecture, Authentication Systems, Role-Based Access Control, PostgreSQL, Prisma, Convex, Flask, Python
- **DevOps:** Google Cloud Platform (Associate Cloud Engineer Certified), Git, GitHub, GitHub Actions, CI/CD Pipelines, Docker, Render, Vercel

Left off the portfolio stack section on purpose (methodology/soft-skill items, not tools): Agile Methodologies, Technical SEO, Product System Design, Cybersecurity Awareness, Sanity CMS (this one could arguably go under Backend/CMS if you want it visible).

Note: Flutter appearing under Frontend skills is likely the Apex Fuel mobile app's actual stack (the plan doc didn't specify a framework for it) — flagging so nobody assumes React Native by default if that project ever gets a one-line mobile tag.

---

## Open items — still yours to decide, not mine

1. NDA check on client logos/screenshots (Studio5, Smile Dental, Pacific Cigarette) — plan §4.2.
2. Regional Hub Lead: on the portfolio only, or should the resume get updated to match? (see discrepancy flag above)
3. Scam Detection: personal project or client work? Resume and plan disagree on this.
4. zimsec-vault's actual screentime-blocking mechanism — needed before the case study can honestly describe what the app does.
5. Uncommon Global: any real number for the proof-metrics strip (page weight, Lighthouse score, load time)?
6. CV: convert the `.docx` to PDF for the download button, or serve the docx as-is?
