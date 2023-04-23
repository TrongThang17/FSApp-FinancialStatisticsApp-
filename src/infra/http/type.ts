import {AxiosRequestConfig, AxiosResponse} from 'axios';

export interface RequestParams {
  url: string;
  options?: AxiosRequestConfig;
  data?: Record<string, any>;
}

export type HTTPRequest = (params: RequestParams) => Promise<AxiosResponse>;
export interface RefreshTokenRes {
  jwtToken: string;
  refreshToken: string;
}

export interface ServerErrorData {
  message?: string;
  detail?: string;
}
