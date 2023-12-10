import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const { start, end, amount, registerationDate, registyUrl, project } =
      await req.json();

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

    if (isEmpty(start)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "start",
          message: "Please select start year",
        },
      ]);
    }

    if (isEmpty(end)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "end",
          message: "Please select end year",
        },
      ]);
    }

    if (isEmpty(amount)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "amount",
          message: "Please write carbon amount",
        },
      ]);
    }

    if (isEmpty(registerationDate)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "registeration_date",
          message: "Please write registeration date",
        },
      ]);
    }

    if (isEmpty(registyUrl)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "registry_url",
          message: "Please write registry URL",
        },
      ]);
    }

    const data = {
      project_id: selectedProject.id,
      start_year: start,
      end_year: end,
      carbon_amount: Number(amount),
      registration_date: registerationDate,
      proof_of_registration: "",
      registry_url: registyUrl,
    };

    const existingProjectRegistration = await db.projectRegistration.findFirst({
      where: {
        project_id: selectedProject.id,
      },
    });

    if (existingProjectRegistration) {
      await db.projectRegistration.update({
        where: {
          id: existingProjectRegistration.id,
        },
        data: data,
      });
    } else {
      await db.projectRegistration.create({
        data: data,
      });
    }

    await db.project.update({
      where: {
        id: selectedProject.id,
      },
      data: {
        step: 5,
      },
    });

    return ApiResponse(true, "Project Registration", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
