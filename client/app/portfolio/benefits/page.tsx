"use client";

import { useEffect, useState } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import PINNaviagtion from "@/app/components/PIN/PINNavigation";

const CreatePage = () => {
  const router = useRouter();

  useEffect(() => {
    AuthenticatedScreen(router);
  }, [router]);

  return (
    <div className="container pt-4 pb-5">
      <div className="row mb-2">
        <Breadcrumb
          items={[
            { label: "Dashboard", link: "/dashboard" },
            { label: "Porfolio", link: "/portfolio" },
            { label: "Project Idea Note", link: "" },
          ]}
        />
      </div>
      <div className="row mt-3">
        <PINNaviagtion activeIndex={3} />
      </div>
    </div>
  );
};

export default CreatePage;
