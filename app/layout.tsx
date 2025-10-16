import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import BackToTopButton from "./components/BackToTopButton";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Yano AI Technologies | Transforming Business Through Intelligent Solutions",
  description: "Yano AI provides cutting-edge IT solutions, AI automation, and expert consultancy to drive digital transformation and business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans bg-gradient-to-br from-gray-900 to-blue-900 text-gray-100 antialiased`}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-grow">{children}</main>
          <SiteFooter />
        </div>
        <BackToTopButton />
      </body>
    </html>
  );
}
