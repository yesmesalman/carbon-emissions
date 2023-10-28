import validator from "validator";

export const isEmpty = (e: any) => {
  if (e === undefined) return true;

  return validator.isEmpty(e);
};

export const isEmail = (e: any) => {
  return validator.isEmail(e);
};
