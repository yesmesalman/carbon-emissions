import { ApiResponse, generateRandomString, getLoggedInUser } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";

export type carbonStandardType = {
  id: number;
  name: string;
  value?: string | number;
  label?: string;
  childrens?: carbonStandardType[];
};

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const user = getLoggedInUser(token);

    const data = await db.project.create({
      data: {
        user_id: user.id,
        code: generateRandomString(22),
        step: 1,
      },
    });

    return ApiResponse(true, "project created", {
      id: data.id,
      code: data.code,
      step: data.step,
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
