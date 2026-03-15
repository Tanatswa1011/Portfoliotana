type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent/70 dark:text-accent-light/80">
        {label}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}
