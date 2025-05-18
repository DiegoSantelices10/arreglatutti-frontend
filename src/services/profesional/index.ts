/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export interface IProfessional {
  name: string;
  profession: string;
  telephone: string;
  dni: string;
  reasonSocial?: string;
  registrationNumber: string;
  city: string;
  description: string;
  images: string[];
}

export const getProfessionals = async (profession?: string, city?: string) => {
  try {
    const queryParams: string[] = [];

    if (profession) queryParams.push(`profession=${profession}`);
    if (city) queryParams.push(`city=${city}`);

    const queryString =
      queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    const response = await getApi({
      path: SERVICES.PROFESSIONALS.GET_PROFESSIONALS,
      method: 'GET',
      query: queryString,
    });
    return response;
  } catch (error: any) {
    return {
      status: error?.status,
      data: error.data,
    };
  }
};

export const getProfessionalById = async (id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONALS.GET_PROFESSIONAL_BY_ID}/${id}`,
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

export const createProfessional = async (data: IProfessional) => {
  console.log('data', data);

  try {
    const response = await getApi({
      path: SERVICES.PROFESSIONALS.CREATE,
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

export const editProfessional = async (id: string, data: any) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONALS.UPDATE_PROFESSIONAL}/${id}`,
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

export const deleteProfessional = async (id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONALS.DELETE_PROFESSIONAL}/${id}`,
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

export const deleteImageMongo = async (id: string, public_id: string) => {
  try {
    const response = await getApi({
      path: `${SERVICES.PROFESSIONALS.DELETE_IMAGE}/${id}/remove-image`,
      method: 'DELETE',
      data: { public_id },
    });
    return response;
  } catch (error: any) {
    return {
      status: error?.status,
      data: error.data,
    };
  }
};
