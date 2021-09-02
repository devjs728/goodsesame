export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const calculateScore = (score: number) => {
  if (score >= 1115) {
    return "+++++";
  } else if (score >= 665 && score < 1115) {
    return "++++";
  } else if (score >= 420 && score < 665) {
    return "+++";
  } else if (score >= 250 && score < 420) {
    return "++";
  }
  return "+";
};

export const calculatePrice = (priceTier: number) => {
  if (priceTier > 2) {
    return "€€€";
  } else if (priceTier > 1) {
    return "€€";
  } else {
    return "€";
  }
};
