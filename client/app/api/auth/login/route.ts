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
    const { email, password } = await req.json();

    if (isEmpty(email) || !isEmail(email)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "email",
          message: "Please write valid Email",
        },
      ]);
    }

    if (isEmpty(password)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "password",
          message: "Please write Password",
        },
      ]);
    }

    const user = await db.user.findUnique({
      where: {
        email: email,
        password: Encrypt(password),
      },
      select: {
        id: true,
        email: true,
        name: true,
        username: true,
        role_id: true,
        profile_picture: true,
      },
    });

    if (!user) {
      throw "Account with this email and password does not exist";
    }

    const token = createToken({
      user,
    });

    return ApiResponse(true, "message", {
      token: token,
      user: verifyToken(token),
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
