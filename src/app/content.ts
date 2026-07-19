// Semantic page content extracted from recognized recipe sections.

export type FeaturesItem = {
  imgSrc: string;
  description: string;
  title: string;
};
export const features: FeaturesItem[] = [
    { imgSrc: "/assets/cloned/svg/6f4d400ed8e4.svg", description: "We combine research, insight, and creativity to develop ideas that solve problems and create value.", title: "Creative ideas" },
    { imgSrc: "/assets/cloned/svg/fe76a3fde704.svg", description: "From design to development, we use advanced tools to optimize workflows and ensure excellence.", title: "Expert in tools" },
    { imgSrc: "/assets/cloned/svg/d43ae6106b31.svg", description: "Our work delivers measurable outcomes, helping brands grow, engage, and succeed consistently.", title: "Proven results" }
];

export type LogosItem = {
  alt: string;
  height?: string;
  href?: string;
  imgSrc: string;
  rel?: string;
  srcSet?: string;
  target?: string;
  tooltip?: string;
  width?: string;
};
export const logos: LogosItem[] = [
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/2b5adbea3bc1.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/0d1add9a508a.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/3bac764197de.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/99ef039473d4.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/d7aae746aee0.svg" }
];

export type Logos2Item = {
  alt: string;
  height?: string;
  href?: string;
  imgSrc: string;
  rel?: string;
  srcSet?: string;
  target?: string;
  tooltip?: string;
  width?: string;
};
export const logos2: Logos2Item[] = [
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/a883afcd2ae0.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/2b5adbea3bc1.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/0d1add9a508a.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/3bac764197de.svg" },
    { alt: "Choose Item Icon", imgSrc: "/assets/cloned/svg/99ef039473d4.svg" }
];

export type Logos3Item = {
  [key: string]: unknown;
};
export const logos3: Logos3Item[] = [
    {  },
    {  },
    {  },
    {  },
    {  }
];

export type ProductsItem = {
  variant: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  label: string;
  text: string;
  href: string;
  imgSrc: string;
  id?: string;
};
export const products: ProductsItem[] = [
    { variant: "essential-plan-exceptional-value", eyebrow: "PER MONTH", title: "Essential plan. Exceptional value.", description: "All Templates Unlocked", price: "$399", label: "Get started", text: "STARTER PLAN", href: "/product/starter-plan", imgSrc: "/assets/cloned/svg/162604d23bf1.svg" },
    { variant: "powerful-features-for-modern-businesses", eyebrow: "PER MONTH", title: "Powerful features for modern businesses.", description: "Invoice, Tax & Document Included", price: "$899", label: "Get started", text: "GROWTH PLAN", href: "/product/growth-plan", imgSrc: "/assets/cloned/svg/d1a1b4f8b175.svg" },
    { variant: "built-for-businesses-that-demand-more", eyebrow: "PER MONTH", title: "Built for businesses that demand more.", description: "Invoice, Tax & Document Included", price: "$1,250", label: "Get started", id: "w-node-_4c4e5f40-90d6-1212-19e8-923116f7b856-4ece55e2", text: "ULTIMATE PLAN", href: "/product/ultimate-plan", imgSrc: "/assets/cloned/svg/162604d23bf1.svg" }
];

export type Logos4Item = {
  href: string;
  imgSrc: string;
};
// TODO(launch): only GitHub is a confirmed real profile URL. Add
// LinkedIn/other real profile links here once you have them — not
// fabricating placeholder social URLs.
export const logos4: Logos4Item[] = [
    { href: "https://github.com/Anesu1", imgSrc: "/assets/github.svg" }
];

export type FooterNavItem = {
  href: string;
  label: string;
};
export const footerNav: FooterNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" }
];

export type CtaSectionContentAction = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CtaSectionContent = {
  title?: string;
  actions: CtaSectionContentAction[];
};
export const ctaSectionContent: CtaSectionContent = {
  "title": "Contact Me!",
  "actions": []
};

// ---------------------------------------------------------------------------
// Portfolio content (Anesu Ndoro rebuild) — additive for now.
// Old StudioNF placeholder exports above stay in place until each section that
// consumes them is rewired in Phase 2; nothing here is imported yet.
// Source: Anesu_Ndoro_Resume_v5.docx, Anesu_Ndoro_Portfolio_Rebuild_Plan.md,
// and github.com/Anesu1 repo inspection — see content-drafts/case-studies-and-copy.md
// for the full sourcing notes and open questions behind each entry.
// ---------------------------------------------------------------------------

export type HeroContent = {
  headline: string;
  ctaViewWork: { label: string; href: string };
  ctaDownloadCV: { label: string; href: string };
};
export const heroContent: HeroContent = {
  headline: "Full-stack engineer who ships AI-integrated products end to end — from a WhatsApp bot doing real-time fraud detection to platforms that clone Webflow/Framer sites into production React code.",
  ctaViewWork: { label: "View Work", href: "#work" },
  ctaDownloadCV: { label: "Download CV", href: "/Anesu_Ndoro_Resume.pdf" }
};

