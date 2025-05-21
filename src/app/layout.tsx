'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { Navbar } from "./components/Navbar";
import "./globals.css";

// Move metadata export outside since we're using 'use client'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith('/lms');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="root-container">
          {showNavbar && <Navbar />}
          <main className="content-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}