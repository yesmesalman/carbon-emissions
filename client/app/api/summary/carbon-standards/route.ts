import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type carbonStandardType = {
  id: number;
  name: string;
  value?: string | number;
  label?: string;
  childrens?: carbonStandardType[];
};

export async function POST() {
  try {
    const data: carbonStandardType[] = await db.carbonStandard.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    await Promise.all(
      data.map(async (e) => {
        e.value = e.id;
        e.label = e.name;
        e.childrens = [];
      })
    );

    return ApiResponse(true, "carbon standards", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
