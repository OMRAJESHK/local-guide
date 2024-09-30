import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Headers from "../client/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/places-logo.jpg" sizes="any" />
      <body className={`${inter.className}`}>
        <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-2">
          <Headers />
          {children}
        </main>
      </body>
    </html>
  );
}
