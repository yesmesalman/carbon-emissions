import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      leakage,
      permanence,
      quantifiable,
      key_measurements,
      data_collection_method,
      ownership,
      demonstration_ownership,
      recognition,
      baseline_scenario,
      baseline_scenario_result,
      additionality,
      financial,
      technological,
      social,
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

    if (isEmpty(leakage)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "leakage",
          message: "Please write Leakage",
        },
      ]);
    }

    if (isEmpty(permanence)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "permanence",
          message: "Please write Permanence",
        },
      ]);
    }

    if (isEmpty(quantifiable)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "quantifiable",
          message: "Please write Quantifiable",
        },
      ]);
    }

    if (isEmpty(key_measurements) || key_measurements?.length < 1) {
      return ApiResponse(false, "", [], true, [
        {
          field: "key_measurements",
          message: "Please select Key Measurements",
        },
      ]);
    }

    if (isEmpty(data_collection_method)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "data_collection_method",
          message: "Please write Data Collection Method",
        },
      ]);
    }

    if (isEmpty(ownership)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "ownership",
          message: "Please select Ownership",
        },
      ]);
    }

    if (isEmpty(demonstration_ownership)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "demonstration_ownership",
          message: "Please write Demonstration of GHG reductions ownership",
        },
      ]);
    }

    if (isEmpty(recognition)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "recognition",
          message: "Please select Recognition",
        },
      ]);
    }

    if (isEmpty(baseline_scenario)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "baseline_scenario",
          message: "Please write Baseline Scenario",
        },
      ]);
    }

    if (isEmpty(baseline_scenario_result)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "baseline_scenario_result",
          message: "Please write Baseline Scenario",
        },
      ]);
    }

    if (isEmpty(additionality)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "additionality",
          message: "Please write Additionality",
        },
      ]);
    }

    if (isEmpty(financial)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "financial",
          message: "Please write Financial",
        },
      ]);
    }

    if (isEmpty(technological)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "technological",
          message: "Please write Technological",
        },
      ]);
    }

    if (isEmpty(social)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "social",
          message: "Please write Social",
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

    const viability = await db.pINViability.create({
      data: {
        pin_id: projectPin.id,
        leakage,
        permanence,
        quantifiable,
        data_collection_method,
        ownership,
        demonstration_ownership,
        recognition,
        baseline_scenario,
        baseline_scenario_result,
        additionality,
        financial,
        technological,
        social,
      },
    });

    key_measurements.forEach(async (k) => {
      await db.pINViabilityKeyMeasurement.create({
        data: {
          pin_viability_id: viability.id,
          key_measurement_id: Number(k),
        },
      });
    });

    await db.projectPIN.update({
      where: {
        id: projectPin.id,
      },
      data: {
        step: 5,
      },
    });

    return ApiResponse(true, "project viability", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
