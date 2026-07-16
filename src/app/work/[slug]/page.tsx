import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "../../content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Anesu Ndoro`,
    description: study.oneLiner,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <main className="block relative z-1">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="block pt-[8.3125rem] pb-10 max-md:pt-[6.4375rem] md:max-lg:pt-[7.6875rem]">
            <Link href="/#work" className="inline-flex items-center gap-2 text-color-001 text-sm uppercase tracking-[-0.28px] transition-colors duration-300 ease-out hover:text-accent">
              ← Back to work
            </Link>
          </div>

          <div className="block relative py-16 max-md:py-10 [background-size:100%_100%] [background-position:50%_0px]" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
            <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
              <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
              <div className="block uppercase">{study.tags.join(" · ")}</div>
            </div>
            <h1 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[5rem] leading-[4.5rem] tracking-[-1.6px] uppercase max-md:text-[2.5rem] max-md:leading-10">
              {study.title}
            </h1>
            <p className="block max-w-160 mt-5 text-color-001 text-lg leading-[1.6875rem] tracking-[-0.36px]">
              {study.oneLiner}
            </p>
            <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
          </div>

          <div className="grid gap-10 pt-16 pb-24 grid-cols-1 lg:grid-cols-[1fr_18.75rem] max-md:pt-10 max-md:pb-15">
            <div className="flex flex-col gap-12">
              <section>
                <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-3xl leading-9 tracking-[-0.6px] uppercase mb-4">Problem</h2>
                <p className="block text-color-001 tracking-[-0.16px]">{study.problem}</p>
              </section>
              <section>
                <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-3xl leading-9 tracking-[-0.6px] uppercase mb-4">Approach</h2>
                <p className="block text-color-001 tracking-[-0.16px]">{study.approach}</p>
              </section>
              {study.number && (
                <section>
                  <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-3xl leading-9 tracking-[-0.6px] uppercase mb-4">The number</h2>
                  <p className="block text-color-001 tracking-[-0.16px]">{study.number}</p>
                </section>
              )}
            </div>

            <aside className="flex flex-col gap-8">
              <div className="border border-solid border-border rounded-2xl p-6 bg-color-002">
                <div className="text-color-001 text-sm font-medium uppercase tracking-[-0.28px] mb-4">Stack</div>
                <ul className="flex flex-col gap-2">
                  {study.stack.map((s) => (
                    <li key={s} className="text-color-001 text-sm tracking-[-0.14px]">{s}</li>
                  ))}
                </ul>
              </div>
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="h-12.5 flex max-w-full py-[0.8125rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 text-color-001 font-medium leading-[1.1875rem] uppercase bg-accent cursor-pointer"
                >
                  View live
                </a>
              )}
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
