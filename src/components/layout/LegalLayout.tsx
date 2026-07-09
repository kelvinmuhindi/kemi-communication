import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/content";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-[#111111]">
      {/* Minimal header */}
      <header className="border-b border-gray-200 px-6 py-4">
        <div className="mx-auto flex max-w-[800px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={40}
              height={28}
              className="h-7 w-auto rounded"
            />
            <span className="text-sm font-semibold text-[#111111]">
              {siteConfig.legalName}
            </span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-gray-500 hover:text-[#111111] transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Document */}
      <main className="mx-auto max-w-[800px] px-6 py-14 pb-24">
        <p className="mb-2 text-[13px] text-gray-400 uppercase tracking-wide">
          Last updated: {lastUpdated}
        </p>
        <h1 className="mb-10 text-[32px] font-bold leading-tight text-[#111111] sm:text-[40px]">
          {title}
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none text-[#111111]
          [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-[#111111]
          [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[16px] [&_h3]:font-semibold [&_h3]:text-[#111111]
          [&_p]:mb-4 [&_p]:leading-[1.75] [&_p]:text-[15px] [&_p]:text-[#333333]
          [&_ul]:mb-4 [&_ul]:ml-5 [&_ul]:list-disc [&_ul]:space-y-1.5
          [&_li]:text-[15px] [&_li]:leading-relaxed [&_li]:text-[#333333]
          [&_a]:text-[#E05C00] [&_a]:underline [&_a:hover]:text-[#111111]
          [&_strong]:text-[#111111] [&_strong]:font-semibold
          [&_hr]:my-8 [&_hr]:border-gray-200">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-6 text-center text-[13px] text-gray-400">
        © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        <span className="mx-2">·</span>
        <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors">Privacy Policy</Link>
        <span className="mx-2">·</span>
        <Link href="/terms-of-service" className="hover:text-[#111111] transition-colors">Terms of Service</Link>
      </footer>
    </div>
  );
}
