import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBarPage from "./navbar";

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
        url: `${siteUrl}/og-image.jpg`,
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
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@bnjpcson",
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
          <header>
            <NavBarPage />
          </header>
          <main className="pt-16 z-0">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
