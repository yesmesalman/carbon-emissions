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
import Button from "@/app/components/Form/Button";
import FileField from "@/app/components/Form/FileField";

const GET_YEARS = (start = 2015) => {
  const startYear = start;
  const endYear = start + 35;

  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  return years;
};

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [amount, setAmount] = useState("");
  const [registerationDate, setRegisterationDate] = useState("");
  const [proofOfReg, setProofOfReg] = useState("");
  const [registyUrl, setRegistyUrl] = useState("");

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressClose = () => {
    router.push("/portfolio/project");
  };

  const goToNextStep = useCallback(() => {
    return router.push(`/portfolio/forwards?project=${GetProjectPINScreen()}`);
  }, [router]);

  const onPressNextStep = async () => {
    setLoading(true);

    const request = HttpRequest("/api/project/project-registration", {
      start,
      end,
      amount,
      registerationDate,
      proofOfReg,
      registyUrl,
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
          <h5 className="mb-0">Registration</h5>
          <p className="text-light-black font-size-12">
            This PDD must be registered to the entity raising funds for this
            project, and in their name.
          </p>
          <h5 className="mt-4 mb-4">Crediting period</h5>
          <div className="form-group mb-4 w-25">
            <label>Start</label>
            <select
              name="start"
              id="start"
              className="form-control"
              onChange={(e) => {
                setEnd("");
                setStart(e.target.value);
              }}
            >
              <option value=""></option>
              {GET_YEARS().map((year) => (
                <option key={`year-${year}`} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-4 w-25">
            <label>End</label>
            <select
              name="end"
              id="end"
              className="form-control"
              onChange={(e) => setEnd(e.target.value)}
            >
              <option value=""></option>
              {GET_YEARS(start ? Number(start) + 1 : 2015).map((year) => (
                <option key={`year-${year}`} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-4 w-25">
            <label>Total carbon amount to be issued</label>
            <input
              type="number"
              id="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-5 w-25">
            <label htmlFor="registeration_date">Registration date</label>
            <input
              type="date"
              name="registeration_date"
              id="registeration_date"
              className="form-control"
              onChange={(e) => setRegisterationDate(e.target.value)}
              value={registerationDate}
            />
          </div>
          <div className="mb-5 w-25">
            <FileField
              id="proof_of_registration"
              className="form-control"
              title="Proof of registration"
              onChange={setProofOfReg}
            />
          </div>
        </div>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-5">
            <label htmlFor="registry_url">Registry URL</label>
            <input
              type="url"
              name="registry_url"
              id="registry_url"
              className="form-control"
              value={registyUrl}
              onChange={(e) => setRegistyUrl(e.target.value)}
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
