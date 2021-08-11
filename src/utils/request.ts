import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getToken } from "./auth";

const baseUrl = "https://staging.goodsesame.com/api/v2/user/";
const apiKey = "t37P6AB98HeCHYwtKz6JcEk2so7DLf";

export const request: AxiosInstance = axios.create({
  baseURL: baseUrl,
  params: { apikey: apiKey },
});

let cancelTokenSource = axios.CancelToken.source();

export const authRequest = (
  options: AxiosRequestConfig
): Promise<any> | null => {
  const token = getToken();
  if (!token) {
    return null;
  }
  cancelTokenSource = axios.CancelToken.source();
  const request = axios.create({
    baseURL: process.env.BASE_API,
    params: { apikey: apiKey, access_token: token },
    cancelToken: cancelTokenSource.token,
  });
  return request(options);
};

export function cancelRequest() {
  cancelTokenSource.cancel();
}
