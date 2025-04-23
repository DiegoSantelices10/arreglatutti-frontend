/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useEffect } from 'react';
import Button from '../custom/Button';
import { toast } from '@/hooks/use-toast';

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

  useEffect(() => {
    toastInstallApp(); // Llama a la función para mostrar el toast
  }, [showInstall]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Mostramos el prompt
      const { outcome } = await deferredPrompt.userChoice;
      console.log('User choice:', outcome);
      setDeferredPrompt(null);
      setShowInstall(false);
    }
  };

  const toastInstallApp = () => {
    if (showInstall) {
      toast({
        title: '¡Descarga nuestra app!',
        description: 'Para disfrutar de una mejor experiencia.',
        duration: 5000,
        variant: 'default',
        className: 'bg-neutral-800 text-white whitespace-nowrap',
        action: (
          <div>
            <Button
              className="bg-neutral-700"
              variant={'ghost'}
              onClick={handleInstallClick}
            >
              <h1 className="text-sm">Instalar</h1>
            </Button>
          </div>
        ),
      });
    }
  };

  return null;
};

export default InstallPrompt;
