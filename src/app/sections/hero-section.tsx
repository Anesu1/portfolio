import MediaLink, { type MediaLinkData } from "../components/media-link";
import ListRow, { type ListRowData } from "../components/list-row";
import { MediaLink_cids, ListRow_cids } from "../_cids";
import { MediaLink_styles, ListRow_styles } from "../_styles";
const MediaLink_data: MediaLinkData[] = [
    { ariacontrols: "w-tabs-0-data-w-pane-0", ariaselected: "true", href: "#w-tabs-0-data-w-pane-0", id: "w-tabs-0-data-w-tab-0", label: "(01)", label2: "Branding" },
    { ariacontrols: "w-tabs-0-data-w-pane-1", ariaselected: "false", href: "#w-tabs-0-data-w-pane-1", id: "w-tabs-0-data-w-tab-1", label: "(02)", label2: "UI/UX Design" },
    { ariacontrols: "w-tabs-0-data-w-pane-2", ariaselected: "false", href: "#w-tabs-0-data-w-pane-2", id: "w-tabs-0-data-w-tab-2", label: "(03)", label2: "Development" },
    { ariacontrols: "w-tabs-0-data-w-pane-3", ariaselected: "false", href: "#w-tabs-0-data-w-pane-3", id: "w-tabs-0-data-w-tab-3", label: "(04)", label2: "Marketing" }
];
const ListRow_data: ListRowData[] = [
    { text: "Websites" },
    { text: "Landing pages" },
    { text: "Custom solutions" },
    { text: "Web apps" }
];
/** Hero section — the page's lead block. */
export default function HeroSection({ mediaLinkData = MediaLink_data, listRowData = ListRow_data } = {}) {
  return (
    <section className="block relative z-1" data-cid="n282">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n283">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n284">
          <div className="block pt-10 pb-36.5 max-md:pb-15 md:max-lg:pb-25" data-cid="n285">
            <div className="block" data-cid="n286">
              <div className="flex relative justify-start items-start max-lg:flex-col before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px] grid-cols-1 lg:grid-cols-2" data-cid="n287">
                <div className="w-full flex relative max-w-96.5 flex-col gap-[2.8125rem] max-lg:grid max-lg:max-w-full max-md:gap-4 max-lg:[grid-auto-columns:1fr] max-lg:grid-cols-[repeat(auto-fit,_minmax(312px,_1fr))] max-md:grid-rows-4 md:max-lg:gap-7.5 md:max-lg:grid-rows-2" data-cid="n288" role="tablist">
                  {mediaLinkData.map((d, i) => <MediaLink key={i} d={d} cids={MediaLink_cids[i]} styles={MediaLink_styles[i]} />)}
                </div>
                <div className="h-[22.925rem] block relative max-w-[48.3125rem] ml-20 overflow-hidden max-md:h-[43.95rem] max-lg:max-w-full max-md:mt-7.5 max-lg:ml-0 md:max-lg:h-[22.3125rem] md:max-lg:mt-15 2xl:h-[26.8125rem]" data-cid="n317">
                  <div className="h-full block relative" data-cid="n318" aria-labelledby="w-tabs-0-data-w-tab-0" id="w-tabs-0-data-w-pane-0" role="tabpanel">
                    <div className="h-full flex py-7.5 pr-7.5 pl-10 rounded-2xl gap-7.5 bg-color-002 max-lg:py-5 max-md:px-4 max-md:rounded-[10px] max-md:flex-col max-lg:gap-[1.5625rem] md:max-lg:px-[1.5625rem] md:max-lg:rounded-[14px] grid-cols-1 md:grid-cols-2" data-cid="n319">
                      <div className="w-full h-[19.175rem] flex max-w-77.5 flex-col justify-between gap-10 max-md:h-[21.9875rem] max-md:max-w-full max-lg:gap-7.5 md:max-lg:h-[19.8125rem] 2xl:h-[23.0625rem]" data-cid="n320">
                        <div className="h-34 flex flex-col gap-5" data-cid="n321">
                          <div className="w-11 h-11 border border-solid border-border flex rounded-md justify-center items-center bg-color-002" data-cid="n322">
                            <img className="w-5 h-5 block max-w-5 max-h-full overflow-clip object-cover align-middle" data-cid="n323" data-component="image" alt="Service V1 Icon" src="/assets/cloned/svg/e8bc9fbc1be9.svg" />
                          </div>
                          <p className="block tracking-[-0.16px] max-md:max-w-110" data-cid="n324">
                            From front-end to back-end, we develop fast, secure, and scalable products that bring your ideas to life.
                          </p>
                        </div>
                        <ul className="grid pl-5 gap-y-4 [grid-auto-columns:1fr] text-color-001 text-sm leading-6 tracking-[-0.14px] [list-style-type:disc] list-outside grid-cols-[repeat(auto-fit,_minmax(132px,_1fr))] grid-rows-2 max-md:gap-y-3 max-md:grid-rows-4" data-cid="n325" role="list">
                          {listRowData.map((d, i) => <ListRow key={i} d={d} cids={ListRow_cids[i]} styles={ListRow_styles[i]} />)}
                        </ul>
                        <div className="flex justify-start items-center gap-2.5" data-cid="n334">
                          <img className="w-6 h-6 block max-w-6 max-h-full overflow-clip object-cover align-middle" data-cid="n335" data-component="image" alt="Service TIme Icon" src="/assets/cloned/svg/5c17c817a2e6.svg" />
                          <div className="block text-color-001 tracking-[-0.16px]" data-cid="n336">
                            3 - 5 week
                          </div>
                        </div>
                      </div>
                      <div className="w-full block relative max-w-91.5 rounded-2xl overflow-hidden max-md:max-w-full max-md:rounded-[10px] md:max-lg:rounded-[14px]" data-cid="n337">
                        <img className="w-full h-[19.1875rem] inline-block max-w-full max-h-full overflow-clip object-cover align-middle max-md:h-71.5 md:max-lg:h-[19.8125rem] 2xl:h-[23.0625rem]" data-cid="n338" data-component="image" alt="Service V1 Image" sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" src="/assets/cloned/images/6e2c32db548a.webp" srcSet="/assets/cloned/images/9f47e1bae3fc.webp 500w, /assets/cloned/images/927a3989d057.webp 800w, /assets/cloned/images/aea79a7179fa.webp 1080w, /assets/cloned/images/6e2c32db548a.webp 1098w" />
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
