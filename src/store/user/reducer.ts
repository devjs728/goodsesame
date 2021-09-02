import { EDIT_PROFILE, SET_PROFILE } from "./action";

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
    default:
      return state;
  }
}
