import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wedges - Next.js Template",
  description:
    "Beautiful UI components for React, crafted with the Wedges design system, Radix UI, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 'dark' theme is added here
    <html lang="en" className="dark wg-antialiased">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
