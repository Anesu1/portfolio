import NavMenu from "./nav-menu";

// Shared across every route via layout.tsx — case-study pages need the same
// nav (and a way back to Contact) as the homepage, not just a "back" link.
// Internal anchors are homepage-relative ("/#work") rather than bare hashes
// ("#work") so they still resolve correctly from a page like /work/raha.
export default function SiteHeader() {
  return (
    <div className="h-[6.3125rem] border-b border-solid border-b-border block fixed inset-x-0 z-99999 max-w-full bg-background max-md:h-[4.4375rem] md:max-lg:h-[5.6875rem]" role="banner">
      <div className="h-full block max-w-337.5 px-[0.9375rem] mx-auto">
        <div className="h-full border-r border-solid border-r-border border-l border-l-border flex relative py-[1.5625rem] px-10 justify-between items-center max-md:hidden md:max-lg:py-5 md:max-lg:px-[0.9375rem]">
          <NavMenu variant="desktop" />
          <a className="h-[35.7px] block relative float-left max-w-[7.9375rem] ml-17.5 text-clr-1 cursor-pointer md:max-lg:ml-[4.0625rem]" aria-label="Home" href="/">
            <span className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-9 tracking-[-0.4px] uppercase whitespace-nowrap">Anesu Ndoro</span>
          </a>
          <div className="flex justify-start items-center gap-6">
            <a className="group h-12.5 flex relative z-1 max-w-full py-[0.8125rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium leading-[1.1875rem] uppercase bg-accent cursor-pointer max-md:hidden" href="/#contact">
              <div className="flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden">
                <img className="w-full h-3.5 block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle -translate-x-7.5 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" alt="" src="/assets/cloned/svg/d1a1b4f8b175.svg" />
                <img className="w-full h-3.5 block relative z-1 max-w-full max-h-full overflow-clip object-cover align-middle transition-opacity duration-300 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" alt="" src="/assets/cloned/svg/162604d23bf1.svg" />
              </div>
              <div className="flex relative z-2 justify-start items-center overflow-hidden">
                <div className="basis-full shrink-0 block relative leading-6 whitespace-nowrap">Contact Us</div>
                <div className="w-0 h-[1.2rem] block absolute min-w-0 shrink-0 overflow-hidden text-color-004 whitespace-nowrap text-nowrap transition-[width] duration-300 ease-out group-hover:w-full group-focus-visible:w-full" aria-hidden="true">Contact Us</div>
              </div>
              <div className="w-[167.3px] h-full block absolute top-0 left-0 -z-1 min-w-0 bg-color-001 translate-x-[-183.975px] transition-transform duration-300 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0" />
            </a>
          </div>
          <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
          <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
        </div>
        <div className="border-r border-solid border-r-border border-l border-l-border hidden relative py-[1.5625rem] px-10 justify-between items-center max-md:flex max-md:p-[0.9375rem]">
          <a className="block relative float-left max-w-[7.9375rem] ml-17.5 text-clr-1 cursor-pointer max-md:max-w-25 max-md:ml-0" aria-label="Home" href="/">
            <span className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-xl leading-7 tracking-[-0.4px] uppercase whitespace-nowrap">Anesu Ndoro</span>
          </a>
          <div className="flex justify-start items-center gap-6 max-md:gap-5">
            <NavMenu variant="mobile" />
          </div>
          <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
          <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" />
        </div>
      </div>
    </div>
  );
}
