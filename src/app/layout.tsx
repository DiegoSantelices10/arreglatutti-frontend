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
        <meta name="aquiles" content="Aquiles" />
      </head>
      <body className={cn('bg-primary', inter.className)}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
