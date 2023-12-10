import { ApiResponse, generateRandomString } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { project } = await req.json();

    return ApiResponse(true, "", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
