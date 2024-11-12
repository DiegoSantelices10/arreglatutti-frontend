/* eslint-disable no-useless-catch */
import { API_URL_BASE } from '@/enviroments';
import axios from 'axios';
import { IApiProps } from './types';

export const getApi = async ({
  apiBase = API_URL_BASE,
  path,
  method,
  data,
  contentType,
  query = '',
}: IApiProps) => {
//   const sessionData = localStorage.getItem('session');
  const token = 'ad60d25fbfde733dd05676963829fad3fee1c674d3400577f0f609371a64d640c23954c32dda1f0979014f07a6b9c2e7f3d33ee90642a45b2aa43d008abb848ef0afbd8785851c71b11904453e5dc0ff5fe3d07b5039b3e82e6074dd8b5468b14b1e1c4158a7e5bcd35490ed8943e04d7d9831a596fbdbd01d20527da0b0fdca'
  try {
    const response = await axios({
      method,
      headers: {
        'Content-Type': contentType,
        Authorization: `Bearer ${token}`,
      },
      url: `${apiBase}${path}${query}`,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
