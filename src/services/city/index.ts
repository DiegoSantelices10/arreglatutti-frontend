import { SERVICES } from '@/enviroments';
import { getApi } from '..';

interface ICity {
  name: string;
}

export const getCities = async () => {
  const response = await getApi({
    path: SERVICES.BARRIOS.GET_CITIES,
    method: 'GET',
  });
  return response;
};

export const getCityById = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.BARRIOS.GET_CITIES}/${id}`,
    method: 'GET',
  });
  return response;
};

export const createCity = async (data: ICity) => {
  const response = await getApi({
    path: SERVICES.BARRIOS.CREATE,
    method: 'POST',
    data,
  });
  return response;
};

export const editCity = async (id: string, data: ICity) => {
  const response = await getApi({
    path: `${SERVICES.BARRIOS.UPDATE_CITY}/${id}`,
    method: 'PUT',
    data,
  });
  return response;
};

export const deleteCity = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.BARRIOS.DELETE_CITY}/${id}`,
    method: 'DELETE',
  });
  return response;
};
