import {AxiosError, AxiosResponse} from 'axios';

import {APIErrorCode, HTTPStatusCode, serverErrorDataToString} from './helper';
import {HTTPRequest} from '../infra/http/type';

const ERROR_CODE = [
  APIErrorCode.CODE_EXPIRED,
  APIErrorCode.CODE_LIMIT_REACHED,
  APIErrorCode.SCORE_BOARD_NOT_FOUND,
  APIErrorCode.NOT_A_MEMBER,
  APIErrorCode.ALREADY_JOINED,
];

/**
 * HTTP request function wrapper to handle error
 *
 * @param {HTTPRequest} func
 * @returns {HTTPRequest}
 */
export function serviceErrorHandler(func: HTTPRequest): HTTPRequest {
  return async (params: any): Promise<AxiosResponse> => {
    try {
      const res = await func(params);

      /**
       * application level error
       * status still 200
       * e.g {
       *  "message": exc.msg,
       *  "success": False,
       * }
       */
      if (res.data?.success === false) {
        throw res.data;
      }

      if (res.data?.errorCode) {
        throw {
          message: res.data?.error?.value,
          code: res.data?.errorCode,
        };
      }

      if (res.data?.error) {
        // e.g: {"error": {"name": "Ugyldig kode", "resourceNotFound": true, "searchedLocation": null, "value": "Ugyldig kode"}}
        throw new Error(res.data?.error?.value);
      }

      if (res.data?.errors) {
        // e.g: {"errors": {"additionalProp1": "string","additionalProp2": "string","additionalProp3": "string"}}
        let errorMessage = '';

        const errorValues = Object.values(res.data?.errors);

        Object.keys(res.data?.errors).forEach(
          (key, index) =>
            (errorMessage += key
              ? key // error from billing server
              : errorValues[index]), // use error value if error key unavailable
        );
        throw new Error(errorMessage);
      }

      return res;
    } catch (e) {
      const error = e as AxiosError;

      let message;

      if (error.response) {
        // // Handle unauthorized case
        // // Refresh token expired - need login again
        console.log('[ERROR status]:', error.response.status);
        if (
          error.response.status === HTTPStatusCode.BAD_REQUEST
          //   error.config.url === API_CONFIG.RefreshTokenEndPoint
        ) {
          message = 'API_Unauthorized';
        } else {
          message = serverErrorDataToString(error.response.data);
        }

        // } else if (error.request) {
        //     // The request was made but no response was received
        //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //     // http.ClientRequest in node.js
        //     message = error.request;
      } else {
        if (error.code === HTTPStatusCode.TIMEOUT_ERROR) {
          message = 'TIMEOUT_ERROR';
        } else if (
          // Some special cases related to passcode need the error code to handle how the popup display so need to throw the error object here instead of only the error message
          error.code &&
          ERROR_CODE.includes(error.code)
        ) {
          throw error;
        } else {
          // Something happened in setting up the request that triggered an Error
          message = error.message;
        }
      }

      // branch here to differ axios network error sentry exception fingerprint
      // https://docs.sentry.io/product/sentry-basics/grouping-and-fingerprints/
      if (
        error.message &&
        error.message.toLocaleLowerCase() === 'network error'
      ) {
        throw new Error('Axios network error');
      } else {
        error.message = message;
        throw error;
      }
    }
  };
}
