/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';

export interface IApiProps {
  apiBase?: string;
  path: string;
  method: string;
  data?: any;
  contentType?: string;
  query?: string;
}

export interface Query {
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
  grant_type: string;
  scope: string;
}

export interface ICallbacksApi {
  successCallback?: (response: AxiosResponse) => void;
  errorCallback?: (error: any) => void;
  finallyCallback?: () => void;
}
