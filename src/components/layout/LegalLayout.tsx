import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
    <>
      <Header />
      <main className="min-h-screen bg-white text-[#111111]">
        <div className="mx-auto max-w-[800px] px-6 py-14 pb-24">
          <p className="mb-2 text-[13px] uppercase tracking-wide text-gray-400">
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

          <div className="mt-12 flex gap-6 border-t border-gray-200 pt-8 text-[13px]">
            <Link href="/privacy-policy" className="text-[#E05C00] underline hover:text-[#111111] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#E05C00] underline hover:text-[#111111] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
