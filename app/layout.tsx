import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ista Cahya Khoeriyyah - Portfolio",
  description: "Website portfolio Ista Cahya Khoeriyyah",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
        {children}
      </body>
    </html>
  );
}
