import {AxiosInstance, AxiosResponse} from 'axios';

export function createAuthRefreshInterceptor(
  instance: AxiosInstance,
  refreshAuthCall: (error: any) => Promise<any>,
): number {
  if (typeof refreshAuthCall !== 'function') {
    throw new Error(
      'axios-auth-refresh requires `refreshAuthCall` to be a function that returns a promise.',
    );
  }

  return instance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
      if (error.response.status === 401) {
        return refreshAuthCall(error);
      }
      return Promise.reject(error);
    },
  );
}
