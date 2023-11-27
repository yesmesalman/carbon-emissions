import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

export type FinanceSourceProp = {
  id: number;
  name: string;
};

export async function POST() {
  try {
    const data: FinanceSourceProp[] = await db.financeSource.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    return ApiResponse(true, "Sources of Finance", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
