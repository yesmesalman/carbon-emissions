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
import countryList from "./../../../../helpers/country-list";
import MultiLevelSelect, {
  OptionProp,
} from "@/app/components/Form/MultiLevelSelect";
import { MethodologyProp } from "@/app/api/summary/methodologies/route";
import { ExistingMethodologyProp } from "@/app/api/summary/existing-methodologies/route";
import Button from "@/app/components/Form/Button";
import FormAlerts from "@/app/components/Form/FormAlerts";

const SummaryPage = () => {
  const router = useRouter();

  const [methodologies, setMethodologies] = useState<MethodologyProp[]>();
  const [existingmethodologies, setExistingMethodologies] =
    useState<ExistingMethodologyProp[]>();

  const [owner, setOwner] = useState("");
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [sectoralScope, setSectoralScope] = useState<OptionProp | undefined>(
    undefined
  );
  const [technology, setTechnology] = useState("");
  const [standard, setStandard] = useState<OptionProp | undefined>(undefined);
  const [methodology, setMethodology] = useState("");
  const [existingMethodology, setExistingMethodology] = useState<number>();
  const [scale, setScale] = useState<OptionProp | undefined>(undefined);

  const [loading, setLoading] = useState(false);

  const goToNextStep = useCallback(() => {
    return router.push(
      `/portfolio/project/details?project=${GetProjectPINScreen()}`
    );
  }, [router]);

  useEffect(() => {
    AuthenticatedPINScreen(router);
    AuthenticatedScreen(router);
    CheckPINStep(0, goToNextStep);
  }, [router, goToNextStep]);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/summary/methodologies", {});

      request.then((e) => e.json()).then((e) => setMethodologies(e.data));
    };

    return getData();
  }, []);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/summary/existing-methodologies", {});

      request
        .then((e) => e.json())
        .then((e) => setExistingMethodologies(e.data));
    };

    return getData();
  }, []);

  const onPressClose = () => {
    router.push("/portfolio");
  };

  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/summary/project-summary", {
      owner,
      title,
      country,
      description,
      sectoralScope: sectoralScope?.value,
      technology,
      standard: standard?.value,
      methodology,
      existingMethodology,
      scale: scale?.value,
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
    <Screen activeTabIndex={0}>
      <h4 className="mb-2 mt-2 font-bold">1. Project Summary</h4>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4">
        <h5>1.1 Overview</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>1.1.1 Project Owner *</label>
            <label className="warning-text">
              Please indicate the name of the entity that owns the project.
            </label>
            <textarea
              onChange={(e) => setOwner(e.target.value)}
              className="form-control"
              rows={3}
              id="owner"
            >
              {owner}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>1.1.2 Project title *</label>
            <label className="warning-text">
              What is the title of the project? You are recommended to include
              the place and the technology type in the title.
            </label>
            <textarea
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              rows={3}
              id="title"
            >
              {title}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>1.1.3 Country *</label>
            <label className="warning-text">
              In which country will the project be implemented?
            </label>
            <select
              className="form-control"
              onChange={(e) => setCountry(e.target.value)}
              id="country"
            >
              <option key={`country-1`} value="">
                Select Country
              </option>
              {countryList.map((c) => (
                <option
                  key={`country-${c.value}`}
                  value={c.value}
                  selected={c.value === country}
                >
                  {c.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-5">
            <label>1.1.4 Brief project description *</label>
            <label className="warning-text">
              Briefly describe your project.
            </label>
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
            <label>1.1.5 Sectoral scopes and project type *</label>
            <label className="warning-text">
              Please indicate the sectoral scope(s) applicable to the Project.
            </label>
            <MultiLevelSelect
              title="1.1.5 Sectoral scopes and project type"
              subTitle="Please indicate the sectoral scope(s) applicable to the Project."
              dataUrl="/api/summary/sectoral-scopes-and-project-type"
              onSelect={(e) => setSectoralScope(e)}
              id="sectoral-scope"
            />
          </div>
          <div className="form-group mb-5">
            <label>1.1.6 Technology to be employed *</label>
            <label className="warning-text">
              Please specify and explain the type of technology used in the
              Project. This may include: transfer of technology, history of this
              technology in the region/country/ area, experience in operating
              this technology, etc.
            </label>
            <textarea
              onChange={(e) => setTechnology(e.target.value)}
              className="form-control"
              rows={3}
              id="technology"
            >
              {technology}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>1.1.7 Standard *</label>
            <label className="warning-text">
              What carbon standard are you planning to use?
            </label>
            <MultiLevelSelect
              title="1.1.7 Standard"
              subTitle="What carbon standard are you planning to use?"
              dataUrl="/api/summary/carbon-standards"
              onSelect={(e) => setStandard(e)}
              id="standard"
            />
          </div>
          <div className="form-group mb-5">
            <label>1.1.8 Methodology used *</label>
            <label className="warning-text">
              What methodology are you using?
            </label>
            <div className="alert alert-primary mb-2" role="alert">
              <p className="text-black font-size-12 mb-1">
                You may consult the list of methodologies below:
              </p>
              <ul>
                {methodologies?.map((m) => (
                  <li key={`methodology-${m.id}`}>
                    <a
                      className="font-size-12"
                      target="_blank"
                      href={m.link ?? ""}
                    >
                      {m.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <textarea
              onChange={(e) => setMethodology(e.target.value)}
              className="form-control"
              rows={3}
              id="methodology"
            >
              {methodology}
            </textarea>
            <label className="warning-text mt-4">
              Is there an existing methodology for the Project?
            </label>
            <select
              className="form-control"
              onChange={(e) => setExistingMethodology(Number(e.target.value))}
              id="existing-methodology"
            >
              <option key={`ex-m-1`} value="">
                Select
              </option>
              {existingmethodologies?.map((ex) => (
                <option
                  key={`ex-m-${ex.id}`}
                  value={ex.id}
                  selected={ex.id === existingMethodology}
                >
                  {ex.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-5">
            <label>1.1.9 Scale *</label>
            <label className="warning-text">
              Specify project size depending estimate of GHG abated (in metric
              tons of CO2-equivalent anually during a period of t years)
            </label>
            <MultiLevelSelect
              title="1.1.9 Scale"
              subTitle="Specify project size depending estimate of GHG abated (in metric tons of CO2-equivalent anually during a period of t years)"
              dataUrl="/api/summary/scales"
              onSelect={(e) => setScale(e)}
              id="scale"
            />
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
      </div>
    </Screen>
  );
};

export default SummaryPage;
