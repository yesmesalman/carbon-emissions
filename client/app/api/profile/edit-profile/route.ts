import {
  ApiResponse,
  Decrypt,
  Encrypt,
  createToken,
  getLoggedInUser,
  verifyToken,
} from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty, isEmail } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { token, name, username } = await req.json();

    if (isEmpty(token)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "email",
          message: "Token is required",
        },
      ]);
    }

    const user = getLoggedInUser(token);

    if (isEmpty(name)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "name",
          message: "Please write name",
        },
      ]);
    }

    if (isEmpty(username)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "username",
          message: "Please write username",
        },
      ]);
    }

    const usernameUser = await db.user.findUnique({
      where: {
        username: username,
        NOT: {
          id: user?.id,
        },
      },
    });

    if (usernameUser) {
      return ApiResponse(false, "", [], true, [
        {
          field: "username",
          message: "User with this username already exists",
        },
      ]);
    }

    await db.user.update({
      where: {
        id: user?.id,
      },
      data: {
        name,
        username,
      },
    });

    return ApiResponse(true, "User Profile updated", {
      token: token,
      user: verifyToken(token),
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
