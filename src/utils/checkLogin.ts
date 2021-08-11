import { getToken } from "./auth";

export const checkLogin = (): boolean => {
  return !!getToken();
};
