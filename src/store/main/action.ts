export const SET_TOAST: string = "SET_TOAST";

export enum ToastStatus {
  success,
  warning,
  failed,
}

export interface ToastInfo {
  status: ToastStatus;
  message: string;
}

export const setToastify = (toast: ToastInfo) => {
  return { type: SET_TOAST, payload: toast };
};
