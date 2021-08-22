const ACCESS_TOKEN = '_access_token';

export const setToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN);
};
