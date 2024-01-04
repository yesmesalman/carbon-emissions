"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AuthenticatedScreen,
  CleanValidationMessages,
  GetProjectPINScreen,
  HttpRequest,
  ShowValidations,
  ShowWarningAlert,
} from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import MultiLevelSelect, {
  OptionProp,
} from "@/app/components/Form/MultiLevelSelect";
import styles from "./pdd.module.css";
import Button from "@/app/components/Form/Button";
import FileField from "@/app/components/Form/FileField";

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [standard, setStandard] = useState<OptionProp | undefined>(undefined);
  const [methodology, setMethodology] = useState<OptionProp | undefined>(
    undefined
  );
  const [quarter, setQuarter] = useState<string>("");
  const [designDocument, setDesignDocument] = useState<string>("");
  const [validator, setValidator] = useState<string>("");
  const [validationStatement, setValidationStatement] = useState<string>("");
  const [validationDate, setValidationDate] = useState<string>("");

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressClose = () => {
    router.push("/portfolio/project");
  };

  const goToNextStep = useCallback(() => {
    return router.push(
      `/portfolio/registration?project=${GetProjectPINScreen()}`
    );
  }, [router]);

  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/project/project-pdd", {
      standard: standard?.value,
      methodology: methodology?.value,
      quarter,
      validator,
      design_document: designDocument,
      validation_statement: validationStatement,
      validationDate,
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
    <Screen activeTabIndex={3}>
      <h3>Verify your carbon details and attach essential documents</h3>
      <h6>
        Make sure all your details are correct — you can’t change them after you
        submit your carbon for review.
      </h6>
      <div className="row">
        <FormAlerts />
      </div>

      <div className="row pb-4 mt-4">
        <div className="row ml-8 pt-2">
          <h5 className="mb-0">Project Design Document</h5>
          <p className="text-light-black font-size-12">
            This PDD must be registered to the entity raising funds for this
            project, and in their name.
          </p>
          <div className="form-group mb-5">
            <label>Standard *</label>
            <MultiLevelSelect
              title="Standard"
              subTitle="What carbon standard are you planning to use?"
              dataUrl="/api/summary/carbon-standards"
              onSelect={(e) => setStandard(e)}
              id="standard"
            />
          </div>
          <div className="form-group mb-5">
            <label>Methodology *</label>
            <MultiLevelSelect
              title="Methodology"
              subTitle="What carbon methodology are you planning to use?"
              dataUrl="/api/summary/methodologies"
              onSelect={(e) => setMethodology(e)}
              id="methodology"
            />
          </div>
          <div className="form-group mb-5">
            <label id="quarter">Verification period quarter *</label>
            <div className={styles.quarter_container}>
              <div
                className={`cursor-pointer ${styles.quarter} ${
                  quarter === "Q1" ? styles.quarter_active : ""
                }`}
                onClick={() => setQuarter("Q1")}
              >
                <span>Q1</span>
              </div>
              <div
                className={`cursor-pointer ${styles.quarter} ${
                  quarter === "Q2" ? styles.quarter_active : ""
                }`}
                onClick={() => setQuarter("Q2")}
              >
                <span>Q2</span>
              </div>
              <div
                className={`cursor-pointer ${styles.quarter} ${
                  quarter === "Q3" ? styles.quarter_active : ""
                }`}
                onClick={() => setQuarter("Q3")}
              >
                <span>Q3</span>
              </div>
              <div
                className={`cursor-pointer ${styles.quarter} ${
                  quarter === "Q4" ? styles.quarter_active : ""
                }`}
                onClick={() => setQuarter("Q4")}
              >
                <span>Q4</span>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <FileField
              id="design_document"
              title="Project design documents"
              onChange={setDesignDocument}
              className="form-control"
            />
          </div>
          <h5 className="mb-0">Validation</h5>
          <p className="text-light-black font-size-12">
            These documents will be shared with the authorized platform users
            who want to learn more about your project. They will also be studied
            to assess your eligiblity for carbon forwards issuance.
          </p>
          <div className="form-group mb-5">
            <label>Validator *</label>
            <select
              className="form-control"
              name="validator"
              id="validator"
              onChange={(e) => setValidator(e.target.value)}
            >
              <option value="">Select</option>
              <option value="DNV">DNV</option>
            </select>
          </div>
          <div className="mb-5 w-25">
            <FileField
              id="validation_statement"
              title="Validation statement"
              onChange={setValidationStatement}
              className="form-control"
            />
          </div>
          <div className="form-group mb-5 w-25">
            <label>Validation date *</label>
            <input
              type="date"
              className="form-control"
              id="validation_date"
              onChange={(e) => setValidationDate(e.target.value)}
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

export default OverviewPage;
