import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  ariacurrent?: string;
  href: string;
  label: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("block leading-5 tracking-[-0.16px] uppercase cursor-pointer transition-colors duration-300 ease-out", styles.className)} data-component="link" aria-current={d.ariacurrent} href={d.href}>
      {d.label}
    </a>
  );
}
