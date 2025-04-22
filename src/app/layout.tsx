import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Galia\'s First Birthday!',
  description: 'Celebrate Galia\'s first adventure with us!',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

import {ClientOnly} from "@/components/ClientOnly";
import ThemeProvider from '@/components/theme-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ClientOnly>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </ClientOnly>
    </body>
    </html>
  );
}
