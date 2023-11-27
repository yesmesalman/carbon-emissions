import { ApiResponse, Encrypt } from "@/helpers";
import db from "../../../../helpers/db";
import { NextRequest } from "next/server";
import { isEmpty } from "@/helpers/validator";

export async function POST(req: NextRequest) {
  try {
    const {
      description,
      innovation,
      sourceOfFinance,
      fundingStatus,
      risks,
      assumptions,
      name,
      organization,
      address,
      phone,
      email,
      website,
      descriptionOfOrganization,
      experienceWithCarbonMarkets,
      experienceWithThisProjectType,
      developerName,
      developerOrganization,
      developerAddress,
      developerPhone,
      developerEmail,
      developerWebsite,
      developerDescriptionOfOrganization,
      developerExperienceWithCarbonMarkets,
      developerExperienceWithThisProjectType,
      currentStatusOfProject,
      projectStartDate,
      yearOffsetDelivery,
      projectEndDate,
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

    if (isEmpty(description)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "description",
          message: "Please write Description",
        },
      ]);
    }

    if (isEmpty(innovation)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "innovation",
          message: "Please write Innovation",
        },
      ]);
    }

    if (isEmpty(sourceOfFinance) || sourceOfFinance.length === 0) {
      return ApiResponse(false, "", [], true, [
        {
          field: "source-of-finance",
          message: "Please select source of finance",
        },
      ]);
    }

    if (isEmpty(fundingStatus)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "funding-status",
          message: "Please write funding status",
        },
      ]);
    }

    if (isEmpty(risks) || risks.length === 0) {
      return ApiResponse(false, "", [], true, [
        {
          field: "risks",
          message: "Please select Risks",
        },
      ]);
    }

    if (isEmpty(assumptions)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "assumptions",
          message: "Please write Assumptions",
        },
      ]);
    }

    if (isEmpty(name)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "name",
          message: "Please write Name",
        },
      ]);
    }

    if (isEmpty(organization)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "organization",
          message: "Please write Organization",
        },
      ]);
    }

    if (isEmpty(address)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "address",
          message: "Please write Address",
        },
      ]);
    }

    if (isEmpty(phone)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "phone",
          message: "Please write Phone",
        },
      ]);
    }

    if (isEmpty(email)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "email",
          message: "Please write Email",
        },
      ]);
    }

    if (isEmpty(website)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "website",
          message: "Please write Website",
        },
      ]);
    }

    if (isEmpty(descriptionOfOrganization)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "description-of-organization",
          message: "Please write description",
        },
      ]);
    }

    if (isEmpty(experienceWithCarbonMarkets)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "experience-with-carbon-markets",
          message: "Please write experience",
        },
      ]);
    }

    if (isEmpty(experienceWithThisProjectType)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "experience-with-this-project-type",
          message: "Please write experience",
        },
      ]);
    }

    if (isEmpty(developerName)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-name",
          message: "Please write name",
        },
      ]);
    }

    if (isEmpty(developerOrganization)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-organization",
          message: "Please write organization",
        },
      ]);
    }

    if (isEmpty(developerAddress)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-address",
          message: "Please write address",
        },
      ]);
    }

    if (isEmpty(developerPhone)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-phone",
          message: "Please write phone",
        },
      ]);
    }

    if (isEmpty(developerEmail)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-email",
          message: "Please write email",
        },
      ]);
    }

    if (isEmpty(developerWebsite)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-website",
          message: "Please write website",
        },
      ]);
    }

    if (isEmpty(developerDescriptionOfOrganization)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-description-of-organization",
          message: "Please write description",
        },
      ]);
    }

    if (isEmpty(developerExperienceWithCarbonMarkets)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-experience-with-carbon-markets",
          message: "Please write experience",
        },
      ]);
    }

    if (isEmpty(developerExperienceWithThisProjectType)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "developer-experience-with-this-project-type",
          message: "Please write experience",
        },
      ]);
    }

    if (isEmpty(currentStatusOfProject)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "current-status-of-project",
          message: "Please write status",
        },
      ]);
    }

    if (isEmpty(projectStartDate)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project-start-date",
          message: "Please select start date",
        },
      ]);
    }

    if (isEmpty(yearOffsetDelivery)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "year-offset-delivery",
          message: "Please select year offset delivery",
        },
      ]);
    }

    if (isEmpty(projectEndDate)) {
      return ApiResponse(false, "", [], true, [
        {
          field: "project-end-date",
          message: "Please select end date",
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

    const pinDetail = await db.pINDetails.create({
      data: {
        pin_id: projectPin.id,
        description: description,
        innovation: innovation,
        funding_status: fundingStatus,
        assumptions: assumptions,
        name: name,
        organization: organization,
        address: address,
        phone: phone,
        email: email,
        website: website,
        description_of_organization: descriptionOfOrganization,
        experience_with_carbon_markets: experienceWithCarbonMarkets,
        experience_with_this_project_type: experienceWithThisProjectType,
        developer_name: developerName,
        developer_organization: developerOrganization,
        developer_address: developerAddress,
        developer_phone: developerPhone,
        developer_email: developerEmail,
        developer_website: developerWebsite,
        developer_description_of_organization:
          developerDescriptionOfOrganization,
        developer_experience_with_carbon_markets:
          developerExperienceWithCarbonMarkets,
        developer_experience_with_this_project_type:
          developerExperienceWithThisProjectType,
        current_status_of_project: currentStatusOfProject,
        project_start_date: projectStartDate,
        year_offset_delivery: yearOffsetDelivery,
        project_end_date: projectEndDate,
      },
    });

    const organizedRisks = risks.map((r: any) => ({
      pin_detail_id: pinDetail.id,
      risk_type_id: Number(r.type),
      description: r.description,
      mitigation: r.mitigation,
    }));

    const pinDetailRisks = await db.pINDetailRisk.createMany({
      data: organizedRisks,
    });

    const organizedSourceOfFinances = sourceOfFinance.map((s: any) => ({
      pin_detail_id: pinDetail.id,
      source_of_finance_id: Number(s),
    }));

    const pinDetailSourceOfFinances =
      await db.pINDetailSourceOfFinance.createMany({
        data: organizedSourceOfFinances,
      });

    return ApiResponse(true, "", {});
  } catch (error) {
    console.log(error);
    return ApiResponse(false, error, []);
  }
}
