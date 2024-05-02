import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getHeader, THeader } from "./header.ts";

// Default API will be your root
const API_ROOT = process.env.API_ENDPOINT || "";
const TIMEOUT = 20000;

/**
 * API call utility function
 *
 * @param {THeader} headerType
 * @param {string} baseURL
 * @param {number} timeout
 * @returns
 */
const http = (
  headerType: THeader = "json",
  baseURL: string = API_ROOT,
  timeout: number = TIMEOUT
) => {
  const headers = getHeader(headerType);

  const client: AxiosInstance = axios.create({
    baseURL,
    timeout,
    headers,
  });

  // Intercept response object and handleSuccess and Error Object
  client.interceptors.response.use(handleSuccess, handleError);

  function handleSuccess(response: AxiosResponse) {
    return response.data;
  }

  /** Intercept any unauthorized request.
   * status 401 means either accessToken is expired or invalid
   * dispatch logout action accordingly **/
  function handleError(error: AxiosError) {
    // const status = error.response?.status;
    const data = error.response?.data;
    // if (status === 401) {
    //   const dispatch = store.dispatch;
    //   dispatch(logout());
    // }
    return Promise.reject(data);
  }

  function get(path: string, config?: AxiosRequestConfig) {
    return client.get(path, config);
  }

  function post(path: string, payload: any, config?: AxiosRequestConfig) {
    return client.post(path, payload, config);
  }

  function put(path: string, payload: any, config?: AxiosRequestConfig) {
    return client.put(path, payload, config);
  }

  function patch(path: string, payload: any, config?: AxiosRequestConfig) {
    return client.patch(path, payload, config);
  }

  function _delete(path: string, data?: any, config?: AxiosRequestConfig) {
    if (data) {
      return client.delete(path, { data: data }, config);
    }
    return client.delete(path);
  }

  return {
    get,
    post,
    put,
    patch,
    delete: _delete,
  };
};

export default http;
