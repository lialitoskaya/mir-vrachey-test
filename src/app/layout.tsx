import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Noto_Sans } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

const noto_sans = Noto_Sans({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Mir Vrachey",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
