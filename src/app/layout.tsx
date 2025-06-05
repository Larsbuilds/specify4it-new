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
  title: "Specify4IT - Specification Management Software",
  description: "Specification management software for construction industry professionals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${zenDots.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-white antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
