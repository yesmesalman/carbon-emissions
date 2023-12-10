import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      standard,
      methodology,
      quarter,
      validator,
      validationDate,
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

    if (isEmpty(standard)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "standard",
          message: "Please select standard",
        },
      ]);
    }

    if (isEmpty(methodology)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "methodology",
          message: "Please select methodology",
        },
      ]);
    }

    if (isEmpty(quarter)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "quarter",
          message: "Please select quarter",
        },
      ]);
    }

    if (isEmpty(validator)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "validator",
          message: "Please select validator",
        },
      ]);
    }

    if (isEmpty(validationDate)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "validation_date",
          message: "Please select validation date",
        },
      ]);
    }

    const existingProjectPDD = await db.projectPDD.findFirst({
      where: {
        project_id: selectedProject.id,
      },
    });

    const data = {
      project_id: selectedProject.id,
      standard_id: standard,
      methodology_id: methodology,
      quarter: quarter,
      design_document: "",
      validation: validator,
      validation_statement: "",
      validation_date: validationDate,
    };

    if (existingProjectPDD) {
      await db.projectPDD.update({
        where: {
          id: existingProjectPDD.id,
        },
        data: data,
      });
    } else {
      await db.projectPDD.create({
        data: data,
      });
    }

    await db.project.update({
      where: {
        id: selectedProject.id,
      },
      data: {
        step: 4,
      },
    });

    return ApiResponse(true, "Project PDD", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
