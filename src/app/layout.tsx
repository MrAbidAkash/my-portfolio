import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrabidakash.dev"),
  title: "Abidur Rahman (Abid) — Full-Stack Software Developer",
  description:
    "Portfolio of Abidur Rahman (Abid), specializing in modern React, Next.js, TypeScript, and high-performance Web Applications.",
  keywords: [
    "Software Developer",
    "Full Stack Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Abidur Rahman" }],
  openGraph: {
    title: "Abidur Rahman (Abid) — Full-Stack Software Developer",
    description:
      "Crafting high-performance web applications, scalable architectures, and enterprise systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased bg-[#fcfbf9] text-stone-900 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
