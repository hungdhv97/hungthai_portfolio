import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-poppins",
});
const rubik = Rubik({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-rubik",
});

const siteConfig = {
    name: "Patrick - Portfolio",
    description: "I am a Software Engineer",
    ogImage: "https://portfolio.hungthai.site/og-image.png",
    url: "https://portfolio.hungthai.site",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://portfolio.hungthai.site"),
    title: {
        default: siteConfig.name,
        template: `%s - Software Engineer`,
    },
    description: siteConfig.description,
    keywords: [
        "patrick",
        "Patrick",
        "patrick portfolio",
        "hung",
        "thai",
        "hung.thai",
        "full stack developer",
        "full stack",
        "portfolio",
        "web developer",
        "web",
        "web dev",
        "developer",
        "programmer",
        "software engineer",
        "frontend developer",
        "backend developer",
        "react",
        "next.js",
        "node.js",
        "typescript",
        "javascript",
        "css",
        "html",
        "API",
        "web design",
        "responsive design",
        "UI/UX",
        "SEO",
        "personal website",
        "developer blog",
        "project showcase",
        "open source",
        "Patrick Hung Thai",
        "hung thai",
        "hungthai",
        "hung thai portfolio",
        "hungthai portfolio",
    ],
    authors: [
        {
            name: "Patrick",
            url: "https://github.com/hungdhv97",
        },
    ],
    creator: "Patrick",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`],
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og-image.png`],
        creator: "Patrick",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${rubik.variable}`}>
                <main
                    className={cn(
                        `screen relative flex min-h-screen items-center justify-between break-words
                         px-40 pb-4 pt-14 max-md:p-4 max-sm:pt-20`,
                    )}
                >
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
