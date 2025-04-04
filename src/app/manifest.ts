import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aquiles soluciones',
    short_name: 'Aquiles soluciones',
    description: 'Pwa app for Aquiles soluciones',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo-pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
