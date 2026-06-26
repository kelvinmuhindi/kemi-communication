import Link from "next/link";
import { Truck, PackageSearch, Map, Star, Mail, type LucideIcon } from "lucide-react";
import { sneakPeekItems } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  truck: Truck,
  "truck-loading": PackageSearch,
  map: Map,
  star: Star,
  mail: Mail,
};

export function SneakPeek() {
  return (
    <section className="border-y border-brand-line bg-brand-paper-warm px-6 py-14">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-2.5">
          <h2 className="font-display text-2xl text-brand-ink">
            Everything Kemi Communications offers
          </h2>
          <p className="max-w-[380px] text-sm text-brand-steel">
            A quick look at what&apos;s inside — jump straight to what you
            need.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sneakPeekItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-md border border-brand-line bg-brand-paper p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange hover:shadow-lg"
              >
                <Icon
                  size={26}
                  className="mb-3.5 text-brand-orange-deep"
                  aria-hidden="true"
                />
                <h3 className="mb-1.5 text-[14.5px] font-semibold text-brand-ink">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-relaxed text-brand-steel">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
