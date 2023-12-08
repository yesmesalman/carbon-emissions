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
import Button from "@/app/components/Form/Button";
import FieldWarningAlert from "@/app/components/Alerts/FieldWarningAlert";

const PIN_STEP = 2;

const EmissionsPage = () => {
  const router = useRouter();

  const [projectScale, setProjectScale] = useState("");
  const [summaryDescription, setSummaryDescription] = useState("");
  const [calculationMethod, setCalculationMethod] = useState("");
  const [baselineScenario, setBaselineScenario] = useState("");
  const [additionality, setAdditionality] = useState("");
  const [monitoring, setMonitoring] = useState("");

  const [loading, setLoading] = useState(false);

  const goToNextStep = useCallback(() => {
    return router.push(
      `/portfolio/project/benefits?project=${GetProjectPINScreen()}`
    );
  }, [router]);

  useEffect(() => {
    AuthenticatedPINScreen(router);
    AuthenticatedScreen(router);
    CheckPINStep(PIN_STEP, goToNextStep);
  }, [router, goToNextStep]);

  const onPressClose = () => {
    router.push("/portfolio");
  };

  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/emissions/project-emissions", {
      projectScale,
      summaryDescription,
      calculationMethod,
      baselineScenario,
      additionality,
      monitoring,
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
    <Screen activeTabIndex={PIN_STEP}>
      <h4 className="mb-2 mt-2 font-bold">
        3. Expected greenhouse gas emission reductions
      </h4>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4">
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>3.1 Project Scale *</label>
            <label className="warning-text">
              Specify the total estimated GHG abated (in metric tons of
              CO2-equivalent).
            </label>
            <input
              onChange={(e) => setProjectScale(e.target.value)}
              className="form-control"
              id="project-scale"
              value={projectScale}
            />
          </div>
          <div className="form-group mb-5">
            <label>
              3.2 Summary description of how the Project is expected to generate
              GHG Reductions *
            </label>
            <label className="warning-text">
              Provide a summary description of how the Project is expected to
              generate GHG Reductions.
            </label>
            <FieldWarningAlert text="Please use the following structure: The Project is reducing GHG emissions through improved forest management of the project area forest, increasing protected buffers around waterways, protecting sensitive habitats, and lowering the overall annual allowable harvest of the project area." />
            <textarea
              onChange={(e) => setSummaryDescription(e.target.value)}
              className="form-control"
              rows={3}
              id="summary-description"
            >
              {summaryDescription}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>3.3 Calculation method *</label>
            <label className="warning-text">
              How did you calculate your GHG Reductions?
            </label>
            <FieldWarningAlert text="Example: For an agricultural project, you would identify potential sources of emissions (i.e. carbon dioxide emissions from fossil fuel combustion and nitrous oxide emissions from nitrogen fertilizers) and calculate them by using the equations of the chosen methodology." />
            <textarea
              onChange={(e) => setCalculationMethod(e.target.value)}
              className="form-control"
              rows={3}
              id="calculation-method"
            >
              {calculationMethod}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>3.4 Baseline scenario *</label>
            <label className="warning-text">
              Provide a summary description of the probably and realistic
              baseline scenario.
            </label>
            <FieldWarningAlert text="Example: For an agricultural project, a baseline scenario would include the description of the existing farming practices. These can include the documented use of fertilizers, practices of cover crop, irrigation system and crop residue management over a period of time." />
            <textarea
              onChange={(e) => setBaselineScenario(e.target.value)}
              className="form-control"
              rows={3}
              id="baseline-scenario"
            >
              {baselineScenario}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>3.5 Additionality *</label>
            <label className="warning-text">
              Describe how this project is Additional would not have happened if
              not for offsets. In other words, you have to prove that the
              project would not have happened if it had not received any carbon
              financing.
            </label>
            <textarea
              onChange={(e) => setAdditionality(e.target.value)}
              className="form-control"
              rows={3}
              id="additionality"
            >
              {additionality}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>3.6 Monitoring *</label>
            <label className="warning-text">
              Provide a summary description of the key measurement and
              monitoring data required and how you will collect it. Give a
              description of measurement methods and procedures applied,
              frequency of data collection, equipment used etc.
            </label>
            <textarea
              onChange={(e) => setMonitoring(e.target.value)}
              className="form-control"
              rows={3}
              id="monitoring"
            >
              {monitoring}
            </textarea>
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

export default EmissionsPage;
