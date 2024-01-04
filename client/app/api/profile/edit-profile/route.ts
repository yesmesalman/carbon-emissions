import { ApiResponse, getLoggedInUser } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty, isEmail } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { token, name, username, profile_picture } = await req.json();

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

    const updateData = {
      name,
      username,
    };

    if (profile_picture) {
      // @ts-ignore
      updateData.profile_picture = profile_picture;
    }

    const updatedUser = await db.user.update({
      where: {
        id: user?.id,
      },
      data: updateData,
    });

    const newUser = await db.user.findUnique({
      where: {
        id: updatedUser.id,
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

    return ApiResponse(true, "User Profile updated", {
      token: token,
      user: {
        user: newUser
      },
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
