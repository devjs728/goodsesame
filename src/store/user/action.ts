import { Dispatch } from 'react';
import { getProfile as getProfileAxios } from '../../api/user';

export const SET_PROFILE = 'SET_PROFILE';

export const getUserProfile = () => async (dispatch: Dispatch<any>) => {
  const profile = await getProfileAxios();
  dispatch({ type: SET_PROFILE, payload: profile });
};
