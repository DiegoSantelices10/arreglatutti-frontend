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
  try {
    const response = await getApi({
      path: SERVICES.AUTHENTICATION.REGISTER,
      method: 'POST',
      data,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const signIn = async (data: ISignIn) => {
  try {
    const response = await getApi({
      path: SERVICES.AUTHENTICATION.LOGIN,
      method: 'POST',
      data,
    });
    return response;
  } catch (error: any) {
    return {
      status: error?.status,
      data: error.data,
    };
  }
};
