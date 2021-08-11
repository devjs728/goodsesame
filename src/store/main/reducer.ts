import { SET_TOAST } from "./action";

const INITIAL_STATE = {
  toastify: null,
};

export default function main(
  state = INITIAL_STATE,
  action: { [key: string]: any }
) {
  switch (action.type) {
    case SET_TOAST:
      return { ...state, toastify: action.payload };
    default:
      return state;
  }
}
