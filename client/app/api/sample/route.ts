import { ApiResponse } from "../helpers";
import excuteQuery from "../helpers/db";

export async function GET() {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM users",
      values: [],
    });
    return ApiResponse(true, "", result);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
