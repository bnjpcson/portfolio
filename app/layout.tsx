import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBarPage from "./navbar";
import FooterPage from "./footer-page";
import React from "react";

const siteUrl = process.env.SITE_URL ?? "http://localhost:3000";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benjie Pecson | Portfolio",
  description:
    "Explore the personal portfolio of Benjie Pecson - a web and mobile developer specializing in web and mobile technologies",
  keywords: [
    "Benjie Pecson",
    "Front-End Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Tailwind CSS",
    "JavaScript",
  ],
  authors: [{ name: "Benjie Pecson", url: siteUrl }],
  creator: "Benjie Pecson",
  publisher: "Benjie Pecson",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Benjie Pecson | Web and Mobile Developer Portfolio",
    description:
      "Showcasing projects and skills of Benjie Pecson, a passionate web and mobile developer.",
    url: siteUrl,
    siteName: "Benjie Pecson Portfolio",
    images: [
      {
        url: `${siteUrl}/profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Benjie Pecson Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjie Pecson | Web and Mobile Developer Portfolio",
    description:
      "Discover the portfolio and work of Benjie Pecson, a web and mobile developer with a focus on modern technologies.",
    images: [`${siteUrl}/profile.jpg`],
    creator: "@bnjpcson",
  },
  verification: {
    google: "qANav5GpvogfsADSa327myvfMwjbpuSp2euBngZLv7Y",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full min-w-[375px] max-w-[2560px] mx-auto">
            <header>
              <NavBarPage />
            </header>
            <main>{children}</main>

            <div className="w-full px-5 sm:px-14 md:px-20 lg:px-32 bg-secondary">
              <FooterPage />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
