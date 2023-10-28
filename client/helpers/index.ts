import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

type ValidationType = {
  field: string;
  message: string;
};

export function ApiResponse(
  success: any,
  message: any,
  data: any,
  validation: Boolean = false,
  validationArr: ValidationType[] = []
) {
  let statusResponse = {
    status: 400,
  };

  if (success) {
    statusResponse = {
      status: 200,
    };
  }

  if (validation) {
    message = "VALIDATION_ERROR";
    data = validationArr;
  }

  return NextResponse.json({ success, message, data }, statusResponse);
}

export function Encrypt(e: any) {
  const base64String = btoa(e);
  return base64String;
}

export function Decrypt(e: any) {
  const base64String = atob(e);
  return base64String;
}

export function createToken(data: any) {
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "2h",
  });

  return token;
}

export function verifyToken(token: any) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  return decoded;
}
