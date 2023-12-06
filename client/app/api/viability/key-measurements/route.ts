import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type KeyMeasurementProp = {
  id: number;
  name: string;
};

export async function POST() {
  try {
    const data: KeyMeasurementProp[] = await db.keyMeasurement.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return ApiResponse(true, "Key Measurements", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
