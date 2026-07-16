import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
  text10: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("block", styles.className)}>
      <div data-cid={cids[1]} className="block">
        {d.text}
      </div>
      <div data-cid={cids[2]} className="block">
        {d.text2}
      </div>
      <div data-cid={cids[3]} className="block">
        {d.text3}
      </div>
      <div data-cid={cids[4]} className="block">
        {d.text4}
      </div>
      <div data-cid={cids[5]} className="block">
        {d.text5}
      </div>
      <div data-cid={cids[6]} className="block">
        {d.text6}
      </div>
      <div data-cid={cids[7]} className="block">
        {d.text7}
      </div>
      <div data-cid={cids[8]} className="block">
        {d.text8}
      </div>
      <div data-cid={cids[9]} className="block">
        {d.text9}
      </div>
      <div data-cid={cids[10]} className="block">
        {d.text10}
      </div>
    </div>
  );
}
