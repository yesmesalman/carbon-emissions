import { ApiResponse, Encrypt } from "@/helpers";
import { NextRequest } from "next/server";
import db from "../../../../helpers/db";

export async function POST(req: NextRequest) {
  try {
    const { people, planets, prosperity, project } = await req.json();

    const selectedProject = await db.project.findFirst({
      where: {
        code: project,
      },
    });

    // if project is not valid
    if (!selectedProject?.id) {
      return ApiResponse(
        false,
        "Project is not valid please go back to portfolio",
        []
      );
    }

    const projectPin = await db.projectPIN.findFirst({
      where: {
        project_id: selectedProject?.id,
      },
    });

    // if project pin is not valid
    if (!projectPin?.id) {
      return ApiResponse(
        false,
        "Project PIN is not valid please go back to portfolio",
        []
      );
    }

    const data = [
      ...people.map((p: any) => ({
        pin_id: projectPin?.id,
        section_name: "people",
        development_goal_id: p.SDG.id,
        development_goal_target_id: p.target.id,
        indicators: p.indicators,
      })),
      ...planets.map((p: any) => ({
        pin_id: projectPin?.id,
        section_name: "planets",
        development_goal_id: p.SDG.id,
        development_goal_target_id: p.target.id,
        indicators: p.indicators,
      })),
      ...prosperity.map((p: any) => ({
        pin_id: projectPin?.id,
        section_name: "prosperity",
        development_goal_id: p.SDG.id,
        development_goal_target_id: p.target.id,
        indicators: p.indicators,
      })),
    ];

    data.forEach(async (d) => {
      const benefit = await db.pINBenefit.create({
        data: {
          pin_id: d.pin_id,
          section_name: d.section_name,
          development_goal_id: d.development_goal_id,
          development_goal_target_id: d.development_goal_target_id,
        },
      });

      d.indicators.forEach(async (indicator: any) => {
        await db.pINBenefitIndicator.create({
          data: {
            pin_benefit_id: benefit.id,
            indicator_id: indicator.id,
          },
        });
      });
    });

    await db.projectPIN.update({
      where: {
        id: projectPin.id,
      },
      data: {
        step: 4,
      },
    });

    return ApiResponse(true, "", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
