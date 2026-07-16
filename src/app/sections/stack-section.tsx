import { stackCategories } from "../content";
import Reveal from "../components/reveal";
import DirectionHover from "../components/direction-hover";

export default function StackSection() {
  return (
    <section className="block relative z-1">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
          <div className="grid gap-5 py-11.5 max-md:py-7.5 md:max-lg:py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {stackCategories.map((cat, i) => (
              <Reveal key={cat.category} delay={i * 0.08}>
                <div className="h-full border-t border-solid border-t-border flex pt-7.5 flex-col gap-6">
                  <div className="block text-color-001 text-sm font-medium uppercase tracking-[-0.28px]">{cat.category}</div>
                  <ul className="flex flex-col gap-3">
                    {cat.items.map((item) => (
                      <li key={item} className="flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]">
                        <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" alt="" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
                        <DirectionHover>{item}</DirectionHover>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
