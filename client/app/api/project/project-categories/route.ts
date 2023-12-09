import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type ProjectCategoryProp = {
  id: number;
  name: string;
};

export async function POST() {
  try {
    const categories: ProjectCategoryProp[] = await db.projectCategory.findMany(
      {
        select: {
          id: true,
          name: true,
        },
      }
    );

    return ApiResponse(true, "project categories", categories);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
