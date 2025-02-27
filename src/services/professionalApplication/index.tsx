/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export const getProfessionalApplication = async () => {
  const response = await getApi({
    path: `${SERVICES.PROFESSIONAL_APPLICATION.GET_PROFESSIONAL_APPLICATION}`,
    method: 'GET',
  });
  return response;
};

export const createMessage = async (data: any) => {
  const response = await getApi({
    path: SERVICES.PROFESSIONAL_APPLICATION.CREATE_MESSAGE,
    method: 'POST',
    data,
  });
  return response;
};

export const deleteMessage = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.PROFESSIONAL_APPLICATION.DELETE_MESSAGE}/${id}`,
    method: 'DELETE',
  });
  return response;
};
