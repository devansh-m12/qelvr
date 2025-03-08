import type { Metadata } from "next";
import { StackProvider, StackTheme } from "@stackframe/stack";
import { stackServerApp } from "../stack";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Qelvr - Connect, Collaborate, Create',
  description: 'Find like-minded developers for meaningful projects. Build your portfolio with unique open-source projects, not just another social media clone.',
  keywords: [
    'developer collaboration',
    'open source',
    'project matching',
    'portfolio projects',
    'developer community',
    'team building',
    'coding projects',
    'software development',
    'project collaboration'
  ],
  authors: [{ name: 'Qelvr Team' }],
  openGraph: {
    title: 'Qelvr - Connect, Collaborate, Create',
    description: 'Find like-minded developers for meaningful projects. Build your portfolio with unique open-source projects.',
    url: 'https://qelvr.com',
    siteName: 'Qelvr',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Qelvr - Developer Collaboration Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qelvr - Connect, Collaborate, Create',
    description: 'Find like-minded developers for meaningful projects',
    images: ['/og-image.jpg'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><StackProvider app={stackServerApp}><StackTheme>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
            <Toaster />
          </ThemeProvider>
      </StackTheme></StackProvider></body>
    </html>
  );
}
