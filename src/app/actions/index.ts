'use server';
import { cookies } from 'next/headers';
import { FC } from 'react';

interface ICookieData {
  name: string;
  value: string;
}

export const createCookie: FC<ICookieData> = async (data) => {
  const cookieStore = await cookies();
  cookieStore.set(data.name, data.value, { secure: true });
  return true;
};

export const deleteCookie: FC<ICookieData> = async (data) => {
  (await cookies()).delete(data.name);
  return true;
};

export const isExistsCookie = async (name: string) => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.has(name);
  return cookieValue;
};
