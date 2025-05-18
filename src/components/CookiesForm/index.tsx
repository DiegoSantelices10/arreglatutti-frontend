'use client';
import React, { FC, useEffect, useState } from 'react';
import Button from '../custom/Button';
import Link from 'next/link';
import { createCookie, isExistsCookie } from '@/app/actions';

export enum CookieEnum {
  COOKIES_ACCEPTED = 'cookies-accepted',
  COOKIES_ANALYTICS = 'cookies-analytics',
}
const CookiesForm: FC = () => {
  const [cookiesView, setCookiesView] = useState<boolean>(false);

  const handleAcceptCookies = async () => {
    await createCookie({ name: CookieEnum.COOKIES_ACCEPTED, value: 'true' });
    await createCookie({ name: CookieEnum.COOKIES_ANALYTICS, value: 'true' });
    setCookiesView(false);
  };

  const handleRejectCookies = async () => {
    await createCookie({ name: CookieEnum.COOKIES_ACCEPTED, value: 'false' });
    setCookiesView(false);
  };

  useEffect(() => {
    const checkCookies = async () => {
      const cookiesAccepted = await isExistsCookie(CookieEnum.COOKIES_ACCEPTED);
      if (!cookiesAccepted) {
        setCookiesView(true);
      }
    };
    checkCookies();
  }, []);

  return (
    <div className="fixed bottom-0 w-full left-0 right-0 shadow-lg z-[9999] p-0 md:p-8 md:w-10/12 lg:w-8/12 mx-auto">
      {cookiesView && (
        <div className="p-6 space-y-12 bg-primary shadow-md flex flex-col items-center justify-start w-full">
          <p className="text-white text-sm w-full">
            Al hacer clic en “Aceptar cookies”, usted acepta que las cookies se
            guarden en su dispositivo para mejorar la navegación del sitio,
            analizar el uso del mismo.{' '}
            <span className="font-semibold underline">
              <Link href="/cookies" className="text-white">
                Politica de cookies
              </Link>
            </span>
          </p>
          <div className="flex flex-col md:flex-row md:w-1/2 gap-4 justify-end w-full items-end">
            <Button
              className="bg-white text-primary w-full"
              onClick={handleRejectCookies}
            >
              Rechazar cookies
            </Button>
            <Button
              className="bg-white text-primary w-full"
              onClick={handleAcceptCookies}
            >
              Aceptar cookies
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CookiesForm;
