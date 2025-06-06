import type { Metadata } from "next";
import { Space_Mono, Zen_Dots } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-zen-dots",
});

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL('https://specify4it.com'),
  title: "Specify4IT - Error-Free Code from Provable Specifications",
  description: "Create error-free code through mathematically proven specifications. The Specify4IT automated reasoning toolset helps developers create relational database software right first time.",
  keywords: ["specification management", "software development", "automated reasoning", "error-free code", "mathematical proofs", "relational database", "software engineering"],
  authors: [{ name: "Precision Design Technology Ltd" }],
  creator: "John Warren",
  publisher: "Precision Design Technology Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://specify4it.com",
    title: "Specify4IT - Error-Free Code from Provable Specifications",
    description: "Create error-free code through mathematically proven specifications. The Specify4IT automated reasoning toolset helps developers create relational database software right first time.",
    siteName: "Specify4IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${zenDots.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-darkBlue text-white antialiased">
        <Header />
        <main className="flex-grow pt-[64px] md:pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
