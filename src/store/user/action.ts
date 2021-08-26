import { Dispatch } from "react";
import {
  getProfile as getProfileAxios,
  setFamilyMember as setFamilyMemberAxios,
} from "../../api/user";

export const SET_PROFILE: string = "SET_PROFILE";
export const SET_FAMILY_MEMBER: string = "SET_FAMILY_MEMBER";

export const getUserProfile = () => async (dispatch: Dispatch<any>) => {
  try {
    const profile = await getProfileAxios();
    dispatch({ type: SET_PROFILE, payload: profile });
  } catch (err) {
    throw err;
  }
};

export const setFamilyMember =
  (adult: number, child: number) => async (dispatch: Dispatch<any>) => {
    try {
      const family = await setFamilyMemberAxios(adult, child);
      dispatch({ type: SET_FAMILY_MEMBER, payload: family });
    } catch (err) {
      throw err;
    }
  };
