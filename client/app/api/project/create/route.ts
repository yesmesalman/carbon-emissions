import { ApiResponse, generateRandomString } from "@/helpers";
import db from "../../../../helpers/db";

export type carbonStandardType = {
  id: number;
  name: string;
  value?: string | number;
  label?: string;
  childrens?: carbonStandardType[];
};

export async function POST() {
  try {
    const data = await db.project.create({
      data: {
        code: generateRandomString(22),
        step: 1,
      },
    });

    return ApiResponse(true, "carbon standards", {
      id: data.id,
      code: data.code,
      step: data.step,
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
