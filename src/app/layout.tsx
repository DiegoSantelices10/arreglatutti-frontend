import { Inter } from 'next/font/google';
import '../app/globals.css';
import { cn } from '@/utils';
import ScrollToTop from '@/components/custom/ScrollToTop';
import Script from 'next/script';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" sizes="96x96" />

        <title>
          Aquiles Soluciones | Brindamos servicios de profesionales matriculados
        </title>

        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1178773334045041');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={cn('bg-primary', inter.className)}>
        {/* Noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1178773334045041&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
export const metadata: Metadata = {
  title: 'Aquiles',
  description:
    'Brindamos servicios de profesionales matriculados en la provincia de Mendoza, Argentina.',
};
