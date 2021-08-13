import { Dispatch } from "react";
import { getProfile as getProfileAxios } from "../../api/user";

export const SET_PROFILE: string = "SET_PROFILE";

export const getUserProfile = () => async (dispatch: Dispatch<any>) => {
  try {
    const profile = await getProfileAxios();
    dispatch({ type: SET_PROFILE, payload: profile });
  } catch (err) {
    throw err;
  }
};
