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
  signal,
}: IApiProps & { signal?: AbortSignal }) => {
  try {
    const response = await axios({
      method,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
      },
      url: `${apiBase}${path}${query}`,
      data,
      signal,
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
