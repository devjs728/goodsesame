import { UserInfo } from "../interface/userInfo";
import { request } from "../utils/request";

export const signIn = (email: string, password: string): Promise<UserInfo> => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);

    request({ url: "/login", method: "post", data })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
