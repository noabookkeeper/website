import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "http://localhost:3000"),
  title: "Bismuth CPA - Professional Tax & Bookkeeping CPA Services",
  description:
    "Professional CPA services for tax preparation, bookkeeping, and accounting. Expert tax planning, compliance, and financial management for businesses and individuals. Serving Joshua Tree, California.",
  keywords:
    "CPA services, tax preparation, professional bookkeeping, tax planning, business accounting, individual tax services, tax compliance, financial management, Joshua Tree CPA, California tax services",
  openGraph: {
    title: "Bismuth CPA - Professional Tax & Bookkeeping CPA Services",
    description: "Professional CPA services for tax preparation, bookkeeping, and accounting. Expert tax planning, compliance, and financial management for businesses and individuals. Serving Joshua Tree, California.",
    url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    siteName: "Bismuth CPA",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Bismuth CPA Logo - Professional Financial Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bismuth CPA - Professional Tax & Bookkeeping CPA Services",
    description: "Professional CPA services for tax preparation, bookkeeping, and accounting. Expert tax planning, compliance, and financial management for businesses and individuals. Serving Joshua Tree, California.",
    images: ["/logo.png"],
    creator: "@bismuthcpa",
    site: "@bismuthcpa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
