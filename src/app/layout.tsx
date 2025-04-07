import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../app/globals.css';
import { cn } from '@/utils';
import Script from 'next/script';
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
        <Script id="kommo-widget" strategy="afterInteractive">
          {`(function(a,m,o,c,r,m){a[m]={id:"1037483",hash:"5a1566db228513a3d4bd578341e16744d7489d7a7d543e91fb3f0ac2db160eb9",locale:"es",setMeta:function(p){this.params=(this.params||[]).concat([p])}};a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};var d=a.document,s=d.createElement('script');s.async=true;s.id=m+'_script';s.src='https://gso.kommo.com/js/button.js';d.head&&d.head.appendChild(s)}(window,0,'crmPlugin',0,0,'crm_plugin'));`}
        </Script>
        <meta name="aquiles" content="Aquiles" />
      </head>
      <body className={cn('bg-primary', inter.className)}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
