import clsx, { ClassValue } from "clsx";
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }


  export const capitalizarPrimeraLetra = (str: string) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
}