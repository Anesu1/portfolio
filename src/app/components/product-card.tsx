import type { ProductCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ProductCardData = {
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
/** A product card. */
export default function ProductCard({ d, cids, styles }: { d: ProductCardData; cids: string[]; styles: ProductCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("block", styles.className)} id={d.id}>
      <div data-cid={cids[1]} className="h-full block max-w-full">
        <div data-cid={cids[2]} className="h-full block" role="list">
          <div data-cid={cids[3]} className="h-full block" role="listitem">
            <div data-cid={cids[4]} className={cn("h-full border-t border-solid flex pt-7.5 flex-col justify-between gap-10", styles.className2)}>
              <div data-cid={cids[5]} className="block">
                <div data-cid={cids[6]} className="block">
                  <div data-cid={cids[7]} className="block text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]">
                    {d.text}
                  </div>
                  <div data-cid={cids[8]} className={cn("block mt-2.5 mb-4 [font-family:'Bebas_Neue',_sans-serif] text-[5rem] leading-[4.1875rem] tracking-[-1.6px] uppercase max-md:text-[2.5rem] max-md:leading-[2.125rem] max-md:tracking-[-0.8px] md:max-lg:text-6xl md:max-lg:leading-[3.125rem] md:max-lg:tracking-[-1.2px]", styles.className3)}>
                    {d.price}
                  </div>
                  <div data-cid={cids[9]} className="block text-color-001 font-medium leading-[1.1875rem] uppercase">
                    PER MONTH
                  </div>
                  <p data-cid={cids[10]} className="block mt-3.5 mb-10">
                    {d.title}
                  </p>
                </div>
                <div data-cid={cids[11]} className="block">
                  <ProductCardSlot1 d={d} />
                </div>
              </div>
              <div data-cid={cids[12]} className="block">
                <a data-cid={cids[13]} className={cn("inline-flex relative z-1 max-w-full py-[0.6875rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium cursor-pointer", styles.className4)} data-component="link" href={d.href}>
                  <div data-cid={cids[14]} className="flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden">
                    <img data-cid={cids[15]} className={cn("w-full h-3.5 block max-w-full max-h-full overflow-clip object-cover align-middle", styles.className5)} data-component="image" alt="Button Icon" src={d.imgSrc} />
                    <img data-cid={cids[16]} className={cn("w-full h-3.5 block max-w-full max-h-full overflow-clip object-cover align-middle", styles.className6)} data-component="image" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                  </div>
                  <div data-cid={cids[17]} className="flex relative z-2 justify-start items-center overflow-hidden">
                    <div data-cid={cids[18]} className={cn("basis-full shrink-0 block relative whitespace-nowrap", styles.className7)}>
                      Get started
                    </div>
                    <div data-cid={cids[19]} className={cn("block absolute min-w-0 shrink-0", styles.className8)}>
                      Get started
                    </div>
                  </div>
                  <div data-cid={cids[20]} className={cn("h-full block absolute top-0 left-0 -z-1 min-w-0", styles.className9)} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCardSlot1({ d }: { d: ProductCardData }) {
  switch (d.variant) {
    case "essential-plan-exceptional-value":
      return (
        <ul className="h-[7.05rem] flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n793" role="list">
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n794">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n795" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n796">
              {d.description}
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n797">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n798" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n799">
              3 Times Revisions
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n800">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n801" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n802">
              Requests One Time
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n803">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n804" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n805">
              All Projects Unlocked
            </div>
          </li>
        </ul>
      );
    case "powerful-features-for-modern-businesses":
      return (
        <ul className="h-[10.95rem] flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n827" role="list">
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n828">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n829" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n830">
              All Templates Unlocked
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n831">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n832" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n833">
              Unlimited Revisions
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n834">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n835" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n836">
              Unlimited Requests
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n837">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n838" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n839">
              All Projects Unlocked
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n840">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n841" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n842">
              Project Management
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n843">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n844" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n845">
              {"Invoice, Tax & Document Included "}
            </div>
          </li>
        </ul>
      );
    case "built-for-businesses-that-demand-more":
      return (
        <ul className="h-[16.8rem] flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n867" role="list">
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n868">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n869" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n870">
              All Templates Unlocked
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n871">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n872" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n873">
              Unlimited Revisions
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n874">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n875" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n876">
              Unlimited Requests
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n877">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n878" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n879">
              All Projects Unlocked
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n880">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n881" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n882">
              Project Management
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n883">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n884" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n885">
              Access To All Services
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n886">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n887" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n888">
              {d.description}
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n889">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n890" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n891">
              Priority Support
            </div>
          </li>
          <li className="h-[1.2rem] flex justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]" data-cid="n892">
            <img className="w-4 h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" data-cid="n893" data-component="image" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
            <div className="block" data-cid="n894">
              Pause or Cancel Anytime
            </div>
          </li>
        </ul>
      );
    default:
      return null;
  }
}