export type AboutContent = {
  eyebrow: string;
  heading: string;
  paragraph: string;
};
export const aboutContent: AboutContent = {
  eyebrow: "About",
  heading: "Shipping production platforms since 2019",
  paragraph: "Full-stack engineer with 6+ years shipping AI-integrated production platforms — LLM-powered backends, real-time fraud detection, and full-stack web products — across talent development, e-commerce, cybersecurity, and enterprise domains, as Software Developer and Technical Lead at Uncommon.org. Google Cloud Associate Cloud Engineer certified. BSc Honours Computer Science, NUST, Bulawayo (graduated June 2026). Cut a production system's cold-start latency 95% (~43s to under 2s) through backend architecture work. Currently also running regional operations for a 5,000+ learner program — leadership and delivery experience that carries over directly to senior/staff-level engineering work. Open to full-time and contract remote roles worldwide, flexible on overlap hours."
};

export const aboutParagraphs: string[] = [
  "Full-stack engineer with 6+ years shipping AI-integrated production platforms — LLM-powered backends, real-time fraud detection, and full-stack web products — across talent development, e-commerce, cybersecurity, and enterprise domains, as Software Developer and Technical Lead at Uncommon.org.",
  "Cut a production system's cold-start latency 95% (~43s to under 2s) through backend architecture work. Currently also running regional operations for a 5,000+ learner program — leadership and delivery experience that carries over directly to senior/staff-level engineering work.",
];

export type AboutFact = {
  label: string;
  value: string;
};
export const aboutFacts: AboutFact[] = [
  { label: "Role", value: "Software Developer & Technical Lead, Uncommon.org" },
  { label: "Cert", value: "Google Cloud Associate Cloud Engineer" },
  { label: "Education", value: "BSc Hons Computer Science, NUST — graduated June 2026" },
  { label: "Base", value: "Bulawayo, Zimbabwe — remote worldwide" },
  { label: "Status", value: "Open to full-time & contract, flexible on overlap hours" },
];

export const githubUrl = "https://github.com/Anesu1";

export type EngagementModel = {
  id: string;
  label: string;
  description: string;
  imgSrc: string;
};
export const engagementModels: EngagementModel[] = [
  { id: "full-time", label: "Full-time", description: "Open to senior full-time remote roles worldwide, flexible on overlap hours.", imgSrc: "/assets/cloned/svg/11844ed8695e.svg" },
  { id: "contract", label: "Contract", description: "Fixed-scope or ongoing contract work — the more realistic entry point for distributed hiring pipelines with country restrictions.", imgSrc: "/assets/cloned/svg/9b6d669e0fb8.svg" },
  { id: "async", label: "Async collaboration", description: "Comfortable owning a feature or platform end-to-end across time zones without real-time hand-holding.", imgSrc: "/assets/cloned/svg/486a0bb734c7.svg" }
];

export const strengths: FeaturesItem[] = [
  { imgSrc: "/assets/cloned/svg/6f4d400ed8e4.svg", title: "AI-integrated backends", description: "LLM API integration and prompt engineering built into production systems, not bolted on — real-time vision-model fraud detection, AI-generated quiz content." },
  { imgSrc: "/assets/cloned/svg/fe76a3fde704.svg", title: "Platform engineering", description: "Multi-service architecture — REST APIs, queued workers, ORMs, browser automation — orchestrated into one product, not single-feature scripts." },
  { imgSrc: "/assets/cloned/svg/d43ae6106b31.svg", title: "Production discipline", description: "Cold-start latency cut 95% through caching and connection pooling. Performance and reliability treated as a feature, not an afterthought." }
];

export type ProofMetric = {
  value: string;
  label: string;
  description: string;
};
export const proofMetrics: ProofMetric[] = [
  { value: "43s → <2s", label: "RAHA bot cold start", description: "95%+ latency cut via Convex serverless caching + pooled connections." },
  { value: "5 services", label: "One capture-to-code pipeline", description: "website-cloner (Ditto): compiler, REST API, worker, database, and storage orchestrated into a single platform." }
];

