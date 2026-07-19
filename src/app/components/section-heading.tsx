type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ index, label, title, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <span className="stamp text-accent">[{index}]</span>
        <span className="stamp">{label}</span>
        <span className="h-px flex-1 bg-line" aria-hidden="true" />
      </div>
      <h2 className="mt-7 max-w-4xl font-display text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95] tracking-[-0.015em]">
        {title}
      </h2>
    </div>
  );
}
