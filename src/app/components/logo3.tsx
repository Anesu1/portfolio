export type Logo3Data = Record<string, never>;
/** A logo. */
export default function Logo3({ d, cids }: { d: Logo3Data; cids: string[] }) {
  return (
    <img data-cid={cids[0]} className="w-6 h-6 block max-w-6 max-h-6 overflow-clip object-cover align-middle max-lg:w-5 max-lg:h-5 max-lg:max-w-5 max-lg:max-h-5" data-component="image" alt="Testimonial Star Icon" src="/assets/cloned/svg/07db669df0d9.svg" />
  );
}
