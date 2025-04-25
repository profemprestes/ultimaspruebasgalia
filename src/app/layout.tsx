import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme-provider';

export const metadata: Metadata = {
  // Optimized Title and Description for SEO in Spanish
  title: '¡Primer Cumpleaños de Galia! | Invitación Digital',
  description: '¡Estás invitado! Celebra con nosotros el primer año de aventuras de Galia. Confirma tu asistencia (RSVP) y encuentra todos los detalles aquí.',
  // Added more relevant Spanish keywords
  keywords: ['Galia', 'Primer Cumpleaños', 'Fiesta Infantil', 'Invitación Digital', 'Celebración 1 Año', 'RSVP Online', 'Evento Familiar', 'Juanico'],
  // Open Graph Metadata optimized for Spanish
  openGraph: {
    title: '¡Te esperamos en el Primer Cumpleaños de Galia!',
    description: 'Acompáñanos a celebrar el primer año de Galia. ¡Confirma tu asistencia y no te pierdas la fiesta!',
    url: 'https://ultimaspruebasgalia.netlify.app/', // TODO: Replace with your actual production URL
    siteName: 'Cumpleaños de Galia',
    images: [
      {
        url: 'https://ultimaspruebasgalia.netlify.app/GaliaHero.svg', // TODO: Replace with an actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Invitación al Primer Cumpleaños de Galia',
      },
    ],
    locale: 'es_UY', // Setting locale to Spanish (Uruguay)
    type: 'website',
  },
  // Twitter Card Metadata optimized for Spanish
  twitter: {
    card: 'summary_large_image',
    title: '¡Invitación al Primer Cumpleaños de Galia!',
    description: 'Celebra con nosotros el primer año de Galia. ¡Confirma tu asistencia aquí!',
    images: ['https://ultimaspruebasgalia.netlify.app/GaliaHero.svg'], // TODO: Replace with an actual Twitter image URL
    creator: '@tu_twitter', // TODO: Replace with your Twitter handle if available
  },
  // Robots meta tags for search engines
  robots: {
    index: true, // Allow indexing
    follow: true, // Allow following links
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicon configuration
  icons: {
    icon: '/favicon.svg', // Path to your favicon file
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png', // Optional: Add apple touch icon if you have one
  },
  // Other potentially useful meta tags
  authors: [{ name: 'Nombre del Creador/Organizador' }], // TODO: Add author name
  manifest: '/manifest.json', // Optional: Link to a web app manifest
  metadataBase: new URL('https://ultimaspruebasgalia.netlify.app'), // TODO: Replace with your actual production URL
  alternates: {
    canonical: '/', // Canonical URL for the homepage
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
    <html lang="es" suppressHydrationWarning> {/* Set language to Spanish */}
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
    </body>
    </html>
  );
}
