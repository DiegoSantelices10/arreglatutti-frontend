/* eslint-disable no-useless-catch */
import { API_URL_BASE } from '@/enviroments';
import axios from 'axios';
import { IApiProps } from './types';

export const getApi = async ({
  apiBase = API_URL_BASE,
  path,
  method,
  data,
  contentType = 'application/json',
  query = '',
}: IApiProps) => {
  try {
    const response = await axios({
      method,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
        Pragma: 'no-cache',
        Expires: '0',
      },
      url: `${apiBase}${path}${query}`,
      data,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    // Manejo de errores detallado
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        message: error.response?.data || error.message,
      };
    }
    throw error;
  }
};
