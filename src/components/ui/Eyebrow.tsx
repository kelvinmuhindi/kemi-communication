export function Eyebrow({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div
      className={`mb-4 inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[2px] ${
        light ? "text-brand-orange" : "text-brand-orange-deep"
      }`}
    >
      <span className="h-0.5 w-6 bg-brand-orange" />
      {children}
    </div>
  );
}
