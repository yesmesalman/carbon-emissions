import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import PIN_DATA from "./../../PIN.json" assert { type: "json" };
import OVERVIEW_DATA from "./../../Overview.json" assert { type: "json" };

async function main() {
  await prisma.$queryRaw`TRUNCATE user_roles`;
  await prisma.userRole.createMany({
    data: [{ name: "admin" }],
  });

  await prisma.$queryRaw`TRUNCATE users`;
  await prisma.user.createMany({
    data: [
      {
        name: "Salman",
        username: "yesmesalman",
        email: "admin@yahoo.com",
        password: "admin123",
        role_id: 1,
      },
    ],
  });

  // Summary
  await prisma.$queryRaw`TRUNCATE sectoral_scopes_and_project_types`;
  await prisma.$queryRaw`TRUNCATE sectoral_scopes_and_project_type_options`;
  let sectoral_scopes_and_project_types = PIN_DATA["PIN"]["Summary"]["1.1"]["1.1.5"]["dropdown"];

  for (let key in sectoral_scopes_and_project_types) {
    let item = sectoral_scopes_and_project_types[key];

    let model = await prisma.sectoralScopesAndProjectType.create({
      data: {
        name: item.title
      }
    });

    for (let subKey in item.dropdown) {
      let subItem = item.dropdown[subKey]

      let subModel = await prisma.sectoralScopesAndProjectTypeOption.create({
        data: {
          name: subItem.title,
          sectoral_scopes_and_project_type_id: model.id
        }
      });

      if (subItem?.dropdown) {
        for (let subSubKey in subItem.dropdown) {
          let subSubItem = subItem.dropdown[subSubKey];
          await prisma.sectoralScopesAndProjectTypeOption.create({
            data: {
              name: subSubItem.title,
              sectoral_scopes_and_project_type_id: model.id,
              parent_id: subModel.id
            }
          });
        }
      }
    }
  }

  await prisma.$queryRaw`TRUNCATE carbon_standards`;
  let carbon_standards = PIN_DATA["PIN"]["Summary"]["1.1"]["1.1.7"]["dropdown"];
  for (let key in carbon_standards) {
    let item = carbon_standards[key];

    await prisma.carbonStandard.create({
      data: {
        name: item.title
      }
    })
  }

  await prisma.$queryRaw`TRUNCATE methodologies`;
  let methodologies = PIN_DATA["PIN"]["Summary"]["1.1"]["1.1.8"]["notes"]["list"];
  methodologies = methodologies.map(e => { return { name: e.title, link: e.link } })
  await prisma.methodology.createMany({
    data: methodologies
  })

  await prisma.$queryRaw`TRUNCATE existing_methodologies`;
  let existing_methodologies = PIN_DATA["PIN"]["Summary"]["1.1"]["1.1.8"]["dropdown"]["options"];
  existing_methodologies = existing_methodologies.map(e => { return { name: e.title } })
  await prisma.existingMethodology.createMany({
    data: existing_methodologies
  })

  await prisma.$queryRaw`TRUNCATE scales`;
  let scales = PIN_DATA["PIN"]["Summary"]["1.1"]["1.1.9"]["dropdown"];
  scales = scales.map(e => { return { name: e.title } })
  await prisma.scale.createMany({
    data: scales
  })

  // Details
  await prisma.$queryRaw`TRUNCATE project_overviews`;
  let project_overviews = PIN_DATA["PIN"]["Details"]["2.1"]["2.1.1"]["notes"];
  project_overviews = project_overviews.map(e => { return { name: e.title } })
  await prisma.projectOverview.createMany({
    data: project_overviews
  })

  await prisma.$queryRaw`TRUNCATE finance_sources`;
  let finance_sources = PIN_DATA["PIN"]["Details"]["2.1"]["2.1.4"]["a"]["checkboxes"];
  finance_sources = finance_sources.map(e => { return { name: e.title } })
  await prisma.financeSource.createMany({
    data: finance_sources
  })

  await prisma.$queryRaw`TRUNCATE risk_types`;
  let risk_types = PIN_DATA["PIN"]["Details"]["2.1"]["2.1.5"]["dynamic_table"]["table"]["columns"][0]["dropdown"];
  risk_types = risk_types.map(e => { return { name: e.title } })
  await prisma.riskType.createMany({
    data: risk_types
  })

  await prisma.$queryRaw`TRUNCATE participant_types`;
  let participant_types = PIN_DATA["PIN"]["Details"]["2.4"]["dynamic_table"]["columns"][0]["radios"];
  participant_types = participant_types.map(e => { return { name: e.title } })
  await prisma.participantType.createMany({
    data: participant_types
  })

  await prisma.$queryRaw`TRUNCATE timelines`;
  let timelines = PIN_DATA["PIN"]["Details"]["2.6"]["2.6.1"]["dropdown"];
  timelines = timelines.map(e => { return { name: e.title } })
  await prisma.timeline.createMany({
    data: timelines
  })

  // CO Benefits
  await prisma.$queryRaw`TRUNCATE development_goals`;
  await prisma.$queryRaw`TRUNCATE development_goal_target`;
  await prisma.$queryRaw`TRUNCATE indicators`;
  let section1 = PIN_DATA["PIN"]["Co-benefits"]["4.1"]["dynamic_table"]["columns"][0]["dropdown"];
  let section2 = PIN_DATA["PIN"]["Co-benefits"]["4.2"]["dynamic_table"]["columns"][0]["dropdown"];
  let section3 = PIN_DATA["PIN"]["Co-benefits"]["4.3"]["dynamic_table"]["columns"][0]["dropdown"];

  let development_goals = [...section1, ...section2, ...section3]

  for (let item of development_goals) {
    let model = await prisma.developmentGoal.create({
      data: {
        name: item.title
      }
    })

    if (item.target) {
      for (let target of item.target) {
        let targetModel = await prisma.developmentGoalTarget.create({
          data: {
            name: target.title,
            development_goal_id: model.id
          }
        })

        if (target.indicators) {
          let indicators = target.indicators.map(e => {
            return {
              name: e.title,
              description: e.description,
              category: e.category,
              development_goal_target_id: targetModel.id
            }
          })

          await prisma.indicator.createMany({
            data: indicators
          })
        }
      }
    }
  }

  // Viability
  await prisma.$queryRaw`TRUNCATE key_measurements`;
  let key_measurements = PIN_DATA["PIN"]["Viability"]["5.2"]["5.2.2"]["checkboxes"];
  key_measurements = key_measurements.map(e => { return { name: e.title } })
  await prisma.keyMeasurement.createMany({
    data: key_measurements
  })

  // Overview
  await prisma.$queryRaw`TRUNCATE project_categories`;
  let project_categories = OVERVIEW_DATA["Overview"]["sections"][0]["fields"][1]["multiselect"]
  project_categories = project_categories.map(e => { return { name: e.title } })
  await prisma.projectCategory.createMany({
    data: project_categories
  })
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
