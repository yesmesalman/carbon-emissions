"use client";

import { useEffect } from "react";
import { AuthenticatedScreen } from "@/helpers";
import { useRouter } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import PINNaviagtion, { ProjectTabs } from "@/app/components/PIN/PINNavigation";

type ScreenProps = {
  children: any;
  activeTabIndex: number;
};

const Screen = (props: ScreenProps) => {
  const { children, activeTabIndex } = props;
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
            { label: "Create new project", link: "" },
          ]}
        />
      </div>
      <div className="row mt-3">
        <PINNaviagtion activeIndex={activeTabIndex} tabs={ProjectTabs} />
      </div>
      <div className="row pt-4">{children}</div>
    </div>
  );
};

export default Screen;
