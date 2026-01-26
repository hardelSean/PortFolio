import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sean Hardel - Développeur Full Stack",
  description: "Portfolio de Sean Hardel, étudiant en Licence Pro MIAW. Développeur Web Full Stack (React, Symfony, Node.js) à la recherche d'un stage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}