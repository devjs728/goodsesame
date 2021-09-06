import { EDIT_PROFILE, SET_PROFILE, UPDATE_BANNER } from "./action";

const INITIAL_STATE = {};

export default function user(
  state = INITIAL_STATE,
  action: { [key: string]: any }
) {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    case EDIT_PROFILE:
      return { ...state, ...action.payload };
    case UPDATE_BANNER:
      return { ...state, banner: action.payload };
    default:
      return state;
  }
}
