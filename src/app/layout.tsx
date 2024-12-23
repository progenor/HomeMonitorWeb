import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "reflect-metadata";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>{children}</body>
    </html>
  );
}
