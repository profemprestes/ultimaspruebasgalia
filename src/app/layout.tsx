import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: '¡Primer Cumpleaños de Galia!',
  description: 'Acompáñanos a celebrar el primer año de aventuras de Galia. ¡RSVP aquí!',
  // Add more SEO-related metadata
  keywords: ['Galia', 'Cumpleaños', 'Fiesta', 'Celebración', 'Primer Año', 'Evento'],
  openGraph: {
    title: '¡Primer Cumpleaños de Galia!',
    description: 'Acompáñanos a celebrar el primer año de aventuras de Galia. ¡RSVP aquí!',
    url: 'https://tu-sitio-web.com', // Replace with your actual URL
    siteName: 'Galia\'s Birthday',
    images: [
      {
        url: 'https://tu-sitio-web.com/images/galias-birthday.jpg', // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: 'Galia\'s First Birthday Celebration',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: '¡Primer Cumpleaños de Galia!',
    description: 'Acompáñanos a celebrar el primer año de aventuras de Galia. ¡RSVP aquí!',
    images: ['https://tu-sitio-web.com/images/galias-birthday.jpg'], // Replace with an actual image URL
    creator: '@tu_usuario', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
    <html lang="es">
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

