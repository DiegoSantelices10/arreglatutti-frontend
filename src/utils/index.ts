import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizarPrimeraLetra = (str: string) => {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

export const fileToBase64 = (file: File): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result?.toString() ?? '');
    reader.onerror = () => reject(new Error('Error converting file to base64'));
  });

export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      let width = img.width;
      let height = img.height;

      // Redimensiona manteniendo la proporción
      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height *= maxWidth / width;
          width = maxWidth;
        } else {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx?.drawImage(img, 0, 0, width, height);

      // Convierte a Base64 con compresión
      resolve(canvas.toDataURL('image/jpeg', quality));
    };

    img.onerror = (err) => reject(err);
    reader.onerror = (err) => reject(err);

    reader.readAsDataURL(file);
  });
};

export const getRandomKey = () => {
  return Math.random().toString(36).substring(2, 9);
};
