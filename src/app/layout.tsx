import type { Metadata } from "next";
import { Space_Mono, Zen_Dots } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const zenDots = Zen_Dots({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-zen-dots",
});

export const metadata: Metadata = {
  title: "Specify4IT - Specification Management Software",
  description: "Specification management software for construction industry professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${zenDots.variable} antialiased bg-[#040414] text-white min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
    </html>
  );
}
