import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty, isEmail } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { project } = await req.json();

    const selectedProject = await db.project.findFirst({
      where: {
        code: project,
      },
    });

    // if project is not valid
    if (!selectedProject?.id) {
      return ApiResponse(
        false,
        "Project is not valid please go back to portfolio",
        []
      );
    }

    return ApiResponse(true, "", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
