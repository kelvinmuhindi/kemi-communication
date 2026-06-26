import { type ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost" | "dark" | "outline-light";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-deep hover:-translate-y-px hover:shadow-lg hover:shadow-brand-orange/30",
  ghost:
    "border-[1.5px] border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white",
  dark: "bg-brand-ink text-white hover:bg-brand-orange-deep",
  "outline-light": "border-[1.5px] border-white text-white hover:bg-white/10",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-bold tracking-wide transition-all duration-150 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
