import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Anchal Aggarwal - Senior Product Designer at Microsoft",
    template: "%s | Anchal Aggarwal"
  },
  description: "8 years designing enterprise SaaS at Microsoft and Salesforce. Specializing in cloud desktop experiences and enterprise solutions.",
  keywords: ["product design", "Microsoft", "Salesforce", "Enterprise SaaS", "cloud computing", "design systems"],
  authors: [{ name: "Anchal Aggarwal" }],
  creator: "Anchal Aggarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Anchal Aggarwal - Senior Product Designer at Microsoft",
    description: "8 years designing enterprise SaaS at Microsoft and Salesforce. Specializing in cloud desktop experiences and enterprise solutions.",
    siteName: "Anchal Aggarwal Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchal Aggarwal - Senior Product Designer at Microsoft",
    description: "8 years designing enterprise SaaS at Microsoft and Salesforce. Specializing in cloud desktop experiences and enterprise solutions."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pt-20 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
