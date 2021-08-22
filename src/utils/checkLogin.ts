import { getToken } from './auth';

const checkLogin = (): boolean => {
  return !!getToken();
};

export default checkLogin;
