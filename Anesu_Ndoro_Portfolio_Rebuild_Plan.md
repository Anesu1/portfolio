# Portfolio Rebuild Plan — Anesu Ndoro
Goal: job-hunting engineer site. Audience: recruiters/hiring managers/CTOs evaluating you for remote senior full-stack / AI-integration roles. Not an agency site, not a general life blog. Underlying objective (added later): you're based in Zimbabwe and targeting international/remote work as the path out — everything below is filtered through that, not just "make a nice site."

## 1. Positioning (the one-liner)

Current resume headline: *"Full-stack JavaScript engineer with 6+ years shipping production platforms across talent development, e-commerce, cybersecurity, and enterprise domains. Expert in React, Next.js, NestJS, TypeScript, and AI-integrated backends."*

Portfolio headline should be sharper and prove the AI-integration claim in the first screen, not just state it. Draft:

> "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code."

Cut the current live-site tagline ("Front End Web Developer, fan of Marvel comics, Family guy...") entirely — it undersells you and doesn't match the resume you're sending out.

## 2. What's wrong with the current site (baseline)

- Live at anesu-ndoro.vercel.app, built on CRA/Bootstrap/Material UI, lists dead-era projects (Arete, Events App, Tigzozo, Top Ten Humans, Prolific Boreholes, Museum) with no mention of anything from the last 18 months.
- Tools list is generic (jQuery, Bootstrap, XAMPP) — doesn't reflect the actual current stack (Next.js, NestJS, Prisma, Convex, Groq/LLM APIs, GCP).
- No case studies — just "Code / Visit" links. A recruiter has to reverse-engineer what you actually did from raw repos, most of which have zero description and zero stars.

None of this survives into v2.

## 3. Information architecture

Single-page or few-page scroll, in this order:

1. **Hero** — one-liner positioning above, CTA to view work + download CV (keep this feature, it already exists).
2. **Selected work** — 4-6 deep case studies (see §4). This is the section that has to do the selling.
3. **Client / freelance work** — lighter grid, logos + one-line descriptions (see §4.2).
4. **About** — condensed narrative: 6 years at Uncommon.org, GCP Associate Cloud Engineer, BSc Computer Science (NUST, June 2026), instructor background, one line on current Regional Hub Lead scope (ops/financial management for a 5,000+ learner program) framed as *leadership and delivery credibility*, not as your job title headline.
5. **Stack** — organized by category (frontend / backend / AI / devops), pulled from resume, not a raw tool-icon wall.
6. **Contact** — keep existing form; wire it to Resend instead of whatever's currently handling it, since you already rate Resend over Nodemailer.

Cut: hobbies, movies, gaming, books, church flyers, BMW goal. None of it belongs on a job-hunting engineer site. If you want that content later, it's a separate personal/about-me blog, not this site.

Also cut from the portfolio, kept for the CV only: driver's license. It matters for the Regional Hub Lead application (field/stakeholder travel), not for an engineer's portfolio — don't add it here.

## 4. Project selection and case-study depth

### 4.1 Flagship case studies (full write-up: problem → approach → stack → one hard number)

