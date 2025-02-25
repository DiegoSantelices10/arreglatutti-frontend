import { SERVICES } from '@/enviroments';
import { getApi } from '..';

interface IProfessional {
  name: string;
  profession: string;
  telephone: string;
  dni: string;
  cities: string[];
  description: string;
  image: string[];
}

export const getProfessionals = async (
  profession?: string,
  cities?: string
) => {
  const queryParams: string[] = [];

  if (profession) queryParams.push(`profession=${profession}`);
  if (cities) queryParams.push(`cities=${cities}`);

  const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

  const response = await getApi({
    path: SERVICES.PROFESSIONALS.GET_PROFESSIONALS,
    method: 'GET',
    query: queryString,
  });
  return response;
};

export const getProfessionalById = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.PROFESSIONALS.GET_PROFESSIONALS}/${id}`,
    method: 'GET',
  });
  return response;
};

export const createProfessional = async (data: IProfessional) => {
  const response = await getApi({
    path: SERVICES.PROFESSIONALS.CREATE,
    method: 'POST',
    data,
  });
  return response;
};

export const editProfessional = async (id: string, data: IProfessional) => {
  const response = await getApi({
    path: `${SERVICES.PROFESSIONALS.UPDATE_PROFESSIONAL}/${id}`,
    method: 'PUT',
    data,
  });
  return response;
};

export const deleteProfessional = async (id: string) => {
  const response = await getApi({
    path: `${SERVICES.PROFESSIONALS.DELETE_PROFESSIONAL}/${id}`,
    method: 'DELETE',
  });
  return response;
};

export const signInProfessional = async (data: {
  email: string;
  password: string;
}) => {
  const response = await getApi({
    path: SERVICES.PROFESSIONALS.LOGIN,
    method: 'POST',
    data,
  });
  console.log('response services', response);

  return response;
};
