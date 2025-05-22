/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVICES } from '@/enviroments';
import { getApi } from '..';

export interface IMessage {
  name: string;
  telephone: string;
  profession: string;
  email: string;
  address: string;
}

export interface IResponse {
  status: number;
  data: any;
}

export const getMessages = async () => {
  try {
    const response = await getApi({
      path: `${SERVICES.MESSAGE_CLIENT.GET_MESSAGES}`,
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

export const createMessage = async (data: IMessage): Promise<IResponse> => {
  try {
    const response: any = await getApi({
      path: SERVICES.MESSAGE_CLIENT.CREATE,
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
      path: `${SERVICES.MESSAGE_CLIENT.DELETE_MESSAGE}/${id}`,
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
