import { Inter } from 'next/font/google';
import '../app/globals.css';
import { cn } from '@/utils';
import ScrollToTop from '@/components/custom/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="title"
          content="Aquiles soluciones | Brindamos servicios de profesionales matriculados."
        />
        <meta
          name="description"
          content="Desde Gasistas, Plomeros, Electricistas, Instaladores de aire acondicionado y mucho mas. Aquiles Soluciones"
          key="description"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96" />

        <title>
          Aquiles Soluciones | Brindamos servicios de profesionales matriculados
        </title>
      </head>
      <body className={cn('bg-primary', inter.className)}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
