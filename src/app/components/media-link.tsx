import type { MediaLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaLinkData = {
  ariacontrols: string;
  ariaselected: string;
  href: string;
  id: string;
  label: string;
  label2: string;
};
/** A linked media tile. */
export default function MediaLink({ d, cids, styles }: { d: MediaLinkData; cids: string[]; styles: MediaLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("border-b border-solid flex relative max-w-full pb-6 justify-between items-start gap-2.5 align-top [font-family:'Bebas_Neue',_sans-serif] text-[2.5rem] leading-10 tracking-[-1.2px] text-left cursor-pointer max-md:pb-4 max-md:text-[1.75rem] max-md:leading-7 max-md:tracking-[-0.84px] md:max-lg:pb-5 md:max-lg:text-4xl md:max-lg:leading-9 md:max-lg:tracking-[-1.08px]", styles.className)} data-component="link" aria-controls={d.ariacontrols} aria-selected={d.ariaselected} href={d.href} id={d.id} role="tab">
      <div data-cid={cids[1]} className="flex justify-start items-center gap-2.5">
        <div data-cid={cids[2]} className="block">
          {d.label}
        </div>
        <div data-cid={cids[3]} className="block">
          {d.label2}
        </div>
      </div>
      <div data-cid={cids[4]} className="block">
        <div data-cid={cids[5]} className={cn("w-10 h-10 inline-flex opacity-0 rounded-[50%] justify-center items-center bg-accent", styles.className2)}>
          <img data-cid={cids[6]} className="w-5.5 h-5.5 block max-w-5.5 max-h-full overflow-clip object-cover align-middle" data-component="image" alt="Service Tab Link Icon" src="/assets/cloned/svg/1bda69ada302.svg" />
        </div>
      </div>
    </a>
  );
}
