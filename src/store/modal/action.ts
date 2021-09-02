export const OPEN_CHOOSE_SOCIAL: string = "OPEN_CHOOSE_SOCIAL";
export const OPEN_CROP_IMAGE: string = "OPEN_CROP_IMAGE";

export const openChooseSocialModal = (open: boolean) => {
  return { type: OPEN_CHOOSE_SOCIAL, payload: open };
};

export const openCropImageModal = (open: boolean) => {
  return { type: OPEN_CROP_IMAGE, payload: open };
};
