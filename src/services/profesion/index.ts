import { SERVICES } from '@/enviroments';
import { getApi } from '..';

interface IProfession {
  name: string;
}

export const getProfessions = async () => {
  const response = await getApi({
    path: SERVICES.PROFESIONES.GET_PROFESSIONS,
    method: 'GET',
  });
  return response;
};

export const getProfessionById = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.PROFESIONES.GET_PROFESSIONS}/${id}`,
    method: 'GET',
  });
  return response;
};

export const createProfession = async (data: IProfession) => {
  const response = await getApi({
    path: SERVICES.PROFESIONES.CREATE,
    method: 'POST',
    data,
  });
  return response;
};

export const editProfession = async (id: string, data: IProfession) => {
  const response = await getApi({
    path: `${SERVICES.PROFESIONES.UPDATE_PROFESSION}/${id}`,
    method: 'PUT',
    data,
  });
  return response;
};

export const deleteProfession = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.PROFESIONES.DELETE_PROFESSION}/${id}`,
    method: 'DELETE',
  });
  return response;
};
