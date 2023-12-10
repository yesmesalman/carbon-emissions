import { ApiResponse, generateRandomString, getLoggedInUser } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    const user = getLoggedInUser(token);

    var projects = await db.project.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        PorjectOverview: true,
        PorjectOverviewCategories: {
          include: {
            Category: true,
          },
        },
      },
    });

    return ApiResponse(true, "projects", projects);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
