import validator from "validator";

export const isEmpty = (e: any) => {
  if (e === undefined) return true;
  if (e === "") return true;
  if (e === null) return true;
  if (e === 0) return true;

  return false;
};

export const isEmail = (e: any) => {
  return validator.isEmail(e);
};
