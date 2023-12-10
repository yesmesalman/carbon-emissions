import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type MethodologyProp = {
  id: number;
  name: string;
  link: string | null;
  value?: string | number;
  label?: string;
  childrens?: MethodologyProp[];
};

export async function POST() {
  try {
    const data: MethodologyProp[] = await db.methodology.findMany({
      select: {
        id: true,
        name: true,
        link: true,
      },
    });

    await Promise.all(
      data.map(async (e) => {
        e.value = e.id;
        e.label = e.name;
        e.childrens = [];
      })
    );

    return ApiResponse(true, "Methodologies", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
