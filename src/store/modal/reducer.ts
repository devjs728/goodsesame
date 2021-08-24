import { OPEN_CHOOSE_SOCIAL } from "./action";

const INITIAL_STATE = { openChooseSocial: false };

export default function modal(
  state = INITIAL_STATE,
  action: { [key: string]: any }
) {
  switch (action.type) {
    case OPEN_CHOOSE_SOCIAL:
      return { ...state, openChooseSocial: action.payload };
    default:
      return state;
  }
}
