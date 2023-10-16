import { ApiResponse } from "@/helpers";
import db from "./../../../helpers/db";

export async function GET() {
  try {
    const users = await db.user.findMany();

    return ApiResponse(true, "message", users);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
