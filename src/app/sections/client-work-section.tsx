import { clientWork } from "../content";
import Reveal from "../components/reveal";

// TODO(assets): these render as text-only cards because no client
// screenshots exist yet. Swap in real thumbnails once available (and once
// NDA status is confirmed for Studio5/Smile Dental/Pacific Cigarette — see
// content-drafts/case-studies-and-copy.md).
export default function ClientWorkSection() {
  return (
    <section className="block relative z-1">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="grid gap-5 py-11.5 max-md:py-7.5 md:max-lg:py-10 grid-cols-1 md:grid-cols-2">
            {clientWork.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <div className="h-full border border-solid border-border flex p-7.5 rounded-[20px] flex-col gap-4 bg-background max-md:p-5 max-md:rounded-2xl">
                  <div className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[2.5rem] leading-10.5 tracking-[-1.2px] max-md:text-[1.75rem] max-md:leading-[1.8125rem]">
                    {c.name}
                  </div>
                  <p className="block max-w-92.5">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
