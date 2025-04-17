import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aquiles soluciones',
    short_name: 'Aquiles soluciones',
    description: 'Pwa app for Aquiles soluciones',
    start_url: '/',
    theme_color: '#002C53',
    background_color: '#002C53',
    display: 'standalone',
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
