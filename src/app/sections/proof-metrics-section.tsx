import { proofMetrics } from "../content";
import Reveal from "../components/reveal";

export default function ProofMetricsSection() {
  return (
    <section className="block relative z-1">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="grid gap-5 py-11.5 max-md:py-7.5 md:max-lg:py-10 grid-cols-1 md:grid-cols-2">
            {proofMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <div className="h-full border border-solid border-border flex p-7.5 rounded-[20px] flex-col gap-5 bg-color-002 max-md:p-5 max-md:rounded-2xl">
                  <div className="block text-accent [font-family:'Bebas_Neue',_sans-serif] text-[3.5rem] leading-[3.5rem] tracking-[-1.2px] max-md:text-[2.5rem] max-md:leading-[2.5rem]">
                    {m.value}
                  </div>
                  <div className="block text-color-001 font-medium uppercase tracking-[-0.28px]">{m.label}</div>
                  <p className="block">{m.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
