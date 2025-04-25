"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var theme_provider_1 = require("@/components/theme-provider");
exports.metadata = {
    // Optimized Title and Description for SEO in Spanish
    title: '¡Primer Cumpleaños de Galia! | Invitación Digital',
    description: '¡Estás invitado! Celebra con nosotros el primer año de aventuras de Galia. Confirma tu asistencia (RSVP) y encuentra todos los detalles aquí.',
    // Added more relevant Spanish keywords
    keywords: ['Galia', 'Primer Cumpleaños', 'Fiesta Infantil', 'Invitación Digital', 'Celebración 1 Año', 'RSVP Online', 'Evento Familiar', 'Juanico'],
    // Open Graph Metadata optimized for Spanish
    openGraph: {
        title: '¡Te esperamos en el Primer Cumpleaños de Galia!',
        description: 'Acompáñanos a celebrar el primer año de Galia. ¡Confirma tu asistencia y no te pierdas la fiesta!',
        url: 'https://galiacumple.netlify.app/',
        siteName: 'Cumpleaños de Galia',
        images: [
            {
                url: 'https://galiacumple.netlify.app/GaliaHero.svg',
                width: 1200,
                height: 630,
                alt: 'Invitación al Primer Cumpleaños de Galia'
            },
        ],
        locale: 'es_UY',
        type: 'website'
    },
    // Twitter Card Metadata optimized for Spanish
    twitter: {
        card: 'summary_large_image',
        title: '¡Invitación al Primer Cumpleaños de Galia!',
        description: 'Celebra con nosotros el primer año de Galia. ¡Confirma tu asistencia aquí!',
        images: ['https://galiacumple.netlify.app/GaliaHero.svg'],
        creator: '@tu_twitter'
    },
    // Robots meta tags for search engines
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    // Favicon configuration
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/apple-touch-icon.png'
    },
    // Other potentially useful meta tags
    authors: [{ name: 'Nombre del Creador/Organizador' }],
    manifest: '/manifest.json',
    metadataBase: new URL('https://galiacumple.netlify.app'),
    alternates: {
        canonical: '/'
    }
};
// Define Geist Sans font
var geistSans = google_1.Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});
// Define Geist Mono font
var geistMono = google_1.Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "es", suppressHydrationWarning: true },
        React.createElement("body", { className: geistSans.variable + " " + geistMono.variable + " antialiased", suppressHydrationWarning: true },
            React.createElement(theme_provider_1["default"], null, children))));
}
exports["default"] = RootLayout;
