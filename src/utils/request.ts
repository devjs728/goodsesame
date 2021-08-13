import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getToken } from "./auth";

const baseUrl = "https://staging.goodsesame.com/api/v2/";
const apiKey = "t37P6AB98HeCHYwtKz6JcEk2so7DLf";

export const request: AxiosInstance = axios.create({
  baseURL: baseUrl,
  params: { apikey: apiKey },
});

let cancelTokenSource = axios.CancelToken.source();

export const authRequest = (options: AxiosRequestConfig): Promise<any> => {
  const token = getToken();
  if (!token) {
    return new Promise((resolve, reject) => {
      reject("Token is unavailable");
    });
  }
  cancelTokenSource = axios.CancelToken.source();
  const request = axios.create({
    baseURL: baseUrl,
    params: { apikey: apiKey, access_token: token },
    cancelToken: cancelTokenSource.token,
  });
  return request(options);
};

export function cancelRequest() {
  cancelTokenSource.cancel();
}
