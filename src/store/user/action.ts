import { Dispatch } from "react";
import {
  getProfile as getProfileAxios,
  editProfile as editProfileAxios,
} from "../../api/user";
import { SetUerInfo } from "../../interface/userInfo";
import { setToastify, ToastStatus } from "../main/action";

export const SET_PROFILE: string = "SET_PROFILE";
export const EDIT_PROFILE: string = "EDIT_PROFILE";

export const getUserProfile = () => async (dispatch: Dispatch<any>) => {
  try {
    const profile = await getProfileAxios();
    dispatch({ type: SET_PROFILE, payload: profile });
  } catch (err) {
    throw err;
  }
};

export const editProfile =
  (data: SetUerInfo | FormData) => async (dispatch: Dispatch<any>) => {
    try {
      const profile = await editProfileAxios(data);
      dispatch({ type: EDIT_PROFILE, payload: profile });
      dispatch(
        setToastify({
          status: ToastStatus.success,
          message: "Profil modifié avec succès",
        })
      );
    } catch (err) {
      throw err;
    }
  };
