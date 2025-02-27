/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export interface IMessage {
  name: string;
  telephone: string;
  profession: string;
  message: string;
  professionalName?: string;
}

export interface IResponse {
  status: number;
  data: any;
}

export const getConsultations = async () => {
  try {
    const response = await getApi({
      path: `${SERVICES.CONSULTATIONS.GET_MESSAGES}`,
      method: 'GET',
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const createConsultation = async (
  data: IMessage
): Promise<IResponse> => {
  try {
    const response: any = await getApi({
      path: SERVICES.CONSULTATIONS.CREATE,
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
      path: `${SERVICES.CONSULTATIONS.DELETE_MESSAGE}/${id}`,
      method: 'DELETE',
    });
    return response;
  } catch (error) {
    return error;
  }
};
