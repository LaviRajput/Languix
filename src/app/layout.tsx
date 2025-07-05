import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RouteChangeLoader from '@/components/RouteChangeLoader';
import { NextIntlClientProvider } from "next-intl";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Languix",
  description: "Lnguix is a multilingual website built with Next.js and Next-Intl.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <RouteChangeLoader />
          <Header />
          <main className="min-h-[60vh] bg-gradient-to-br from-[#00C6FF]/10 to-[#0072FF]/10 flex flex-col justify-between">
            {children}
          </main>
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
