import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      projectScale,
      summaryDescription,
      calculationMethod,
      baselineScenario,
      additionality,
      monitoring,
      project,
    } = await req.json();

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

    if (isEmpty(projectScale)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project-scale",
          message: "Please write project scale",
        },
      ]);
    }

    if (isEmpty(summaryDescription)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "summary-description",
          message: "Please write summary description",
        },
      ]);
    }

    if (isEmpty(calculationMethod)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "calculation-method",
          message: "Please write calculation method",
        },
      ]);
    }

    if (isEmpty(baselineScenario)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "baseline-scenario",
          message: "Please write baseline scenario",
        },
      ]);
    }

    if (isEmpty(additionality)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "additionality",
          message: "Please write additionality",
        },
      ]);
    }

    if (isEmpty(monitoring)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "monitoring",
          message: "Please write monitoring",
        },
      ]);
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

    const pinEmission = await db.pINEmission.create({
      data: {
        pin_id: projectPin.id,
        project_scale: projectScale,
        description: summaryDescription,
        calculation_method: calculationMethod,
        baseline_scenario: baselineScenario,
        additionality: additionality,
        monitoring: monitoring,
      },
    });

    await db.projectPIN.update({
      where: {
        id: projectPin.id,
      },
      data: {
        step: 3,
      },
    });

    return ApiResponse(true, "", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
