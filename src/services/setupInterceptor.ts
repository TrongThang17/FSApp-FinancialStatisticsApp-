import {AxiosResponse} from 'axios';

import {HTTPStatusCode} from './helper';
import {actions} from '../redux/user/UserActions';
import {defaoultInstance} from './index';

export const setUpInterceptor = (store: any) => {
  defaoultInstance.interceptors.request.use(
    async request => {
      const token = store.getState().user?.user?.access_token;
      if (request.headers) {
        if (token) {
          request.headers.Authorization = `Bearer ${token}`;
        }
      }
      return request;
    },
    error => Promise.reject(error),
  );

  defaoultInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: any) => {
      if (error.response.status === HTTPStatusCode.UNAUTHORIZED) {
        const {dispatch} = store; // direct access to redux store.
        dispatch(actions.logout());
      }
      return Promise.reject(error);
    },
  );
};
