import ProductCard from "../components/product-card";
import MediaTile2, { type MediaTile2Data } from "../components/media-tile2";
import { ProductCard_cids, MediaTile2_cids, MediaTile2_cids2, MediaTile2_cids3 } from "../_cids";
import { ProductCard_styles } from "../_styles";
import { products as productsContent } from "../content";
const MediaTile2_data: MediaTile2Data[] = [
    { text: "All Templates Unlocked" },
    { text: "3 Times Revisions" },
    { text: "Requests One Time" },
    { text: "All Projects Unlocked" }
];
const MediaTile2_data2: MediaTile2Data[] = [
    { text: "All Templates Unlocked" },
    { text: "Unlimited Revisions" },
    { text: "Unlimited Requests" },
    { text: "All Projects Unlocked" },
    { text: "Project Management" },
    { text: "Invoice, Tax & Document Included " }
];
const MediaTile2_data3: MediaTile2Data[] = [
    { text: "All Templates Unlocked" },
    { text: "Unlimited Revisions" },
    { text: "Unlimited Requests" },
    { text: "All Projects Unlocked" },
    { text: "Project Management" },
    { text: "Access To All Services" },
    { text: "Invoice, Tax & Document Included" },
    { text: "Priority Support" },
    { text: "Pause or Cancel Anytime" }
];
/** Product Grid section. */
export default function ProductGridSection2({ products = productsContent, mediaTile2Data = MediaTile2_data, mediaTile2Data2 = MediaTile2_data2, mediaTile2Data3 = MediaTile2_data3 } = {}) {
  return (
    <section className="block relative z-1" data-cid="n766">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n767">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n768">
          <div className="block pb-36.5 max-md:pb-15 md:max-lg:pb-25" data-cid="n769">
            <div className="block max-md:pt-7.5 md:max-lg:pt-10" data-cid="n770">
              <div className="flex relative flex-col justify-start items-start before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n771">
                <div className="w-[266.5px] h-[3.65rem] border border-solid border-border flex absolute -top-[10.9375rem] left-[901.5px] z-9 min-w-0 p-1 rounded-[10px] justify-start items-stretch gap-2.5 bg-color-002 max-md:w-[10.9625rem] max-md:h-[6.9rem] max-lg:right-0 max-md:mx-auto max-md:flex-col max-lg:static max-lg:left-auto 2xl:left-[971.5px]" data-cid="n772" role="tablist">
                  <a className="border border-solid border-border flex relative max-w-full py-2.5 px-4 rounded-[10px] justify-center items-center gap-[0.8125rem] align-top text-color-001 text-sm leading-5 tracking-[-0.28px] text-left bg-accent shadow-[var(--clr-4)_0px_2px_5px_0px,var(--clr-5)_0px_9px_9px_0px] cursor-pointer" data-cid="n773" data-component="link" aria-controls="w-tabs-1-data-w-pane-0" aria-selected="true" href="#w-tabs-1-data-w-pane-0" id="w-tabs-1-data-w-tab-0" role="tab">
                    <div className="block" data-cid="n774">
                      Monthly
                    </div>
                  </a>
                  <a className="h-[3.025rem] border border-solid border-border flex relative max-w-full py-2.5 px-4 rounded-[10px] justify-center items-center gap-[0.8125rem] align-top text-color-001 text-sm leading-5 tracking-[-0.28px] text-left bg-color-002 cursor-pointer" data-cid="n775" data-component="link" aria-controls="w-tabs-1-data-w-pane-1" aria-selected="false" href="#w-tabs-1-data-w-pane-1" id="w-tabs-1-data-w-tab-1" role="tab">
                    <div className="block" data-cid="n776">
                      Annually
                    </div>
                    <div className="block py-1.5 px-3 rounded-[10px] text-xs leading-[0.875rem] tracking-[-0.24px] bg-accent" data-cid="n777">
                      20% OFF
                    </div>
                  </a>
                </div>
                <div className="w-full h-[37.1875rem] block relative max-w-full mt-11.5 overflow-hidden max-md:h-[93.2875rem] max-md:mt-7.5 md:max-lg:h-[1110.9px] md:max-lg:mt-10" data-cid="n778">
                  <div className="h-full block relative" data-cid="n779" aria-labelledby="w-tabs-1-data-w-tab-0" id="w-tabs-1-data-w-pane-0" role="tabpanel">
                    <div className="w-full h-full grid gap-12.5 grid-rows-[595px] [grid-auto-columns:1fr] grid-cols-[repeat(auto-fit,_minmax(312px,_1fr))] max-md:gap-7.5 max-md:grid-rows-[405.406px_465.812px_561.422px] md:max-lg:gap-x-7.5 md:max-lg:grid-rows-[482.625px_578.234px]" data-cid="n780">
                      {products.map((d, i) => <ProductCard key={d.variant} d={d} cids={ProductCard_cids[i]} styles={ProductCard_styles[i]} />)}
                    </div>
                  </div>
                  <div className="hidden relative" data-cid="n904" aria-labelledby="w-tabs-1-data-w-tab-1" id="w-tabs-1-data-w-pane-1" role="tabpanel">
                    <div className="grid gap-12.5 grid-cols-[1fr_1fr_1fr] grid-rows-[auto] [grid-auto-columns:1fr]" data-cid="n905">
                      <div className="block min-w-0" data-cid="n906">
                        <div className="w-full block max-w-full" data-cid="n907">
                          <div className="block" data-cid="n908" role="list">
                            <div className="block" data-cid="n909" role="listitem">
                              <div className="h-full border-t border-solid border-t-border flex pt-7.5 flex-col justify-between gap-10" data-cid="n910">
                                <div className="block min-w-0" data-cid="n911">
                                  <div className="block" data-cid="n912">
                                    <div className="block text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]" data-cid="n913">
                                      STARTER PLAN
                                    </div>
                                    <div className="block mt-2.5 mb-4 text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[5rem] leading-[4.1875rem] tracking-[-1.6px] uppercase" data-cid="n914">
                                      $319
                                    </div>
                                    <div className="block text-color-001 font-medium leading-[1.1875rem] uppercase" data-cid="n915">
                                      PER MONTH
                                    </div>
                                    <p className="block mt-3.5 mb-10" data-cid="n916">
                                      Essential plan. Exceptional value.
                                    </p>
                                  </div>
                                  <div className="block" data-cid="n917">
                                    <ul className="flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n918" role="list">
                                      {mediaTile2Data.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids[i]} />)}
                                    </ul>
                                  </div>
                                </div>
                                <div className="block min-w-0" data-cid="n931">
                                  <a className="border border-solid border-border inline-flex relative z-1 max-w-full py-[0.6875rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium bg-color-004 cursor-pointer" data-cid="n932" href="/product/starter-plan">
                                    <div className="w-3.5 h-3.5 flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden" data-cid="n933">
                                      <img className="w-full h-full block relative z-1 min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n934" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                                      <img className="w-full h-full block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n935" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                                    </div>
                                    <div className="flex relative z-2 min-w-0 justify-start items-center overflow-hidden" data-cid="n936">
                                      <div className="block relative min-w-0 shrink-0" data-cid="n937">
                                        Get started
                                      </div>
                                      <div className="block absolute min-w-0 shrink-0" data-cid="n938">
                                        Get started
                                      </div>
                                    </div>
                                    <div className="block absolute inset-0 -z-1 min-w-0 bg-accent" data-cid="n939" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block min-w-0" data-cid="n940">
                        <div className="w-full block max-w-full" data-cid="n941">
                          <div className="block" data-cid="n942" role="list">
                            <div className="block" data-cid="n943" role="listitem">
                              <div className="h-full border-t border-solid border-t-accent flex pt-7.5 flex-col justify-between gap-10" data-cid="n944">
                                <div className="block min-w-0" data-cid="n945">
                                  <div className="block" data-cid="n946">
                                    <div className="block text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]" data-cid="n947">
                                      GROWTH PLAN
                                    </div>
                                    <div className="block mt-2.5 mb-4 text-accent [font-family:'Bebas_Neue',_sans-serif] text-[5rem] leading-[4.1875rem] tracking-[-1.6px] uppercase" data-cid="n948">
                                      $799
                                    </div>
                                    <div className="block text-color-001 font-medium leading-[1.1875rem] uppercase" data-cid="n949">
                                      PER MONTH
                                    </div>
                                    <p className="block mt-3.5 mb-10" data-cid="n950">
                                      Powerful features for modern businesses.
                                    </p>
                                  </div>
                                  <div className="block" data-cid="n951">
                                    <ul className="flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n952" role="list">
                                      {mediaTile2Data2.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids2[i]} />)}
                                    </ul>
                                  </div>
                                </div>
                                <div className="block min-w-0" data-cid="n971">
                                  <a className="inline-flex relative z-1 max-w-full py-[0.6875rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium leading-[1.1875rem] uppercase bg-accent cursor-pointer" data-cid="n972" href="/product/growth-plan">
                                    <div className="w-3.5 h-3.5 flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden" data-cid="n973">
                                      <img className="w-full h-full block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n974" alt="Button Icon" src="/assets/cloned/svg/d1a1b4f8b175.svg" />
                                      <img className="w-full h-full block relative z-1 min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n975" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                                    </div>
                                    <div className="flex relative z-2 min-w-0 justify-start items-center overflow-hidden" data-cid="n976">
                                      <div className="block relative min-w-0 shrink-0 leading-6" data-cid="n977">
                                        Get started
                                      </div>
                                      <div className="w-0 block absolute min-w-0 shrink-0 overflow-hidden text-color-004 whitespace-nowrap text-nowrap" data-cid="n978">
                                        Get started
                                      </div>
                                    </div>
                                    <div className="block absolute inset-0 -z-1 min-w-0 bg-color-001" data-cid="n979" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block min-w-0" data-cid="n980" id="w-node-_408e5f94-27a3-f757-c47b-076e4faba5ad-4ece55e2">
                        <div className="w-full block max-w-full" data-cid="n981">
                          <div className="block" data-cid="n982" role="list">
                            <div className="block" data-cid="n983" role="listitem">
                              <div className="h-full border-t border-solid border-t-border flex pt-7.5 flex-col justify-between gap-10" data-cid="n984">
                                <div className="block min-w-0" data-cid="n985">
                                  <div className="block" data-cid="n986">
                                    <div className="block text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]" data-cid="n987">
                                      ULTIMATE PLAN
                                    </div>
                                    <div className="block mt-2.5 mb-4 text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[5rem] leading-[4.1875rem] tracking-[-1.6px] uppercase" data-cid="n988">
                                      $1,000
                                    </div>
                                    <div className="block text-color-001 font-medium leading-[1.1875rem] uppercase" data-cid="n989">
                                      PER MONTH
                                    </div>
                                    <p className="block mt-3.5 mb-10" data-cid="n990">
                                      Built for businesses that demand more.
                                    </p>
                                  </div>
                                  <div className="block" data-cid="n991">
                                    <ul className="flex flex-col gap-3 [list-style-type:none] list-outside" data-cid="n992" role="list">
                                      {mediaTile2Data3.map((d, i) => <MediaTile2 key={i} d={d} cids={MediaTile2_cids3[i]} />)}
                                    </ul>
                                  </div>
                                </div>
                                <div className="block min-w-0" data-cid="n1020">
                                  <a className="border border-solid border-border inline-flex relative z-1 max-w-full py-[0.6875rem] pr-[1.9375rem] pl-5 rounded-lg justify-center items-center gap-2 overflow-hidden text-color-001 font-medium bg-color-004 cursor-pointer" data-cid="n1021" href="/product/ultimate-plan">
                                    <div className="w-3.5 h-3.5 flex relative z-1 min-w-3.5 justify-center items-center overflow-hidden" data-cid="n1022">
                                      <img className="w-full h-full block relative z-1 min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n1023" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                                      <img className="w-full h-full block absolute min-w-0 max-w-full max-h-full overflow-clip object-cover align-middle" data-cid="n1024" alt="Button Icon" src="/assets/cloned/svg/162604d23bf1.svg" />
                                    </div>
                                    <div className="flex relative z-2 min-w-0 justify-start items-center overflow-hidden" data-cid="n1025">
                                      <div className="block relative min-w-0 shrink-0" data-cid="n1026">
                                        Get started
                                      </div>
                                      <div className="block absolute min-w-0 shrink-0" data-cid="n1027">
                                        Get started
                                      </div>
                                    </div>
                                    <div className="block absolute inset-0 -z-1 min-w-0 bg-accent" data-cid="n1028" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
