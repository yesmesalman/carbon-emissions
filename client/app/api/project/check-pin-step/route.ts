import { ApiResponse, generateRandomString } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";

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

    const projectPIN = await db.projectPIN.findFirst({
      where: {
        project_id: selectedProject.id,
      },
      select: {
        id: true,
        project_id: true,
        step: true,
      },
    });

    return ApiResponse(true, "check pin steps", {
      project_pin: projectPIN,
    });
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
