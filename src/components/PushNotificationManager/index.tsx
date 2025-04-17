/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';
import Button from '../custom/Button';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      setDeferredPrompt(e); // Guardamos el evento para usarlo luego
      setShowInstall(true); // Mostramos el botón de instalar
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Mostramos el prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  return showInstall ? (
    <div className="z-[99999]">
      <div className="flex gap-1">
        <h3>Descarga nuestra app!</h3>
        <Button onClick={handleInstallClick}>Instalar</Button>
      </div>
    </div>
  ) : null;
};

export default InstallPrompt;
