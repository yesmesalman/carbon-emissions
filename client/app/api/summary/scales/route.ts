import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type ScaleProp = {
  id: number;
  name: string;
  value?: number;
  label?: string;
};

export async function POST() {
  try {
    const data: ScaleProp[] = await db.scale.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    await Promise.all(
      data.map(async (e) => {
        e.value = e.id;
        e.label = e.name;
      })
    );

    return ApiResponse(true, "Scales", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
