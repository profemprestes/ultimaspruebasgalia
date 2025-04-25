import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';

export const metadata: Metadata = {
  title: '¡Primer Cumpleaños de Galia!',
  description: 'Acompáñanos a celebrar el primer año de aventuras de Galia. ¡RSVP aquí!',
  // Add more SEO-related metadata
  keywords: ['Galia', 'Cumpleaños', 'Fiesta', 'Celebración', 'Primer Año', 'Evento'],
  openGraph: {
    title: '¡Primer Cumpleaños de Galia!',
    description: 'Acompáñanos a celebrar el primer año de aventuras de Galia. ¡RSVP aquí!',
    url: 'https://ultimaspruebasgalia.netlify.app/', // Replace with your actual URL
    siteName: 'Galia\'s Birthday',
    images: [
      {
        url: 'https://ultimaspruebasgalia.netlify.app/GaliaHero.svg', // Replace with an actual image URL
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
    images: ['https://ultimaspruebasgalia.netlify.app/GaliaHero.svg'], // Replace with an actual image URL
    creator: '@bomberoxxx', // Replace with your Twitter handle
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

// Define Geist Sans font
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Define Geist Mono font
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider> {/* ThemeProvider already handles mounting */}
          {children}
        </ThemeProvider>
    </body>
    </html>
  );
}
