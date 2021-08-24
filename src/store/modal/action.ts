export const OPEN_CHOOSE_SOCIAL: string = "OPEN_CHOOSE_SOCIAL";

export const openChooseSocialModal = (open: boolean) => {
  return { type: OPEN_CHOOSE_SOCIAL, payload: open };
};
