import type { MediaTileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaTileData = {
  href: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  label: string;
  text: string;
};
/** A media tile. */
export default function MediaTile({ d, cids, styles }: { d: MediaTileData; cids: string[]; styles: MediaTileStyles }) {
  return (
    <div data-cid={cids[0]} className="block" role="listitem">
      <div data-cid={cids[1]} className="h-full block">
        <a data-cid={cids[2]} className="border border-solid border-border block relative max-w-full rounded-[10px] overflow-hidden text-primary bg-color-002 cursor-pointer" data-component="link" href={d.href}>
          <img data-cid={cids[3]} className="w-full h-77 inline-block max-w-full max-h-full overflow-clip object-cover align-middle [filter:grayscale(0)] max-md:h-87 md:max-lg:h-94.5 2xl:h-[20.4375rem]" data-component="image" alt="Team Image " sizes="100vw" src={d.imgSrc} srcSet={d.srcSet} />
          <div data-cid={cids[4]} className="w-[17.1875rem] h-0 block absolute left-0 z-9 bg-background max-md:w-[19.4375rem] md:max-lg:w-84.5" />
        </a>
        <div data-cid={cids[5]} className="h-14.5 flex mt-5 justify-between items-center gap-4 max-md:h-[3.325rem] max-md:mt-4 md:max-lg:h-[3.475rem]">
          <div data-cid={cids[6]} className="h-full flex flex-col justify-start items-start gap-2.5">
            <a data-cid={cids[7]} className={cn("block text-color-001 text-2xl font-medium leading-[1.8125rem] tracking-[-0.72px] cursor-pointer max-md:text-xl max-md:tracking-[-0.6px] max-md:leading-[inherit] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.66px]", styles.className)} data-component="link" href={d.href2}>
              {d.label}
            </a>
            <div data-cid={cids[8]} className={cn("block italic leading-[1.1875rem]", styles.className2)}>
              {d.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
