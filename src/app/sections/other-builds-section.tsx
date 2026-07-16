import { otherBuilds } from "../content";
import Reveal from "../components/reveal";

export default function OtherBuildsSection() {
  return (
    <section className="block relative z-1">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 pb-15 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="block text-color-001 text-sm font-medium uppercase tracking-[-0.28px] mb-5">Other builds</div>
          <div className="flex flex-col gap-4 max-md:gap-3">
            {otherBuilds.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  {b.liveUrl ? (
                    <a href={b.liveUrl} target="_blank" rel="noreferrer" className="text-color-001 font-medium transition-colors duration-300 ease-out hover:text-accent">
                      {b.title}
                    </a>
                  ) : (
                    <div className="text-color-001 font-medium">{b.title}</div>
                  )}
                  <p className="text-sm">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
