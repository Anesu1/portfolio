import type { MediaTile3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTile3Data = {
  text: string;
  href: string;
  label: string;
  href2: string;
  imgSrc: string;
  srcSet: string;
  description: string;
};
/** A media tile. */
export default function MediaTile3({ d, cids, styles }: { d: MediaTile3Data; cids: string[]; styles: MediaTile3Styles }) {
  return (
    <div data-cid={cids[0]} className="block" role="listitem">
      <div data-cid={cids[1]} className={cn("h-100.5 border border-solid border-border flex py-15 px-7.5 rounded-[10px] justify-between items-start gap-15 bg-background max-md:py-6 max-md:px-4 max-lg:flex-col max-md:gap-[1.5625rem] md:max-lg:py-10 md:max-lg:gap-10 grid-cols-1 lg:grid-cols-2", styles.className)}>
        <div data-cid={cids[2]} className="w-full flex max-w-83.5 flex-col justify-start items-start max-lg:max-w-full">
          <div data-cid={cids[3]} className="border border-solid border-border flex py-2.5 px-6 rounded-[100px] justify-center items-center bg-color-002">
            {d.text}
          </div>
          <a data-cid={cids[4]} className={cn("w-full max-w-105 block mt-5 mb-9.5 text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[2.5rem] leading-[2.375rem] tracking-[-0.8px] cursor-pointer max-md:mt-4 max-md:text-[1.75rem] max-md:leading-[1.6875rem] max-md:tracking-[-0.64px] max-lg:mb-0 md:max-lg:text-4xl md:max-lg:leading-[2.1875rem] md:max-lg:tracking-[-0.72px]", styles.className2)} data-component="link" href={d.href}>
            {d.label}
          </a>
          <div data-cid={cids[5]} className="block max-lg:hidden">
            <a data-cid={cids[6]} className={cn("h-11.5 border border-solid border-border inline-flex relative z-1 max-w-full py-2.5 pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium bg-color-002 cursor-pointer hover:border-clr-10", styles.className3)} data-component="link" href="/contact">
              <div data-cid={cids[7]} className="flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden">
                <img data-cid={cids[8]} className="w-full h-3.5 block relative z-1 max-w-full max-h-full overflow-clip object-cover align-middle" data-component="image" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                <img data-cid={cids[9]} className="w-full h-3.5 block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle transform-[matrix(1,0,0,1,-30,0)]" data-component="image" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
              </div>
              <div data-cid={cids[10]} className="flex relative z-2 justify-start items-center overflow-hidden">
                <div data-cid={cids[11]} className="basis-full shrink-0 block relative whitespace-nowrap">
                  Read More
                </div>
                <div data-cid={cids[12]} className="w-[73.1px] h-full block absolute top-0 min-w-0 overflow-hidden whitespace-nowrap text-nowrap">
                  Read More
                </div>
              </div>
              <div data-cid={cids[13]} className="w-[146.1px] h-full block absolute top-0 left-0 -z-1 min-w-0 bg-accent transform-[matrix(1,0,0,1,-160.72,0)]" />
            </a>
          </div>
        </div>
        <div data-cid={cids[14]} className="flex justify-start items-center gap-[5.8125rem] max-lg:max-w-full max-lg:flex-col max-lg:items-stretch max-md:gap-[1.5625rem] md:max-lg:gap-7.5">
          <a data-cid={cids[15]} className={cn("h-70 flex relative max-w-62.5 rounded-[10px] justify-center items-center overflow-hidden text-primary cursor-pointer max-lg:max-w-full max-md:max-h-full md:max-lg:h-105 md:max-lg:max-h-105", styles.className4)} data-component="link" href={d.href2}>
            <img data-cid={cids[16]} className={cn("w-auto h-70 block max-w-full max-h-full overflow-clip object-cover align-middle [filter:grayscale(1)] max-md:h-78", styles.className5)} data-component="image" alt="Blog V1 Image" sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
            <div data-cid={cids[17]} className="w-[15.4375rem] h-0 block absolute bottom-0 left-0 z-9 min-w-0 bg-background max-md:w-[17.4375rem] md:max-lg:w-158.5" />
          </a>
          <div data-cid={cids[18]} className="block max-w-93 max-lg:max-w-full">
            <p data-cid={cids[19]} className="block">
              {d.description}
            </p>
          </div>
          <div data-cid={cids[20]} className="hidden min-w-0 max-lg:block">
            <a data-cid={cids[21]} className="border border-solid border-border inline-flex relative z-1 max-w-full py-2.5 pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium bg-color-002 cursor-pointer max-lg:h-11.5" href="/contact">
              <div data-cid={cids[22]} className="flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden">
                <img data-cid={cids[23]} className="w-full h-full block relative z-1 min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle max-lg:h-3.5" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                <img data-cid={cids[24]} className="w-full h-full block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle transform-[none] max-lg:h-3.5 max-lg:transform-[matrix(1,0,0,1,-30,0)]" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
              </div>
              <div data-cid={cids[25]} className="flex relative z-2 min-w-0 justify-start items-center overflow-hidden">
                <div data-cid={cids[26]} className="basis-full shrink-0 block relative min-w-0 whitespace-nowrap">
                  Read More
                </div>
                <div data-cid={cids[27]} className="h-full block absolute min-w-0 overflow-hidden whitespace-nowrap text-nowrap max-lg:w-[73.1px] max-lg:top-0">
                  Read More
                </div>
              </div>
              <div data-cid={cids[28]} className="h-full block absolute top-0 inset-x-0 -z-1 min-w-0 bg-accent transform-[none] max-lg:w-[146.1px] max-lg:transform-[matrix(1,0,0,1,-160.72,0)] max-lg:right-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
