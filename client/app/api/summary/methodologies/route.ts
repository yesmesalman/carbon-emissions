import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type MethodologyProp = {
  id: number;
  name: string;
  link: string | null;
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

    return ApiResponse(true, "Methodologies", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
