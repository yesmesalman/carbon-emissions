import { ApiResponse } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      categories,
      description,
      image,
      address,
      country,
      latitude,
      longitude,
      challange,
      solution,
      team,
      details,
      headquarters_address,
      registration_number,
      year_established,
      number_of_employees,
      about,
      email,
      phone,
      twitter,
      linkedin,
      facebook,
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

    if (isEmpty(name)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_name",
          message: "Please write Project Name",
        },
      ]);
    }

    if (isEmpty(categories) || categories.length < 1) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_categories",
          message: "Please select Project categories",
        },
      ]);
    }

    if (isEmpty(description)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_description",
          message: "Please write description",
        },
      ]);
    }

    if (isEmpty(image)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_image",
          message: "Please Select Project Image",
        },
      ]);
    }

    if (isEmpty(address)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_address",
          message: "Please write address",
        },
      ]);
    }

    if (isEmpty(country)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "country",
          message: "Please select country",
        },
      ]);
    }

    if (isEmpty(latitude)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_latitude",
          message: "Please write latitude",
        },
      ]);
    }

    if (isEmpty(longitude)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_longitude",
          message: "Please write longitude",
        },
      ]);
    }

    if (isEmpty(challange)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_challange",
          message: "Please write challange",
        },
      ]);
    }

    if (isEmpty(solution)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_solution",
          message: "Please write solution",
        },
      ]);
    }

    if (isEmpty(team)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_team",
          message: "Please write team",
        },
      ]);
    }

    if (isEmpty(details)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_details",
          message: "Please write details",
        },
      ]);
    }

    if (isEmpty(headquarters_address)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_hq_address",
          message: "Please write headquarter address",
        },
      ]);
    }

    if (isEmpty(registration_number)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_register_number",
          message: "Please write register number",
        },
      ]);
    }

    if (isEmpty(year_established)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_year",
          message: "Please write year established",
        },
      ]);
    }

    if (isEmpty(number_of_employees)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_no_of_employee",
          message: "Please write number of employees",
        },
      ]);
    }

    if (isEmpty(about)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_about",
          message: "Please write about",
        },
      ]);
    }

    if (isEmpty(email)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_email",
          message: "Please write email",
        },
      ]);
    }

    if (isEmpty(phone)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project_phone",
          message: "Please write phone",
        },
      ]);
    }

    if (isEmpty(twitter)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "twitter",
          message: "Please write twitter",
        },
      ]);
    }

    if (isEmpty(linkedin)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "linkedin",
          message: "Please write linkedin",
        },
      ]);
    }

    if (isEmpty(facebook)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "facebook",
          message: "Please write facebook",
        },
      ]);
    }

    const data = {
      project_id: selectedProject.id,
      name,
      image: image,
      description,
      address,
      country,
      latitude,
      longitude,
      challenge: challange,
      solution,
      team,
      details,
      headquarters_address,
      registration_number,
      year_established,
      number_of_employees,
      about,
      email,
      phone,
      twitter,
      linkedin,
      facebook,
    };

    const existingProjectOverview = await db.porjectOverview.findFirst({
      where: {
        project_id: selectedProject.id,
      },
    });

    var projectOverview = undefined;

    if (existingProjectOverview) {
      projectOverview = await db.porjectOverview.update({
        where: {
          id: existingProjectOverview.id,
        },
        data: data,
      });
    } else {
      projectOverview = await db.porjectOverview.create({
        data: data,
      });
    }

    categories.map(async (c: any) => {
      await db.projectOverviewCategory.deleteMany({
        where: {
          project_id: selectedProject.id,
        },
      });

      await db.projectOverviewCategory.create({
        data: {
          project_id: selectedProject.id,
          category_id: Number(c),
        },
      });
    });

    await db.project.update({
      where: {
        id: selectedProject.id,
      },
      data: {
        step: 2,
      },
    });

    return ApiResponse(true, "create project overview", {});
  } catch (error) {
    return ApiResponse(false, error, []);
  }
}