| Project | Why it's a flagship | The number to lead with |
|---|---|---|
| RAHA WhatsApp Giveaway Bot | Full flow: Flask + Convex + Meta WhatsApp Cloud API + Groq Llama 4 Scout vision model for AI fraud detection on submitted photos. Best proof of the "AI-integrated backend" claim. | Cold start latency cut from ~43s to under 2s (95%+ improvement) via Convex serverless caching + pooled connections. |
| website-cloner (+ website-cloner-backend) | Platform that finds Webflow/Framer templates and clones the frontend into React/Vite or Next.js. Shows platform-building, not just CRUD apps. Live on GitHub under both repos. | Frame this as: converts a static design tool output into a deployable codebase — quantify with # of frameworks supported (React/Vite, Next.js) if you can. |
| Uncommon Global (uncommon-global.vercel.app) | Scroll-driven visual storytelling site (Next.js) you built for Uncommon.org's global presence, including a hand-built AI image pipeline: last-frame identified → first-frame generated in Google Whisk → transition video in Google Flow → frames extracted via ezgif → compressed to WebP for load performance. This is a genuinely unusual production workflow — most engineers don't have an AI-video-to-optimized-web-asset pipeline as a case study. | Call out the WebP optimization step explicitly — it's the kind of performance detail that signals seniority. |
| zimsec-vault | A screentime-gated reading app you built for a real family problem: blocks social apps, tracks reading, random 2-of-6-subject quiz, screentime only unlocked on a pass. Strong "identified a real problem, shipped a working solution for an actual user" narrative — this is the story recruiters remember, not the tech stack. | Frame as a shipped tool with a live user (the actual grade-7 student), not a toy project. |

Pick 4, not all of them, if you want the page to stay tight — RAHA and zimsec-vault are the two strongest narratives (one shows technical depth, the other shows product judgment). Website-cloner and Uncommon Global are the two strongest *technical range* signals (platform engineering, creative/AI pipeline). That's your 4.

### 4.2 Secondary client grid (thumbnail + 1 line, no deep case study)

