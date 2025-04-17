import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import { cn } from '@/utils';
import ScrollToTop from '@/components/custom/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aquiles Soluciones',
  description: 'Los mejores profesionales en un solo lugar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="Aquiles" content="Aquiles soluciones" />
        <meta name="apple-mobile-web-app-title" content="Aquiles" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#002C53" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96" />
      </head>
      <body className={cn('bg-primary', inter.className)}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
