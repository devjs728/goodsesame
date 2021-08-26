import { SET_FAMILY_MEMBER, SET_PROFILE } from "./action";

const INITIAL_STATE = {};

export default function user(
  state = INITIAL_STATE,
  action: { [key: string]: any }
) {
  switch (action.type) {
    case SET_PROFILE:
      return action.payload;
    case SET_FAMILY_MEMBER:
      return { ...state, family_members: action.payload };
    default:
      return state;
  }
}
