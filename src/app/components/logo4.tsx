export type Logo4Data = {
  href: string;
  imgSrc: string;
  alt: string;
};
/** A social/profile link icon. Fixed square size regardless of the source
 * icon's native aspect ratio — the old per-index sizing in _styles.ts was
 * baked in for 5 differently-shaped platform icons and no longer applies
 * now that this only ever renders one real icon. */
export default function Logo4({ d, cids }: { d: Logo4Data; cids: string[] }) {
  return (
    <a data-cid={cids[0]} className="w-10 h-10 border border-solid border-border flex max-w-full rounded-lg justify-center items-center text-primary bg-color-002 cursor-pointer" data-component="link" href={d.href} target="_blank">
      <img data-cid={cids[1]} className="w-5 h-5 max-w-5 max-h-5 block opacity-60 overflow-clip object-contain align-middle" data-component="image" alt={d.alt} src={d.imgSrc} />
    </a>
  );
}
