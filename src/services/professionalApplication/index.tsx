/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

const { signal } = new AbortController();

export const getProfessionalApplication = () => {
  const response = getApi({
    path: SERVICES.REGISTRO_PROFESIONALES.GET_PROFESSIONAL_APPLICATION,
    method: 'GET',
    signal,
  });
  return response;
};

export const createMessage = (data: any) => {
  const response = getApi({
    path: SERVICES.REGISTRO_PROFESIONALES.CREATE_MESSAGE,
    method: 'POST',
    data,
  });
  return response;
};

export const deleteMessage = (id: string) => {
  const response = getApi({
    path: `${SERVICES.REGISTRO_PROFESIONALES.DELETE_MESSAGE}/${id}`,
    method: 'DELETE',
  });
  return response;
};
