import { ApiResponse, generateRandomString, getLoggedInUser } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token, project_id, documents } = await req.json();

    const user = getLoggedInUser(token);

    const selectedProject = await db.project.findFirst({
      where: {
        code: project_id,
      },
    });

    await db.projectDocument.createMany({
      data: documents.map((d: any) => ({
        project_id: selectedProject?.id,
        title: d.title,
        type: d.type,
        document: d.document,
      })),
    });

    return ApiResponse(true, "project documents", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
