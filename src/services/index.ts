import axios, {AxiosInstance} from 'axios';
import {HTTPRequest} from '../infra/http/type';
import {API} from '../config';
import {serviceErrorHandler} from './error';
// import { createAuthRefreshInterceptor } from './auth-refresh';

export interface HTTPService {
  post: HTTPRequest;
  get: HTTPRequest;
  del: HTTPRequest;
  put: HTTPRequest;
}

export const defaoultInstance = axios.create({
  baseURL: API.test_host,
  timeout: API.timeout,
  headers: {
    'Accept-Language': 'vi',
    'Access-Control-Allow-Origin': '*',
  },
});

const _api = (instance: AxiosInstance) => {
  // Function that will be called to refresh authorization
  // const refreshAuthLogic = async (failedRequest: any) => {
  //   const refresh_Token = load('refreshToken');

  //   let params = JSON.stringify({
  //     refresh_token: refresh_Token,
  //   });

  //   const res = await axiosInstance.post(API.RefreshTokenEndPoint, null, {
  //     params,
  //     skipAuthRefresh: true, // ignore refresh token request from auth requests queue
  //   });

  //   const { jwtToken, refreshToken } = res.data as RefreshTokenRes;

  //   failedRequest.response.config.headers.Authorization = 'Bearer ' + jwtToken;

  //   await saveString('refreshToken', refreshToken);
  //   await saveString('jwtToken', jwtToken);

  //   return Promise.resolve();
  // };

  // createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic);
  const postFunc: HTTPRequest = ({url, data, options}) => {
    return instance.post(url, data, options);
  };
  const post = serviceErrorHandler(postFunc) as HTTPRequest;

  const getFunc: HTTPRequest = ({url, data}) => {
    return instance.get(url, data);
  };
  const get = serviceErrorHandler(getFunc) as HTTPRequest;

  const delFunc: HTTPRequest = ({url, options}) => {
    return instance.delete(url, options);
  };
  const del = serviceErrorHandler(delFunc) as HTTPRequest;

  const putFunc: HTTPRequest = ({url, data, options}) => {
    return instance.put(url, data, options);
  };
  const put = serviceErrorHandler(putFunc) as HTTPRequest;

  return {post, get, del, put};
};

export default {
  api: _api(defaoultInstance),
};
