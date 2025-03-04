/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

interface IProfession {
  name: string;
}

export const getProfessions = async () => {
  try {
    const response = await getApi({
      path: SERVICES.PROFESSIONS.GET_PROFESSIONS,
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

export const createProfession = async (data: IProfession) => {
  try {
    const response = await getApi({
      path: SERVICES.PROFESSIONS.CREATE,
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

export const editProfession = async (id: string, data: IProfession) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONS.UPDATE_PROFESSION}/${id}`,
      method: 'PUT',
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

export const deleteProfession = async (id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONS.DELETE_PROFESSION}/${id}`,
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
