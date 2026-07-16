import FeatureGridSection from "./sections/feature-grid-section";
import CtaSection from "./sections/cta-section";
import LogoCloudSection2 from "./sections/logo-cloud-section2";
import SelectedWorkSection from "./sections/selected-work-section";
import OtherBuildsSection from "./sections/other-builds-section";
import ProofMetricsSection from "./sections/proof-metrics-section";
import ClientWorkSection from "./sections/client-work-section";
import StackSection from "./sections/stack-section";
import Reveal from "./components/reveal";
import HeroScene from "./components/hero-scene-loader";
import MeshWarpText from "./components/mesh-warp-text";
import TypeWriter from "./components/typewriter";
import { heroContent, aboutContent, engagementModels, strengths } from "./content";

const engagementCards = engagementModels.map((m) => ({
  imgSrc: m.imgSrc,
  title: m.label,
  description: m.description,
}));

export default function Page() {
  return (
    <>
      <div className="block" data-cid="n1">
        <section className="block relative z-1 [background-size:100%_635px] [background-position:50%_140px] bg-no-repeat max-md:[background-position:50%_0px]" style={{ backgroundImage: "url(\"/assets/cloned/images/fa6a442d8613.webp\")" }} id="hero">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
              <div className="block relative pt-47 pb-26.5 max-md:pt-30 max-md:pb-12.5 md:max-lg:pt-40 md:max-lg:pb-20">
                <HeroScene />
                <Reveal>
                  <MeshWarpText />
                  <TypeWriter />
                  <div className="flex justify-start items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-4">
                    <a
                      className="h-27.5 border border-solid border-border inline-flex min-w-27.5 max-w-full rounded-[50%] justify-center items-center text-color-001 text-[1.25rem] tracking-[-0.4px] capitalize bg-color-002 cursor-pointer max-md:h-20 max-md:min-w-20 max-md:text-lg transition-colors duration-300 ease-out hover:bg-clr-7 hover:border-clr-8"
                      href={heroContent.ctaViewWork.href}
                    >
                      <div className="block">{heroContent.ctaViewWork.label}</div>
                    </a>
                    <a
                      className="h-12.5 flex relative z-1 max-w-full py-[0.8125rem] px-6 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium leading-[1.1875rem] uppercase bg-accent cursor-pointer transition-opacity duration-300 ease-out hover:opacity-90"
                      href={heroContent.ctaDownloadCV.href}
                      download
                    >
                      {heroContent.ctaDownloadCV.label}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-solid border-t-border block relative z-1" id="about">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5">
              <div className="block pt-26.5 pb-36.5 max-md:pt-12.5 max-md:pb-15 md:max-lg:pt-20 md:max-lg:pb-25">
                <Reveal>
                  <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                    <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                    <div className="block uppercase">{aboutContent.eyebrow}</div>
                  </div>
                  <h2 className="block max-w-224 text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-6xl leading-[3.125rem] tracking-[-1.2px] uppercase max-md:text-[1.75rem] max-md:leading-[1.5rem] max-md:tracking-[-0.64px] md:max-lg:text-[3.125rem] md:max-lg:leading-10.5 md:max-lg:tracking-[-1.08px]">
                    {aboutContent.heading}
                  </h2>
                  <p className="block max-w-160 mt-6 text-color-001">
                    {aboutContent.paragraph}
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n271" data-scene-stop="engagement">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Engagement</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                How I work with you
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <FeatureGridSection features={engagementCards} />
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n339" data-scene-stop="strengths">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="h-[1.05rem] inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Why choose me</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                What I bring
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <FeatureGridSection features={strengths} />
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n373">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Our Work</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                Selected Work
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <SelectedWorkSection />
        <OtherBuildsSection />
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n442" data-scene-stop="proof">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="h-[1.05rem] inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Proof</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                The numbers
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <ProofMetricsSection />
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n1029" data-scene-stop="stack">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Stack</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                Tools I reach for
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <StackSection />
        <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n1030b" data-scene-stop="client">
          <div className="block max-w-337.5 px-[0.9375rem] mx-auto">
            <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }}>
              <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                <div className="h-3 block min-w-3 rounded-[1px] bg-accent" />
                <div className="block uppercase">Client Work</div>
              </div>
              <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-component="heading">
                Freelance work
              </h2>
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
              <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
            </div>
          </div>
        </section>
        <ClientWorkSection />
        <CtaSection />
        <LogoCloudSection2 />
        <a className="flex fixed bottom-8 right-8 z-9999 max-w-full py-2.5 px-4 rounded-[20px] justify-center items-center gap-[0.3125rem] text-color-001 text-sm leading-[1.0625rem] tracking-[-0.14px] bg-accent cursor-pointer max-md:bottom-5 max-md:right-5" href="#hero">
          <div className="block shrink-0">Back To Top</div>
          <img className="w-[0.9375rem] h-[0.9375rem] block max-w-4.5 max-h-4.5 overflow-clip object-cover align-middle" data-component="image" alt="" src="/assets/cloned/svg/2bd3c85211e8.svg" />
        </a>
      </div>
    </>
  );
}
