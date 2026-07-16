import FeatureCard from "../components/feature-card";
import { FeatureCard_cids } from "../_cids";
import { FeatureCard_styles } from "../_styles";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <section className="block relative z-1" data-cid="n350">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n351">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n352">
          <div className="block pt-11.5 pb-36.5 max-md:pt-7.5 max-md:pb-15 md:max-lg:pt-10 md:max-lg:pb-25" data-cid="n353">
            <div className="w-full grid gap-5 grid-rows-[396px] [grid-auto-columns:1fr] max-md:grid-rows-[239.406px_249.406px_249.406px] md:max-lg:grid-rows-[307.797px_307.797px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3" data-cid="n354">
              {features.map((d, i) => <FeatureCard key={i} d={d} cids={FeatureCard_cids[i]} styles={FeatureCard_styles[i]} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
