import { UserInfo } from "../interface/userInfo";
import { authRequest, request } from "../utils/request";

const SUB_URL = "user";

export const signIn = (email: string, password: string): Promise<UserInfo> => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    request({ url: `${SUB_URL}/login`, method: "post", data })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProfile = (): Promise<UserInfo> => {
  return new Promise((resolve, reject) => {
    authRequest({ url: `${SUB_URL}/profile`, method: "get" })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
