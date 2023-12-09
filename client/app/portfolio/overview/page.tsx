"use client";

import { useEffect, useState } from "react";
import { AuthenticatedProjectScreen, AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import Button from "@/app/components/Form/Button";

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    AuthenticatedScreen(router);
    AuthenticatedProjectScreen(router);
  }, [router]);

  return (
    <Screen activeTabIndex={1}>
      <h3>Introduce your project</h3>
      <h6>
        Gain trust by describing your project in a structured way and making it
        visible for stakeholders.
      </h6>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4 mt-4">
        <h5 className="mb-0">Basic information</h5>
        <p className="text-light-black font-size-12">
          Write a clear, brief title and subtitle to help investors quickly
          understand your project.
        </p>
        <div className="row ml-8 pt-2">
          <div className="form-group mb-5">
            <label>Project name *</label>
            <input
              className="form-control"
              type="text"
              placeholder="Water and Climate VPA"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="f-flex flex-row mt-4">
        <button
          onClick={() => {}}
          type="button"
          className="btn btn-outline-primary"
        >
          Close
        </button>
        <Button
          className="btn btn-primary ml-8"
          onClick={() => {}}
          label="Next Step"
          loading={loading}
        />
      </div>
    </Screen>
  );
};

export default OverviewPage;
