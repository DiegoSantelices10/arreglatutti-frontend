/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export const getProfessionalApplication = () => {
  const response = getApi({
    path: `${SERVICES.PROFESSIONAL_APPLICATION.GET_PROFESSIONAL_APPLICATION}?_ts=${Date.now().toString()}`,
    method: 'GET',
  });
  return response;
};

export const createMessage = (data: any) => {
  const response = getApi({
    path: SERVICES.PROFESSIONAL_APPLICATION.CREATE_MESSAGE,
    method: 'POST',
    data,
  });
  return response;
};

export const deleteMessage = (id: string) => {
  const response = getApi({
    path: `${SERVICES.PROFESSIONAL_APPLICATION.DELETE_MESSAGE}/${id}`,
    method: 'DELETE',
  });
  return response;
};
