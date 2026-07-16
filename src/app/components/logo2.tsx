export type Logo2Data = {
  imgSrc: string;
  kind?: string;
};
/** A logo. */
export default function Logo2({ d, cids }: { d: Logo2Data; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="w-50 border border-solid border-border flex mr-5 rounded-[100px] justify-center items-center shrink-0 bg-background max-lg:mr-4">
      <img data-cid={cids[1]} className="w-[9.5625rem] h-6 block max-w-[9.5625rem] max-h-6 overflow-clip object-cover align-middle" alt="Choose Item Icon" src={d.imgSrc} data-component={d.kind} />
    </div>
  );
}
