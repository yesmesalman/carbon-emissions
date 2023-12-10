"use client";

import { useCallback, useEffect, useState } from "react";
import { AuthenticatedScreen, GetProjectPINScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import FormAlerts from "@/app/components/Form/FormAlerts";
import Button from "@/app/components/Form/Button";

const OverviewPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressClose = () => {
    router.push("/portfolio/project");
  };

  const goToNextStep = useCallback(() => {
    return router.push(`/portfolio/pdd?project=${GetProjectPINScreen()}`);
  }, [router]);

  const onPressNextStep = async () => {
    setLoading(true);

    goToNextStep();
  };

  return (
    <Screen activeTabIndex={2}>
      <h3>Upload and verify your documents</h3>
      <h6>
        Here you can share and verify important documents related to your
        project and company.
      </h6>
      <div className="row">
        <FormAlerts />
      </div>
      <div className="row pb-4 mt-4">
        <div className="row ml-8 pt-2"></div>
      </div>

      <div className="f-flex flex-row mt-4">
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

export default OverviewPage;
