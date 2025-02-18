/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export interface ISignUp {
  email: string;
  password: string;
  name: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export const signUp = async (data: ISignUp) => {
  const response = await getApi({
    path: SERVICES.AUTENTICACION.REGISTER,
    method: 'POST',
    data,
  });
  return response;
};

export const signIn = async (data: ISignIn) => {
  const response = await getApi({
    path: SERVICES.AUTENTICACION.LOGIN,
    method: 'POST',
    data,
  });
  return response;
};
