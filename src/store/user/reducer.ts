import { SET_PROFILE } from './action';

const INITIAL_STATE = { info: null };

export default function user(
  state = INITIAL_STATE,
  action: { [key: string]: any },
) {
  switch (action.type) {
    case SET_PROFILE:
      return { ...state, info: action.payload };
    default:
      return state;
  }
}
