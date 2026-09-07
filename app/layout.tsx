import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/global.css";
import { site } from "@/src/data/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL(site.site),
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: site.site,
    images: [`${site.site}/og.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [`${site.site}/og.png`],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-navy text-slate antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
