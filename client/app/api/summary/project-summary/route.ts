import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      owner,
      title,
      country,
      description,
      sectoralScope,
      technology,
      standard,
      methodology,
      existingMethodology,
      scale,
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

    if (isEmpty(owner)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "owner",
          message: "Please write Project Owner",
        },
      ]);
    }

    if (isEmpty(title)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "title",
          message: "Please write Project Title",
        },
      ]);
    }

    if (isEmpty(country)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "country",
          message: "Please select Country",
        },
      ]);
    }

    if (isEmpty(description)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "description",
          message: "Please write Description",
        },
      ]);
    }

    if (isEmpty(sectoralScope)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "sectoral-scope",
          message: "Please select Sectoral Scope",
        },
      ]);
    }

    if (isEmpty(technology)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "technology",
          message: "Please write Technology",
        },
      ]);
    }

    if (isEmpty(standard)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "standard",
          message: "Please select Standard",
        },
      ]);
    }

    if (isEmpty(methodology)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "methodology",
          message: "Please write Methodology",
        },
      ]);
    }

    if (isEmpty(existingMethodology)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "existing-methodology",
          message: "Please select Existing Methodology",
        },
      ]);
    }

    if (isEmpty(scale)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "scale",
          message: "Please select Scale",
        },
      ]);
    }

    const projectPin = await db.projectPIN.create({
      data: {
        project_id: selectedProject?.id,
        step: 1,
      },
    });

    const pinSummary = await db.pINSummary.create({
      data: {
        pin_id: projectPin?.id,
        owner: owner,
        title: title,
        country: country,
        description: description,
        sectoral_scopes_and_project_type_option_id: sectoralScope,
        technology: technology,
        standard_id: standard,
        methodology: methodology,
        existing_methodology_id: existingMethodology,
        scale_id: scale,
      },
    });

    return ApiResponse(true, "", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
