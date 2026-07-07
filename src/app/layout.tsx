import type { Metadata } from "next";
import { Outfit, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://designbydial.com"),
  title: {
    default: "Design By Dial | Direct Booking Websites for Vacation Rentals",
    template: "%s | Design By Dial",
  },
  description:
    "Design By Dial builds high-converting direct booking websites for vacation rental and STR operators, integrated with your Channel Manager. Serving US property managers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Design By Dial | Direct Booking Websites for Vacation Rentals",
    description:
      "High-converting direct booking websites for vacation rental operators, integrated with your Channel Manager.",
    url: "https://designbydial.com",
    siteName: "Design By Dial",
    images: ["/images/hero.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design By Dial | Direct Booking Websites for Vacation Rentals",
    description:
      "High-converting direct booking websites for vacation rental operators, integrated with your Channel Manager.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd data={organizationSchema()} />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
