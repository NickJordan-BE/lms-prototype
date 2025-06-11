'use client';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import { SignedInNavbar } from "./components/SignedInNavbar";
import Navbar from "./components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define which routes use which navbar
const PUBLIC_NAVBAR_ROUTES = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/pricing',
  '/courses',
  '/features',
  '/signup',
  '/login'
];

const SIGNED_IN_NAVBAR_ROUTES = [
  '/profile',
  '/settings',
  '/mylearning',
  '/certificates'
];

const NO_NAVBAR_ROUTES = [
  '/lms',
  '/dashboard',
  '/coursecreation'
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Helper function to check if pathname matches any route pattern
  const matchesRoute = (routes: string[], path: string) => {
    return routes.some(route => 
      route.endsWith('*') 
        ? path.startsWith(route.slice(0, -1))
        : path === route
    );
  };
  
  const showPublicNavbar = matchesRoute(PUBLIC_NAVBAR_ROUTES, pathname);
  const showSignedInNavbar = matchesRoute(SIGNED_IN_NAVBAR_ROUTES, pathname);
  const showNoNavbar = matchesRoute(NO_NAVBAR_ROUTES, pathname);
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="root-container">
          {showPublicNavbar && <Navbar />}
          {showSignedInNavbar && <SignedInNavbar />}
          <main className="content-wrapper">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}