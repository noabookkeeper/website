import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noa Bookkeeper - Professional Accounting & Bookkeeping Services",
  description:
    "Stress-free bookkeeping for growing businesses. Fixed-fee plans, dedicated accountants, real-time reporting. Specialized in property management, house flippers, and small business accounting.",
  keywords:
    "accounting services for small business, outsourced bookkeeping, monthly bookkeeping, reconciliations, payroll services, financial reporting, cash flow forecasting, fractional CFO, year-end, audit prep",
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
