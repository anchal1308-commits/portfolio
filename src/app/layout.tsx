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
  description: "8 years designing enterprise SaaS at Microsoft. Specializing in Windows 365, Azure Virtual Desktop, and cloud computing experiences.",
  keywords: ["product design", "Microsoft", "Enterprise SaaS", "Windows 365", "Azure Virtual Desktop", "cloud computing", "design systems"],
  authors: [{ name: "Anchal Aggarwal" }],
  creator: "Anchal Aggarwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    title: "Anchal Aggarwal - Senior Product Designer at Microsoft",
    description: "8 years designing enterprise SaaS at Microsoft. Specializing in Windows 365, Azure Virtual Desktop, and cloud computing experiences.",
    siteName: "Anchal Aggarwal Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchal Aggarwal - Senior Product Designer at Microsoft",
    description: "8 years designing enterprise SaaS at Microsoft. Specializing in Windows 365, Azure Virtual Desktop, and cloud computing experiences."
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
