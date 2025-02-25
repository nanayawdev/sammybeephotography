import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SammyBee Photography",
  description: "Capturing life's beautiful moments with artistic precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${rubik.variable} antialiased`}>
      <body className="font-plus-jakarta">
        {children}
      </body>
    </html>
  );
}
