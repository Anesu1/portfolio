import MediaTile, { type MediaTileData } from "../components/media-tile";
import { MediaTile_cids } from "../_cids";
import { MediaTile_styles } from "../_styles";
const MediaTile_data: MediaTileData[] = [
    { href: "/team/lucas-mendoza", imgSrc: "/assets/cloned/images/febc69038723.webp", srcSet: "/assets/cloned/images/0f16d166978f.webp 500w, /assets/cloned/images/26f09d142d0b.webp 800w, /assets/cloned/images/febc69038723.webp 885w", href2: "/team/lucas-mendoza", label: "Lucas Mendoza", text: "CEO & FOUNDER" },
    { href: "/team/grace-royal", imgSrc: "/assets/cloned/images/8acc659290ac.webp", srcSet: "/assets/cloned/images/e2db7259c646.webp 500w, /assets/cloned/images/1ebb925025ba.webp 800w, /assets/cloned/images/8acc659290ac.webp 885w", href2: "/team/grace-royal", label: "Grace Royal", text: "Chief Operating Officer" },
    { href: "/team/marcus-dsilva", imgSrc: "/assets/cloned/images/f8d271b84e83.webp", srcSet: "/assets/cloned/images/603b277ca2d2.webp 500w, /assets/cloned/images/fb68d7d02936.webp 800w, /assets/cloned/images/f8d271b84e83.webp 885w", href2: "/team/marcus-dsilva", label: "Marcus D’Silva", text: "Lead Product Designer" },
    { href: "/team/evelyn-sato", imgSrc: "/assets/cloned/images/76785b6859da.webp", srcSet: "/assets/cloned/images/20a7aa55e004.webp 500w, /assets/cloned/images/235b1b96e99b.webp 800w, /assets/cloned/images/76785b6859da.webp 885w", href2: "/team/evelyn-sato", label: "Evelyn Sato", text: "Chief Design Officer" }
];
/** Gallery Showcase section. */
export default function GalleryShowcaseSection({ mediaTileData = MediaTile_data } = {}) {
  return (
    <section className="block relative z-1" data-cid="n713">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n714">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n715">
          <div className="block pt-11.5 pb-36.5 max-md:pt-7.5 max-md:pb-15 md:max-lg:pt-10 md:max-lg:pb-25" data-cid="n716">
            <div className="block" data-cid="n717">
              <div className="grid gap-y-7.5 gap-x-5 grid-rows-[387.6px] [grid-auto-columns:1fr] grid-cols-[repeat(auto-fit,_minmax(276px,_1fr))] max-lg:gap-y-6 max-lg:gap-x-4 max-md:grid-rows-[419.094px_419.094px_419.094px_419.094px] md:max-lg:grid-rows-[455.703px_455.703px] 2xl:grid-rows-[407.2px]" data-cid="n718" role="list">
                {mediaTileData.map((d, i) => <MediaTile key={i} d={d} cids={MediaTile_cids[i]} styles={MediaTile_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
