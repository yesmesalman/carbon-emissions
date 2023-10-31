"use client";

import { useEffect, useState } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Screen from "../screen";

const ProjectPage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  const onPressNextStep = () => {
    router.push("/portfolio/project/summary");
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={onPressNextStep}
        >
          Next step
        </button>
      </div>
    </Screen>
  );
};

export default ProjectPage;
