import { ApiResponse } from "@/helpers";
import { NextResponse } from "next/server";
import db from "./../../..//helpers/db"

export async function GET() {
  try {

    const users = await db.user.findMany();

    console.log("users", users)
    return ApiResponse(true, "message", users);
  } catch (error) {
    return ApiResponse(false, "catch", []);
  }
}
