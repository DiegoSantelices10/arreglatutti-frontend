/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

interface ICity {
  name: string;
}

export const getCities = async () => {
  try {
    const response = await getApi({
      path: SERVICES.CITIES.GET_CITIES,
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

export const createCity = async (data: ICity) => {
  try {
    const response = await getApi({
      path: SERVICES.CITIES.CREATE,
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

export const editCity = async (id: string, data: ICity) => {
  try {
    const response = await getApi({
      path: `${SERVICES.CITIES.UPDATE_CITY}/${id}`,
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

export const deleteCity = async (id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.CITIES.DELETE_CITY}/${id}`,
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
