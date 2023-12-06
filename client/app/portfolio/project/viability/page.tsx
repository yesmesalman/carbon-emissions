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
import FieldWarningAlert from "@/app/components/Alerts/FieldWarningAlert";
import { KeyMeasurementProp } from "@/app/api/viability/key-measurements/route";
import Button from "@/app/components/Form/Button";

const ViabilityPage = () => {
  const router = useRouter();

  const [keyMeasurements, setKeyMeasurements] = useState<KeyMeasurementProp[]>(
    []
  );

  const [leakage, setLeakage] = useState<string>("");
  const [permanence, setPermanence] = useState<string>("");
  const [quantifiable, setQuantifiable] = useState<string>("");
  const [selectedKeyMeasurements, setSelectedKeyMeasurements] = useState<
    number[]
  >([]);
  const [dataCollectionMethod, setDataCollectionMethod] = useState<string>("");
  const [ownership, setOwnership] = useState<string>("");
  const [demonstrationOwnership, setDemonstrationOwnership] =
    useState<string>("");
  const [recognition, setRecognition] = useState<string>("");
  const [baselineScenario, setBaselineScenario] = useState<string>("");
  const [baselineScenarioResult, setBaselineScenarioResult] =
    useState<string>("");
  const [additionality, setAdditionality] = useState<string>("");
  const [financial, setFinancial] = useState<string>("");
  const [technological, setTechnological] = useState<string>("");
  const [social, setSocial] = useState<string>("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      const request = HttpRequest("/api/viability/key-measurements", {});

      request.then((e) => e.json()).then((e) => setKeyMeasurements(e.data));
    };

    return getData();
  }, []);

  const goToNextStep = useCallback(() => {
    return router.push("/portfolio/project");
  }, [router]);

  useEffect(() => {
    AuthenticatedPINScreen(router);
    AuthenticatedScreen(router);
    CheckPINStep(1, goToNextStep);
  }, [router, goToNextStep]);

  const onKeyMeasurementChange = (e: any) => {
    const value = e.target.value;
    setSelectedKeyMeasurements((prevItems) => {
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

    const request = HttpRequest("/api/viability/project-viability", {
      leakage,
      permanence,
      quantifiable,
      key_measurements: selectedKeyMeasurements,
      data_collection_method: dataCollectionMethod,
      ownership,
      demonstration_ownership: demonstrationOwnership,
      recognition,
      baseline_scenario: baselineScenario,
      baseline_scenario_result: baselineScenarioResult,
      additionality,
      financial,
      technological,
      social,
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
    <Screen activeTabIndex={4}>
      <h4 className="mt-2 font-bold">5. Preliminary assessment of viability</h4>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4">
        <h5>5.1 Real</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>5.1.1 No leakage *</label>
            <label className="warning-text">
              Briefly explain how GHG Reductions as a result of the Project
              activity do not result in increases in emissions in other
              locations/ jurisdictions (i.e. minimize leakage) or how such
              increases will be taken into consideration in the quantification
              of GHG Reductions.
            </label>
            <FieldWarningAlert text="Example: When installing PV panels, their transport towards the site may be done by the vehicles which cause GHG emissions due to fuel combustion. In order to minimize it, their transport could be done using train or electric vehicles. When planting different agricultural species, the project could take in consideration that there is no displacement of agriculture activities. When a forest is protected from logging, the project could take into account that it does not lead to an increase in logging somewhere else." />
            <textarea
              onChange={(e) => setLeakage(e.target.value)}
              className="form-control"
              rows={3}
              id="leakage"
            >
              {leakage}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>5.1.2 Permanence *</label>
            <label className="warning-text">
              Briefly explain the steps that will be taken to ensure that GHG
              Reductions as a result of the Project activity will endure for a
              period of at least 100 years (i.e. permanence)?
            </label>
            <textarea
              onChange={(e) => setPermanence(e.target.value)}
              className="form-control"
              rows={3}
              id="permanence"
            >
              {permanence}
            </textarea>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>5.2 Quantifiable</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>
              5.2.1 Demonstrate how the project will be quantifiable *
            </label>
            <label className="warning-text">
              Demonstrate how the proposed Project is or will be quantifiable.
            </label>
            <textarea
              onChange={(e) => setQuantifiable(e.target.value)}
              className="form-control"
              rows={3}
              id="quantifiable"
            >
              {quantifiable}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>5.2.2 Key measurement and monitoring data required</label>
            <label className="warning-text mb-4" id="key_measurements">
              What are the key measurement and monitoring data required to prove
              GHG Reductions?
            </label>
            {keyMeasurements.map((k, i) => (
              <div key={`k-m-${i}`} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={k.id}
                  id={`k-m-${i}`}
                  onChange={onKeyMeasurementChange}
                />
                <label
                  className="form-check-label font-size-12"
                  htmlFor={`k-m-${i}`}
                >
                  {k.name}
                </label>
              </div>
            ))}
          </div>
          <div className="form-group mb-5">
            <label>5.2.3 Data collection methods *</label>
            <label className="warning-text">
              How will you collect data to ensure accuracy and completeness?
            </label>
            <FieldWarningAlert text="Example: For PV panels the net electricity supplied to the grid is measured continuously and recorded monthly by a meter; for reforestation the area covered by forest or a number of trees recorded annually; for cookstoves the number of devices distributed per household recorded monthly." />
            <textarea
              onChange={(e) => setDataCollectionMethod(e.target.value)}
              className="form-control"
              rows={3}
              id="data_collection_method"
            >
              {dataCollectionMethod}
            </textarea>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>5.3 Clear Ownership/ Counted Once</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label>5.3.1 GHG reductions ownership *</label>
            <label className="warning-text">
              I assert to have a superior claim of ownership with respect to the
              GHG Reductions to be achieved by carrying out the Project.
            </label>
            <select
              name="ownership"
              id="ownership"
              className="form-control"
              onChange={(e) => setOwnership(e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes" selected={ownership === "yes"}>
                Yes
              </option>
              <option value="no" selected={ownership === "no"}>
                No
              </option>
            </select>
          </div>
          <div className="form-group mb-5">
            <label>5.3.2 Demonstration of GHG reductions ownership *</label>
            <label className="warning-text">
              Please explain how ownership of GHG Reductions will be
              demonstrated. Describe or attach the evidence that will be used to
              support this assertion (ownership of land or equipment,
              quitclaims, contractual arrangements, etc.).
            </label>
            <textarea
              onChange={(e) => setDemonstrationOwnership(e.target.value)}
              className="form-control"
              rows={3}
              id="demonstration_ownership"
            >
              {demonstrationOwnership}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>5.3.3 Recognition of reductions under other programs</label>
            <label className="warning-text">
              I assert that these reductions are not included in a national
              inventory reported to the UNFCCC.
            </label>
            <select
              name="recognition"
              id="recognition"
              className="form-control"
              onChange={(e) => setRecognition(e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes" selected={recognition === "yes"}>
                Yes
              </option>
              <option value="no" selected={recognition === "no"}>
                No
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>5.4 Baseline and Project Justification</h5>
        <div className="row ml-8 pt-4">
          <h6>5.4.1 Baseline scenario justification</h6>
          <div className="row ml-8 pt-4">
            <div className="form-group mb-5">
              <label>a) Probable baseline scenario *</label>
              <label className="warning-text">
                Identify a probable and realistic baseline scenario.
              </label>
              <textarea
                onChange={(e) => setBaselineScenario(e.target.value)}
                className="form-control"
                rows={3}
                id="baseline_scenario"
              >
                {baselineScenario}
              </textarea>
            </div>
            <div className="form-group mb-5">
              <label>
                b) How the baseline scenario will result will result in a
                conservative estimate of GHG Reductions to be achieved by the
                Project *
              </label>
              <label className="warning-text">
                Describe how the identified baseline scenario will result in a
                conservative estimate of GHG Reductions to be achieved by the
                Project.
              </label>
              <ul>
                <li className="warning-list-item">
                  If applicable, list any government laws, regulations or other
                  legal requirements that otherwise require the activity
                  described as the Project scenario.
                </li>
                <li className="warning-list-item">
                  Describe the regulatory framework within which the baseline
                  and Project condition operate. Demonstrate how the baseline
                  scenario adheres to the regulatory requirements.
                </li>
                <li className="warning-list-item">
                  List any existing or proposed provincial or federal incentives
                  or funding, including tax incentives, which may affect the
                  baseline scenario. Identify amounts.
                </li>
              </ul>
              <textarea
                onChange={(e) => setBaselineScenarioResult(e.target.value)}
                className="form-control"
                rows={3}
                id="baseline_scenario_result"
              >
                {baselineScenarioResult}
              </textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-4">
        <h5>5.5 Additionality</h5>
        <div className="row ml-8 pt-4">
          <div className="form-group mb-5">
            <label className="warning-text">
              Identify one or more of the following obstacles that prevent the
              Project from being the baseline scenario. In other words, you have
              to prove that the project would not have happened if it had not
              received any carbon financing.
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
            <label>5.5.1 Financial *</label>
            <label className="warning-text">
              Provide a financial justification which may include cash flow
              analysis for the anticipated validation period with Net Present
              Value (NPV) or Internal Rate of Return (IRR) calculations. Provide
              or describe supporting documentation (e.g. procurement records,
              financial agreements, etc.).
            </label>
            <textarea
              onChange={(e) => setFinancial(e.target.value)}
              className="form-control"
              rows={3}
              id="financial"
            >
              {financial}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>5.5.2 Technological *</label>
            <label className="warning-text">
              Describe and attach evidence of the challenges faced in adopting
              that technology in the industry and/or geographic location and for
              each describe how recognition as an Emission Offset helps to
              address that challenge.
            </label>
            <textarea
              onChange={(e) => setTechnological(e.target.value)}
              className="form-control"
              rows={3}
              id="technological"
            >
              {technological}
            </textarea>
          </div>
          <div className="form-group mb-5">
            <label>5.5.3 Social *</label>
            <label className="warning-text">
              Describe obstacles in this category (may include community
              sentiment or commercial or legal barriers, clarify the project is
              not in any way related to a given regulation).
            </label>
            <textarea
              onChange={(e) => setSocial(e.target.value)}
              className="form-control"
              rows={3}
              id="social"
            >
              {social}
            </textarea>
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

export default ViabilityPage;
