import MediaTile3, { type MediaTile3Data } from "../components/media-tile3";
import { MediaTile3_cids } from "../_cids";
import { MediaTile3_styles } from "../_styles";
const MediaTile3_data: MediaTile3Data[] = [
    { text: "Design", href: "/blog/why-seo-remains-king-and-how-we-help-you-dominate-the-search-game", label: "Why SEO Remains King And How We Help You Dominate the Search Game", href2: "/blog/why-seo-remains-king-and-how-we-help-you-dominate-the-search-game", imgSrc: "/assets/cloned/images/e2e51c1ed957.webp", srcSet: "/assets/cloned/images/24b5e21643ad.webp 500w, /assets/cloned/images/cf943c12092c.webp 800w, /assets/cloned/images/e2e51c1ed957.webp 1002w", description: "SEO continues to be the backbone of online growth. Our data-driven strategies help your brand rise above competitors, attract quality traffic, and convert visitors into loyal customers. " },
    { text: "Branding", href: "/blog/defining-a-great-brand-identity-insights-from-our-creative-team", label: "Defining a Great Brand Identity  Insights from Our Creative Team", href2: "/blog/defining-a-great-brand-identity-insights-from-our-creative-team", imgSrc: "/assets/cloned/images/228166e0351f.webp", srcSet: "/assets/cloned/images/c53266cfbbcf.webp 500w, /assets/cloned/images/228166e0351f.webp 752w", description: "A great brand identity goes beyond logos and colors — it’s the story, emotion, and strategy that connect you with your audience. Our creative team shares how thoughtful design and consistency can turn a brand into an experience." },
    { text: " Creativity", href: "/blog/where-ai-meets-imagination-transforming-the-way-we-create", label: "Where AI Meets Imagination Transforming the Way We Create", href2: "/blog/where-ai-meets-imagination-transforming-the-way-we-create", imgSrc: "/assets/cloned/images/afb4d3d9ec4f.webp", srcSet: "/assets/cloned/images/b25ef9e3e075.webp 500w, /assets/cloned/images/afb4d3d9ec4f.webp 752w", description: "AI is reshaping the creative process — helping us work smarter, faster, and with greater precision. By combining technology with human imagination, we craft ideas that connect, inspire, and perform." }
];
/** Card Grid section. */
export default function CardGridSection({ mediaTile3Data = MediaTile3_data } = {}) {
  return (
    <section className="block relative z-1" data-cid="n1040">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n1041">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n1042">
          <div className="block pt-11.5 pb-36.5 max-md:pb-15 md:max-lg:pb-25" data-cid="n1043">
            <div className="block" data-cid="n1044">
              <div className="flex flex-col gap-7.5" data-cid="n1045" role="list">
                {mediaTile3Data.map((d, i) => <MediaTile3 key={i} d={d} cids={MediaTile3_cids[i]} styles={MediaTile3_styles[i]} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