export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  tags: string[];
  problem: string;
  approach: string;
  stack: string[];
  number?: string;
  liveUrl?: string;
  imgSrc?: string;
};
export const caseStudies: CaseStudy[] = [
  {
    slug: "raha",
    title: "RAHA — WhatsApp Giveaway Bot",
    oneLiner: "A production WhatsApp chatbot with real-time AI fraud detection on submitted photos.",
    tags: ["AI", "CHATBOT", "BACKEND"],
    problem: "A consumer giveaway campaign needed a fully WhatsApp-native entry flow — data collection, product-code validation, photo submission — with real-time fraud screening and no multi-second cold-start lag breaking the chat experience.",
    approach: "Production WhatsApp chatbot built on Flask, using Meta's WhatsApp Cloud API for messaging and Convex as a serverless backend. Groq's Llama 4 Scout vision model does real-time fraud detection on submitted photos, flagging AI-generated or invalid images via prompt engineering. A web admin dashboard handles entry monitoring, bi-weekly winner draws, CSV export, and product-code management.",
    stack: ["Python", "Flask", "Convex", "Meta WhatsApp Cloud API", "Groq (Llama 4 Scout, vision)"],
    number: "Cold start cut from ~43s to under 2s (95%+ improvement) via Convex serverless caching + pooled connections."
    // liveUrl deliberately omitted: raha-chatbot.onrender.com currently returns
    // 503 "This service has been suspended." Re-add liveUrl once the Render
    // service is running again — a dead demo link is worse than no link.
  },
  {
    slug: "website-cloner",
    title: "Website Cloner (Ditto)",
    oneLiner: "A design-to-code platform that turns a live Webflow/Framer site into a deployable React/Next.js codebase.",
    tags: ["PLATFORM", "TYPESCRIPT", "TOOLING"],
    problem: "Turning a Webflow/Framer template into a real, production-ready codebase is normally a slow, manual designer-to-engineering handoff.",
    approach: "Full-stack platform (separate open-source frontend and backend) powered by Ditto's site-cloning engine: URL to headless browser capture to normalized render IR to deterministic inference to app generation. The frontend is a Next.js UI — submit a URL, pick output framework (Next.js or Vite React) and CSS approach, poll a job queue, download a ZIP. The backend is a proper multi-service platform: a Hono REST API, a queued worker for capture/generation jobs, Drizzle ORM over PostgreSQL, S3/R2-compatible artifact storage, Playwright driving the actual browser capture, a CLI unpacker, and a hosted API with an MCP server for programmatic access.",
    stack: ["TypeScript", "Next.js", "React/Vite", "Hono", "Drizzle ORM", "PostgreSQL", "Playwright", "Docker"],
    number: "5 decoupled services (compiler, API, worker, database, storage) orchestrated into one capture-to-code pipeline. This portfolio's own front-end shell was generated by this same tool.",
    liveUrl: "https://github.com/Anesu1/website-cloner"
  },
  {
    slug: "uncommon-global",
    title: "Uncommon Global",
    oneLiner: "A scroll-driven storytelling site with a hand-built AI image/video production pipeline.",
    tags: ["NEXT.JS", "AI PIPELINE", "PERFORMANCE"],
    problem: "Uncommon.org needed a visually ambitious, scroll-driven site for its global presence, with distinctive visual assets that wouldn't blow the load-time budget.",
    approach: "Scroll-driven storytelling site built in Next.js, paired with a hand-built AI image/video pipeline: identify the last frame, generate the first frame in Google Whisk, generate the transition video in Google Flow, extract frames via ezgif, compress to WebP for load performance.",
    stack: ["Next.js", "Google Whisk", "Google Flow", "ezgif", "WebP compression pipeline"],
    liveUrl: "https://uncommon-global.vercel.app"
  },
  {
    slug: "zimsec-vault",
    title: "zimsec-vault",
    oneLiner: "A reading-gated study tool built for a real user — a grade-7 student balancing screentime and schoolwork.",
    tags: ["NEXT.JS", "CONVEX", "AI QUIZ"],
    problem: "A real, personal problem — balancing screentime against required reading/study for a grade-7 student, without constant parental-enforcement friction.",
    approach: "A reading-time tracker with a quiz-gated unlock: a random 2-of-6 subjects quiz has to be passed before screentime unlocks. Built on Next.js and Convex, using the Groq SDK to generate quiz content per session rather than pulling from a static question bank — a second, independent proof point for AI-integrated product work.",
    stack: ["Next.js", "React", "Convex", "Groq SDK", "Framer Motion", "GSAP", "Tailwind CSS"],
    liveUrl: "https://zimsec-vault.vercel.app"
  }
];

export type OtherBuild = {
  title: string;
  description: string;
  liveUrl?: string;
};
export const otherBuilds: OtherBuild[] = [
  { title: "Scam Detection Web App", description: "Python-based URL analysis system detecting phishing domains, malicious redirects, and fake payment portals via cybersecurity heuristics and pattern matching.", liveUrl: "https://scam-detector-nu.vercel.app" },
  { title: "Apex Fuel (mobile)", description: "Mobile app built with Flutter — included as a range signal, not a deep case study." }
];

export type ClientProject = {
  name: string;
  description: string;
};
export const clientWork: ClientProject[] = [
  { name: "Studio5 Architects", description: "Modern architecture portfolio site: visual storytelling layouts, high-resolution galleries, structured project case studies." },
  { name: "Smile Dental Surgery", description: "Responsive clinic site with schema markup and Google Business Profile optimization for local patient acquisition." },
  { name: "Ouyaoenda", description: "End-to-end e-commerce storefront — catalog, cart, checkout — for a premium candle and home-fragrance brand." },
  { name: "Pacific Cigarette Company", description: "Corporate site redesign plus a backend QR-code promotional campaign system: unique code generation, validation, and reward-point tracking at scale." }
];

export type StackCategory = {
  category: string;
  items: string[];
};
export const stackCategories: StackCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
  { category: "Backend", items: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "Convex", "Flask"] },
  { category: "AI", items: ["Groq / LLM API Integration", "Prompt Engineering", "AI Fraud Detection Pipelines"] },
  { category: "Cloud/DevOps", items: ["Google Cloud Platform (Associate Cloud Engineer)", "Docker", "Vercel", "Render", "GitHub Actions"] }
];
