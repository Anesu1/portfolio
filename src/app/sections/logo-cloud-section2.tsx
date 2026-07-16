import TextLink, { type TextLinkData } from "../components/text-link";
import Logo4 from "../components/logo4";
import OpenToWorkBadge from "../components/open-to-work-badge";
import { TextLink_cids, Logo4_cids } from "../_cids";
import { TextLink_styles } from "../_styles";
import { logos4 as logosContent, footerNav } from "../content";
const TextLink_data: TextLinkData[] = footerNav.map((item, i) => ({
  ...item,
  ariacurrent: i === 0 ? "page" : undefined,
}));
/** Logo Cloud section. */
export default function LogoCloudSection2({ textLinkData = TextLink_data, logos = logosContent } = {}) {
  return (
    <section className="block relative z-1" data-cid="n1166">
      <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n1167">
        <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n1168">
          <div className="block max-w-[77.5625rem] pt-35 max-md:pt-15 md:max-lg:pt-25" data-cid="n1169">
            <div className="min-h-33 flex justify-between items-center max-md:min-h-[22.8rem] max-md:flex-col max-md:items-start max-md:gap-10 md:max-lg:min-h-39 md:max-lg:gap-7.5" data-cid="n1170">
              <div className="flex max-w-109.5 flex-col gap-10 max-md:max-w-full max-md:gap-7.5" data-cid="n1171">
                <p className="block text-color-001 text-[1.25rem] font-medium tracking-[-0.4px] max-md:max-w-105 max-md:text-lg max-md:leading-[1.375rem] max-md:tracking-[-0.36px]" data-cid="n1172">
                  Open to full-time and contract remote roles worldwide, flexible on overlap hours.
                </p>
                <OpenToWorkBadge />
              </div>
              <div className="flex flex-col gap-12.5 max-md:max-w-full max-md:gap-7.5 md:max-lg:gap-10" data-cid="n1177">
                <div className="flex justify-start items-center gap-10 max-md:flex-wrap max-md:gap-5 md:max-lg:gap-7.5" data-cid="n1178">
                  {textLinkData.map((d, i) => <TextLink key={i} d={d} cids={TextLink_cids[i]} styles={TextLink_styles[i]} />)}
                </div>
                <div className="flex gap-3.5" data-cid="n1184">
                  {logos.map((d, i) => <Logo4 key={i} d={d} cids={Logo4_cids[i]} />)}
                </div>
              </div>
            </div>
            <div className="border-t border-solid border-t-clr-6 flex my-12.5 py-7.5 justify-between items-center max-md:my-7.5 max-md:flex-wrap max-md:justify-center max-md:gap-[0.3125rem] md:max-lg:my-10" data-cid="n1195">
              <div className="block text-color-001 text-sm leading-5 tracking-[-0.14px]" data-cid="n1196">
                {"ndoroanesuk@gmail.com"}
              </div>
              <div className="h-5 block text-color-001 text-sm leading-5 tracking-[-0.14px]" data-cid="n1198">
                {"© Anesu Ndoro. All rights reserved."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
