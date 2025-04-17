/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';
import Button from '../custom/Button';
import DownloadIcon from '../../../public/images/download-icon';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault(); // Previene que el navegador lo muestre automáticamente
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
    <div className="z-[99999] block">
      <div className="py-4 md:px-16 px-2">
        <div className="border p-2 flex flex-wrap justify-between items-center w-auto rounded-md border-white/50">
          <div className="bg-white/30 px-4 py-2 rounded">
            <h3 className="text-white text-sm">Descarga nuestra app!</h3>
          </div>
          <div className="flex gap-2 cursor-pointer items-center bg-white/30 px-4 py-0  rounded justify-center">
            <DownloadIcon className="text-white" width={22} height={22} />
            <Button
              className="px-0 h-9"
              onClick={handleInstallClick}
              variant={'ghost'}
            >
              <h1 className="text-sm">Iniciar Instalación</h1>
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default InstallPrompt;
