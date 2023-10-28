import {
  ApiResponse,
  Decrypt,
  Encrypt,
  createToken,
  verifyToken,
} from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty, isEmail } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (isEmpty(token)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "email",
          message: "Token is required",
        },
      ]);
    }

    return ApiResponse(true, "message", {
      token: token,
      user: verifyToken(token),
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