Studio5 Architects, Smile Dental Surgery, Ouyaoenda e-commerce, Pacific Cigarette Company (mention the QR-code loyalty/reward system here specifically — it's a concrete backend feature, not just "redesigned a website"), Scam Detection web app.

Before publishing client logos/screenshots: confirm you're not under an NDA with any of these clients (dental clinic, cigarette company, architecture firm) that restricts using their name or design in a portfolio. That's the one item here that isn't your call to skip — check your agreements.

### 4.3 Cut entirely from the flagship list

Apex Fuel (mobile app) — worth one line under a "mobile" tag if you want to show React Native range, but it's an Expo preview link with no visible product content when fetched, so it doesn't do any selling on its own. Beetle-crossing Scratch game — real skill (you taught yourself sprite collision/randomized movement logic) but wrong register for a job-hunting site; save it for teaching-portfolio content if you ever build one. Old CRA projects (Arete, Tigzozo, Events App, Top Ten Humans, Prolific Boreholes, Museum) — drop, they contradict the resume's current positioning.

## 5. Stack and design direction

Keep building in what you already prefer and are fast in: Next.js, TailwindCSS, Framer Motion, with GSAP/Three.js used selectively (hero or one transition, not everywhere — the Uncommon Global site already proves you can do heavy scroll/visual work, the portfolio itself shouldn't need to repeat that at the cost of load speed).

Deploy on Vercel, not Render — Render is right for the backends (bot APIs, Convex-adjacent services) you mentioned, but Vercel is the simpler, faster path for a Next.js static/ISR portfolio and it's already where your other Next.js work lives (studio5architects, uncommon-global).

Skip Convex/Resend on the portfolio itself unless the contact form needs it — a portfolio contact form is low-volume enough that Resend alone (which you already rate highly) covers it without adding a database dependency.

Visual direction: your current site's naming convention (`.work()`, `.tools()`, `.contact()`) is a good personal touch — keep that, it's a small signature that a generic agency template (like StudioNF) wouldn't have. Borrow motion craft and typography confidence from StudioNF (bold hero type, smooth section transitions) but not its content structure — no pricing tiers, no team page, no shopping cart, no "our clients say" testimonials block. That structure sells an agency's services; you're selling your own engineering judgment.

## 6. Build sequence

| Phase | What | Note |
|---|---|---|
| 0 | Write the 4 flagship case studies as text first, before touching code | This is the actual bottleneck — the design is the easy part, the writing is what makes it sell |
| 1 | Wireframe the IA in §3 | Confirm order and section count before building |
| 2 | Build hero + case study sections in Next.js/Tailwind/Framer Motion | Reuse your existing component patterns where they still fit |
| 3 | Add motion accents (GSAP/Three.js) sparingly, then run a Lighthouse pass | You already care about this — apply the same WebP/compression discipline you used on Uncommon Global |
| 4 | QA: mobile breakpoints, all case-study links live, CV download works, contact form actually sends via Resend | |
| 5 | Launch: update LinkedIn headline/featured link, GitHub profile README (you already own Anesu1.github.io), resume footer link | |

## 7. Open item that's genuinely yours to decide, not mine

Whether the Regional Hub Lead role appears as one line ("currently lead regional operations for a 5,000+ learner nonprofit program") or gets left off entirely. Recommendation: include the one line — it signals you can run budgets, people, and stakeholder relationships at scale, which matters for senior/staff-level roles even on a technical site. But it's a judgment call about how you want to be read, so make it deliberately rather than by default.

## 8. The actual target: remote work out of Zimbabwe

The portfolio and resume redesign only matter if they're pointed at channels that will actually consider a Zimbabwe-based applicant. Checked live job boards this session (July 2026):

**The real obstacle:** most "remote, worldwide" job postings are quietly restricted to a specific list of countries their payroll/EOR provider supports. Confirmed example: We Work Remotely's Lemon.io "Senior React Full-stack Developer" listing has ~70 eligible countries on it — South Africa is included, Zimbabwe is not. This is the actual filter standing between you and most job-board applications, and no amount of resume/portfolio polish fixes it. It only determines which *channels* are worth your time.

**Channels that route around the country-filter problem:**

| Channel | Fit | Confidence |
|---|---|---|
| Andela Talent Network | Confirmed active distributed engineers from Nigeria, Uganda, Kenya on their site; open application (not a single employer's allowlist), targets mid/senior engineers, pays remotely including crypto option | Verified this session |
| Contract-tagged listings ("Anywhere in the World") on We Work Remotely / RemoteOK — e.g. A.Team's Senior Independent AI Engineer/Architect, Senior Independent Software Developer ($90-170/hr) | Contract structure sidesteps the full-time EOR-country restriction | Live postings confirmed this session |
| Toptal, Turing | Skill-vetted freelance marketplaces, evaluate on assessment before location | Not verified live this session — confirm their current country policy yourself before relying on it |
| Full-time "Anywhere in the World" tagged roles (seen: Akamai DevOps postings, Chief Rebel's "Full Stack Engineer (AI-Forward)") | Some full-time roles genuinely have no restriction | Confirmed the postings exist; not confirmed Zimbabwe clears their compliance check until you apply |

**Target titles, ranked by actual fit to your resume/GitHub (not aspirational):**

1. Full-Stack Engineer / Full-Stack JavaScript Engineer — your default, broadest-match search term.
2. AI-Forward Full-Stack Engineer / AI Integration Engineer — this is a real, current title on job boards (not something I'm inventing), and it's the one framing that makes the RAHA WhatsApp bot the headline instead of a bullet point.
3. Founding Engineer / Product Engineer at early-stage, often-contract startups — matches someone who ships whole platforms solo (website-cloner) rather than one feature on a team.
4. Cloud/DevOps Engineer — your GCP Associate Cloud Engineer cert is a real differentiator against JS-only applicants and is currently underused in your framing.

**Resume/portfolio adjustment this implies:** your resume already says "Available for senior remote roles globally... flexible on overlap hours" — keep that, but add explicit openness to contract work, not just full-time. Contract is the more realistic entry point given the country-filter problem above, and it's also how Andela/Toptal/A.Team-style channels actually work.

**What I'm not doing here:** giving visa/immigration advice on physically relocating out of Zimbabwe. That's a separate, much harder problem from remote work, needs current legal guidance, and isn't something I have reliable live data on. If physical relocation (not just remote income) is actually the goal, say so directly and I'll scope that as its own research task rather than folding it into a portfolio plan.
