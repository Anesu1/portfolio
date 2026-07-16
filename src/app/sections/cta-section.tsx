import { ctaSectionContent } from "../content";
import ContactForm from "../components/contact-form";
/** Cta section. */
export default function CtaSection({ content = ctaSectionContent } = {}) {
  return (
    <div className="block" data-cid="n1133" id="contact">
      <section className="border-t border-solid border-t-border border-b border-b-border block relative z-2" data-cid="n1134">
        <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n1135">
          <div className="border-r border-solid border-r-border border-l border-l-border block relative py-24.5 px-10 [background-size:100%_100%] [background-position:50%_0px] max-md:py-12.5 max-md:px-[0.9375rem] md:max-lg:py-20 md:max-lg:px-5" style={{ backgroundImage: "url(\"/assets/cloned/images/9c50466932b3.webp\")" }} data-cid="n1136">
            <div className="inline-flex mb-5 justify-start items-center gap-2.5 text-color-001 text-sm font-medium leading-[1.0625rem] tracking-[-0.28px]" data-cid="n1137">
              <div className="h-3 block min-w-3 rounded-[1px] bg-accent" data-cid="n1138" />
              <div className="block uppercase" data-cid="n1139">
                Contact
              </div>
            </div>
            <h2 className="block text-color-001 [font-family:'Bebas_Neue',_sans-serif] text-[7.5rem] leading-[6.3125rem] tracking-[-2.4px] uppercase max-md:text-[3.125rem] max-md:leading-12 max-md:tracking-[-1px] md:max-lg:text-[5rem] md:max-lg:leading-[4.1875rem] md:max-lg:tracking-[-1.6px]" data-cid="n1140" data-component="heading">
              {content.title}
            </h2>
            <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" data-cid="n1141" />
            <div className="w-3 h-3 border border-solid border-border block absolute -top-1.5 -right-1.5 z-9 min-w-3 rounded-[1px] bg-background" data-cid="n1142" />
            <div className="w-3 h-3 border border-solid border-border block absolute -bottom-1.5 -left-1.5 z-9 min-w-3 rounded-[1px] bg-background" data-cid="n1143" />
            <div className="w-3 h-3 border border-solid border-border block absolute -right-1.5 -bottom-1.5 z-9 min-w-3 rounded-[1px] bg-background" data-cid="n1144" />
          </div>
        </div>
      </section>
      <section className="block relative z-1" data-cid="n1145">
        <div className="block max-w-337.5 px-[0.9375rem] mx-auto before:content-['_'] before:table before:w-0 before:h-0 before:text-foreground before:text-base before:leading-6 before:tracking-[-0.32px] after:content-['_'] after:table after:w-0 after:h-0 after:text-foreground after:text-base after:leading-6 after:tracking-[-0.32px]" data-cid="n1146">
          <div className="border-r border-solid border-r-border border-l border-l-border block relative z-2 px-10 max-md:px-[0.9375rem] md:max-lg:px-5" data-cid="n1147">
            <div className="h-[26.1875rem] flex pt-11.5 justify-between items-stretch max-md:h-[31.4375rem] max-md:pt-7.5 max-md:flex-col max-md:items-start max-lg:gap-7.5 md:max-lg:h-119.5 md:max-lg:pt-10" data-cid="n1148">
              <div className="w-full h-[23.3125rem] flex max-w-84.5 pb-22.5 flex-col justify-end items-stretch max-md:h-18 max-md:max-w-105 max-md:pb-0 md:max-lg:h-109.5 md:max-lg:pb-20" data-cid="n1149">
                <p className="block italic" data-cid="n1150">
                  Open to full-time and contract remote roles — reach out and I'll get back to you.
                </p>
              </div>
              <div className="w-full flex max-w-195 flex-col justify-center items-stretch" data-cid="n1151">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
