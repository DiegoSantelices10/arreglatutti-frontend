/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export const getProfessionalApplication = async () => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONAL_APPLICATION.GET_PROFESSIONAL_APPLICATION}`,
      method: 'GET',
    });
    return response;
  } catch (error: any) {
    return {
      status: error?.status,
      data: error.data,
    };
  }
};

export const createMessage = async (data: any) => {
  try {
    const response = await getApi({
      path: SERVICES.PROFESSIONAL_APPLICATION.CREATE_MESSAGE,
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

export const deleteMessage = async (id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONAL_APPLICATION.DELETE_MESSAGE}/${id}`,
      method: 'DELETE',
    });
    return response;
  } catch (error: any) {
    return {
      status: error?.status,
      data: error.data,
    };
  }
};
