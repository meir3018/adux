import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import AnalyticsEvents from "@/components/Analytics/AnalyticsEvents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Audax",
  description: "Engineering & Inspections Services",
};

export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-MCSZF3R96Y";

  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}</Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <main>{children}</main>
        <Footer />
        <AnalyticsEvents />
      </body>
    </html>
  );
}
