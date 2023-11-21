"use client";

import { useEffect, useState } from "react";
import { AuthenticatedScreen, HttpRequest } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";
import Button from "@/app/components/Form/Button";

const ProjectPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressNextStep = () => {
    setLoading(true);
    const request = HttpRequest("/api/project/create", {});

    request
      .then((e) => e.json())
      .then((e) => {
        if (e.success) {
          return router.push(
            `/portfolio/project/summary?project=${e.data.code}`
          );
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <Screen activeTabIndex={0}>
      <h3>Create and share your Project Idea Note</h3>
      <p className="black-light-text">
        Determine carbon connected details to introduce your project to project
        developers with our PIN template. You can easily publish it on your
        carbon page and share it with your potential project developers.
      </p>
      <div>
        <Button
          className="btn btn-primary"
          onClick={onPressNextStep}
          label="Next Step"
          loading={loading}
        />
      </div>
    </Screen>
  );
};

export default ProjectPage;
