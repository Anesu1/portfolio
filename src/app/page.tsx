import HeroScene from "./components/hero-scene-loader";
import Reveal from "./components/reveal";
import Marquee from "./components/marquee";
import SectionHeading from "./components/section-heading";
import WorkIndex from "./components/work-index";
import ContactForm from "./components/contact-form";
import {
  heroContent,
  aboutContent,
  aboutParagraphs,
  aboutFacts,
  engagementModels,
  strengths,
  proofMetrics,
  otherBuilds,
  clientWork,
  stackCategories,
  githubUrl,
} from "./content";

// Section anchors (#hero, #about, #work, #contact) and data-scene-stop
// attributes are the particle scene's storyboard markers — HeroScene measures
// their document positions to know which shape to morph into. Keep them, and
// keep them in this order.
export default function Page() {
  return (
    <main>
      {/* ------------------------------------------------ 00 · HERO */}
      <section id="hero" className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-24">
        <div className="absolute inset-0 md:static md:order-2">
          <HeroScene />
        </div>
        <div className="relative z-10 md:order-1">
        <div className="container-x w-full">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="stamp">Portfolio — 2026</span>
              <span className="stamp hidden sm:inline">Bulawayo, Zimbabwe</span>
              <span className="stamp inline-flex items-center gap-3 text-bone">
                <span className="pulse-dot" aria-hidden="true" />
                Open to remote work
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-10 max-w-[68rem] font-display text-[clamp(2.875rem,8vw,7.25rem)] leading-[0.92] tracking-[-0.02em]">
              Full-stack engineer who ships{" "}
              <em className="text-accent">AI-integrated products</em> end to end.
            </h1>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted">
              From a WhatsApp bot doing real-time fraud detection to platforms that clone
              Webflow and Framer sites into production React code.
            </p>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href={heroContent.ctaViewWork.href}
                className="inline-flex h-12 items-center gap-3 bg-accent px-8 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-bone active:scale-95"
              >
                {heroContent.ctaViewWork.label}
                <span aria-hidden="true">↓</span>
              </a>
              <a
                href={heroContent.ctaDownloadCV.href}
                download
                className="inline-flex h-12 items-center gap-3 border border-line-strong px-8 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent active:scale-95"
              >
                {heroContent.ctaDownloadCV.label}
              </a>
            </div>
          </Reveal>
        </div>
        </div>

        <div className="absolute inset-x-0 bottom-6">
          <div className="container-x flex items-center justify-between">
            <span className="stamp" aria-hidden="true">
              Scroll ↓
            </span>
            <span className="stamp hidden md:inline">20.15°S · 28.58°E · GMT+2</span>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ------------------------------------------------ 01 · ABOUT */}
      <section id="about" className="py-24 md:py-36">
        <div className="container-x grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <Reveal>
            <SectionHeading index="01" label="About" title={aboutContent.heading} />
          </Reveal>
          <Reveal delay={0.15} className="lg:pt-12">
            <div className="flex flex-col gap-6">
              {aboutParagraphs.map((p) => (
                <p key={p.slice(0, 24)} className="leading-relaxed text-bone/85">
                  {p}
                </p>
              ))}
            </div>
            <dl className="mt-12 border-t border-line">
              {aboutFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-6 border-b border-line py-4 sm:grid-cols-[8rem_1fr]"
                >
                  <dt className="stamp pt-1">{fact.label}</dt>
                  <dd className="text-sm leading-relaxed text-bone/90">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------ 02 · ENGAGEMENT */}
      <section data-scene-stop="engagement" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="02" label="Engagement" title="How I work with you" />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {engagementModels.map((model, i) => (
              <Reveal key={model.id} delay={i * 0.1}>
                <div className="border-t border-line pt-7">
                  <span className="font-mono text-sm text-accent">/{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-display text-3xl tracking-tight">{model.label}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{model.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 03 · CAPABILITIES */}
      <section data-scene-stop="strengths" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="03" label="Why choose me" title="What I bring" />
          </Reveal>
          <div className="mt-16 border-b border-line">
            {strengths.map((strength, i) => (
              <Reveal key={strength.title}>
                <div className="grid gap-3 border-t border-line py-10 md:grid-cols-[4.5rem_22rem_1fr] md:gap-8 md:py-12">
                  <span className="font-mono text-sm text-muted">/{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-[1.75rem] leading-tight tracking-tight">{strength.title}</h3>
                  <p className="max-w-xl leading-relaxed text-muted">{strength.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 04 · SELECTED WORK */}
      <section id="work" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="04" label="Selected work" title="Case studies" />
          </Reveal>
          <div className="mt-16">
            <WorkIndex />
          </div>

          <div className="mt-24">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="stamp text-accent">[04.1]</span>
                <span className="stamp">Other builds</span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
              </div>
            </Reveal>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {otherBuilds.map((build, i) => (
                <Reveal key={build.title} delay={i * 0.1}>
                  <div className="border-t border-line pt-6">
                    <h3 className="font-display text-2xl tracking-tight">
                      {build.liveUrl ? (
                        <a
                          href={build.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="link-sweep transition-colors hover:text-accent"
                        >
                          {build.title} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        build.title
                      )}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{build.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 05 · PROOF */}
      <section data-scene-stop="proof" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="05" label="Proof" title="The numbers" />
          </Reveal>
          <div className="mt-16 grid gap-14 md:grid-cols-2 md:gap-10">
            {proofMetrics.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 0.12}>
                <div className="border-t border-line pt-8">
                  <p className="font-display text-[clamp(3.25rem,6.5vw,6rem)] leading-none tracking-tight text-accent">
                    {metric.value}
                  </p>
                  <p className="stamp mt-6 text-bone">{metric.label}</p>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{metric.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 06 · STACK */}
      <section data-scene-stop="stack" id="stack" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="06" label="Stack" title="Tools I reach for" />
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {stackCategories.map((category, i) => (
              <Reveal key={category.category} delay={i * 0.08}>
                <div className="border-t border-line pt-6">
                  <p className="stamp text-accent">{category.category}</p>
                  <ul className="mt-5 flex flex-col">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line py-2.5 text-sm text-bone/85 transition-colors hover:text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 07 · CLIENT WORK */}
      <section data-scene-stop="client" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="07" label="Client work" title="Freelance engagements" />
          </Reveal>
          <div className="mt-16 border-b border-line">
            {clientWork.map((client) => (
              <Reveal key={client.name}>
                <div className="group grid gap-2 border-t border-line py-8 md:grid-cols-[18rem_1fr] md:gap-10">
                  <h3 className="font-display text-2xl tracking-tight transition-colors group-hover:text-accent">
                    {client.name}
                  </h3>
                  <p className="max-w-2xl leading-relaxed text-muted">{client.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ 08 · CONTACT */}
      <section id="contact" className="border-t border-line py-24 md:py-36">
        <div className="container-x">
          <Reveal>
            <SectionHeading index="08" label="Contact" title="Let's build something real." />
          </Reveal>
          <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
            <Reveal delay={0.1}>
              <p className="max-w-sm font-display text-2xl leading-snug text-bone/90">
                Open to full-time and contract remote roles —{" "}
                <em className="text-accent">reach out and I'll get back to you.</em>
              </p>
              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="link-sweep w-fit font-mono text-sm text-bone/85 transition-colors hover:text-bone focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                >
                  github.com/Anesu1 ↗
                </a>
                <a
                  href={heroContent.ctaDownloadCV.href}
                  download
                  className="link-sweep w-fit font-mono text-sm text-bone/85 transition-colors hover:text-bone focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                >
                  Download CV (PDF) ↓
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
