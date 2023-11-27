"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AuthenticatedPINScreen,
  AuthenticatedScreen,
  CheckPINStep,
  CleanValidationMessages,
  GetProjectPINScreen,
  HttpRequest,
  ShowValidations,
  ShowWarningAlert,
} from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "./../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import { FinanceSourceProp } from "@/app/api/details/sources-of-finance/route";
import Risks from "@/app/components/Form/Risks/Risks";
import Button from "@/app/components/Form/Button";

const DetailsPage = () => {
  const router = useRouter();

  const [sourceOfFinances, setSourceOfFinances] = useState<FinanceSourceProp[]>(
    []
  );

  const [description, setDescription] = useState("");
  const [innovation, setInnovation] = useState("");
  const [sourceOfFinance, setSourceOfFinance] = useState<number[]>([]);
  const [fundingStatus, setFundingStatus] = useState("");
  const [risks, setRisks] = useState([]);
  const [assumptions, setAssumptions] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [organization, setOrganization] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [descriptionOfOrganization, setDescriptionOfOrganization] =
    useState<string>("");
  const [experienceWithCarbonMarkets, setExperienceWithCarbonMarkets] =
    useState<string>("");
  const [experienceWithThisProjectType, setExperienceWithThisProjectType] =
    useState<string>("");

  const [developerName, setDeveloperName] = useState<string>("");
  const [developerOrganization, setDeveloperOrganization] =
    useState<string>("");
  const [developerAddress, setDeveloperAddress] = useState<string>("");
  const [developerPhone, setDeveloperPhone] = useState<string>("");
  const [developerEmail, setDeveloperEmail] = useState<string>("");
  const [developerWebsite, setDeveloperWebsite] = useState<string>("");
  const [
    developerDescriptionOfOrganization,
    setDeveloperDescriptionOfOrganization,
  ] = useState<string>("");
  const [
    developerExperienceWithCarbonMarkets,
    setDeveloperExperienceWithCarbonMarkets,
  ] = useState<string>("");
  const [
    developerExperienceWithThisProjectType,
    setDeveloperExperienceWithThisProjectType,
  ] = useState<string>("");
  const [currentStatusOfProject, setCurrentStatusOfProject] =
    useState<string>("");
  const [projectStartDate, setProjectStartDate] = useState<string>("");
  const [yearOffsetDelivery, setYearOffsetDelivery] = useState<string>("");
  const [projectEndDate, setProjectEndDate] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const goToNextStep = useCallback(() => {
    return router.push(
      `/portfolio/project/emissions?project=${GetProjectPINScreen()}`
    );
  }, [router]);

  useEffect(() => {
    AuthenticatedPINScreen(router);
    AuthenticatedScreen(router);
    CheckPINStep(1, goToNextStep);
  }, [router, goToNextStep]);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/details/sources-of-finance", {});

      request.then((e) => e.json()).then((e) => setSourceOfFinances(e.data));
    };

    return getData();
  }, []);

  const onSourceOfFinanceChange = (e: any) => {
    const value = e.target.value;
    setSourceOfFinance((prevItems) => {
      const index = prevItems.indexOf(value);

      if (index === -1) {
        return [...prevItems, value];
      } else {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      }
    });
  };

  const onPressClose = () => {
    router.push("/portfolio");
  };
  
  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/details/project-details", {
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
      project: GetProjectPINScreen(),
    });

    request
      .then((e) => e.json())
      .then((e) => {
        CleanValidationMessages();

        if (e?.message === "VALIDATION_ERROR") {
          return ShowValidations(e?.data);
        }

        if (!e?.success) {
          return ShowWarningAlert(e?.message);
        }

        goToNextStep();
      })
      .catch((e) => {
        return ShowWarningAlert(e?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Screen activeTabIndex={1}>
      <h4 className="mb-2 mt-2 font-bold">2. Project details</h4>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4">
        <h5>2.1 Project info and business model</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>2.1.1 Detailed Project Description *</label>
            <label className="warning-text">
              Provide a comprehensive project overview. You may use the
              following structure:
            </label>
            <ul>
              <li className="warning-list-item">
                A summary description of the technologies and activities to be
                implemented,
              </li>
              <li className="warning-list-item">
                The location of the project,
              </li>
              <li className="warning-list-item">
                An explanation of how the project is expected to generate GHG
                emission reductions or removals,
              </li>
              <li className="warning-list-item">
                A brief description of the scenario that would occur in the
                absence of the project,
              </li>
              <li className="warning-list-item">
                An estimate of annual average and total GHG emission reductions
                and removals,
              </li>
              <li className="warning-list-item">
                A brief description of other environmental, social and economic
                benefits generated by the project.
              </li>
            </ul>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              rows={3}
              id="description"
            >
              {description}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>2.1.3 Innovation *</label>
            <label className="warning-text">
              Briefly highlight any innovative technology / project components.
            </label>
            <textarea
              onChange={(e) => setInnovation(e.target.value)}
              className="form-control"
              rows={3}
              id="innovation"
            >
              {innovation}
            </textarea>
          </div>
          <div>
            <label>2.1.4 Financing</label>
            <div className="row ml-8 pt-4">
              <div className="form-group mb-5">
                <label>a) Sources of Finance</label>
                <label className="warning-text mb-4" id="source-of-finance">
                  How do you plan to finance the Project?
                </label>
                {sourceOfFinances.map((s, i) => (
                  <div
                    key={`source-of-finance-${i}`}
                    className="form-check mb-2"
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={s.id}
                      id={`source-of-finance-${i}`}
                      onChange={onSourceOfFinanceChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`source-of-finance-${i}`}
                    >
                      {s.name}
                    </label>
                  </div>
                ))}
              </div>
              <div className="form-group mb-5">
                <label>b) Funding status</label>
                <label className="warning-text">
                  Have you already secured funding to finance the project?
                </label>
                <textarea
                  onChange={(e) => setFundingStatus(e.target.value)}
                  className="form-control"
                  rows={3}
                  id="funding-status"
                >
                  {fundingStatus}
                </textarea>
              </div>
            </div>
          </div>
          <div className="form-group mb-5">
            <label>2.1.5 Risks *</label>
            <label className="warning-text">
              Identify in the table below risks and uncertainties that may cause
              the Project to not perform as planned and/or may substantially
              affect the GHG Reductions expected to be achieved by the Project.
            </label>
            <label className="warning-text" id="risks">
              Describe what actions will be taken to monitor and reduce the
              specific Project risk and uncertainty.
            </label>
            <Risks setRisks={setRisks} />
          </div>
          <div className="form-group mb-5">
            <label>2.1.6 Assumptions *</label>
            <label className="warning-text">
              Disclose any key project assumptions that are important to the
              Project. This may include assumptions around regulation and
              additionality, maturity of technology, commercial potential,
              financing availability, price, corresponding adjustments or
              commitment from national parties.
            </label>
            <textarea
              onChange={(e) => setAssumptions(e.target.value)}
              className="form-control"
              rows={3}
              id="assumptions"
            >
              {assumptions}
            </textarea>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>2.2 Project Owner details</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>2.2.1 Primary contact name and title *</label>
            <label className="warning-text">
              Name and title of the representative.
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              value={name}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.2 Company *</label>
            <label className="warning-text">Name of organization.</label>
            <input
              onChange={(e) => setOrganization(e.target.value)}
              className="form-control"
              id="organization"
              value={organization}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.3 Address *</label>
            <label className="warning-text">Address of organization.</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="address"
              value={address}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.4 Phone *</label>
            <label className="warning-text">Phone of organization.</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              value={phone}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.5 Email *</label>
            <label className="warning-text">E-mail of organization.</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              value={email}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.6 Website *</label>
            <label className="warning-text">
              Please include the website of your organization.
            </label>
            <input
              onChange={(e) => setWebsite(e.target.value)}
              className="form-control"
              id="website"
              value={website}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.7 Brief description of organization *</label>
            <label className="warning-text">
              Please provide brief description of organization.
            </label>
            <textarea
              onChange={(e) => setDescriptionOfOrganization(e.target.value)}
              className="form-control"
              id="description-of-organization"
            >
              {descriptionOfOrganization}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>2.2.8 Experience with carbon markets *</label>
            <label className="warning-text">
              Describe experience related to the carbon markets.
            </label>
            <textarea
              onChange={(e) => setExperienceWithCarbonMarkets(e.target.value)}
              className="form-control"
              id="experience-with-carbon-markets"
            >
              {experienceWithCarbonMarkets}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>2.2.9 Experience with this project type *</label>
            <label className="warning-text">
              Describe experience related to the proposed activity.
            </label>
            <textarea
              onChange={(e) => setExperienceWithThisProjectType(e.target.value)}
              className="form-control"
              id="experience-with-this-project-type"
            >
              {experienceWithThisProjectType}
            </textarea>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>2.3 Project Developer details</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>2.2.1 Primary contact name and title *</label>
            <label className="warning-text">
              Name and title of the representative.
            </label>
            <input
              onChange={(e) => setDeveloperName(e.target.value)}
              className="form-control"
              id="developer-name"
              value={developerName}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.2 Company *</label>
            <label className="warning-text">Name of organization.</label>
            <input
              onChange={(e) => setDeveloperOrganization(e.target.value)}
              className="form-control"
              id="developer-organization"
              value={developerOrganization}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.3 Address *</label>
            <label className="warning-text">Address of organization.</label>
            <input
              onChange={(e) => setDeveloperAddress(e.target.value)}
              className="form-control"
              id="developer-address"
              value={developerAddress}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.4 Phone *</label>
            <label className="warning-text">Phone of organization.</label>
            <input
              onChange={(e) => setDeveloperPhone(e.target.value)}
              className="form-control"
              id="developer-phone"
              value={developerPhone}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.5 Email *</label>
            <label className="warning-text">E-mail of organization.</label>
            <input
              onChange={(e) => setDeveloperEmail(e.target.value)}
              className="form-control"
              id="developer-email"
              value={developerEmail}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.6 Website *</label>
            <label className="warning-text">
              Please include the website of your organization.
            </label>
            <input
              onChange={(e) => setDeveloperWebsite(e.target.value)}
              className="form-control"
              id="developer-website"
              value={developerWebsite}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.2.7 Brief description of organization *</label>
            <label className="warning-text">
              Please provide brief description of organization.
            </label>
            <textarea
              onChange={(e) =>
                setDeveloperDescriptionOfOrganization(e.target.value)
              }
              className="form-control"
              id="developer-description-of-organization"
            >
              {developerDescriptionOfOrganization}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>2.2.8 Experience with carbon markets *</label>
            <label className="warning-text">
              Describe experience related to the carbon markets.
            </label>
            <textarea
              onChange={(e) =>
                setDeveloperExperienceWithCarbonMarkets(e.target.value)
              }
              className="form-control"
              id="developer-experience-with-carbon-markets"
            >
              {developerExperienceWithCarbonMarkets}
            </textarea>
          </div>
          <div className="form-group mb-4">
            <label>2.2.9 Experience with this project type *</label>
            <label className="warning-text">
              Describe experience related to the proposed activity.
            </label>
            <textarea
              onChange={(e) =>
                setDeveloperExperienceWithThisProjectType(e.target.value)
              }
              className="form-control"
              id="developer-experience-with-this-project-type"
            >
              {developerExperienceWithThisProjectType}
            </textarea>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>2.6 Expected timeline</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-4">
            <label>2.6.1 Current status of the project. *</label>
            <input
              onChange={(e) => setCurrentStatusOfProject(e.target.value)}
              className="form-control"
              id="current-status-of-project"
              value={currentStatusOfProject}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.6.2 Expected project start date. *</label>
            <input
              type="date"
              onChange={(e) => setProjectStartDate(e.target.value)}
              className="form-control w-50"
              id="project-start-date"
              value={projectStartDate}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.6.3 Expected first year of offset delivery. *</label>
            <input
              type="date"
              onChange={(e) => setYearOffsetDelivery(e.target.value)}
              className="form-control w-50"
              id="year-offset-delivery"
              value={yearOffsetDelivery}
            />
          </div>
          <div className="form-group mb-4">
            <label>2.6.4 Expected project end date. *</label>
            <input
              type="date"
              onChange={(e) => setProjectEndDate(e.target.value)}
              className="form-control w-50"
              id="project-end-date"
              value={projectEndDate}
            />
          </div>
        </div>
      </div>
      <div className="f-flex flex-row">
        <button
          onClick={onPressClose}
          type="button"
          className="btn btn-outline-primary"
        >
          Close
        </button>
        <Button
          className="btn btn-primary ml-8"
          onClick={onPressNextStep}
          label="Next Step"
          loading={loading}
        />
      </div>
    </Screen>
  );
};

export default DetailsPage;
