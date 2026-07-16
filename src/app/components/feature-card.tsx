import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  imgSrc: string;
  description: string;
  title: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("h-99 border border-solid border-border flex p-7.5 rounded-[20px] flex-col gap-33.5 bg-background max-md:sticky max-md:top-35 max-md:py-5 max-md:px-4 max-md:rounded-[10px] md:max-lg:h-[19.2375rem] md:max-lg:p-5 md:max-lg:rounded-2xl md:max-lg:gap-20", styles.className)}>
      <div data-cid={cids[1]} className="w-17.5 h-17.5 flex rounded-xl justify-center items-center bg-color-005 max-md:w-12.5 max-md:h-12.5 max-md:rounded-[10px] md:max-lg:w-15 md:max-lg:h-15">
        <img data-cid={cids[2]} className="w-7 h-7 block max-w-7 max-h-7 overflow-clip object-cover align-middle max-md:h-6 max-md:max-h-6" data-component="image" alt="Choose Icon" src={d.imgSrc} />
      </div>
      <div data-cid={cids[3]} className="flex flex-col gap-4">
        <div data-cid={cids[4]} className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[2.5rem] leading-10.5 tracking-[-1.2px] max-md:text-[1.75rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.84px] md:max-lg:text-4xl md:max-lg:leading-[2.375rem] md:max-lg:tracking-[-1.08px]">
          {d.title}
        </div>
        <p data-cid={cids[5]} className="block max-w-92.5">
          {d.description}
        </p>
      </div>
    </div>
  );
}
