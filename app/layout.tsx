import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link"; //

// import components
import Footer from "@/components/sections/Footer";

// Font imports
import { Sora, Manrope, Borel } from "next/font/google";
const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const borel = Borel({
  subsets: ["latin"],
  variable: "--font-borel",
  weight: "400",
});

export const metadata = {
  title: "Majed Portfolio",
  description: "My portfolio showcasing React, Vue, and Spring Boot projects",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Majed Alshehri - Software Engineer",
    description: "My portfolio showcasing React, Vue, and Spring Boot projects",
    url: "https://www.majedalshehri.com/",
    siteName: "Majed Alshehri - Software Engineer",
    images: [{ url: "" }],
    locale: "en_US",
    type: "website",
  },
};

// Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` flex flex-col min-h-screen ${display.variable} ${sans.variable} ${borel.variable} font-sans`}
      >
        <Link
          href="/"
          className="block mt-16 font-Borel text-xl text-center py-4 w-[7rem] m-auto hover:text-gray-500 transition-all"
          aria-label="Go to home"
        >
          Home
        </Link>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
