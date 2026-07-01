import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kemi Communication Ltd | Road Freight & Logistics, On Time",
  description:
    "Reliable road freight and logistics across Kenya and cross-border Africa. Serving manufacturers, stockists, wholesalers and retailers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${archivoBlack.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col bg-brand-paper text-brand-ink">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
