import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kayzen",
  description: "Kayzen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="m-auto max-w-[1400px] px-4 text-zinc-800 md:px-6 lg:px-10">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
