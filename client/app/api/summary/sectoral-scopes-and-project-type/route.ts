import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";

type sectoralScopesAndProjectTypeProp = {
  id: number;
  name: string;
  value?: string | number;
  label?: string;
  parent_id?: number | null;
  childrens?: sectoralScopesAndProjectTypeProp[];
};

const getGrandChildrens = async (childId: number) => {
  const data: sectoralScopesAndProjectTypeProp[] =
    await db.sectoralScopesAndProjectTypeOption.findMany({
      where: {
        parent_id: childId,
      },
      select: {
        id: true,
        name: true,
        parent_id: true,
      },
    });

  await Promise.all(
    data.map(async (e) => {
      e.value = e.id;
      e.label = e.name;
    })
  );

  return data;
};

const getChildrens = async (id: number) => {
  const data: sectoralScopesAndProjectTypeProp[] =
    await db.sectoralScopesAndProjectTypeOption.findMany({
      where: {
        sectoral_scopes_and_project_type_id: id,
        parent_id: null,
      },
      select: {
        id: true,
        name: true,
        parent_id: true,
      },
    });

  await Promise.all(
    data.map(async (e) => {
      e.value = e.id;
      e.label = e.name;
      e.childrens = await getGrandChildrens(e.id);
    })
  );

  return data;
};

export async function POST() {
  try {
    const data: sectoralScopesAndProjectTypeProp[] =
      await db.sectoralScopesAndProjectType.findMany({
        select: {
          id: true,
          name: true,
        },
      });

    await Promise.all(
      data.map(async (e) => {
        e.value = e.id;
        e.label = e.name;
        e.childrens = await getChildrens(e.id);
      })
    );

    return ApiResponse(true, "sectoral scopes and project types", data);
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
