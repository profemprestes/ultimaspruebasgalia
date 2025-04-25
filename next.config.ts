import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Solo ignorar errores en desarrollo
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    // Solo ignorar errores en desarrollo
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  // Configuración para optimización de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

export default nextConfig;
