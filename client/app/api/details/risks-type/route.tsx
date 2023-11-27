import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type RisksTypeProp = {
  id: number;
  name: string;
};

export async function POST() {
  try {
    const data: RisksTypeProp[] = await db.riskType.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return ApiResponse(true, "Risks type", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
