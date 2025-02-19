/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export const getProfessionalApplication = () => {
  const response = getApi({
    path: SERVICES.REGISTRO_PROFESIONALES.GET_PROFESSIONAL_APPLICATION,
    method: 'GET',
    params: { _t: Date.now() }, // Agrega el timestamp como parámetro
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
