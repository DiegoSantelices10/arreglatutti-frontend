/* eslint-disable no-useless-catch */
import { API_URL_BASE } from '@/enviroments';
import axios, { AxiosError } from 'axios';
import { IApiProps } from './types';
import { IResponse } from './consultation';

export const getApi = async ({
  apiBase = API_URL_BASE,
  path,
  method,
  data,
  contentType = 'application/json',
  query = '',
  params,
}: IApiProps): Promise<IResponse> => {
  try {
    const response = await axios({
      method,
      headers: {
        'Content-Type': contentType,
      },
      url: `${apiBase}${path}${query}`,
      data,
      params,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    // Manejo de errores detallado
    if (error instanceof AxiosError) {
      return {
        status: error.response?.status ?? 500,
        data: error.response?.data || error.message,
      };
    } else {
      throw error;
    }
  }
};
