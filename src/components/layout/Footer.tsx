import Image from "next/image";
import { siteConfig } from "@/lib/content";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Media", href: "/media" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Become a Partner", href: "/become-a-partner" },
  { label: "Get a Quote", href: "/get-a-quote" },
];

export function Footer() {
  return (
    <footer className="bg-[#100F0E] px-6 pb-7 pt-12 text-[#A9A5A0] sm:pt-[60px]">
      <div className="mx-auto grid max-w-[1240px] gap-9 border-b border-[#2A2826] pb-9 sm:grid-cols-2 sm:gap-10 sm:pb-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt={`${siteConfig.name} logo`}
              width={56}
              height={56}
              className="h-14 w-14 rounded-lg object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm uppercase tracking-wide text-white">
                {siteConfig.name}
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[1.5px] text-brand-orange">
                {siteConfig.tagline}
              </span>
            </div>
          </div>
          <p className="max-w-[280px] text-[13px] leading-relaxed">
            Reliable road freight and logistics across Kenya and
            cross-border Africa. On time, every time.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] uppercase tracking-wide text-white">
            Company
          </h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:block sm:space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href} className="text-[13.5px]">
                <a
                  href={link.href}
                  className="inline-block py-0.5 hover:text-brand-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="space-y-3 text-[13.5px] sm:space-y-2.5">
            <li className="leading-relaxed break-words">
              {siteConfig.address}
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="inline-block py-0.5 hover:text-brand-orange"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="break-all">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-block py-0.5 hover:text-brand-orange"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[13px] uppercase tracking-wide text-white">
            Hours
          </h4>
          <ul className="space-y-3 text-[13.5px] sm:space-y-2.5">
            {siteConfig.hours.map((h) => (
              <li key={h.label} className="leading-relaxed">
                <span className="text-white">{h.label}:</span> {h.value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] pt-6 text-center text-[12px] sm:text-[12.5px]">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}.</p>
        <p className="mt-0.5 sm:hidden">All rights reserved.</p>
        <p className="mt-1">
          <span className="hidden sm:inline">All rights reserved<span className="mx-1.5">·</span></span>
          <a href="/privacy-policy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
          <span className="mx-1.5">·</span>
          <a href="/terms-of-service" className="hover:text-brand-orange transition-colors">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
