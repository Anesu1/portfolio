export type MediaTile2Data = {
  text: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids }: { d: MediaTile2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="flex min-w-0 justify-start items-center gap-2.5 text-color-001 font-medium leading-[1.1875rem]">
      <img data-cid={cids[1]} className="w-full h-4 block min-w-4 max-w-4 max-h-full overflow-clip object-cover align-middle" alt="Pricing List Icon" src="/assets/cloned/svg/e5924d7fe1ed.svg" />
      <div data-cid={cids[2]} className="block min-w-0">
        {d.text}
      </div>
    </li>
  );
}
