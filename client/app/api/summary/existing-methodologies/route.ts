import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type ExistingMethodologyProp = {
  id: number;
  name: string;
};

export async function POST() {
  try {
    const data: ExistingMethodologyProp[] =
      await db.existingMethodology.findMany({
        select: {
          id: true,
          name: true,
        },
      });

    return ApiResponse(true, "Existing Methodologies", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
