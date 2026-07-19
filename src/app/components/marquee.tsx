const ITEMS = [
  "AI-integrated backends",
  "Platform engineering",
  "Production discipline",
  "Real-time fraud detection",
  "Design-to-code pipelines",
  "Google Cloud certified",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 pl-8 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          {item}
          <span className="text-accent" aria-hidden="true">
            ✕
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-3.5">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
