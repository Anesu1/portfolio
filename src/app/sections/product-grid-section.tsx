import Tile, { type TileData } from "../components/tile";
import LogoCloudItem from "../components/logo-cloud-item";
import Logo, { type LogoData } from "../components/logo";
import Logo2, { type Logo2Data } from "../components/logo2";
import { Tile_cids, LogoCloudItem_cids, Logo_cids, Logo2_cids, LogoCloudItem_cids2 } from "../_cids";
import { Tile_styles, LogoCloudItem_styles, LogoCloudItem_styles2 } from "../_styles";
import { logos as logosContent, logos2 as logos2Content } from "../content";
const Tile_data: TileData[] = [
    { text: "0", text2: "1", text3: "2", text4: "3", text5: "4", text6: "5", text7: "6", text8: "7", text9: "8", text10: "4" },
    { text: "5", text2: "8", text3: "7", text4: "6", text5: "5", text6: "4", text7: "3", text8: "2", text9: "1", text10: "0" },
    { text: "0", text2: "1", text3: "2", text4: "3", text5: "4", text6: "5", text7: "6", text8: "7", text9: "8", text10: "2" }
];
const Logo_data: LogoData[] = [
    { kind: "image", imgSrc: "/assets/cloned/svg/a883afcd2ae0.svg" },
    { imgSrc: "/assets/cloned/svg/2b5adbea3bc1.svg" },
    { imgSrc: "/assets/cloned/svg/0d1add9a508a.svg" },
    { imgSrc: "/assets/cloned/svg/3bac764197de.svg" },
    { imgSrc: "/assets/cloned/svg/99ef039473d4.svg" }
];
const Logo2_data: Logo2Data[] = [
    { imgSrc: "/assets/cloned/svg/2b5adbea3bc1.svg" },
    { imgSrc: "/assets/cloned/svg/0d1add9a508a.svg" },
    { imgSrc: "/assets/cloned/svg/3bac764197de.svg" },
    { imgSrc: "/assets/cloned/svg/99ef039473d4.svg", kind: "image" },
    { imgSrc: "/assets/cloned/svg/d7aae746aee0.svg", kind: "image" }
];
/** Product Grid section. */
export default function ProductGridSection({ tileData = Tile_data, logos = logosContent, logoData = Logo_data, logo2Data = Logo2_data, logos2 = logos2Content } = {}) {
  return (
    <section className="block relative z-1" data-cid="n453">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n454">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n455">
          <div className="block pt-11.5 pb-36.5 max-md:pt-7.5 max-md:pb-15 md:max-lg:pt-10 md:max-lg:pb-25" data-cid="n456">
            <div className="w-full min-h-95 grid justify-between items-end gap-5 grid-rows-[380px] [grid-auto-columns:1fr] grid-cols-[repeat(auto-fit,_minmax(276px,_1fr))] max-md:grid-rows-[414.203px_384.891px_408.891px_400.891px] md:max-lg:grid-rows-[375px_375px]" data-cid="n457">
              <div className="h-[22.85rem] min-h-[19.8125rem] border-t-4 border-solid border-t-accent flex relative inset-0 pt-7.5 rounded-[10px] flex-col justify-between gap-[2.8125rem] overflow-hidden bg-color-002 max-md:h-[25.8875rem] max-md:border-t-clr-3 max-md:sticky max-md:top-35 max-md:pt-5 max-md:gap-5 max-md:min-h-0 max-md:bottom-auto max-md:inset-x-auto md:max-lg:h-[23.4375rem] md:max-lg:min-h-[23.4375rem] md:max-lg:pt-[1.5625rem] md:max-lg:gap-7.5 2xl:h-[377.5px]" data-cid="n458">
                <div className="flex px-5 flex-col gap-5 max-md:px-4 max-lg:gap-4" data-cid="n459">
                  <div className="block" data-cid="n460">
                    <div className="h-12.5 block overflow-hidden text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-6xl leading-[3.125rem] tracking-[-1.2px] uppercase max-md:h-6.5 max-md:text-[2rem] max-md:leading-[1.6875rem] max-md:tracking-[-0.84px] md:max-lg:h-10.5 md:max-lg:text-[3.125rem] md:max-lg:leading-10.5 md:max-lg:tracking-[-1.08px]" data-cid="n461">
                      <div className="flex" data-cid="n462">
                        <div className="block transform-[matrix(1,0,0,1,0,-453.656)] max-md:transform-[matrix(1,0,0,1,0,-241.875)] md:max-lg:transform-[matrix(1,0,0,1,0,-378)]" data-cid="n463">
                          <div className="block" data-cid="n464">
                            0
                          </div>
                          <div className="block" data-cid="n465">
                            1
                          </div>
                          <div className="block" data-cid="n466">
                            2
                          </div>
                          <div className="block" data-cid="n467">
                            3
                          </div>
                          <div className="block" data-cid="n468">
                            4
                          </div>
                          <div className="block" data-cid="n469">
                            5
                          </div>
                          <div className="block" data-cid="n470">
                            6
                          </div>
                          <div className="block" data-cid="n471">
                            7
                          </div>
                          <div className="block" data-cid="n472">
                            8
                          </div>
                          <div className="block" data-cid="n473">
                            9
                          </div>
                        </div>
                        <div className="block" data-cid="n474">
                          <div className="block" data-cid="n475">
                            5
                          </div>
                          <div className="block" data-cid="n476">
                            8
                          </div>
                          <div className="block" data-cid="n477">
                            7
                          </div>
                          <div className="block" data-cid="n478">
                            6
                          </div>
                          <div className="block" data-cid="n479">
                            5
                          </div>
                          <div className="block" data-cid="n480">
                            4
                          </div>
                          <div className="block" data-cid="n481">
                            3
                          </div>
                          <div className="block" data-cid="n482">
                            2
                          </div>
                          <div className="block" data-cid="n483">
                            1
                          </div>
                          <div className="block" data-cid="n484">
                            0
                          </div>
                        </div>
                        <div className="block" data-cid="n485">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-[1.8125rem] tracking-[normal] max-md:text-xl max-md:leading-[inherit] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]" data-cid="n486">
                    Success Through Our Clients
                  </div>
                </div>
                <div className="w-[17.3125rem] h-25.5 block absolute top-[16.225rem] left-0 opacity-0 min-w-0 max-md:w-[19.5625rem] max-md:h-18 max-md:bottom-0 max-md:inset-x-0 max-md:static max-md:top-auto max-md:opacity-[initial]" data-cid="n487">
                  <p className="block max-w-full pb-7.5 px-5 font-medium max-md:max-w-95 max-md:px-4 max-md:pb-0 md:max-lg:pb-[1.5625rem]" data-cid="n488">
                    Every success we celebrate begins with our clients. Together, we turn ideas into lasting results.
                  </p>
                </div>
                <div className="block relative max-w-full overflow-hidden" data-cid="n489">
                  <div className="block max-w-full rounded-[10px] overflow-hidden" data-cid="n490">
                    <img className="w-full h-47 inline-block max-w-full max-h-full overflow-clip object-cover align-middle max-md:h-53 md:max-lg:h-[14.3125rem] 2xl:h-50" data-cid="n491" data-component="image" alt="Process Image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.96875px, 885px" src="/assets/cloned/images/32cb77450e14.webp" srcSet="/assets/cloned/images/7e552e76411e.webp 500w, /assets/cloned/images/7e4a69793159.webp 800w, /assets/cloned/images/32cb77450e14.webp 885w" />
                  </div>
                </div>
              </div>
              <div className="h-[19.8125rem] min-h-[19.8125rem] border-t-4 border-solid border-t-border flex relative inset-0 pt-7.5 rounded-[10px] flex-col justify-between gap-[2.8125rem] overflow-hidden bg-color-002 max-md:h-[384.9px] max-md:border-t-clr-3 max-md:sticky max-md:top-35 max-md:pt-5 max-md:gap-5 max-md:min-h-0 max-md:bottom-auto max-md:inset-x-auto md:max-lg:h-[23.4375rem] md:max-lg:min-h-[23.4375rem] md:max-lg:pt-[1.5625rem] md:max-lg:gap-7.5" data-cid="n492">
                <div className="flex px-5 flex-col gap-5 max-md:px-4 max-lg:gap-4" data-cid="n493">
                  <div className="block" data-cid="n494">
                    <div className="h-12.5 block overflow-hidden text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-6xl leading-[3.125rem] tracking-[-1.2px] uppercase max-md:h-6.5 max-md:text-[2rem] max-md:leading-[1.6875rem] max-md:tracking-[-0.84px] md:max-lg:h-10.5 md:max-lg:text-[3.125rem] md:max-lg:leading-10.5 md:max-lg:tracking-[-1.08px]" data-cid="n495">
                      <div className="flex" data-cid="n496">
                        <div className="block transform-[matrix(1,0,0,1,0,-453.656)] max-md:transform-[matrix(1,0,0,1,0,-241.875)] md:max-lg:transform-[matrix(1,0,0,1,0,-378)]" data-cid="n497">
                          <div className="block" data-cid="n498">
                            0
                          </div>
                          <div className="block" data-cid="n499">
                            1
                          </div>
                          <div className="block" data-cid="n500">
                            2
                          </div>
                          <div className="block" data-cid="n501">
                            3
                          </div>
                          <div className="block" data-cid="n502">
                            4
                          </div>
                          <div className="block" data-cid="n503">
                            5
                          </div>
                          <div className="block" data-cid="n504">
                            6
                          </div>
                          <div className="block" data-cid="n505">
                            7
                          </div>
                          <div className="block" data-cid="n506">
                            8
                          </div>
                          <div className="block" data-cid="n507">
                            7
                          </div>
                        </div>
                        <div className="block" data-cid="n508">
                          <div className="block" data-cid="n509">
                            5
                          </div>
                          <div className="block" data-cid="n510">
                            8
                          </div>
                          <div className="block" data-cid="n511">
                            7
                          </div>
                          <div className="block" data-cid="n512">
                            6
                          </div>
                          <div className="block" data-cid="n513">
                            5
                          </div>
                          <div className="block" data-cid="n514">
                            4
                          </div>
                          <div className="block" data-cid="n515">
                            3
                          </div>
                          <div className="block" data-cid="n516">
                            2
                          </div>
                          <div className="block" data-cid="n517">
                            1
                          </div>
                          <div className="block" data-cid="n518">
                            0
                          </div>
                        </div>
                        <div className="block" data-cid="n519">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-[1.8125rem] tracking-[normal] max-md:text-xl max-md:leading-[inherit] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]" data-cid="n520">
                    Unmatched Success Record
                  </div>
                </div>
                <div className="w-[17.3125rem] h-25.5 block absolute top-[13.1875rem] left-0 min-w-0 max-md:w-[19.5625rem] max-md:h-12 max-md:bottom-0 max-md:inset-x-0 max-md:static max-md:top-auto md:max-lg:w-84.5 md:max-lg:h-[4.5625rem] md:max-lg:top-74.5 2xl:w-[294.5px]" data-cid="n521">
                  <p className="h-full block max-w-full pb-7.5 px-5 font-medium max-md:max-w-95 max-md:px-4 max-md:pb-0 md:max-lg:pb-[1.5625rem]" data-cid="n522">
                    Our clients' success fuels our passion, showcasing impactful results and growth.
                  </p>
                </div>
                <div className="h-0 block relative max-w-full overflow-hidden max-md:h-[206.9px]" data-cid="n523">
                  <div className="block max-w-full rounded-[10px] overflow-hidden" data-cid="n524">
                    <img className="w-full h-[11.4375rem] inline-block max-w-full max-h-full overflow-clip object-cover align-middle max-md:h-[12.9375rem] md:max-lg:h-[13.9375rem] 2xl:h-[12.1875rem]" data-cid="n525" data-component="image" alt="Process Image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 885px" src="/assets/cloned/images/49853498d0f9.webp" srcSet="/assets/cloned/images/76fdc880ccf3.webp 500w, /assets/cloned/images/22cebd49e0da.webp 800w, /assets/cloned/images/49853498d0f9.webp 885w" />
                  </div>
                </div>
              </div>
              <div className="h-[19.8125rem] min-h-[19.8125rem] border-t-4 border-solid border-t-border flex relative inset-0 pt-7.5 rounded-[10px] flex-col justify-between gap-[2.8125rem] overflow-hidden bg-color-002 max-md:h-[408.9px] max-md:border-t-clr-3 max-md:sticky max-md:top-35 max-md:pt-5 max-md:gap-5 max-md:min-h-0 max-md:bottom-auto max-md:inset-x-auto md:max-lg:h-[23.4375rem] md:max-lg:min-h-[23.4375rem] md:max-lg:pt-[1.5625rem] md:max-lg:gap-7.5" data-cid="n526">
                <div className="flex px-5 flex-col gap-5 max-md:px-4 max-lg:gap-4" data-cid="n527">
                  <div className="block" data-cid="n528">
                    <div className="h-12.5 block overflow-hidden text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-6xl leading-[3.125rem] tracking-[-1.2px] uppercase max-md:h-6.5 max-md:text-[2rem] max-md:leading-[1.6875rem] max-md:tracking-[-0.84px] md:max-lg:h-10.5 md:max-lg:text-[3.125rem] md:max-lg:leading-10.5 md:max-lg:tracking-[-1.08px]" data-cid="n529">
                      <div className="flex" data-cid="n530">
                        <div className="block" data-cid="n531">
                          $
                        </div>
                        {tileData.map((d, i) => <Tile key={i} d={d} cids={Tile_cids[i]} styles={Tile_styles[i]} />)}
                        <div className="block" data-cid="n565">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-[1.8125rem] tracking-[normal] max-md:text-xl max-md:leading-[inherit] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]" data-cid="n566">
                    {"High-Value Projects Delivered "}
                  </div>
                </div>
                <div className="w-[17.3125rem] h-25.5 block absolute top-[13.1875rem] left-0 min-w-0 max-md:w-[19.5625rem] max-md:h-18 max-md:bottom-0 max-md:inset-x-0 max-md:static max-md:top-auto md:max-lg:w-84.5 md:max-lg:h-[6.0625rem] md:max-lg:top-68.5 2xl:w-[294.5px]" data-cid="n567">
                  <p className="h-full block max-w-full pb-7.5 px-5 font-medium max-md:max-w-95 max-md:px-4 max-md:pb-0 md:max-lg:pb-[1.5625rem]" data-cid="n568">
                    Delivering impactful projects with excellence, driving measurable results consistently.
                  </p>
                </div>
                <div className="h-0 block relative max-w-full overflow-hidden max-md:h-[206.9px]" data-cid="n569">
                  <div className="block max-w-full rounded-[10px] overflow-hidden" data-cid="n570">
                    <img className="w-full h-[11.4375rem] inline-block max-w-full max-h-full overflow-clip object-cover align-middle max-md:h-[12.9375rem] md:max-lg:h-[13.9375rem] 2xl:h-[12.1875rem]" data-cid="n571" data-component="image" alt="Process Image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 885px" src="/assets/cloned/images/1966f84a97ed.webp" srcSet="/assets/cloned/images/3544625d0aa1.webp 500w, /assets/cloned/images/1966f84a97ed.webp 885w" />
                  </div>
                </div>
              </div>
              <div className="h-[19.8125rem] min-h-[19.8125rem] border-t-4 border-solid border-t-border flex relative inset-0 pt-7.5 rounded-[10px] flex-col justify-between gap-[2.8125rem] overflow-hidden bg-color-002 max-md:h-[400.9px] max-md:border-t-clr-3 max-md:sticky max-md:top-35 max-md:pt-5 max-md:gap-4 max-md:min-h-0 max-md:bottom-auto max-md:inset-x-auto md:max-lg:h-[23.4375rem] md:max-lg:min-h-[23.4375rem] md:max-lg:pt-[1.5625rem] md:max-lg:gap-7.5" data-cid="n572">
                <div className="flex px-5 flex-col gap-5 max-md:px-4 max-lg:gap-4" data-cid="n573">
                  <div className="block" data-cid="n574">
                    <div className="h-12.5 block overflow-hidden text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-6xl leading-[3.125rem] tracking-[-1.2px] uppercase max-md:h-6.5 max-md:text-[2rem] max-md:leading-[1.6875rem] max-md:tracking-[-0.84px] md:max-lg:h-10.5 md:max-lg:text-[3.125rem] md:max-lg:leading-10.5 md:max-lg:tracking-[-1.08px]" data-cid="n575">
                      <div className="flex" data-cid="n576">
                        <div className="block transform-[matrix(1,0,0,1,0,-453.656)] max-md:transform-[matrix(1,0,0,1,0,-241.875)] md:max-lg:transform-[matrix(1,0,0,1,0,-378)]" data-cid="n577">
                          <div className="block" data-cid="n578">
                            0
                          </div>
                          <div className="block" data-cid="n579">
                            1
                          </div>
                          <div className="block" data-cid="n580">
                            2
                          </div>
                          <div className="block" data-cid="n581">
                            3
                          </div>
                          <div className="block" data-cid="n582">
                            4
                          </div>
                          <div className="block" data-cid="n583">
                            5
                          </div>
                          <div className="block" data-cid="n584">
                            6
                          </div>
                          <div className="block" data-cid="n585">
                            7
                          </div>
                          <div className="block" data-cid="n586">
                            8
                          </div>
                          <div className="block" data-cid="n587">
                            8
                          </div>
                        </div>
                        <div className="block" data-cid="n588">
                          <div className="block" data-cid="n589">
                            5
                          </div>
                          <div className="block" data-cid="n590">
                            8
                          </div>
                          <div className="block" data-cid="n591">
                            7
                          </div>
                          <div className="block" data-cid="n592">
                            6
                          </div>
                          <div className="block" data-cid="n593">
                            5
                          </div>
                          <div className="block" data-cid="n594">
                            4
                          </div>
                          <div className="block" data-cid="n595">
                            3
                          </div>
                          <div className="block" data-cid="n596">
                            2
                          </div>
                          <div className="block" data-cid="n597">
                            1
                          </div>
                          <div className="block" data-cid="n598">
                            0
                          </div>
                        </div>
                        <div className="block" data-cid="n599">
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-2xl leading-[1.8125rem] tracking-[normal] max-md:text-xl max-md:leading-[inherit] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.625rem]" data-cid="n600">
                    our expert members
                  </div>
                </div>
                <div className="w-[17.3125rem] h-25.5 block absolute top-[13.1875rem] left-0 min-w-0 max-md:w-[19.5625rem] max-md:h-18 max-md:bottom-0 max-md:inset-x-0 max-md:static max-md:top-auto md:max-lg:w-84.5 md:max-lg:h-[4.5625rem] md:max-lg:top-74.5 2xl:w-[294.5px]" data-cid="n601">
                  <p className="h-full block max-w-full pb-7.5 px-5 font-medium max-md:max-w-95 max-md:px-4 max-md:pb-0 md:max-lg:pb-[1.5625rem]" data-cid="n602">
                    Skilled professionals dedicated to delivering excellence and creative solutions.
                  </p>
                </div>
                <div className="h-0 block relative max-w-full overflow-hidden max-md:h-[206.9px]" data-cid="n603">
                  <div className="block max-w-full rounded-[10px] overflow-hidden" data-cid="n604">
                    <img className="w-full h-[11.4375rem] inline-block max-w-full max-h-full overflow-clip object-cover align-middle max-md:h-[12.9375rem] md:max-lg:h-[13.9375rem] 2xl:h-[12.1875rem]" data-cid="n605" data-component="image" alt="Process Image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 885px" src="/assets/cloned/images/bbdf20710b5b.webp" srcSet="/assets/cloned/images/67fc69443d33.webp 500w, /assets/cloned/images/e4bee786a977.webp 800w, /assets/cloned/images/bbdf20710b5b.webp 885w" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-60 block mt-35 overflow-hidden max-md:h-61 max-md:mt-15 md:max-lg:h-57.5 md:max-lg:mt-25" data-cid="n606">
              <div className="block mb-12.5 text-color-001 text-xl font-medium leading-7.5 tracking-[-0.4px] text-center max-md:mb-7.5 max-md:text-lg max-md:leading-[1.6875rem] max-md:tracking-[-0.36px] md:max-lg:mb-10" data-cid="n607">
                {"Trusted by 10,000+ founders & business owners. "}
              </div>
              <div className="flex relative flex-col gap-5" data-cid="n608">
                <div className="flex" data-cid="n609">
                  <div className="flex shrink-0 transform-[matrix(1,0,0,1,-84.31,0)] max-md:transform-[matrix(1,0,0,1,-87.11,0)] md:max-lg:transform-[matrix(1,0,0,1,-68.38,0)] 2xl:transform-[matrix(1,0,0,1,-425.31,0)] hover:transform-[matrix(1,0,0,1,-867.504,0)] focus:transform-[matrix(1,0,0,1,-875.569,0)]" data-cid="n610">
                    {logos.map((d, i) => <LogoCloudItem key={i} d={d} cids={LogoCloudItem_cids[i]} styles={LogoCloudItem_styles[i]} />)}
                  </div>
                  <div className="flex shrink-0 transform-[matrix(1,0,0,1,-304.313,0)] max-md:transform-[matrix(1,0,0,1,-303.108,0)] md:max-lg:transform-[matrix(1,0,0,1,-284.381,0)] 2xl:transform-[matrix(1,0,0,1,-645.308,0)] hover:transform-[matrix(1,0,0,1,-884.374,0)] focus:transform-[matrix(1,0,0,1,-893.165,0)]" data-cid="n621">
                    {logoData.map((d, i) => <Logo key={i} d={d} cids={Logo_cids[i]} />)}
                  </div>
                </div>
                <div className="flex" data-cid="n632">
                  <div className="flex shrink-0 transform-[matrix(1,0,0,1,-795.69,0)] max-md:transform-[matrix(1,0,0,1,-776.89,0)] md:max-lg:transform-[matrix(1,0,0,1,-795.62,0)] 2xl:transform-[matrix(1,0,0,1,-454.69,0)] hover:transform-[matrix(1,0,0,1,-314.635,0)] focus:transform-[matrix(1,0,0,1,-306.57,0)]" data-cid="n633">
                    {logo2Data.map((d, i) => <Logo2 key={i} d={d} cids={Logo2_cids[i]} />)}
                  </div>
                  <div className="flex shrink-0 transform-[matrix(1,0,0,1,-1015.69,0)] max-md:transform-[matrix(1,0,0,1,-992.891,0)] md:max-lg:transform-[matrix(1,0,0,1,-1011.62,0)] 2xl:transform-[matrix(1,0,0,1,-674.692,0)] hover:transform-[matrix(1,0,0,1,-297.04,0)] focus:transform-[matrix(1,0,0,1,-288.974,0)]" data-cid="n644">
                    {logos2.map((d, i) => <LogoCloudItem key={i} d={d} cids={LogoCloudItem_cids2[i]} styles={LogoCloudItem_styles2[i]} />)}
                  </div>
                </div>
                <div className="h-full block absolute top-0 right-216 -left-10 min-w-0 max-w-86 max-md:right-[15.8125rem] max-md:max-w-25 md:max-lg:right-129 md:max-lg:max-w-55 2xl:right-233.5" style={{ backgroundImage: "linear-gradient(90deg, var(--background) 30%, var(--clr-2))" }} data-cid="n655" />
                <div className="h-full block absolute top-0 -right-10 left-216 min-w-0 max-w-86 max-md:left-[15.8125rem] max-md:max-w-25 md:max-lg:left-129 md:max-lg:max-w-55 2xl:left-233.5" style={{ backgroundImage: "linear-gradient(90deg, var(--clr-2), var(--background) 70%)" }} data-cid="n656" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
