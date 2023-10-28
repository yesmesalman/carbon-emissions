import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty, isEmail } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { name, username, email, password } = await req.json();

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
          message: "Please write valid Password",
        },
      ]);
    }

    const usernameUser = await db.user.findUnique({
      where: {
        username: username,
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

    const emailUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (emailUser) {
      return ApiResponse(false, "", [], true, [
        {
          field: "email",
          message: "User with this Email already exists",
        },
      ]);
    }

    const encryptedPassword = Encrypt(password);

    await db.user.create({
      data: {
        name,
        username,
        email,
        password: encryptedPassword,
        role_id: Number(process.env.DEFAULT_USER_ROLE_ID),
      },
    });

    return ApiResponse(true, "New account created!", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
