import { OPEN_CHOOSE_SOCIAL, OPEN_CROP_IMAGE } from "./action";

const INITIAL_STATE = { openChooseSocial: false, openCropSocial: false };

export default function modal(
  state = INITIAL_STATE,
  action: { [key: string]: any }
) {
  switch (action.type) {
    case OPEN_CHOOSE_SOCIAL:
      return { ...state, openChooseSocial: action.payload };
    case OPEN_CROP_IMAGE:
      return { ...state, openCropSocial: action.payload };
    default:
      return state;
  }
}
