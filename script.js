const arr = {
  "data": {
      "impactIndicators": [
          {
              "id": "7fb6ea20-00da-46fe-9846-272201133b94",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization during the reporting period.",
              "name": "Waste Disposed: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "dd8bc1b6-d1f7-4e21-838f-f11b56f17077",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a community service policy.",
              "name": "Community Service Policy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "a30c07ee-b2b4-4365-86ff-1277aad942e4",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization in landfills during the reporting period.",
              "name": "Waste Disposed: Landfill",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "6c3130e9-d1e4-486c-91ae-dd287029c194",
              "categoryId": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
              "internalId": null,
              "definition": "Indicates whether the organization implements a strategy to reduce greenhouse gas (GHG) emissions.",
              "name": "Greenhouse Gas Emissions Strategy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
                  "title": "Climate",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "e325b139-09ab-458a-8920-a2269df38ca5",
              "categoryId": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
              "internalId": null,
              "definition": "Value of carbon credits purchased by the organization during the reporting period.",
              "name": "Value of Carbon Credits Purchased",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
                  "title": "Climate",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "555e6526-f115-4971-9f8d-47aa73554d59",
              "categoryId": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
              "internalId": null,
              "definition": "Amount of greenhouse gases (GHG) emitted through production of energy by the organization that was delivered to offtaker(s) during the reporting period.",
              "name": "Greenhouse Gas Emissions of Energy Generated for Sale",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
                  "title": "Climate",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "bf4e765d-4275-4539-a2af-3231c8fdf4c5",
              "categoryId": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
              "internalId": null,
              "definition": "Amount of greenhouse gases (GHG) that would have been emitted by the replaced product during the lifetime of the organization's product. Organizations should use Product Lifetime (PD4587) to capture the lifetime of the product.",
              "name": "Greenhouse Gas Emissions of Product Replaced",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
                  "title": "Climate",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "dc17c9db-09ac-4754-a440-188ffa62f257",
              "categoryId": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
              "internalId": null,
              "definition": "Amount of reductions in greenhouse gas (GHG) emissions over the lifetimes of products sold during the reporting period.",
              "name": "Greenhouse Gas Reductions due to Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "bb0b38ab-bd3c-4a32-89a8-ed469206c97c",
                  "title": "Climate",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "a9d255db-8391-4dca-80b3-5305de26db93",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Describes the environmental impact objectives pursued by the organization. Select all that apply:\n\n Agriculture—Food Security:\n\n - Increasing Access to Agricultural Training and Information\n - Increasing Access to and Use of Products and Services for Agricultural Risk Mitigation\n - Increasing Access to Better. Stable Pricing of Agricultural Products\n - Increasing Farm Profitability\n - Increasing Financial Health of Farmers\n - Increasing Food Security through Smallholder Farms\n - Mitigating Climate Change through Sustainable Agriculture\n\n Agriculture—Smallholder Agriculture:\n\n - Improving Agricultural Water Use Practices\n - Improving Rural Economies through Financial Inclusion\n - Increasing Access to Agricultural Training and Information\n - Increasing Access to and Use of Products and Services for Agricultural Risk Mitigation\n - Increasing Access to and Use of Quality Agricultural Inputs\n - Increasing Access to Better. Stable Pricing of Agricultural Products\n - Increasing Farm Profitability\n - Increasing Financial Health of Farmers\n - Increasing Food Security through Smallholder Farms\n - Increasing the Sustainability of Non-Wood Forest Products\n - Mitigating Climate Change through Sustainable Agriculture\n\n Agriculture—Sustainable Agriculture:\n\n - Conserving River Flows for Nature and People\n - Improving Agricultural Water Use Practices\n - Mitigating Climate Change through Sustainable Agriculture\n\n Agriculture—Other (describe)\n\n Air—Clean Air:\n\n - Mitigating Carbon Emissions from Forestry and Land Use\n - Mitigating Climate Change through Carbon Capture and Sequestration\n - Mitigating Climate Change through Clean Electricity and Heat Production\n - Mitigating Climate Change through Clean Mobility\n - Mitigating Climate Change through Sustainable Manufacturing\n\n Air—Other (describe)\n\n Biodiversity and Ecosystems—Biodiversity & Ecosystem Conservation:\n\n - Conserving River Flows for Nature and People\n - Improving Agricultural Water Use Practices\n - Improving Biodiversity by Reducing Impacts from Salt- and Freshwater Aquaculture and Fisheries\n - Improving Biodiversity through Marine Ecosystem Conservation and Restoration\n - Improving Biodiversity through Nature-Based Solutions and Green Infrastructure\n - Improving Biodiversity through Terrestrial Ecosystem Protection and Restoration\n - Improving Water Quality Through Source Water Protection\n - Increasing the Sustainability of Wood and Wood-Based Products\n\n Biodiversity and Ecosystems—Other (describe)\n\n Climate—Climate Change Mitigation:\n\n - Improving Sustainability of Industrial and Municipal Water Practices\n - Improving WASH through Water Infrastructure and Management\n - Increasing the Sustainability of Wood and Wood-Based Products\n - Mitigating Carbon Emissions from Forestry and Land Use\n - Mitigating Climate Change through Carbon Capture and Sequestration\n - Mitigating Climate Change through Clean Electricity and Heat Production\n - Mitigating Climate Change through Clean Mobility\n - Mitigating Climate Change through Sustainable Agriculture\n - Mitigating Climate Change through Sustainable Manufacturing\n\n Climate—Climate Resilience and Adaptation:\n\n - Improving Job Skills for the Future\n - Improving WASH through Water Infrastructure and Management\n\n Climate—Other (describe)\n\n Diversity and Inclusion—Gender Lens:\n\n - Improving Earnings and Wealth Through Employment and Entrepreneurship (Particularly for Disadvantaged and Excluded Groups)\n - Improving Equitable Access to Education and Learning for All\n - Improving Rights. Respect. and Cooperation in the Workplace\n - Increasing Gender Equality through Financial Inclusion\n - Increasing Job Security and Stability for Workers in Precarious Employment\n - Reducing Gender Inequities in Governance. Leadership. and Ownership\n - Reducing Gender Inequities in Pay\n - Reducing Gender Inequities in Workplace Conditions\n - Reducing Gender Inequities through Tailored Products and Services\n\n Diversity and Inclusion—Racial Equity:\n\n - Improving Earnings and Wealth Through Employment and Entrepreneurship (Particularly for Disadvantaged and Excluded Groups)\n - Improving Rights. Respect. and Cooperation in the Workplace\n - Increasing Inclusive Capital to Create Equitable Outcomes for Communities of Color (Justice)\n - Increasing Job Security and Stability for Workers in Precarious Employment\n - Shifting Power by Addressing Racial Bias and Ensuring Equitable Representation and Decision-Making\n - Shifting the Perception of Risk through Equitable Deal Sourcing. Due Diligence. and Terms\n\n Diversity and Inclusion—Other (describe)\n\n Education—Access to Quality Education:\n\n - Improving Access to Education for Children in Crisis and Conflict-Affected Environments\n - Improving Early Childhood Care and Education\n - Improving Equitable Access to Education and Learning for All\n - Improving Job Skills for the Future\n - Improving the Quality of Teaching and Learning Environments\n - Improving The Successful Transition of Youth into the Workforce and Society\n - Improving the Transparency and Accountability of Education Management Systems\n\n Education—Other (describe)\n\n Employment—Quality Jobs:\n\n - Improving Earnings and Wealth Through Employment and Entrepreneurship (Particularly for Disadvantaged and Excluded Groups)\n - Improving Health and Well-Being Across the Workforce\n - Improving Job Skills for the Future\n - Improving Rights. Respect. and Cooperation in the Workplace\n - Increasing Job Security and Stability for Workers in Precarious Employment\n\n Employment—Other (describe)\n\n Energy—Clean Energy:\n\n - Improving Access to Clean Energy for Underserved Communities\n - Increasing Availability of Clean Energy through Improved Transmission and Distribution Infrastructure\n - Increasing Clean Energy Generation through Low- and Zero-Carbon Alternatives\n - Increasing Clean Energy Storage Capacity through Improved Batteries and Other Technologies\n - Mitigating Climate Change through Clean Electricity and Heat Production\n - Mitigating Climate Change through Clean Mobility\n\n Energy—Energy Access:\n\n - Improving Energy Alternatives for Cooking\n - Improving Energy Alternatives for Healthcare\n - Improving Energy for Connectivity\n - Improving Lighting for Business\n - Improving Lighting for Homes\n - Mitigating Climate Change through Clean Electricity and Heat Production - Reducing Harmful Emissions from Small-Scale Energy Sources\n\n Energy—Energy Efficiency:\n\n - Improving Sustainability of Industrial and Municipal Water Practices\n - Mitigating Climate Change through Clean Electricity and Heat Production\n - Mitigating Climate Change through Clean Mobility\n - Mitigating Climate Change through Sustainable Manufacturing\n\n Energy—Other (describe)\n\n Financial Services—Financial Inclusion:\n\n - Improving Access to and Use of Responsible Financial Services for Historically Underserved Populations\n - Improving Access to WASH Through Affordable Household Financing\n - Improving Earnings and Wealth Through Employment and Entrepreneurship (Particularly for Disadvantaged and Excluded Groups)\n - Improving Financial Health\n - Improving Rural Economies through Financial Inclusion\n - Increasing Access to and Use of Products and Services for Agricultural Risk Mitigation\n - Increasing Access to Non-Sewered Sanitation Services\n - Increasing Access to Sewered Sanitation Services\n - Increasing Farm Profitability\n - Increasing Financial Health of Farmers\n - Increasing Gender Equality through Financial Inclusion\n - Supporting Decent Jobs and Fostering Economic Development\n\n Financial Services—Other (describe)\n\n Health—Access to Quality Health Care:\n\n - Improving Data for Health Systems Policy and Decision-Making\n - Improving Early Childhood Care and Education\n - Improving Energy Alternatives for Healthcare\n - Improving Health and Well-Being Across the Workforce\n - Improving WASH through Water Infrastructure and Management\n - Increasing Access to Essential Medicines. Medical Supplies. and Devices\n - Increasing Access to Medical Diagnostics\n - Increasing Consistent Supply of Essential Services and Products\n - Reducing Financial Barriers to Health Services\n\n Health—Nutrition\n\n Health—Other (describe)\n\n Infrastructure—Resilient Infrastructure:\n\n - Reducing Flood Risk and Stormwater Impacts through Green Infrastructure\n\n Infrastructure—Other (describe)\n\n Land—Natural Resources Conservation:\n\n - Improving Agricultural Water Use Practices\n - Improving Water Quality Through Source Water Protection\n\n Land—Sustainable Forestry:\n\n - Increasing the Sustainability of Local Economies and Communities through Forestry and Land Use\n - Increasing the Sustainability of Non-Wood Forest Products\n - Increasing the Sustainability of Wood and Wood-Based Products\n - Mitigating Carbon Emissions from Forestry and Land Use\n\n Land—Sustainable Land Management:\n\n - Improving Sustainability of Industrial and Municipal Water Practices\n\n Land—Other (describe)\n\n Oceans & Coastal Zones—Marine Resource Conservation and Management:\n\n - Improving Water Quality Through Source Water Protection\n\n Oceans & Coastal Zones—Other (describe)\n\n Pollution—Pollution Prevention:\n\n - Improving Sustainability of Industrial and Municipal Water Practices\n - Mitigating Carbon Emissions from Forestry and Land Use\n - Reducing Harmful Emissions from Small-Scale Energy Sources\n\n Pollution—Other (describe)\n\n Real Estate—Affordable Quality Housing:\n\n - Improving Housing Quality\n - Increasing Residential Stability\n - Increasing Housing Affordability\n - Increasing Access to Supportive Services through Housing\n\n Real Estate—Green Buildings\n\n Real Estate—Other (describe)\n\n Waste—Waste Management:\n\n - Improving Sustainability of Industrial and Municipal Water Practices\n\n Waste—Other (describe)\n\n Water—Sustainable Water Management:\n\n - Conserving River Flows for Nature and People\n - Improving Access to WASH Through Affordable Household Financing\n - Improving Agricultural Water Use Practices\n - Improving Sustainability of Industrial and Municipal Water Practices\n - Improving WASH through Water Infrastructure and Management\n - Improving Water Quality Through Source Water Protection\n - Increasing Access to Non-Sewered Sanitation Services\n - Increasing Access to Sewered Sanitation Services\n - Reducing Flood Risk and Stormwater Impacts Through Green Infrastructure\n\n Water—Water. Sanitation. and Hygiene (WASH):\n\n - Conserving River Flows for Nature and People\n - Improving Access to WASH in Schools and Healthcare Centers\n - Improving Access to WASH Through Affordable Household Financing\n - Improving Sustainability of Industrial and Municipal Water Practices\n - Improving WASH through Water Infrastructure and Management\n - Increasing Access to Non-Sewered Sanitation Services\n - Increasing Access to Sewered Sanitation Services\n\n Water—Other (describe)",
              "name": "Environmental Impact Objectives",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "5df67cb6-6c03-4a97-a09b-0729a6c7c7c5",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Describes the third-party. business process- and practice-related certifications that the organization holds as of the end of the reporting period. See usage guidance for further information.",
              "name": "Operational Certifications",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "d46b91c5-4ea6-4a40-858b-5c69f5cd37fa",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization has an environmental management system in place.",
              "name": "Environmental Management System",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "ab19d89d-6c23-4293-84fa-c0e63892026c",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of energy both generated and consumed by the organization from non-renewable sources during the reporting period.",
              "name": "Energy Generated for Use: Non-Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "b956b49c-5f99-49dc-babb-3b6cdea8a3d2",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of purchased energy consumed by the organization from non-renewable sources during the reporting period.",
              "name": "Energy Purchased: Non-Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "22bb6432-357b-439c-a932-678dbca00875",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization has a formal board of directors or governing body committee dedicated to social and environmental performance.",
              "name": "Social and Environmental Board Committee",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "ed4520dc-b657-4da5-af5c-ab17ad79fc00",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a strategy to address the effects of climate change on the organization's operations.",
              "name": "Climate Resilience Strategy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "db8df716-5803-4d54-aca3-1f5f8471e9c5",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a strategy to manage its interactions with local communities that are affected by its operations.",
              "name": "Community Engagement Strategy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "42b3b7e3-c78c-41e4-a5bc-8b369af12477",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of energy both generated and consumed by the organization from renewable sources during the reporting period.",
              "name": "Energy Generated for Use: Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "2fdcebad-fa93-4520-92ef-0df11544c53b",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of purchased energy consumed by the organization from renewable sources during the reporting period.",
              "name": "Energy Purchased: Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "0c998d3d-f0fc-42bf-b938-19d6c5419f00",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether any of the organization's employees participated in training sessions related to any aspect of managing environmental or social performance during the reporting period.",
              "name": "Social and Environmental Performance Staff Training",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "ceb7a565-edf2-49ed-a712-40c2f51926e7",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether any member of the organization's board of directors participated in training sessions related to any aspect of managing environmental or social performance during the reporting period.",
              "name": "Social and Environmental Performance Management Training",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "43c19516-f823-466f-97c6-fefcd3bf3d8e",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a traceability system for its raw materials.",
              "name": "Traceability System",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "4c533b9d-f30a-4237-9544-38cfd134d89e",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements an energy conservation strategy to reduce its operational energy usage.",
              "name": "Energy Conservation Strategy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "36cdb119-bd61-42cb-a702-71a5c915035a",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization reports its social and environmental performance to relevant stakeholders.",
              "name": "Social and Environmental Performance Reporting",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "9cc3af82-ac26-40ff-98d4-a047d0be65bd",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization has a written policy for client protection and a system to monitor compliance with this policy.",
              "name": "Client Protection Policy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "da1058a7-a72d-4c68-9a42-f0ca031aa7cd",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a feedback system to solicit client feedback and has an established procedure and/or committee to receive and handle client feedback.",
              "name": "Client Feedback System",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "dce5b15c-e6a5-47db-87be-4e4ca91b88f6",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a recycling policy in its operating facilities.",
              "name": "Recycling Policy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "715998da-23c8-455b-ba0f-d09aa39c5756",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of reduction in energy consumption achieved as a direct result of energy conservation and efficiency initiatives undertaken by the organization during the reporting period.",
              "name": "Energy Conserved",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "c6a3f47a-4577-4c2b-82a9-110621ab3ffc",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization employs green building practices.",
              "name": "Green Building Practices",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "109a85c6-be17-48f3-bd7f-61575780cfa2",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Describes the mechanisms in place to gather input from stakeholders on product/service design. development. and delivery. Select all that apply:\n\n - Identify community need(s). if any. in collaboration with target stakeholders\n - Consult with target stakeholders about their needs when developing strategy\n - Collect impact data from stakeholders via interviews and/or surveys\n - Work with investees to reflect target stakeholders' perspectives in product/service offerings\n - Monitor target stakeholder satisfaction\n - None\n - Other (describe)",
              "name": "Stakeholder Engagement",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "b095c766-fd59-4539-b48b-115391da0848",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of purchased energy consumed by the organization during the reporting period.",
              "name": "Energy Purchased: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "1abfad43-7aa3-4448-9c84-d52b8255c386",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization assessed social and environmental risks during the reporting period.",
              "name": "Social and Environmental Performance Risk Assessment",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "18edd71c-5875-49f4-a7ec-ad39c69ab02b",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Indicates whether the organization implements a conservation strategy to reduce its water usage.",
              "name": "Water Conservation Strategy",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "15602c7f-eeb8-4109-a0c0-7d578e33ff7f",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Amount of energy generated and consumed by the organization during the reporting period.",
              "name": "Energy Generated for Use: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "46c3e7ef-0442-411b-bcc9-d3cc56e68c6c",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Number of years of useful life of the product provided by the organization (based on reasonable use).",
              "name": "Product Lifetime",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "900a21ce-d3be-4a8c-b887-f0b1e4ee2a6c",
              "categoryId": "3f25180a-44a9-4a52-8057-14ca755b507f",
              "internalId": null,
              "definition": "Value of payments made by the organization during the reporting period towards activities that benefit local communities.",
              "name": "Value of Community Development Contributions",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "3f25180a-44a9-4a52-8057-14ca755b507f",
                  "title": "Cross-Category",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "401f1b27-dd2c-47cb-8daf-d5c49881c5ff",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Number of status-quo products that were replaced by products sold during the reporting period.",
              "name": "Units/Volume Replaced",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "40bc8f46-1966-48ba-87f8-cd5f4485969c",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of money spent by the organization for renewable energy infrastructure and technology to produce energy intended for consumption at the organization's operating facilities during the reporting period.",
              "name": "Renewable Energy Expenditures",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "71b1ee8c-da9f-44a0-bc5a-203ed42ec5f3",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy potentially generated over the lifetime of products sold by the organization during the reporting period.",
              "name": "Energy Capacity of Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "1b87cb41-d9b6-4ac8-bbc8-45a33de59807",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy potentially generated over the lifetime of a product based on its planned operation and context.",
              "name": "Energy Capacity of Product",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "c233652d-fd7a-44c2-a76b-ebe85289e05e",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy savings due to the organization's services that were sold during the reporting period.",
              "name": "Energy Savings from Services Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "96032880-842c-4b01-a7ef-af4214b360f3",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy that would have been consumed by the replaced product during the lifetime of the organization's product.",
              "name": "Energy Consumption of Product Replaced",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "170f7669-8b8e-44ac-bc3a-5bb769086272",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy consumed by the product during its lifetime.",
              "name": "Energy Consumption of Product",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "4f776202-b699-476f-9c28-2734ae153222",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of non-renewable energy generated and sold to offtaker(s) during the reporting period.",
              "name": "Energy Generated for Sale: Non-Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "3940cbc3-daae-45e2-b11f-500a146ad2aa",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of renewable energy generated and sold to offtaker(s) during the reporting period.",
              "name": "Energy Generated for Sale: Renewable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "eeb8aa7a-fa45-4d6a-ae46-1ff5ff39bbcf",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy savings over the lifetime of products sold by the organization during the reporting period.",
              "name": "Energy Savings from Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "c8baf2b6-7ae8-4af9-b3b1-52db7c43f2e1",
              "categoryId": "e9305b78-61b8-4739-ab78-73e9ad51375d",
              "internalId": null,
              "definition": "Amount of energy generated and sold to offtaker(s) during the reporting period.",
              "name": "Energy Generated for Sale: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "e9305b78-61b8-4739-ab78-73e9ad51375d",
                  "title": "Energy",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "d2bf5acd-454d-4500-94bb-55740698ad06",
              "categoryId": "08ed377d-4d12-4aa3-b249-ed6876f21862",
              "internalId": null,
              "definition": "Indicates whether the organization implemented any employee incentive schemes related to social and/or environmental performance goals during the reporting period.",
              "name": "Social and Environmental Performance Incentives",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "08ed377d-4d12-4aa3-b249-ed6876f21862",
                  "title": "Financial Services",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "85ae9938-e208-4305-8146-c2eeffdc4c92",
              "categoryId": "08ed377d-4d12-4aa3-b249-ed6876f21862",
              "internalId": null,
              "definition": "Indicates whether the organization implements environmental policies associated with the organization’s financing practices.",
              "name": "Environmental Policies for Financial Services Clients",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "08ed377d-4d12-4aa3-b249-ed6876f21862",
                  "title": "Financial Services",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "36de6356-776f-40a2-bbd0-0d2ee90a1ca8",
              "categoryId": "08ed377d-4d12-4aa3-b249-ed6876f21862",
              "internalId": null,
              "definition": "Describes how a product/service provided by the organization contributes to a more environmentally sustainable economy. or disaggregates another metric in terms of how the related product or service contributes to a more environmentally sustainable economy.\n\n Select all that apply:\n - Climate change mitigation\n - Climate change adaptation\n - The sustainable use and protection of water and marine resources\n - The transition to a circular economy\n - Pollution prevention and control\n - The protection and restoration of biodiversity and ecosystems\n - Product/service does not contribute to a more environmentally sustainable economy\n - Other (write-in)",
              "name": "Green Product/Service Type",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "08ed377d-4d12-4aa3-b249-ed6876f21862",
                  "title": "Financial Services",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "867c6e57-b2e5-4821-a0e3-fbc9f090c21d",
              "categoryId": "481f458a-37d3-45fe-a9fe-3aaca4c13ece",
              "internalId": null,
              "definition": "Amount of toxic materials used in the organization's manufacturing processes during the reporting period.",
              "name": "Toxic Materials",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "481f458a-37d3-45fe-a9fe-3aaca4c13ece",
                  "title": "Pollution",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "8e8a8a3a-2dfb-4642-be22-f8ec3208c77b",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of hazardous waste created by the organization's operations during the reporting period.",
              "name": "Waste Produced: Hazardous Waste",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "a82045f1-9ad7-400c-8dcb-69978942f374",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization through reuse and recycling during the reporting period.",
              "name": "Waste Disposed: Recycled/Reused",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "abf2c66e-f37b-4a8b-9e54-efdf02cfedcd",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of recycled material used in the organization's products (including packaging) during the reporting period.",
              "name": "Recycled Materials",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "557187a1-6a09-4528-bc3f-af3fc0733829",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of biodegradable materials used in the organization’s products (including packaging) during the reporting period.",
              "name": "Biodegradable Materials",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "3acd9d08-bc8c-49cf-9ac6-d10a786987f0",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Indicates whether the organization has practices in place to manage products over their life beyond the point of sale.",
              "name": "Product Lifecycle Management Practices",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "7a4abfda-8c4b-42ad-af27-2c4db6c2c6a8",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste created by the organization's operations during the reporting period.",
              "name": "Waste Produced: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "89663a93-8068-44a3-ac65-c84660d25f60",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of non-hazardous waste created by the organization's operations during the reporting period.",
              "name": "Waste Produced: Non-Hazardous Waste",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "59eb18b2-33a8-4874-ae9e-7868ee9ae59d",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste reduced by the organization during the reporting period through programs for substitution. recycling. or recovery.",
              "name": "Waste Reduced",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "79f1171f-996f-42e4-9422-d08479653c21",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization through incineration during the reporting period.",
              "name": "Waste Disposed: Incinerated",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "3e33623d-bdf7-46ce-8369-ff8e6052aa11",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization through other means during the reporting period.",
              "name": "Waste Disposed: Other",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "2d4d0b95-a32b-45fd-9de5-a52706808842",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste disposed by the organization through composting during the reporting period.",
              "name": "Waste Disposed: Composted",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "f6201765-5801-4589-a875-0016fac23d95",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Percentage of recycled materials used to manufacture the organization's products (including packaging) during the reporting period.",
              "name": "Percent Recycled Materials",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "25e25e54-2b88-4142-84ea-940347c0bd12",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of hazardous waste avoided through refurbishing. reusing. and recycling as part of delivering or developing the organization's products and services during the reporting period.",
              "name": "Hazardous Waste Avoided",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "20a5f5ce-d4f4-4b77-b590-3cb326f9671c",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste reduced during the reporting period as a result of the organization's services.",
              "name": "Waste Reductions from Services Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "5bc33b65-87e8-4c3a-93a6-ed7f509a85ec",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of waste reduced over the lifetime of products sold by the organization during the reporting period.",
              "name": "Waste Reductions from Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "2b895e9d-97cd-4601-8fc0-da583a9ffe31",
              "categoryId": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
              "internalId": null,
              "definition": "Amount of non-hazardous waste disposal avoided through refurbishing. reusing. and recycling as part of delivering or developing the organization's products and services during the reporting period.",
              "name": "Non-hazardous Waste Avoided",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "c24bc7bc-9f02-4cb1-8c3a-714953c6197e",
                  "title": "Waste",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "00c1de6a-c0c9-4468-bf21-3379c252d388",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "50c63a5e-14ec-4aec-b665-65d99691e66b",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of recycled water used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Recycled",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "16b09525-e758-4f01-a56a-6397cb167000",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water drawn from municipal water sources used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Municipal",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "790c0699-2e1c-41bc-aea4-8b587e50e5dc",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water used from regions with high or extremely high baseline water stress during the reporting period.",
              "name": "Water Consumed: Regions with High Water Stress",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "18bd017d-bddf-454d-a730-0705c556fb76",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water usage reduced as a result of the organization's water conservation efforts during the reporting period.",
              "name": "Water Conserved",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "64b3141c-afe2-4060-809b-6389b0886532",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of groundwater used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Groundwater",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "a370618c-2a5f-45a1-a3a8-d938f973cce4",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of rainwater used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Rainwater",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "5cb71266-ad7c-4f8f-9d6b-5a5052529900",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Indicates whether the organization employs management practices to protect water quality.",
              "name": "Water Quality Practices",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "155d4c79-ac7f-441b-8d35-31c6f45224cb",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Indicates whether the organization's practices related to the discharge of wastewater comply with local legal requirements.",
              "name": "Wastewater Treatment Compliance",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "6bd526a0-6ade-45b0-a34a-976645e32b2b",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of surface water used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Surface Water",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "80876b6f-da37-4f93-a1df-b588023d5ad9",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of wastewater used for the organization's operations during the reporting period.",
              "name": "Water Consumed: Wastewater",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "3a677c47-8064-4e28-be1f-5dcd098483b5",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of wastewater treated by the organization during the reporting period.",
              "name": "Wastewater Treated",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "803d0268-6aec-4d1c-98bf-1818da2f14c1",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of potential water treated over the lifetimes of all products sold during the reporting period.",
              "name": "Water Treatment Capacity of Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "17ee7457-2966-4325-8785-633b7fed2849",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water used (consumed) over the lifetime of a product or system operated according to planned capacity.",
              "name": "Water Consumption of Product",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "0b12ebdd-f677-443d-a630-dd44c4de872d",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water treated to become potable over the lifetime of a product or system operated according to planned capacity.",
              "name": "Water Treatment Capacity of Product: Potable",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "68c2c898-8988-4aad-9858-c591211cbf69",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water saved over the lifetimes of all products sold during the reporting period.",
              "name": "Water Savings from Products Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "0499a5d3-dd11-49ad-bc48-a42df02dafb0",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Average volume of water that would have been consumed by the replaced product during the lifetime of the organization's product.",
              "name": "Water Consumption of Product Replaced",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "e256b7b2-9a20-4fb5-b3fd-455dcccbf6ce",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water treated over the lifetime of a product or system operated according to planned capacity.",
              "name": "Water Treatment Capacity of Product: Total",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "38843178-f373-41cb-a9d3-952b49b3c94e",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water saved during the reporting period as a result of the organization's services sold.",
              "name": "Water Savings from Services Sold",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "ecc0388b-910c-4fe2-b257-28b5385ecb16",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Level of baseline water stress on land directly or indirectly managed by the organization as of the end of the reporting period.\n\n Choose all that apply:\n - Low (<10%)\n - Low-medium (10–19.9%)\n - Medium-high (20–39.9%)\n - High (40–80%)\n - Extremely high (>80%)\n - Arid and low water use\n - No data",
              "name": "Level of Water Stress",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "25bb6e55-f58e-4ae2-b572-d0fdf84dd6d5",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of all water drawn from surface water. groundwater. seawater. or a third party for any use by the organization during the reporting period.",
              "name": "Water Withdrawn",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "fa33bb5b-813b-4184-91aa-b25e02101e0e",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of effluents. used water. and unused water released. during the reporting period. to surface water. groundwater. seawater. or a third party and for which the organization has no further use.",
              "name": "Water Discharged",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "3ab37f93-80c8-4b04-a4ea-6e71924bbfa5",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Describes the type of water withdrawn. consumed. or discharged as a result of investments made by the organization during the reporting period.\n\n Choose all that apply:\n - Rainwater\n - Recycled Water\n - Groundwater\n - Surface Water\n - Seawater\n - Third Party: Municipal\n - Third Party: Wastewater\n - Other (describe)",
              "name": "Water Type",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "60dccc56-e0c0-4821-bd50-212a87115f9b",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Rate of flowing water in a stream or river on land directly or indirectly managed by the organization as of the end of the reporting period.",
              "name": "Streamflow Rate",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "c60b8067-7256-4e23-8dfe-bda775787b33",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Rate of maximum flow of water through a stream or river on land directly or indirectly managed by the organization as of the end of the reporting period.",
              "name": "Peak Flow Rate",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "29c4e72e-9a1f-47d3-8fa8-8c18d23e1cf3",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Indicates whether the organization has assessed nitrogen and phosphorus levels in streams on directly or indirectly controlled land as of the end of the reporting period.",
              "name": "Stream Nutrient Levels Assessment",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "1b293b29-1c90-4e56-a96b-a6a4aa2a2e76",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Level of turbidity (in Nephelometric Turbidity Units. or NTU) observed in streams or rivers on land directly or indirectly managed by the organization as of the end of the reporting period.",
              "name": "Stream Turbidity Level",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "71fb1d79-db67-46f7-822c-0c9c2d293b6a",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Area of land directly controlled by the organization that is impervious to water during the reporting period.",
              "name": "Land Directly Controlled: Impervious Surfaces",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "95a95cb8-3e17-428d-a616-1c8ca5a0e5d6",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Describes the level of fragmentation of streams—the extent to which streams and rivers are fragmented into unconnected parts—present on land directly or indirectly controlled by the organization as of the end of the reporting period. Report for hectares controlled at any point during the reporting period.\n\n Choose one:\n - Very low fragmentation\n - Low fragmentation\n - Moderate fragmentation\n - High fragmentation\n - Very high fragmentation\n - No data",
              "name": "Level of Stream Connectivity",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "aaea3206-1408-4962-9419-41dbc4eadc15",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Describes the level of treatment that discharged water received during the reporting period.\n\n Choose all that apply:\n - Primary treatment\n - Secondary treatment\n - Tertiary treatment\n - No treatment",
              "name": "Water Treatment Level",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "e90a9b84-674c-4652-a25d-ac466004574b",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Describes the type of connection provided to households or individuals as a result of the organization's activities during the reporting period.\n\n Choose all that apply:\n - Piped water\n - Sewer\n - Grid electricity\n - Off-grid electricity\n - Internet\n - Phone: Mobile\n - Phone: Landline\n - Other (describe)",
              "name": "Connection Type",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "79f4ab69-52d8-4a95-bec7-0aac61277325",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Volume of water generated from rain and snowmelt flowing over (that is. without soaking into the ground) land indirectly or directly controlled by the organization during the reporting period.",
              "name": "Stormwater Runoff",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "392c2aeb-3fb5-471e-b294-9874faa779c5",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Number of residential and commercial connections to utilities and services provided by the organization as of the end of the reporting period.",
              "name": "Number of Household and Business Connections",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          },
          {
              "id": "92c74553-b30f-48ca-a7da-db306971ca23",
              "categoryId": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
              "internalId": null,
              "definition": "Number of connections to utilities and services provided to individuals by the organization as of the end of the reporting period.",
              "name": "Number of Individual Connections",
              "__typename": "ImpactIndicators",
              "impactCategory": {
                  "id": "5d42b3d6-cc9b-4c00-9698-5b8d7a303a73",
                  "title": "Water",
                  "__typename": "ImpactCategories"
              }
          }
      ]
  }
}

arr["data"].impactIndicators.forEach((item) => {
  delete item.id;
  delete item.categoryId;
  item.title = item.name;
  item.description = item.definition;
  item.categoryName = item.impactCategory?.title;
  delete item.definition;
  delete item.impactCategory;
  delete item.internalId;
  delete item.__typename;
  delete item.name;
});

console.log(arr["data"].impactIndicators);
